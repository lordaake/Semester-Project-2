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

/***/ "./src/js/avatarModal.js":
/*!*******************************!*\
  !*** ./src/js/avatarModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   initializeEventListeners: () => (/* binding */ initializeEventListeners),\n/* harmony export */   initializeModal: () => (/* binding */ initializeModal),\n/* harmony export */   showModal: () => (/* binding */ showModal)\n/* harmony export */ });\nvar modal = null;\nfunction initializeModal() {\n  modal = document.getElementById('avatarModal');\n}\nfunction showModal(title, content) {\n  var modalTitle = document.querySelector('#avatarModal .modal-title');\n  var modalBody = document.querySelector('#avatarModal .modal-body');\n  modalTitle.textContent = title;\n  modalBody.textContent = content;\n  modal.classList.add('show');\n}\nfunction closeModal() {\n  modal.classList.remove('show');\n}\nfunction initializeEventListeners() {\n  document.addEventListener('DOMContentLoaded', function () {\n    var showAvatarButton = document.getElementById('avatarIcon');\n    showAvatarButton.addEventListener('click', function () {\n      showModal('Change Avatar', 'Update your avatar by entering a new URL.');\n    });\n    var closeButtons = document.querySelectorAll('[data-bs-dismiss=\"modal\"], .btn-close');\n    closeButtons.forEach(function (button) {\n      button.addEventListener('click', function () {\n        closeModal();\n      });\n    });\n  });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  initializeModal();\n  initializeEventListeners();\n});\n\n\n//# sourceURL=webpack://semester-project-2/./src/js/avatarModal.js?");

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
/******/ 	__webpack_modules__["./src/js/avatarModal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;