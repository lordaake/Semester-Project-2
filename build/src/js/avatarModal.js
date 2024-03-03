let modal = null;

function initializeModal() {
    modal = document.getElementById('avatarModal');
}

function showModal(title, content) {
    const modalTitle = document.querySelector('#avatarModal .modal-title');
    const modalBody = document.querySelector('#avatarModal .modal-body');

    modalTitle.textContent = title;
    modalBody.textContent = content;

    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
}

function initializeEventListeners() {
    document.addEventListener('DOMContentLoaded', function () {
        const showAvatarButton = document.getElementById('avatarIcon');

        showAvatarButton.addEventListener('click', function () {
            showModal('Change Avatar', 'Update your avatar by entering a new URL.');
        });

        const closeButtons = document.querySelectorAll('[data-bs-dismiss="modal"], .btn-close');
        closeButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                closeModal();
            });
        });

    });
}

document.addEventListener('DOMContentLoaded', function () {
    initializeModal();
    initializeEventListeners();
});

export { showModal, closeModal, initializeModal, initializeEventListeners };
