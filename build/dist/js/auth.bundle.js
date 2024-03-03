/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ \"./src/js/modal.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n/* harmony import */ var _loggedIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loggedIn.js */ \"./src/js/loggedIn.js\");\n// Import necessary functions from modal.js\n\n\n\n(0,_loggedIn_js__WEBPACK_IMPORTED_MODULE_2__.updateLoginLink)();\n\n// Check if there are items in local storage\nif (localStorage.length > 0) {\n  // Clear local storage\n  localStorage.clear();\n  console.log('Local storage cleared successfully.');\n} else {\n  console.log('Local storage is already empty.');\n}\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var registrationForm = document.getElementById(\"registrationForm\");\n  var loginForm = document.getElementById(\"loginForm\");\n  registrationForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var API_REGISTER_URL = _constants_js__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL + _constants_js__WEBPACK_IMPORTED_MODULE_1__.REGISTRATION_ENDPOINT;\n    var username = document.getElementById(\"registerUsername\").value.trim();\n    var email = document.getElementById(\"registerEmail\").value.trim();\n    var password = document.getElementById(\"registerPassword\").value;\n    var confirmPassword = document.getElementById(\"confirmPassword\").value;\n    var avatar = document.getElementById(\"profileImageUrl\").value.trim();\n\n    // Validation checks\n    if (password !== confirmPassword) {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showFailureModal)(\"Registration failed. Passwords do not match.\");\n      return;\n    }\n    var emailRegex = /@(?:(?:noroff\\.no)|(?:stud\\.noroff\\.no))$/;\n    if (!emailRegex.test(email)) {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showFailureModal)(\"Registration failed. You must use a Noroff or stud.noroff.no email address.\");\n      return;\n    }\n    if (password.length < 8) {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showFailureModal)(\"Registration failed. Password must be at least 8 characters long.\");\n      return;\n    }\n    var registrationData = {\n      name: username,\n      email: email,\n      password: password\n    };\n    if (avatar !== \"\") {\n      registrationData.avatar = avatar;\n    }\n    fetch(API_REGISTER_URL, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(registrationData)\n    }).then(function (response) {\n      if (!response.ok) {\n        throw new Error(\"Registration failed\");\n      }\n      return response.json();\n    }).then(function () {\n      document.getElementById(\"registrationForm\").reset();\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showSuccessModal)(\"Registration successful! Please log in to continue.\");\n    })[\"catch\"](function () {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showFailureModal)(\"Registration failed. Please check your inputs.\");\n    });\n  });\n  loginForm.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var API_LOGIN_URL = _constants_js__WEBPACK_IMPORTED_MODULE_1__.API_BASE_URL + _constants_js__WEBPACK_IMPORTED_MODULE_1__.LOGIN_ENDPOINT;\n    var email = document.getElementById(\"loginEmail\").value.trim();\n    var password = document.getElementById(\"loginPassword\").value;\n    fetch(API_LOGIN_URL, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        email: email,\n        password: password\n      })\n    }).then(function (response) {\n      if (!response.ok) {\n        throw new Error(\"Login failed\");\n      }\n      return response.json();\n    }).then(function (data) {\n      // Store received data in local storage\n      localStorage.setItem(\"accessToken\", data.accessToken);\n      localStorage.setItem(\"username\", data.name);\n      localStorage.setItem(\"avatar\", data.avatar);\n      localStorage.setItem(\"banner\", data.banner);\n      localStorage.setItem(\"isLoggedIn\", \"true\");\n      localStorage.setItem(\"credits\", data.credits);\n      // Redirect to the homepage or another page\n      window.location.href = \"/index.html\";\n    })[\"catch\"](function () {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_0__.showFailureModal)(\"Login failed. Email or password is wrong.\");\n    });\n  });\n});\n\n//# sourceURL=webpack://semester-project-2/./src/js/auth.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_BASE_URL: () => (/* binding */ API_BASE_URL),\n/* harmony export */   BID_ENDPOINT: () => (/* binding */ BID_ENDPOINT),\n/* harmony export */   DEFAULT_LIMIT: () => (/* binding */ DEFAULT_LIMIT),\n/* harmony export */   DEFAULT_OFFSET: () => (/* binding */ DEFAULT_OFFSET),\n/* harmony export */   LOGIN_ENDPOINT: () => (/* binding */ LOGIN_ENDPOINT),\n/* harmony export */   REGISTRATION_ENDPOINT: () => (/* binding */ REGISTRATION_ENDPOINT),\n/* harmony export */   USER_LISTINGS_ENDPOINT: () => (/* binding */ USER_LISTINGS_ENDPOINT),\n/* harmony export */   USER_PROFILE_ENDPOINT: () => (/* binding */ USER_PROFILE_ENDPOINT),\n/* harmony export */   accessToken: () => (/* binding */ accessToken),\n/* harmony export */   credits: () => (/* binding */ credits),\n/* harmony export */   username: () => (/* binding */ username)\n/* harmony export */ });\n// constants.js\n\n// Base URL\nvar API_BASE_URL = \"https://api.noroff.dev/api/v1\";\n\n// Authentication endpoints\nvar REGISTRATION_ENDPOINT = \"/auction/auth/register/\";\nvar LOGIN_ENDPOINT = \"/auction/auth/login/\";\n\n// User endpoints\nvar USER_PROFILE_ENDPOINT = \"/auction/profiles/\";\nvar USER_LISTINGS_ENDPOINT = \"/auction/listings/\";\n\n// Bid endpoints\nvar BID_ENDPOINT = \"/auction/listings/\";\n\n// Pagination & Sorting\nvar DEFAULT_LIMIT = 100;\nvar DEFAULT_OFFSET = 0;\nvar accessToken = localStorage.getItem('accessToken'); // Use ACCESS_TOKEN_KEY constant\nvar username = localStorage.getItem('username'); // Use USERNAME_KEY constant\nvar credits = localStorage.getItem('credits'); // Use CREDITS_KEY constant\n\n//# sourceURL=webpack://semester-project-2/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/loggedIn.js":
/*!****************************!*\
  !*** ./src/js/loggedIn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateLoginLink: () => (/* binding */ updateLoginLink)\n/* harmony export */ });\nfunction updateLoginLink() {\n  var loginLink = document.getElementById('loginLink');\n  var accessToken = localStorage.getItem('accessToken');\n  try {\n    if (loginLink) {\n      if (accessToken) {\n        console.log('Logged in. Access Token:', accessToken);\n        loginLink.textContent = 'Log out';\n        loginLink.href = '#';\n        loginLink.addEventListener('click', function () {\n          localStorage.removeItem('isLoggedIn');\n          localStorage.removeItem('username');\n          localStorage.removeItem('accessToken');\n          localStorage.removeItem('avatar');\n          localStorage.removeItem('banner');\n          window.location.href = \"/index.html\";\n        });\n      } else {\n        console.log('Not logged in');\n        loginLink.textContent = 'Log in';\n      }\n    }\n  } catch (error) {\n    console.error('Error updating login link:', error.message);\n  }\n}\n\n\n//# sourceURL=webpack://semester-project-2/./src/js/loggedIn.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showFailureModal: () => (/* binding */ showFailureModal),\n/* harmony export */   showSuccessModal: () => (/* binding */ showSuccessModal)\n/* harmony export */ });\n// Function to show the success modal\nfunction showSuccessModal(message) {\n  var successModal = new bootstrap.Modal(document.getElementById('successModal'), {\n    keyboard: false\n  });\n  document.querySelector('#successModal .modal-body').textContent = message || 'Action completed successfully.';\n  successModal.show();\n}\n\n// Function to show the failure modal\nfunction showFailureModal(message) {\n  var failureModal = new bootstrap.Modal(document.getElementById('failureModal'), {\n    keyboard: false\n  });\n  document.querySelector('#failureModal .modal-body').textContent = message || 'There was a problem completing your action.';\n  failureModal.show();\n}\n\n\n//# sourceURL=webpack://semester-project-2/./src/js/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/auth.js");
/******/ 	
/******/ })()
;