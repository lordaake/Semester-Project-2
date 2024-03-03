/**
 * Redirects the user to the login page if they are not logged in.
 * Displays a failure modal if the login link is clicked without being logged in.
 */
function redirectIfNotLoggedIn() {
    try {
        // Get the login link element
        const loginLink = document.getElementById('loginLink');
        // Get the access token from local storage
        const accessToken = localStorage.getItem('accessToken');

        // Check if login link exists and user is not logged in
        if (loginLink && !accessToken) {
            // Add event listener to login link
            loginLink.addEventListener('click', (event) => {
                // Show failure modal indicating the need to log in
                showFailureModal('You need to log in first before entering here.');
                // Prevent default navigation behavior
                event.preventDefault();
                // Redirect to the login page
                window.location.href = '../auth/login.html';
            });
        }
    } catch (error) {
        // Log and handle errors
        console.error('Error redirecting if not logged in:', error.message);
    }
}

// Export the function to make it accessible from other modules
export { redirectIfNotLoggedIn };
