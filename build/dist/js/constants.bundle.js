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

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_BASE_URL: () => (/* binding */ API_BASE_URL),\n/* harmony export */   BID_ENDPOINT: () => (/* binding */ BID_ENDPOINT),\n/* harmony export */   DEFAULT_LIMIT: () => (/* binding */ DEFAULT_LIMIT),\n/* harmony export */   DEFAULT_OFFSET: () => (/* binding */ DEFAULT_OFFSET),\n/* harmony export */   LOGIN_ENDPOINT: () => (/* binding */ LOGIN_ENDPOINT),\n/* harmony export */   REGISTRATION_ENDPOINT: () => (/* binding */ REGISTRATION_ENDPOINT),\n/* harmony export */   USER_LISTINGS_ENDPOINT: () => (/* binding */ USER_LISTINGS_ENDPOINT),\n/* harmony export */   USER_PROFILE_ENDPOINT: () => (/* binding */ USER_PROFILE_ENDPOINT),\n/* harmony export */   accessToken: () => (/* binding */ accessToken),\n/* harmony export */   credits: () => (/* binding */ credits),\n/* harmony export */   username: () => (/* binding */ username)\n/* harmony export */ });\n// constants.js\n\n// Base URL\nvar API_BASE_URL = \"https://api.noroff.dev/api/v1\";\n\n// Authentication endpoints\nvar REGISTRATION_ENDPOINT = \"/auction/auth/register/\";\nvar LOGIN_ENDPOINT = \"/auction/auth/login/\";\n\n// User endpoints\nvar USER_PROFILE_ENDPOINT = \"/auction/profiles/\";\nvar USER_LISTINGS_ENDPOINT = \"/auction/listings/\";\n\n// Bid endpoints\nvar BID_ENDPOINT = \"/auction/listings/\";\n\n// Pagination & Sorting\nvar DEFAULT_LIMIT = 100;\nvar DEFAULT_OFFSET = 0;\nvar accessToken = localStorage.getItem('accessToken'); // Use ACCESS_TOKEN_KEY constant\nvar username = localStorage.getItem('username'); // Use USERNAME_KEY constant\nvar credits = localStorage.getItem('credits'); // Use CREDITS_KEY constant\n\n//# sourceURL=webpack://semester-project-2/./src/js/constants.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/constants.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;