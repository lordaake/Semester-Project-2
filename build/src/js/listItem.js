import { API_BASE_URL, USER_LISTINGS_ENDPOINT, accessToken } from "./constants.js";
import { updateLoginLink } from "./loggedIn.js";
import { showSuccessModal, showFailureModal } from "./modal.js";

// Function to initialize event listeners
function initializeEventListeners() {
    const container = document.getElementById('imageUrls');
    const addButton = document.getElementById('addImageUrl');
    let count = 1;

    addButton.addEventListener('click', function () {
        if (count < 5) {
            const inputDiv = document.createElement('div');
            inputDiv.classList.add('mb-2');
            inputDiv.innerHTML = `<input type="url" class="form-control" name="imageUrls[]" placeholder="Enter image URL">`;
            container.appendChild(inputDiv);
            count++;
        } else {
            showFailureModal('You can add a maximum of 5 images.');
        }
    });

    const listItemForm = document.querySelector("form");
    listItemForm.addEventListener("submit", listNewItem);
}

// Function to list a new item
async function listNewItem(event) {
    event.preventDefault();

    if (!accessToken) {
        showFailureModal("Please log in to list an item.");
        return;
    }

    const title = document.getElementById("title").value;
    const description = document.getElementById("itemDescription").value;
    const startDate = document.getElementById("startDate").value;
    const finishDate = document.getElementById("finishDate").value;
    const tags = document.getElementById("tags").value;
    const imageUrls = Array.from(document.querySelectorAll("#imageUrls input")).map(input => input.value);

    if (!validateForm(title, description, startDate, finishDate, imageUrls, tags)) {
        return;
    }

    const newListing = {
        title,
        description,
        tags: tags.split(',').map(tag => tag.trim()),
        media: imageUrls.filter(url => url.trim() !== ''), // Filter out empty URLs
        endsAt: finishDate,
        created: startDate,
    };

    try {
        const response = await fetch(`${API_BASE_URL}${USER_LISTINGS_ENDPOINT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(newListing),
        });

        if (!response.ok) {
            throw new Error(`Failed to list item. Status: ${response.status}`);
        }

        handleSuccessfulListing(event);
    } catch (error) {
        handleListingError(error);
    }
}

// Function to validate form inputs
function validateForm(title, description, startDate, finishDate, imageUrls, tags) {
    if (!title || !description || !startDate || !finishDate || !tags.trim() || imageUrls.some(url => url.trim() === '')) {
        showFailureModal("Ensure all fields are filled correctly and all image URLs are valid.");
        return false;
    }

    return true;
}

// Function to handle successful listing
function handleSuccessfulListing(event) {
    showSuccessModal("Your item has been listed successfully. Redirecting to home page...");
    event.target.reset();
    // Redirecting after a brief pause to allow users to read the modal message
    setTimeout(() => window.location.href = "/index.html", 3000); // Adjust the URL as necessary
}

// Function to handle listing errors
function handleListingError(error) {
    console.error("Error listing item:", error.message);
    showFailureModal("An error occurred while listing the item. Please check your information and try again.");
}

// Call the function to initialize event listeners
initializeEventListeners();

document.addEventListener('DOMContentLoaded', () => {
    updateLoginLink();
});
