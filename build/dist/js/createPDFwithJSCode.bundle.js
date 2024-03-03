/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/createPDFwithJSCode.js":
/*!***************************************!*\
  !*** ./src/js/createPDFwithJSCode.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar directoryPath = \"C:\\\\Users\\\\Tord\\\\Documents\\\\VS Code Projects\\\\Semester-Project-2\\\\src\\\\js\";\nvar outputFile = 'allCode.txt'; // Specify the name of the output file\n\n// Function to read all JavaScript files in a directory\nfunction readFiles(dirname, onFileContent, onError) {\n  fs.readdir(dirname, function (err, filenames) {\n    if (err) {\n      onError(err);\n      return;\n    }\n    filenames.forEach(function (filename) {\n      fs.readFile(path.join(dirname, filename), 'utf-8', function (err, content) {\n        if (err) {\n          onError(err);\n          return;\n        }\n        onFileContent(filename, content);\n      });\n    });\n  });\n}\n\n// Function to process content of each file\nfunction processFile(filename, content) {\n  // Append content to the output file\n  fs.appendFileSync(outputFile, \"Content of \".concat(filename, \":\\n\").concat(content, \"\\n\\n\"));\n}\n\n// Call the readFiles function\nreadFiles(directoryPath, processFile, function (err) {\n  console.error('Error reading files:', err);\n});\n\n//# sourceURL=webpack://semester-project-2/./src/js/createPDFwithJSCode.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/createPDFwithJSCode.js");
/******/ 	
/******/ })()
;