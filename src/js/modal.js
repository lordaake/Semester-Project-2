// Function to show the success modal
function showSuccessModal(message) {
    const successModal = new bootstrap.Modal(document.getElementById('successModal'), {
        keyboard: false
    });
    document.querySelector('#successModal .modal-body').textContent = message || 'Action completed successfully.';
    successModal.show();
}

// Function to show the failure modal
function showFailureModal(message) {
    const failureModal = new bootstrap.Modal(document.getElementById('failureModal'), {
        keyboard: false
    });
    document.querySelector('#failureModal .modal-body').textContent = message || 'There was a problem completing your action.';
    failureModal.show();
}

export { showSuccessModal, showFailureModal };
