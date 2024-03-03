// redirectIfNotLoggedIn.js

import { showFailureModal } from "./modal.js";

function redirectIfNotLoggedIn() {
    try {
        const loginLink = document.getElementById('loginLink');
        const accessToken = localStorage.getItem('accessToken');

        if (loginLink && !accessToken) {
            loginLink.addEventListener('click', (event) => {
                showFailureModal('You need to log in first before entering here.');
                event.preventDefault(); // Prevent default navigation
                window.location.href = '../auth/login.html';
            });
        }
    } catch (error) {
        console.error('Error redirecting if not logged in:', error.message);
    }
}

export { redirectIfNotLoggedIn };
