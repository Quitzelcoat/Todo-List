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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_task_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task-show */ \"./src/todo-task-show.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-btn */ \"./src/task-btn.js\");\n\n\n\n\n(0,_todo_task_show__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\"na\", \"Something\", \"anything to do\", \"important\", \"\");\n(0,_project__WEBPACK_IMPORTED_MODULE_1__.projectPages)();\n(0,_task_btn__WEBPACK_IMPORTED_MODULE_2__.dialogWork)();\n\n/*\n1. function to create a todo list. (Done).\n2. function to create a new project. (Done).\nDOM MINIPULATION:\n1. nav and basic layout. (Done).\n2. new task button and a dialogue show when clicked. And closed when submit. (Done)\n3. Dialogue basic edit when input data, display on screen.\n4. Create all the pages (projects notes etc). Notes are seperate work in the end after todo.\n5. Also make sure in the side bar for the new project when selected only ask for the title to\n    create a field/div for that project. And inside can add todo's.\n6. Put todo's in the right pages when created.\n7. Add other functions needed inside dialogue. And make them work. (e.g., priority and stuff).\n8. Add edit and delete functions and make them working etc.\n9. Do the remaining  css and other stuff.\n10. Finall move to notes and make a dialogue for them to make them working.\n\n3. function to push the todo list task to the project. \n4. function for representing what kind of projects to create.\n    (e.g., projects, simple todo task and notes)\n5. function to show where the following tasks created will be in\n    (e.g., in all tasks and complete tasks and todo\n        task or notes or projects.)\n6. Modules for edit, delete and priority of the task creted.\n*/\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectPages: () => (/* binding */ projectPages)\n/* harmony export */ });\nconst projectPages = () => {\n    let projectArray = [];\n    \n    let projectTitle = \"Something\";\n    projectArray.push({projectTitle});\n    console.log(projectArray);\n    return {\n        projectArray,\n        projectTitle\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task-btn.js":
/*!*************************!*\
  !*** ./src/task-btn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialogWork: () => (/* binding */ dialogWork)\n/* harmony export */ });\nconst dialogWork = () => {\n  const dialog = document.querySelector(\"dialog\");\n  const showButton = document.querySelector(\".newTaskBtn\");\n  const closeButton = document.querySelector(\".addBtn\");\n  \n  // \"Show the dialog\" button opens the dialog modally\n  showButton.addEventListener(\"click\", () => {\n    dialog.showModal();\n  });\n  \n  // \"Close\" button closes the dialog\n  closeButton.addEventListener(\"click\", () => {\n    dialog.close();\n  });\n}\n\nfunction showDialogData() {\n\n}\n\n//# sourceURL=webpack://todo-list/./src/task-btn.js?");

/***/ }),

/***/ "./src/todo-task-show.js":
/*!*******************************!*\
  !*** ./src/todo-task-show.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nlet todoArray = [];\n\nconst createTodo = (check, title, description, priority, date) => {\n    console.log({check, title, description, priority, date});\n    todoArray.push({check, title, description, priority, date});\n    console.log(todoArray);\n    return { check, title, description, priority, date };\n}\n\n//# sourceURL=webpack://todo-list/./src/todo-task-show.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;