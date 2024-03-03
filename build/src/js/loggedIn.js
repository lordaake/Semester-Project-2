function updateLoginLink() {
    const loginLink = document.getElementById('loginLink');
    const accessToken = localStorage.getItem('accessToken');

    try {
        if (loginLink) {
            if (accessToken) {
                console.log('Logged in. Access Token:', accessToken);
                loginLink.textContent = 'Log out';
                loginLink.href = '#';
                loginLink.addEventListener('click', () => {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('username');
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('avatar');
                    localStorage.removeItem('banner');
                    window.location.href = "/index.html";
                });
            } else {
                console.log('Not logged in');
                loginLink.textContent = 'Log in';
            }
        }
    } catch (error) {
        console.error('Error updating login link:', error.message);
    }
}

export { updateLoginLink };