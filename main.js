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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_task_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task-show */ \"./src/todo-task-show.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-btn */ \"./src/task-btn.js\");\n\n\n\n\n(0,_todo_task_show__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\"na\", \"Something\", \"anything to do\", \"important\", \"\");\n(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();\n(0,_task_btn__WEBPACK_IMPORTED_MODULE_2__.dialogData)();\n(0,_task_btn__WEBPACK_IMPORTED_MODULE_2__.pageControlCreate)();\n\n/*\n1. function to create a todo list. (Done).\n2. function to create a new project. (Done).\nDOM MINIPULATION:\n\n    1. nav and basic layout.(Done).\n    2. new task button and a dialogue show when clicked. And closed when submit.(Done).\n    3. Dialogue basic edit when input data, display on screen.(Done).\n    4. Create all the pages (projects, notes etc). Notes are seperate work in the end after \n        todo.(Done).\n    5. Also make sure in the side bar for the new project when selected inside dialog only \n        ask for the title to create a field/div for that project. (Done).\n    6. When select that project create a new page for that project, And inside the\n        that page, we can create todo's of that project.(Done).\n\n    7. Create Today, completedTasks and upComming pages.\n    8. Add other functions needed inside dialogue. (e.g., priority, description, calander \n        and stuff). (The calander working later)\n    9. Add sample check, edit, delete, priority, date(not editable) etc inside todo tasks.\n    10. Make the Dailog other functions working inside the todo tasks sample.\n        (edit, delete, check will work in the next task).\n    11. Make the calander working so that it will add to its specific pages according to date \n        and add the date to the task created.\n    12. Put todo's in the rest of the right pages when created.\n    13. Do the remaining  css and other stuff.\n    14. Finall move to notes and make a dialogue for them to make them working.\n\n*/\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notesPages: () => (/* binding */ notesPages)\n/* harmony export */ });\nconst notesPages = () => {\n    const mainContainer = document.querySelector(\".mainContainer\");\n    const notesPage = document.createElement('div');\n    const notesTitle = document.createElement('h2');\n\n    notesPage.classList.add('notesPage');\n    notesPage.setAttribute('id', 'mainContent');\n    notesTitle.classList.add('projectTitle');\n\n    notesTitle.innerText = \"Notes\";\n\n    mainContainer.prepend(notesPage);\n    notesPage.appendChild(notesTitle);\n\n}\n\n//# sourceURL=webpack://todo-list/./src/notes.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   projectPages: () => (/* binding */ projectPages)\n/* harmony export */ });\nconst project = () => {\n    let projectArray = [];\n    \n    let projectTitle = \"Something\";\n    projectArray.push({projectTitle});\n    console.log(projectArray);\n    return {\n        projectArray,\n        projectTitle\n    }\n}\n\nconst projectPages = (clickedPage) => {\n    const mainContainer = document.querySelector(\".mainContainer\");\n    const projectPage = document.createElement('div');\n    const titleDiv = document.createElement('div');\n    const projectTitle = document.createElement('div');\n    const pageTitle = document.createElement('h2');\n    const projectBtnDiv = document.createElement('div');\n    const projectBtn = document.createElement('button');\n    const pageTaskDiv = document.createElement('div');\n    const pageTaskPara = document.createElement('p');\n    \n    projectPage.classList.add('projectPage');\n    projectPage.setAttribute('id', 'mainContent');\n    titleDiv.classList.add('projectTitle');\n    projectBtnDiv.classList.add('projectBtnDiv');\n    projectBtn.classList.add('projectBtn');\n    pageTaskDiv.classList.add('pageTaskDiv');\n    pageTaskPara.classList.add('pageTaskPara');\n    \n    pageTitle.textContent = clickedPage.textContent;\n    projectBtn.textContent = \"Add Task\";\n\n    mainContainer.prepend(projectPage);\n    projectPage.prepend(titleDiv);\n    titleDiv.appendChild(projectTitle);\n    projectTitle.appendChild(pageTitle);\n    projectPage.appendChild(projectBtnDiv);\n    projectBtnDiv.appendChild(projectBtn);\n    projectPage.appendChild(pageTaskDiv);\n    pageTaskDiv.appendChild(pageTaskPara);\n    \n    const projectBtns = document.querySelectorAll(\".projectBtn\");\n    const pagesDialog = document.querySelector(\".pagesDialog\");\n    projectBtns.forEach((projectBtn) => {\n        projectBtn.addEventListener('click', (event) => {\n        if (event.target.classList.contains('projectBtn')) {\n            pagesDialog.showModal();\n        }\n        });\n    });\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task-btn.js":
/*!*************************!*\
  !*** ./src/task-btn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialogData: () => (/* binding */ dialogData),\n/* harmony export */   pageControlCreate: () => (/* binding */ pageControlCreate)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n\n\n\n// Add maindata to the pages.\nconst dialogData = () => {\n  const pageControl = document.querySelector(\".todoTypesDialog\");\n  const showButton = document.querySelector(\".newTaskBtn\");\n  const mainDialog = document.querySelector('.mainDialog');\n  const newTodo = document.querySelector('.newTodo');\n  const addTaskButton = document.querySelector(\".addBtn\");\n  const tasksContainer = document.querySelector('.tasksContainer');\n  const titleInput = document.getElementById('todoTitle');\n  const createNewProject = document.querySelector('.createNewProject');\n  const newProjectBtn = document.querySelector('.newProjectBtn');\n  const projectDialog = document.querySelector('.projectDialog');\n  const projectInput = document.getElementById('projectTtile');\n  const addProjectName = document.querySelector('.projectNames');\n\n  \n  // \"Show the dialog\" button opens the dialog modally\n  showButton.addEventListener(\"click\", () => {\n    pageControl.showModal();\n  });\n  \n  newTodo.addEventListener('click', () => {\n    mainDialog.showModal();\n    pageControl.close();\n  });\n\n  createNewProject.addEventListener('click', () => {\n    projectDialog.showModal();\n    pageControl.close();\n  });\n\n  \n  // \"Add Task\" button adds todo task.\n  addTaskButton.addEventListener(\"click\", () => {\n    \n    const taskElement = document.createElement('div');\n    taskElement.className = \"taskElement\";\n    taskElement.textContent = titleInput.value;\n    \n    tasksContainer.appendChild(taskElement);\n    titleInput.value = \"\";\n    mainDialog.close();\n  });\n  \n  // Creates a new element and adds project Names.\n  newProjectBtn.addEventListener('click', () => {\n    \n    const projectElement = document.createElement('div');\n    projectElement.className = 'newProjectPages';\n    projectElement.textContent = projectInput.value;\n    \n    addProjectName.appendChild(projectElement);\n    projectInput.value = \"\";\n    projectDialog.close();\n    \n    pageControlCreate();\n  });\n  \n  const newPageBtn = document.querySelector(\".newPageBtn\");\n  const pagesDialog = document.querySelector('.pagesDialog');\n  const pageTitle = document.getElementById('pageTitle');\n  newPageBtn.addEventListener('click', () => {\n\n    const pageTaskPara = document.querySelector('.pageTaskPara');\n\n    const newElement = document.createElement('div');\n    newElement.className = 'newElement';\n    newElement.textContent = pageTitle.value;\n\n    pageTaskPara.appendChild(newElement);\n    pageTitle.value = '';\n    pagesDialog.close();\n  });\n}\n\n// Changes the pages after removing them.\nconst pageControlCreate = () => {\n  const sideInbox = document.querySelector('.sideInbox');\n  const mainContainer = document.querySelector(\".mainContainer\");\n  const mainPage = document.querySelector(\".mainPage\");\n  const sidePages = document.querySelectorAll('.newProjectPages');\n  const sideNotes = document.querySelector('.sideNotes');\n\n  // To select sidebar Main Page.\n  sideInbox.addEventListener('click', () => {\n    clearTab();\n    mainContainer.prepend(mainPage);\n  });\n\n  // To select sidebar Project Pages.\n  sidePages.forEach(page => {\n    page.addEventListener(\"click\", () => {\n      clearTab();\n      (0,_project__WEBPACK_IMPORTED_MODULE_0__.projectPages)(page);\n    });\n  });\n\n  // To select sidebar Notes Page.\n  sideNotes.addEventListener(\"click\", () => {\n    clearTab();\n    (0,_notes__WEBPACK_IMPORTED_MODULE_1__.notesPages)();\n  });\n}\n\n// Removes the main page.\nfunction clearTab() {\n  const mainContainer = document.querySelector(\".mainContainer\");\n  const mainContent = document.getElementById(\"mainContent\");\n  if(mainContent) {\n    mainContainer.removeChild(mainContent);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/task-btn.js?");

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