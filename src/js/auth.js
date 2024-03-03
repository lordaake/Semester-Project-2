// Importing functions from other modules
import { showSuccessModal, showFailureModal } from './modal.js';
import { API_BASE_URL, REGISTRATION_ENDPOINT, LOGIN_ENDPOINT } from './constants.js';
import { updateLoginLink } from './loggedIn.js';

// Update login link
updateLoginLink();

// Check if there are items in local storage
if (localStorage.length > 0) {
    // Clear local storage
    localStorage.clear();
    console.log('Local storage cleared successfully.');
}

// Add event listener when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get registration and login forms
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");

    // Event listener for registration form submission
    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Construct API URL for registration
        const API_REGISTER_URL = API_BASE_URL + REGISTRATION_ENDPOINT;

        // Get form input values
        const username = document.getElementById("registerUsername").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const avatar = document.getElementById("profileImageUrl").value.trim();

        // Validation checks
        if (password !== confirmPassword) {
            showFailureModal("Registration failed. Passwords do not match.");
            return;
        }

        const emailRegex = /@(?:(?:noroff\.no)|(?:stud\.noroff\.no))$/;
        if (!emailRegex.test(email)) {
            showFailureModal("Registration failed. You must use a Noroff or stud.noroff.no email address.");
            return;
        }

        if (password.length < 8) {
            showFailureModal("Registration failed. Password must be at least 8 characters long.");
            return;
        }

        // Construct registration data object
        let registrationData = { name: username, email, password };
        if (avatar !== "") {
            registrationData.avatar = avatar;
        }

        // Send registration request to the server
        fetch(API_REGISTER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(registrationData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Registration failed");
                }
                return response.json();
            })
            .then(() => {
                // Reset the registration form on success
                document.getElementById("registrationForm").reset();
                // Show success modal
                showSuccessModal("Registration successful! Please log in to continue.");
            })
            .catch(() => {
                // Show failure modal on registration failure
                showFailureModal("Registration failed. Please check your inputs.");
            });
    });

    // Event listener for login form submission
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Construct API URL for login
        const API_LOGIN_URL = API_BASE_URL + LOGIN_ENDPOINT;

        // Get login form input values
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        // Send login request to the server
        fetch(API_LOGIN_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Login failed");
                }
                return response.json();
            })
            .then(data => {
                // Store received data in local storage
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("username", data.name);
                localStorage.setItem("avatar", data.avatar);
                localStorage.setItem("banner", data.banner);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("credits", data.credits);
                // Redirect to the homepage or another page after successful login
                window.location.href = "/index.html";
            })
            .catch(() => {
                // Show failure modal on login failure
                showFailureModal("Login failed. Email or password is wrong.");
            });
    });
});
