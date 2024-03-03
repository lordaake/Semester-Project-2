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

/***/ "./src/js/loggedIn.js":
/*!****************************!*\
  !*** ./src/js/loggedIn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateLoginLink: () => (/* binding */ updateLoginLink)\n/* harmony export */ });\nfunction updateLoginLink() {\n  var loginLink = document.getElementById('loginLink');\n  var accessToken = localStorage.getItem('accessToken');\n  try {\n    if (loginLink) {\n      if (accessToken) {\n        console.log('Logged in. Access Token:', accessToken);\n        loginLink.textContent = 'Log out';\n        loginLink.href = '#';\n        loginLink.addEventListener('click', function () {\n          localStorage.removeItem('isLoggedIn');\n          localStorage.removeItem('username');\n          localStorage.removeItem('accessToken');\n          localStorage.removeItem('avatar');\n          localStorage.removeItem('banner');\n          window.location.href = \"/index.html\";\n        });\n      } else {\n        console.log('Not logged in');\n        loginLink.textContent = 'Log in';\n      }\n    }\n  } catch (error) {\n    console.error('Error updating login link:', error.message);\n  }\n}\n\n\n//# sourceURL=webpack://semester-project-2/./src/js/loggedIn.js?");

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
/******/ 	__webpack_modules__["./src/js/loggedIn.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;