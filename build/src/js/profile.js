import { initializeEventListeners } from './avatarModal.js';
import { API_BASE_URL, USER_PROFILE_ENDPOINT, USER_LISTINGS_ENDPOINT, accessToken, credits, username } from "./constants.js";
import { updateLoginLink } from "./loggedIn.js";
import { showSuccessModal, showFailureModal } from "./modal.js";

// Check if user is logged in and update login link
updateLoginLink();

// Function to get the current user's ID
export function getCurrentUserId() {
    if (!accessToken) {
        throw new Error('Access token not found. Please log in.');
    }

    return accessToken;
}

// Function to display user profile
async function displayUserProfile() {
    try {
        const usernameElement = document.getElementById('username');
        const userCreditsElement = document.getElementById('userCredits');
        const userProfilePic = document.getElementById('profile-image');

        // Make a GET request to fetch profile details
        const profileUrl = `${API_BASE_URL}${USER_PROFILE_ENDPOINT}${encodeURIComponent(username)}`;
        const response = await fetch(profileUrl, {
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Assuming accessToken is available
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }

        const profileData = await response.json();

        if (usernameElement) {
            usernameElement.textContent = profileData.name || username; // Fallback to the username variable if name isn't in response
        }
        if (userCreditsElement) {
            userCreditsElement.textContent = profileData.credits || 'N/A'; // Fallback to 'N/A' if credits aren't in response
        }
        if (userProfilePic && profileData.avatar) {
            userProfilePic.src = profileData.avatar; // Use the avatar URL from the profile data
        }
    } catch (error) {
        showFailureModal('Error displaying user profile:', error.message);
    }
}

async function displayUserListings() {
    try {
        const listingsUrl = `${API_BASE_URL}${USER_PROFILE_ENDPOINT}${username}/listings`;
        const response = await fetch(listingsUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user listings. Status: ${response.status}`);
        }

        const listings = await response.json();
        const listingsContainer = document.getElementById('listingsContainer');
        listingsContainer.innerHTML = ''; // Clear existing listings

        const row = document.createElement('div');
        row.classList.add('row', 'g-4');

        listings.forEach(listing => {
            const listingElement = createListingElement(listing);
            row.appendChild(listingElement);
        });

        listingsContainer.appendChild(row);
    } catch (error) {
        console.error('Error fetching user listings:', error);
    }
}

function createListingElement(listing) {
    // Create listing card element with listing details
    const listingElement = document.createElement('div');
    listingElement.classList.add('col-md-4', 'col-sm-6');
    listingElement.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${listing.media && listing.media.length > 0 ? listing.media[0] : '/images/placeholderauction.png'}" class="card-img-top" alt="${listing.title}" style="object-fit: cover; height: 200px;">
            <div class="card-body">
                <h5 class="card-title">${listing.title}</h5>
                <p class="card-text">${listing.description}</p>
                <p class="card-text">${listing.bids && listing.bids.length > 0 ? `Last Bid: ${listing.bids[listing.bids.length - 1].amount}` : 'No bids yet'}</p>
                <p class="card-text">${listing._count && listing._count.bids ? `Number of Bids: ${listing._count.bids}` : 'No bids yet'}</p>
                <p class="card-text"><strong>Deadline:</strong> ${new Date(listing.endsAt).toLocaleString()}</p>
                <p class="card-text"><strong>Listing Date:</strong> ${new Date(listing.created).toLocaleDateString()}</p>
            </div>
            <div class="card-footer bg-white border-top-0">
                <small>Price: ${listing.price}</small>
            </div>
        </div>
    `;

    // Append delete button with event listener for deletion confirmation modal
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'btn btn-danger btn-sm mt-2';
    deleteButton.onclick = () => triggerDeleteConfirmation(listing, listingElement);
    listingElement.querySelector('.card-body').appendChild(deleteButton);

    return listingElement;
}

function triggerDeleteConfirmation(listing, listingElement) {
    // Show the confirmation modal using Bootstrap's modal functionality
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'), {
        keyboard: false
    });
    confirmationModal.show();

    // Attach a one-time event listener to the "Yes" button in the confirmation modal
    document.getElementById('confirmDelete').addEventListener('click', async () => {
        try {
            const deleteResponse = await fetch(`${API_BASE_URL}${USER_LISTINGS_ENDPOINT}${listing.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${accessToken}` }
            });

            if (!deleteResponse.ok) throw new Error('Failed to delete listing');

            listingElement.remove(); // Remove listing element from DOM
            showSuccessModal('Listing deleted successfully');
        } catch (error) {
            console.error('Error deleting listing:', error);
            showFailureModal('Error deleting listing. Please try again.');
        } finally {
            confirmationModal.hide();
        }
    }, { once: true }); // Ensure this event listener only triggers once
}

displayUserListings();

// Event listener when DOM content is loaded
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize modal event listeners
    initializeEventListeners();
    // Display user profile and listings
    await displayUserProfile();

    // Event listeners for avatar and edit icons
    const avatarIcon = document.getElementById('avatarIcon');
    const editIcon = document.getElementById('editIcon');
    const avatarModal = new bootstrap.Modal(document.getElementById('avatarModal'), {});
    const editModal = new bootstrap.Modal(document.getElementById('editModal'), {});

    if (avatarIcon) {
        avatarIcon.addEventListener('click', () => {
            avatarModal.show();
        });
    }

    if (editIcon) {
        editIcon.addEventListener('click', () => {
            editModal.show();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const avatarForm = document.querySelector('#avatarModal form');

    avatarForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission.

        const avatarUrlInput = document.getElementById('avatarInput');
        const avatarUrl = avatarUrlInput.value.trim();

        if (!avatarUrl) {
            showFailureModal('Please enter a valid URL for the avatar.');
            return;
        }

        await updateAvatar(username, avatarUrl); // Use the imported 'username'
    });
});

async function updateAvatar(userName, avatarUrl) {
    const url = `${API_BASE_URL}${USER_PROFILE_ENDPOINT}${encodeURIComponent(userName)}/media`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // Use the imported 'accessToken'
        },
        body: JSON.stringify({ avatar: avatarUrl })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorData = await response.json();
            showFailureModal(`Failed to update avatar: ${errorData.message || response.statusText}`);
            return;
        }

        showSuccessModal('Avatar updated successfully!');
        window.location.reload(); // Refresh the page to see the updated avatar
    } catch (error) {
        showFailureModal('An error occurred while updating the avatar. Please try again.');
    }
}