/**
 * Displays a success modal with the provided message.
 * If no message is provided, a default success message is displayed.
 * @param {string} message - The message to display in the success modal.
 */
function showSuccessModal(message) {
    // Get the success modal element
    const successModal = new bootstrap.Modal(document.getElementById('successModal'), {
        keyboard: false
    });
    // Set the message content in the modal body, using provided message or default message
    document.querySelector('#successModal .modal-body').textContent = message || 'Action completed successfully.';
    // Show the success modal
    successModal.show();
}

/**
 * Displays a failure modal with the provided message.
 * If no message is provided, a default failure message is displayed.
 * @param {string} message - The message to display in the failure modal.
 */
function showFailureModal(message) {
    // Get the failure modal element
    const failureModal = new bootstrap.Modal(document.getElementById('failureModal'), {
        keyboard: false
    });
    // Set the message content in the modal body, using provided message or default message
    document.querySelector('#failureModal .modal-body').textContent = message || 'There was a problem completing your action.';
    // Show the failure modal
    failureModal.show();
}

// Export the functions to make them accessible from other modules
export { showSuccessModal, showFailureModal };
