// Base URL for API requests
export const API_BASE_URL = "https://api.noroff.dev/api/v1";

// Authentication endpoints
export const REGISTRATION_ENDPOINT = "/auction/auth/register/";
export const LOGIN_ENDPOINT = "/auction/auth/login/";

// User endpoints
export const USER_PROFILE_ENDPOINT = "/auction/profiles/";
export const USER_LISTINGS_ENDPOINT = "/auction/listings/";

// Bid endpoints
export const BID_ENDPOINT = "/auction/listings/";

// Pagination & Sorting defaults
export const DEFAULT_LIMIT = 100;
export const DEFAULT_OFFSET = 0;

// Retrieve access token, username, and credits from local storage
export const accessToken = localStorage.getItem('accessToken'); // Use ACCESS_TOKEN_KEY constant
export const username = localStorage.getItem('username'); // Use USERNAME_KEY constant
export const credits = localStorage.getItem('credits'); // Use CREDITS_KEY constant
