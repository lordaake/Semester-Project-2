/**
 * Updates the login link based on the user's authentication status.
 * If the user is logged in, the link is updated to 'Log out'.
 * If the user is not logged in, the link is updated to 'Log in'.
 * Handles click event for logging out.
 */
function updateLoginLink() {
    // Get the login link element
    const loginLink = document.getElementById('loginLink');
    // Get the access token from local storage
    const accessToken = localStorage.getItem('accessToken');

    try {
        // Check if login link exists
        if (loginLink) {
            // If user is logged in
            if (accessToken) {
                console.log('Logged in. Access Token:', accessToken);
                // Update link text to 'Log out'
                loginLink.textContent = 'Log out';
                // Set link href to '#' (can be adjusted)
                loginLink.href = '#';
                // Add event listener for logging out
                loginLink.addEventListener('click', () => {
                    // Remove authentication related items from local storage
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('username');
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('avatar');
                    localStorage.removeItem('banner');
                    // Redirect to home page after logout
                    window.location.href = "/index.html";
                });
            } else {
                // If user is not logged in
                console.log('Not logged in');
                // Update link text to 'Log in'
                loginLink.textContent = 'Log in';
            }
        }
    } catch (error) {
        // Log and handle errors
        console.error('Error updating login link:', error.message);
    }
}

// Export the function to make it accessible from other modules
export { updateLoginLink };
