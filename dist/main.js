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

/***/ "./src/complete-task.js":
/*!******************************!*\
  !*** ./src/complete-task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   complete: () => (/* binding */ complete)\n/* harmony export */ });\nconst complete = () => {\n    const mainContainer = document.querySelector(\".mainContainer\");\n    const completePage = document.createElement('div');\n    const completeTitle = document.createElement('h2');\n\n    completePage.classList.add('todayPage');\n    completePage.setAttribute('id', 'mainContent');\n    completeTitle.classList.add('todayTasksTitle');\n\n    completeTitle.innerText = \"Completed Tasks\";\n\n    mainContainer.prepend(completePage);\n    completePage.appendChild(completeTitle);\n}\n\n//# sourceURL=webpack://todo-list/./src/complete-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_task_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-task-show */ \"./src/todo-task-show.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-btn */ \"./src/task-btn.js\");\n\n\n\n\n(0,_todo_task_show__WEBPACK_IMPORTED_MODULE_0__.createTodo)(\"na\", \"Something\", \"anything to do\", \"important\", \"\");\n(0,_project__WEBPACK_IMPORTED_MODULE_1__.project)();\n(0,_task_btn__WEBPACK_IMPORTED_MODULE_2__.dialogData)();\n(0,_task_btn__WEBPACK_IMPORTED_MODULE_2__.pageControlCreate)();\n\n/*\n1. function to create a todo list. (Done).\n2. function to create a new project. (Done).\nDOM MINIPULATION:\n\n    1.  nav and basic layout.(Done).\n    2.  new task button and a dialogue show when clicked. And closed when submit.(Done).\n    3.  Dialogue basic edit when input data, display on screen.(Done).\n    4.  Create all the pages (projects, notes etc). Notes are seperate work in the end after \n        todo.(Done).\n    5.  Also make sure in the side bar for the new project when selected inside dialog only \n        ask for the title to create a field/div for that project. (Done).\n    6.  When select that project create a new page for that project, And inside the\n        that page, we can create todo's of that project.(Done).\n    7.  Create Today, completedTasks and upComming pages.(Done).\n    8.  Add other functions needed inside dialogue. (e.g., priority, description, calander).(Done)\n    9.  Add (check), (edit), (delete), (priority), date(div), (Description) etc inside todo tasks.(Done).\n    10. Create a detail button for each task which will show a dailog with all the details\n        of title, description(it will not show on task only in detail dialog), priority,\n        Date etc. (Only create, functionality in next).(Done).\n    11. Make the Dailog and Detail functions work (description, Title) (priority next)\n        inside the todo tasks.(edit, delete, check, date later in the next task).(Done).\n\n    12. Make the edit, delete functions work for the tasks.(Check later)\n    13. Make the calander working so that it will add to its specific pages according to date\n        and add the date to the task created.\n    14. Create priority sections, when click show the priority on todo and on detail dialog.\n    15. Put todo's in the rest of the right pages when created. Also make the check work.\n    16. Do the remaining css and other stuff.\n    17. Finally move to notes and make a dialogue for them to make them working.\n\n*/\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   projectPages: () => (/* binding */ projectPages)\n/* harmony export */ });\nconst project = () => {\n    let projectArray = [];\n    \n    let projectTitle = \"Something\";\n    projectArray.push({projectTitle});\n    console.log(projectArray);\n    return {\n        projectArray,\n        projectTitle\n    }\n}\n\nconst projectPages = (clickedPage) => {\n    const mainContainer = document.querySelector(\".mainContainer\");\n    const projectPage = document.createElement('div');\n    const titleDiv = document.createElement('div');\n    const projectTitle = document.createElement('div');\n    const pageTitle = document.createElement('h2');\n    const projectBtnDiv = document.createElement('div');\n    const projectBtn = document.createElement('button');\n    const pageTaskDiv = document.createElement('div');\n    // const pageTaskPara = document.createElement('div');\n\n    projectPage.classList.add('projectPage');\n    projectPage.setAttribute('id', 'mainContent');\n    titleDiv.classList.add('projectTitle');\n    projectBtnDiv.classList.add('projectBtnDiv');\n    projectBtn.classList.add('projectBtn');\n    pageTaskDiv.classList.add('pageTaskDiv');\n    \n    projectBtn.textContent = \"Add Task\";\n    pageTitle.textContent = clickedPage.textContent;\n\n    mainContainer.prepend(projectPage);\n    projectPage.prepend(titleDiv);\n    titleDiv.appendChild(projectTitle);\n    projectTitle.appendChild(pageTitle);\n    projectPage.appendChild(projectBtnDiv);\n    projectBtnDiv.appendChild(projectBtn);\n    projectPage.appendChild(pageTaskDiv);\n    \n    const projectBtns = document.querySelectorAll(\".projectBtn\");\n    const pagesDialog = document.querySelector(\".pagesDialog\");\n    projectBtns.forEach((projectBtn) => {\n        projectBtn.addEventListener('click', (event) => {\n        if (event.target.classList.contains('projectBtn')) {\n            pagesDialog.showModal();\n        }\n        });\n    });\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task-btn.js":
/*!*************************!*\
  !*** ./src/task-btn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialogData: () => (/* binding */ dialogData),\n/* harmony export */   pageControlCreate: () => (/* binding */ pageControlCreate)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes */ \"./src/notes.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _upcoming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcoming */ \"./src/upcoming.js\");\n/* harmony import */ var _complete_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete-task */ \"./src/complete-task.js\");\n\n\n\n\n\n\n// Add maindata to the pages.\nconst dialogData = () => {\n  const pageControl = document.querySelector(\".todoTypesDialog\");\n  const showButton = document.querySelector(\".newTaskBtn\");\n  const mainDialog = document.querySelector('.mainDialog');\n  const newTodo = document.querySelector('.newTodo');\n  const addTaskButton = document.querySelector(\".addBtn\");\n  const tasksContainer = document.querySelector('.tasksContainer');\n  const titleInput = document.getElementById('todoTitle');\n  const createNewProject = document.querySelector('.createNewProject');\n  const newProjectBtn = document.querySelector('.newProjectBtn');\n  const projectDialog = document.querySelector('.projectDialog');\n  const projectInput = document.getElementById('projectTtile');\n  const addProjectName = document.querySelector('.projectNames');\n  const newPageBtn = document.querySelector(\".newPageBtn\");\n  const pagesDialog = document.querySelector('.pagesDialog');\n  const pageTitle = document.getElementById('pageTitle');\n\n  // \"Show the dialog\" button opens the dialog modally\n  showButton.addEventListener(\"click\", () => {\n    pageControl.showModal();\n  });\n  \n  newTodo.addEventListener('click', () => {\n    mainDialog.showModal();\n    pageControl.close();\n  });\n\n  createNewProject.addEventListener('click', () => {\n    projectDialog.showModal();\n    pageControl.close();\n  });\n\n  // \"Add Task\" button adds todo task.\n  addTaskButton.addEventListener(\"click\", () => {\n    const todoDescription = document.getElementById('todoDescription');\n    const taskDetailPriority = document.querySelector('.taskDetailPriority');\n    const priorityTask = document.querySelectorAll('input[name=\"priorityTask\"]');\n    const taskDetailText = document.querySelector('.taskDetailText');\n    const taskDetailTitle = document.querySelector('.taskDetailTitle');\n    const taskDetailDailog = document.querySelector('.taskDetailDailog');\n    const taskTitleDiv = document.createElement('div');\n    const taskElement = document.createElement('div');\n    const taskDescText = document.createElement('div');\n    const taskCheck = document.createElement('div');\n    const taskCheckInput = document.createElement('input');\n    const taskCheckLabel = document.createElement('label')\n    const taskDetailBtn = document.createElement('button');\n    const taskEdit = document.createElement('div');\n    const taskRemove = document.createElement('div');\n    const taskPriority = document.createElement('div');\n    const taskDate = document.createElement('div');\n\n    taskTitleDiv.className = \"taskTitleDiv\";\n    taskElement.className = \"taskElement\";\n    taskCheck.className = \"taskCheck\";\n    taskEdit.className = \"taskEdit\";\n    taskRemove.className = \"taskRemove\";\n    taskPriority.className = \"taskPriority\";\n    taskDate.className = \"taskDate\";\n    taskDetailBtn.className = \"taskDetailBtn\";\n    taskDescText.className = \"taskDescText\";\n\n    taskEdit.textContent = \"Edit Task\";\n    taskRemove.textContent = \"Delete Task\";\n    taskDate.textContent = \"Task Date\";\n    taskDetailBtn.textContent = \"Detail\";\n    taskElement.textContent = titleInput.value;\n    taskDetailTitle.textContent = titleInput.value;\n    taskDetailText.textContent = todoDescription.value;\n    taskDescText.textContent = todoDescription.value;\n    \n    const checkedPriorityTask = Array.from(priorityTask).find(task => task.checked);\n    taskPriority.textContent = checkedPriorityTask ? `${checkedPriorityTask.value}` : `You haven't selected any priority`;\n    taskDetailPriority.textContent = checkedPriorityTask ? `${checkedPriorityTask.value}` : `You haven't selected any priority`;\n    const taskInputId = Math.floor(Math.random() * 100);\n    \n    // Assigning the attributes to created checkbox\n    taskCheckInput.type = \"checkbox\";\n    taskCheckInput.name = \"taskCheckInput\";\n    taskCheckInput.id = `taskCheckInput${taskInputId}`;\n    taskCheckLabel.htmlFor = `taskCheckInput${taskInputId}`;\n\n    tasksContainer.appendChild(taskTitleDiv);\n    tasksContainer.appendChild(taskCheck);\n    taskTitleDiv.appendChild(taskElement);\n    taskTitleDiv.appendChild(taskCheckLabel);\n    taskTitleDiv.appendChild(taskCheckInput);\n    taskCheck.appendChild(taskDetailBtn);\n    taskCheck.appendChild(taskEdit);\n    taskCheck.appendChild(taskRemove);\n    taskCheck.appendChild(taskPriority);\n    taskCheck.appendChild(taskDate);\n\n    titleInput.value = \"\";\n    todoDescription.value = \"\";\n    mainDialog.close();\n\n    // Open and show the content on dialog for Main Pages.\n    taskDetailBtn.addEventListener('click', () => {\n      const currentTaskTitle = taskElement.textContent;\n      const currentTaskDescription = taskDescText.textContent;\n\n      taskDetailTitle.textContent = currentTaskTitle;\n      taskDetailText.textContent = currentTaskDescription;\n      taskDetailDailog.showModal();\n    });\n\n    // Closes the dialog for Main Pages.\n    const detailCloseBtn = document.querySelector('.detailCloseBtn');\n    detailCloseBtn.addEventListener('click', () => {\n      taskDetailDailog.close();\n    });\n    \n  });\n  \n  // const addBtn = document.querySelectorAll('.addbtn');\n  // addBtn.addEventListener('click', () => {\n  //   alert(\"something\");\n  // });\n\n  // Creates a new element and adds project Names For Side Bar.\n  newProjectBtn.addEventListener('click', () => {\n    const projectElement = document.createElement('div');\n    projectElement.className = 'newProjectPages';\n    projectElement.textContent = projectInput.value;\n    addProjectName.appendChild(projectElement);\n\n    projectInput.value = \"\";\n    projectDialog.close();\n    pageControlCreate();\n  });\n  \n  // Creates new Pages and adds html inside it.\n  newPageBtn.addEventListener('click', () => {\n    const taskDetailText = document.querySelector('.taskDetailText');\n    const taskDetailTitle = document.querySelector('.taskDetailTitle');\n    const pagesDescription = document.getElementById('pagesDescription');\n    const taskDetailDailog = document.querySelector('.taskDetailDailog');\n    const pageTaskDiv = document.querySelector('.pageTaskDiv');\n    const pageTaskPara = document.createElement('div');\n    const newElement = document.createElement('div');\n    const pageDescText = document.createElement('div');\n    const pageCheckInput = document.createElement('input');\n    const pageCheckLabel = document.createElement('label')\n    const pageCheck = document.createElement('div');\n    const pageDetailBtn = document.createElement('button');\n    const pagePriority = document.createElement('div');\n    const pageEdit = document.createElement('div');\n    const pageRemove = document.createElement('div');\n    const pageDate = document.createElement('div');\n\n    newElement.className = 'newElement';\n    pageCheck.className = \"pageCheck\";\n    pageEdit.className = \"pageEdit\";\n    pageRemove.className = \"pageRemove\";\n    pagePriority.className = \"pagePriority\";\n    pageDate.className = \"pageDate\";\n    pageTaskPara.className ='pageTaskPara';\n    pageDescText.className = 'pageDescText';\n    pageDetailBtn.className = 'pageDetailBtn';\n    pageCheckInput.className = 'page-CheckInput';\n\n    pageEdit.textContent = \"Edit Page\";\n    pageRemove.textContent = \"Delete Page\";\n    pagePriority.textContent = \"Page Priority\"\n    pageDate.textContent = \"Page Date\";\n    pageDetailBtn.textContent = \"Detail\";\n    newElement.textContent = pageTitle.value;\n    taskDetailTitle.textContent = pageTitle.value;\n    pageDescText.textContent = pagesDescription.value;\n    taskDetailText.textContent = pagesDescription.value;\n    \n    const taskDetailPriority = document.querySelector('.taskDetailPriority');\n    taskDetailPriority.textContent = checkedpriorityPage ? `${checkedpriorityPage.value}` : `You haven't selected any priority`;\n\n\n    const priorityPage = document.querySelectorAll('input[name=\"priorityPage\"]');\n    const checkedpriorityPage = Array.from(priorityPage).find(task => task.checked);\n    pagePriority.textContent = checkedpriorityPage ? `${checkedpriorityPage.value}` : `You haven't selected any priority`;\n    const pageInputId = Math.floor(Math.random() * 100);\n\n    // Assigning the attributes to created checkbox\n    pageCheckInput.type = \"checkbox\";\n    pageCheckInput.name = \"pageCheckInput\";\n    pageCheckInput.id = `pageCheckInput${pageInputId}`;\n    pageCheckLabel.htmlFor = `pageCheckInput${pageInputId}`;\n\n    pageTaskDiv.appendChild(pageTaskPara);\n    pageTaskDiv.appendChild(pageCheck);\n    pageTaskPara.appendChild(newElement);\n    pageTaskPara.appendChild(pageCheckLabel);\n    pageTaskPara.appendChild(pageCheckInput);\n    pageCheck.appendChild(pageDetailBtn);\n    pageCheck.appendChild(pagePriority);\n    pageCheck.appendChild(pageEdit);\n    pageCheck.appendChild(pageRemove);\n    pageCheck.appendChild(pageDate);\n\n    pageTitle.value = '';\n    pagesDescription.value = '';\n    pagesDialog.close();\n\n    // Open and show the content on dialog for Pages.\n    pageDetailBtn.addEventListener('click', () => {\n      const currentPageTitle = newElement.textContent;\n      const currentPageDescription = pageDescText.textContent;\n\n      taskDetailTitle.textContent = currentPageTitle;\n      taskDetailText.textContent = currentPageDescription;\n      taskDetailDailog.showModal();\n    });\n\n    // Close the dialog for Pages.\n    const detailCloseBtn = document.querySelector('.detailCloseBtn');\n    detailCloseBtn.addEventListener('click', () => {\n      taskDetailDailog.close();\n    });\n  });\n}\n\n// Changes the pages after removing them.\nconst pageControlCreate = () => {\n  const sideInbox = document.querySelector('.sideInbox');\n  const mainContainer = document.querySelector(\".mainContainer\");\n  const mainPage = document.querySelector(\".mainPage\");\n  const sidePages = document.querySelectorAll('.newProjectPages');\n  const sideNotes = document.querySelector('.sideNotes');\n\n  // To select sidebar Main Page.\n  sideInbox.addEventListener('click', () => {\n    clearTab();\n    mainContainer.prepend(mainPage);\n  });\n\n  // To select sidebar Today Tasks Page.\n  const sideToday = document.querySelector('.sideToday');\n  sideToday.addEventListener('click', () => {\n    clearTab();\n    (0,_today__WEBPACK_IMPORTED_MODULE_2__.today)();\n  });\n\n  const sideFuture = document.querySelector('.sideFuture');\n  sideFuture.addEventListener('click', () => {\n    clearTab();\n    (0,_upcoming__WEBPACK_IMPORTED_MODULE_3__.upComing)();\n  });\n\n  const completeSide = document.querySelector('.completeSide');\n  completeSide.addEventListener('click', () => {\n    clearTab();\n    (0,_complete_task__WEBPACK_IMPORTED_MODULE_4__.complete)();\n  });\n\n  // To select sidebar Project Pages.\n  sidePages.forEach(page => {\n    page.addEventListener(\"click\", () => {\n      clearTab();\n      (0,_project__WEBPACK_IMPORTED_MODULE_0__.projectPages)(page);\n    });\n  });\n\n  // To select sidebar Notes Page.\n  sideNotes.addEventListener(\"click\", () => {\n    clearTab();\n    (0,_notes__WEBPACK_IMPORTED_MODULE_1__.notesPages)();\n  });\n}\n\n// Removes the main page.\nfunction clearTab() {\n  const mainContainer = document.querySelector(\".mainContainer\");\n  const mainContent = document.getElementById(\"mainContent\");\n  if(mainContent) {\n    mainContainer.removeChild(mainContent);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/task-btn.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   today: () => (/* binding */ today)\n/* harmony export */ });\nconst today = () => {\n    const mainContainer = document.querySelector(\".mainContainer\");\n    const todayPage = document.createElement('div');\n    const todayTasksTitle = document.createElement('h2');\n\n    todayPage.classList.add('todayPage');\n    todayPage.setAttribute('id', 'mainContent');\n    todayTasksTitle.classList.add('todayTasksTitle');\n\n    todayTasksTitle.innerText = \"Today Tasks\";\n\n    mainContainer.prepend(todayPage);\n    todayPage.appendChild(todayTasksTitle);\n}\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

/***/ }),

/***/ "./src/todo-task-show.js":
/*!*******************************!*\
  !*** ./src/todo-task-show.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nlet todoArray = [];\n\nconst createTodo = (check, title, description, priority, date) => {\n    console.log({check, title, description, priority, date});\n    todoArray.push({check, title, description, priority, date});\n    console.log(todoArray);\n    return { check, title, description, priority, date };\n}\n\n//# sourceURL=webpack://todo-list/./src/todo-task-show.js?");

/***/ }),

/***/ "./src/upcoming.js":
/*!*************************!*\
  !*** ./src/upcoming.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   upComing: () => (/* binding */ upComing)\n/* harmony export */ });\nconst upComing = () => {\n    const mainContainer = document.querySelector(\".mainContainer\");\n    const futurePage = document.createElement('div');\n    const futureTitle = document.createElement('h2');\n\n    futurePage.classList.add('todayPage');\n    futurePage.setAttribute('id', 'mainContent');\n    futureTitle.classList.add('todayTasksTitle');\n\n    futureTitle.innerText = \"Future Tasks\";\n\n    mainContainer.prepend(futurePage);\n    futurePage.appendChild(futureTitle);\n}\n\n//# sourceURL=webpack://todo-list/./src/upcoming.js?");

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