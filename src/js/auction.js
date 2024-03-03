// Auction.js

import { API_BASE_URL, USER_LISTINGS_ENDPOINT, accessToken, username } from "./constants.js";
import { updateLoginLink } from "./loggedIn.js";
import { showSuccessModal, showFailureModal } from "./modal.js";

// Check if user is logged in and update login link
updateLoginLink();

// Function to fetch data from the API
async function fetchData(url, method = 'GET', body = null) {
    const headers = { 'Content-Type': 'application/json' };

    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const config = {
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : null
    };

    try {
        const response = await fetch(url, config);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Function to create HTML for each listing item
function createItemCard(listing) {
    const imageUrl = listing.media && listing.media.length > 0 ? listing.media[0] : '/images/placeholderauction.png';

    // Extract last bid information using the last entry in the bids array
    const lastBidObj = listing.bids && listing.bids.length > 0 ? listing.bids[listing.bids.length - 1] : null;
    const lastBidInfo = lastBidObj
        ? `Last Bid: $${lastBidObj.amount} by ${lastBidObj.bidderName}`
        : 'No bids yet';

    // Use the _count object to get the number of bids
    const bidCount = listing._count && listing._count.bids ? listing._count.bids : 0;
    const bidCountInfo = bidCount > 0
        ? `<p class="card-text">Number of Bids: ${bidCount}</p>`
        : '<p class="card-text">No bids yet</p>';

    const bidDeadlineText = new Date(listing.endsAt).toLocaleString();
    const creationDateText = new Date(listing.created).toLocaleDateString();

    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';

    let carouselIndicators = '';
    let carouselInner = '';

    // Check if listing.media (URLs for all images) has any media
    if (listing.media && listing.media.length > 0) {
        // Create carousel indicators and items
        listing.media.forEach((url, index) => {
            carouselIndicators += `<button type="button" data-bs-target="#carouselExampleCaptions${listing.id}" 
                data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" 
                aria-current="${index === 0 ? 'true' : ''}" aria-label="Slide ${index + 1}"></button>`;

            carouselInner += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${url.trim() || '/images/placeholderauction.png'}" 
                class="d-block w-100" alt="Image ${index + 1}">
            </div>`;
        });

        card.innerHTML = `
            <div id="carouselExampleCaptions${listing.id}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    ${carouselIndicators}
                </div>
                <div class="carousel-inner">
                    ${carouselInner}
                </div>
                <button class="carousel-control-prev" type="button" 
                    data-bs-target="#carouselExampleCaptions${listing.id}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" 
                    data-bs-target="#carouselExampleCaptions${listing.id}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${listing.title}</h5>
                <p class="card-text">${listing.description}</p>
                ${bidCountInfo} 
                <div class="mt-auto">
                    <p class="card-text">${lastBidInfo}</p>
                    <p class="card-text"><strong>Deadline:</strong> ${bidDeadlineText}</p>
                    <p class="card-text"><strong>Listing Date:</strong> ${creationDateText}</p> 
                    <p class="card-text mb-2"><strong>Tags:</strong> ${listing.tags.join(', ')}</p> 
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
        <div class="card">
            <img src="/images/placeholderauction.png" class="card-img-top" alt="Placeholder Image">
            <div class="card-body">
                <h5 class="card-title">${listing.title}</h5>
                <p class="card-text">${listing.description}</p>
                ${bidCountInfo} 
                <div class="mt-auto">
                    <p class="card-text">${lastBidInfo}</p>
                    <p class="card-text"><strong>Deadline:</strong> ${bidDeadlineText}</p>
                    <p class="card-text"><strong>Listing Date:</strong> ${creationDateText}</p> 
                    <p class="card-text mb-2"><strong>Tags:</strong> ${listing.tags.join(', ')}</p> 
                </div>
            </div>
            </div>
        </div>
    `;
    }

    const bidInput = document.createElement('input');
    bidInput.className = 'form-control bid-input';
    bidInput.setAttribute('type', 'number');
    bidInput.setAttribute('placeholder', 'Enter bid amount');
    bidInput.setAttribute('min', '0'); // Setting minimum value to 0

    const bidInputGroup = document.createElement('div');
    bidInputGroup.className = 'input-group mb-3';
    bidInputGroup.appendChild(bidInput);

    const bidButton = document.createElement('button');
    bidButton.className = 'btn btn-primary bid-button';
    bidButton.setAttribute('data-listing-id', listing.id);
    bidButton.textContent = 'Place Bid';

    // Check if user is logged in
    const isLoggedIn = accessToken !== null && accessToken !== undefined;

    // Add event listener only if user is logged in
    if (isLoggedIn) {
        bidButton.addEventListener('click', function () {
            const bidAmountString = bidInput.value.trim();
            const bidAmount = Number(bidAmountString);

            if (isNaN(bidAmount)) {
                console.error('Invalid bid amount:', bidAmountString);
                showFailureModal('Please enter a valid bid amount.');
                return;
            }

            // Check if the bid amount is higher than the last bid amount
            if (lastBidObj && bidAmount <= lastBidObj.amount) {
                showFailureModal('Your bid must be higher than the current bid.');
                return;
            }

            const listingId = this.getAttribute('data-listing-id');
            const url = `https://api.noroff.dev/api/v1/auction/listings/${listingId}/bids`;

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    amount: bidAmount
                })
            };

            fetch(url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    showSuccessModal('Bid successful:');

                    const successModalEl = document.getElementById('successModal');

                    successModalEl.addEventListener('hidden.bs.modal', function () {
                        window.location.reload();
                    });

                })
                .catch(error => {
                    showFailureModal('There was an error placing your bid. Please try again.');
                });
        });
    } else {
        // If user is not logged in, show message
        bidButton.addEventListener('click', function () {
            showSuccessModal('You need to be logged in to make a bid');
        });
    }

    const bidInputGroupAppend = document.createElement('div');
    bidInputGroupAppend.className = 'input-group-append';
    bidInputGroupAppend.appendChild(bidButton);

    const bidInputGroupContainer = document.createElement('div');
    bidInputGroupContainer.appendChild(bidInputGroup);
    bidInputGroupContainer.appendChild(bidInputGroupAppend);

    card.querySelector('.card-body').appendChild(bidInputGroupContainer);

    return card;
}

