// Variable to store the modal element
let modal = null;

// Function to initialize the modal
function initializeModal() {
    modal = document.getElementById('avatarModal');
}

// Function to show the modal with specified title and content
function showModal(title, content) {
    // Select modal title and body elements
    const modalTitle = document.querySelector('#avatarModal .modal-title');
    const modalBody = document.querySelector('#avatarModal .modal-body');

    // Set title and content
    modalTitle.textContent = title;
    modalBody.textContent = content;

    // Add 'show' class to display the modal
    modal.classList.add('show');
}

// Function to close the modal
function closeModal() {
    // Remove 'show' class to hide the modal
    modal.classList.remove('show');
}

// Function to initialize event listeners for the modal
function initializeEventListeners() {
    // Add event listener when DOM content is loaded
    document.addEventListener('DOMContentLoaded', function () {
        // Get the avatar icon button element
        const showAvatarButton = document.getElementById('avatarIcon');

        // Add event listener to show the modal when avatar icon button is clicked
        showAvatarButton.addEventListener('click', function () {
            // Call showModal function with specified title and content
            showModal('Change Avatar', 'Update your avatar by entering a new URL.');
        });

        // Get all elements with data-bs-dismiss="modal" attribute and .btn-close class
        const closeButtons = document.querySelectorAll('[data-bs-dismiss="modal"], .btn-close');
        // Loop through each close button
        closeButtons.forEach(function (button) {
            // Add event listener to close the modal when close button is clicked
            button.addEventListener('click', function () {
                // Call closeModal function to hide the modal
                closeModal();
            });
        });
    });
}

// Add event listener when DOM content is loaded to initialize modal and event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Call initializeModal function to initialize the modal element
    initializeModal();
    // Call initializeEventListeners function to initialize event listeners for the modal
    initializeEventListeners();
});

// Export functions to make them accessible from other modules
export { showModal, closeModal, initializeModal, initializeEventListeners };