// Function to update the UI with fetched listings
function updateUIWithListings(listings, container, currentPage = 1) {
    const listingsPerPage = 20;
    const totalPages = Math.ceil(listings.length / listingsPerPage);

    // Sort listings by creation date (most recent first)
    listings.sort((a, b) => new Date(b.created) - new Date(a.created));

    // Calculate start and end indexes for the current page
    const startIndex = (currentPage - 1) * listingsPerPage;
    const endIndex = Math.min(startIndex + listingsPerPage, listings.length);
    const listingsToShow = listings.slice(startIndex, endIndex);

    // Clear container
    container.innerHTML = '';

    // Create and append listing cards
    listingsToShow.forEach(listing => {
        const card = createItemCard(listing);
        container.appendChild(card);
    });

    // Clear and recreate pagination container
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'btn btn-primary';
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            updateUIWithListings(listings, container, i);
        });
        paginationContainer.appendChild(pageButton);
    }
}

// Function to initialize the application
async function initialize() {
    try {
        const itemCardsContainer = document.getElementById('itemCardsContainer');
        let allListings = await fetchAllListings();

        updateUIWithListings(allListings, itemCardsContainer);

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');

        const handleSearch = async () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm === '') {
                // If search term is empty, display all listings
                updateUIWithListings(allListings, itemCardsContainer);
            } else {
                // Filter listings based on search term
                const filteredListings = allListings.filter(listing =>
                    listing.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
                updateUIWithListings(filteredListings, itemCardsContainer);
            }
        };

        // Add event listener for search button click
        searchButton.addEventListener('click', handleSearch);

        // Add event listener for pressing enter in the search input
        searchInput.addEventListener('keypress', async (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                handleSearch();
            }
        });
    } catch (error) {
        console.error('Error initializing auction:', error);
    }
}

async function fetchAllListings() {
    let allListings = [];
    let offset = 0;
    let hasMoreListings = true;

    while (hasMoreListings) {
        const listingsUrl = `${API_BASE_URL}${USER_LISTINGS_ENDPOINT}?_bids=true&_active=true&limit=100&offset=${offset}`;
        const listings = await fetchData(listingsUrl);

        if (listings.length > 0) {
            allListings = allListings.concat(listings);
            offset += 100; // increment offset to get the next batch of listings
        } else {
            hasMoreListings = false; // no more listings to fetch
        }
    }

    return allListings;
}

document.addEventListener('DOMContentLoaded', () => {
    // Call your initialize function or other initialization code here
    initialize();
});


