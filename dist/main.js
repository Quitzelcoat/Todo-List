/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TodoManager.js":
/*!****************************!*\
  !*** ./src/TodoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoManager: () => (/* binding */ todoManager)
/* harmony export */ });
const todoManager = (function () {
    let todoArray = [];
    let todoCounter = 1;

    // Function to save projects (and todos) to localStorage
    const saveLocalStorageTasks = () => {
        localStorage.setItem('todo', JSON.stringify(todoArray));
    };

    const loadTodoLocalStorage = () => {
        const TasksData = localStorage.getItem('todo');
        if (TasksData) {
            todoArray.push(...JSON.parse(TasksData));
        }
    };

    const createTodo = (finished, title, description, priority, date, project) => {
        const existingTodo = todoArray.find(todo => todo.title === title && todo.project === project);
        if (existingTodo) {
            console.log(`A todo with the title "${title}" already exists in the project "${project}".`);
            return null;
        }

        const todo = { id: todoCounter++, finished, title, description, priority, date, project };
        todoArray.push(todo);

        saveLocalStorageTasks();

        return todo;
    }

    const findTodosByProject = (project) => {
        return todoArray.filter(todo => todo.project === project);
    };

    const editTodo = (id, newData) => {
        const todoIndex = todoArray.findIndex(todo => todo.id.toString() === id);
        if (todoIndex !== -1) {
            todoArray[todoIndex] = { ...todoArray[todoIndex], ...newData };
            
            saveLocalStorageTasks();
            
            return todoArray[todoIndex];
        } else {
            console.log(`Todo with ID "${id}" not found.`);
            return null;
        }
    };

    const deleteTodo = (id) => {
        const todoIndex = todoArray.findIndex(todo => todo.id.toString() === id);
        if (todoIndex !== -1) {
            const deletedTodo = todoArray.splice(todoIndex, 1);

            saveLocalStorageTasks();

            return deletedTodo;
        } else {
            console.log(`Todo with ID "${id}" not found.`);
            return null;
        }
    };

    return {
        todoArray,
        loadTodoLocalStorage,
        createTodo,
        findTodosByProject,
        editTodo,
        deleteTodo,
    };
})();


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dom: () => (/* binding */ dom)
/* harmony export */ });


const dom = (function () {
    const taskDetailDailog = document.querySelector('.taskDetailDailog');
    const todoTypesDialog = document.querySelector('.todoTypesDialog');
    const projectDialog = document.querySelector('.projectDialog');
    const mainDialog = document.querySelector('.mainDialog');
    const pagesDialog = document.querySelector('.pagesDialog');

    const createTodoElement = (task) => {
        const elements = ['titleTask', 'descriptionTask', 'priorityTask', 'dateTask'];
        const buttons = ['detailTaskBtn', 'editTaskBtn', 'editProjectBtn', 'deleteTaskBtn', 'deleteProjectTasks'];
    
        const showTask = document.createElement('div');
        showTask.className = "showTask";
        showTask.dataset.id = task.id;

        const finishedCheckbox = document.createElement('input');
        finishedCheckbox.type = "checkbox";
        finishedCheckbox.className = "finishedTask";
        finishedCheckbox.checked = task.finished;
        showTask.appendChild(finishedCheckbox);
    
        elements.forEach(element => {
            const div = document.createElement('div');
            div.className = element;
            div.textContent = task[element.replace('Task', '').toLowerCase()];
            showTask.appendChild(div);
        });
    
        buttons.forEach(button => {
            const btn = document.createElement('button');
            btn.className = button;
            btn.textContent = (button === 'editProjectBtn') ? 'Edit Project' : (button === 'detailTaskBtn' ? 'Task Detail' : button.replace('TaskBtn', ''));
            showTask.appendChild(btn);
        });
    
        return showTask;
    };

    // Function to render tasks onto the page
    const renderTodos = (tasks, container) => {
        tasks.forEach(task => {
            const showTask = createTodoElement(task);
            container.appendChild(showTask);
        });
    };

    const chooseTaskBtnDailog = () => todoTypesDialog.showModal();
    const closeTaskBtnDailog = () => todoTypesDialog.close();
    const showTaskCreateDailog = () => mainDialog.showModal();
    const closeTaskCreateDailog = () => mainDialog.close();

    const showTaskPageDailog = () => pagesDialog.showModal();
    const closeTaskPageDailog = () => pagesDialog.close();

    const showDetailDailog = () => taskDetailDailog.showModal();
    const closeDetailDailog = () => taskDetailDailog.close();
    const showProjectPages = () => projectDialog.showModal();
    const closeProjectPages = () => projectDialog.close();
    const showEditTask = () => { if(mainDialog) {mainDialog.showModal();} };
    const closeEditTask = () => { if(mainDialog) {mainDialog.close();} };
    
    const populateDetailDailog = (title, description, priority, date) => {

        const taskDetailTitle = document.querySelector('.taskDetailTitle');
        const taskDetailText = document.querySelector('.taskDetailText');
        const taskDetailPriority = document.querySelector('.taskDetailPriority');
        const taskDetailDate = document.querySelector('.taskDetailDate');

        taskDetailTitle.textContent = title;
        taskDetailText.textContent = description;
        taskDetailPriority.textContent = priority;
        taskDetailDate.textContent = date;

    };

    const gettingTaskData = (button) => {
        const showTask = button.closest('.showTask');
        if (showTask) {
            const taskId = showTask.dataset.id;
            return {
                taskId: taskId,
                title: showTask.querySelector('.titleTask').textContent,
                description: showTask.querySelector('.descriptionTask').textContent,
                priority: showTask.querySelector('.priorityTask').textContent,
                date: showTask.querySelector('.dateTask').textContent,
            };
        } else {
            console.error('No parent task found for the clicked button');
            return null;
        }
    };

    const showAddTaskForm = () => {
        const showTask = document.querySelector('.showTask');
        showTask.style.display = 'block';
    };

    const hideAddTaskForm = () => {
        const showTask = document.querySelector('.showTask');
        showTask.style.display = 'none';
    };

    const hideEditTaskBtn = () => {
        const editProjectBtn = document.querySelectorAll('.editProjectBtn');
        editProjectBtn.forEach(editProjectBtns => {
            editProjectBtns.style.display = 'none';
        });
    };

    const hideEditProjectBtn = () => {
        const editTaskBtn = document.querySelectorAll('.editTaskBtn');
        editTaskBtn.forEach(editTaskBtns => {
            editTaskBtns.style.display = 'none';
        });
    };

    const hideDeleteTaskBtn = () => {
        const deleteProjectTasks = document.querySelectorAll('.deleteProjectTasks');
        deleteProjectTasks.forEach(deleteProjectTask => {
            deleteProjectTask.style.display = 'none';
        });
    };

    const hideDeleteProjectBtn = () => {
        const deleteTaskBtn = document.querySelectorAll('.deleteTaskBtn');
        deleteTaskBtn.forEach(deleteTaskBtns => {
            deleteTaskBtns.style.display = 'none';
        });
    };

    const getAllFormData = (dialogClass, titleId, descriptionId, priorityClass, dateId) => {
        const dialog = document.querySelector(dialogClass);
        const title = document.getElementById(titleId).value;
        const description = document.getElementById(descriptionId).value;
        const priority = document.querySelectorAll(priorityClass);
        const checkedPriorityTask = Array.from(priority).find(task => task.checked);
        const date = document.getElementById(dateId).value;
    
        const selectedPriority = checkedPriorityTask ? checkedPriorityTask.value : "You haven't selected any priority";
    
        return {
            title: title,
            description: description,
            priority: selectedPriority,
            date: date,
        };
    };

    const getFormData = (dialogClass) => {
        return getAllFormData(dialogClass, 'todoTitle', 'todoDescription', '.priorityTask', 'todoTaskDate');
    };
    
    const getPagesFormData = (dialogClass) => {
        return getAllFormData(dialogClass, 'todoPagesTitle', 'todoPagesDescription', '.priorityPageTask', 'todoPagesDate');
    };


    const showTaskForm = (showCreateButton = true) => {
        const createTaskBtn = document.querySelector('.addBtn');
        const newPageBtn = document.querySelector('.newPageBtn');

        if (createTaskBtn) {
            createTaskBtn.style.display = showCreateButton ? 'inline' : 'none';
        }

        if(newPageBtn) {
            newPageBtn.style.display = showCreateButton ? 'inline' : 'none';
        }
    };

    const removeEditBtn = (closeEditBtn = true) => {
        const updateBtn = document.querySelector('.updateBtn');
        const updateProjectTask = document.querySelector('.updateProjectTask');
        
        if(updateBtn) {
            updateBtn.style.display = closeEditBtn ? 'inline' : 'none';
        }
        
        if(updateProjectTask) {
            updateProjectTask.style.display = closeEditBtn ? 'inline' : 'none';
        }
    };

    const populateMainDetailDailogForm = (title, description, priority, date) => {
        const todoTitle = document.getElementById('todoTitle');
        const todoDescription = document.getElementById('todoDescription');
        const priorityTask = document.querySelectorAll('.priorityTask');
        const todoTaskDate = document.getElementById('todoTaskDate');
        
        todoTitle.value = title;
        todoDescription.value = description;
        const checkedPriorityTask = Array.from(priorityTask).find(task => task.value === priority);
        if (checkedPriorityTask) {
            checkedPriorityTask.checked = true;
        }
        todoTaskDate.value = date;
    };

    const updateTaskDetails = (taskId, updateTitle, updateDescription, updatePriority, updateDate) => {
        // Construct the selector based on the taskId
        const taskElement = document.querySelector(`.showTask[data-id="${taskId}"]`);
    
        if (taskElement) {
            const titleElement = taskElement.querySelector('.titleTask');
            if (titleElement) {
                titleElement.textContent = updateTitle;
            }

            const descriptionElement = taskElement.querySelector('.descriptionTask');
            if (descriptionElement) {
                descriptionElement.textContent = updateDescription;
            }

            const priorityElement = taskElement.querySelector('.priorityTask');
            if (priorityElement) {
                priorityElement.textContent = updatePriority;
            }

            const dateElement = taskElement.querySelector('.dateTask');
            if (dateElement) {
                dateElement.textContent = updateDate;
            }
        } else {
            console.log("Task element not found.");
        }
    };

    const deleteTaskDetail = (taskId, containerSelector) => {
        const container = document.querySelector(containerSelector);
        const taskElement = document.querySelector(`.showTask[data-id="${taskId}"]`);
        container.removeChild(taskElement);
    };

    const clearFormData = (titleId, descriptionId, priorityClass, dateId) => {
        document.getElementById(titleId).value = '';
        document.getElementById(descriptionId).value = '';
        const priorityTasks = document.querySelectorAll(priorityClass);
        priorityTasks.forEach(task => task.checked = false);
        document.getElementById(dateId).value = '';
    };
    
    const clearDailogData = () => {
        clearFormData('todoTitle', 'todoDescription', '.priorityTask', 'todoTaskDate');
    };
    
    const clearPagesData = () => {
        clearFormData('todoPagesTitle', 'todoPagesDescription', '.priorityPageTask', 'todoPagesDate');
    };

    const controllMainPage = (hideMainPage = true) => {
        const mainPage = document.querySelector('.mainPage');
        if(mainPage) {
            mainPage.style.display = hideMainPage ? 'inline' : 'none';
        }
    }

    const controllTodayPage = (hideTodayPage = true) => {
        const todayTasks = document.querySelector('.todayTasks');
        if(todayTasks) {
            todayTasks.style.display = hideTodayPage ? 'inline' : 'none';
        }
    }

    const controllUpcomingPage = (hideUpcomingPage = true) => {
        const upcomingTasks = document.querySelector('.upcomingTasks');
        if(upcomingTasks) {
            upcomingTasks.style.display = hideUpcomingPage ? 'inline' : 'none';
        } 
    }

    const controllAllTasksPage = (hideAllTaskPage = true) => {
        const allTasks = document.querySelector('.allTasks');
        if(allTasks) {
            allTasks.style.display = hideAllTaskPage ? 'inline' : 'none';
        }
    }

    const controllProjectPage = (controllProjectPages = true) => {
        const projectPage = document.querySelector('.projectPage');
        if(projectPage) {
            projectPage.style.display = controllProjectPages ? 'inline' : 'none';
        }
    }

    const controllAllPages = (hideInboxPages = true) => {
        const mainPage = document.querySelector('.mainPage');
        const todayTasks = document.querySelector('.todayTasks');
        const upcomingTasks = document.querySelector('.upcomingTasks');
        const allTasks = document.querySelector('.allTasks');
        const projectPage = document.querySelector('.projectPage');

        if (mainPage) { mainPage.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (todayTasks) { todayTasks.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (upcomingTasks) { upcomingTasks.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (allTasks) { allTasks.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (projectPage) { projectPage.style.display = hideInboxPages ? 'inline' : 'none'; }
    };
    
    const sidePageDivs = (projectTitle) => {
        if (!projectTitle) {
            projectTitle = document.getElementById('projectTitle').value;
        }

        const projectNames = document.querySelector('.projectNames');
        const newProjectPages = document.createElement('li');

        newProjectPages.className = "newProjectPages";
        newProjectPages.textContent = projectTitle;
        
        projectNames.appendChild(newProjectPages);

    };
    
    const hideProjectPages = () => {
        const projectDiv = document.querySelectorAll('.projectDiv');
        projectDiv.forEach(projectDivs => {
            projectDivs.style.display = 'none';
        });
    };


    const projectTasksDom = (projectName) => {
        const projectsTasksShow = document.querySelector('.projectsTasksShow');
        const projectDiv = document.createElement('div');
        const projectBtn = document.createElement('button');
        const removeProject = document.createElement('button');

        projectDiv.id = projectName;
        projectDiv.className = 'projectDiv';
        projectBtn.className = 'projectBtn';
        removeProject.className = 'removeProject';

        projectDiv.setAttribute('data-project-name', projectName);

        projectBtn.textContent = "Create Task";
        removeProject.textContent = "Delete Project";

        projectsTasksShow.appendChild(projectDiv);
        projectDiv.appendChild(projectBtn);
        projectDiv.appendChild(removeProject);
    }



    const ProjectPageDom = (clickedElement) => {
        const projectTasksTitle = document.querySelector('.projectTasksTitle');
        const projectName = clickedElement.textContent;
        projectTasksTitle.textContent = projectName;

        let projectDiv = document.getElementById(projectName);
        if (!projectDiv) {
            projectTasksDom(projectName);
        }
    
        const selectedProjectDiv = document.querySelectorAll(`#${projectName}`);
        selectedProjectDiv.forEach(selectedProjectDivs => {
            selectedProjectDivs.style.display = 'inline';
        });

        return projectName;
    };


    const controllNotesPage = (hideNotesPages = true) => {
        const notesPage = document.querySelector('.notesPage');
        if(notesPage) {
            notesPage.style.display = hideNotesPages ? 'inline' : 'none';
        }
    }

    return {
        renderTodos,
        chooseTaskBtnDailog,
        closeTaskBtnDailog,
        showTaskCreateDailog,
        closeTaskCreateDailog,
        showTaskPageDailog,
        closeTaskPageDailog,
        showDetailDailog,
        closeDetailDailog,
        showProjectPages,
        closeProjectPages,
        populateDetailDailog,
        gettingTaskData,
        showAddTaskForm,
        hideAddTaskForm,
        hideEditTaskBtn,
        hideEditProjectBtn,
        hideDeleteTaskBtn,
        hideDeleteProjectBtn,
        getFormData,
        getPagesFormData,
        showTaskForm,
        showEditTask,
        removeEditBtn,
        closeEditTask,
        populateMainDetailDailogForm,
        updateTaskDetails,
        deleteTaskDetail,
        clearDailogData,
        clearPagesData,
        controllMainPage,
        controllAllTasksPage,
        controllTodayPage,
        controllUpcomingPage,
        controllProjectPage,
        controllAllPages,
        projectTasksDom,
        ProjectPageDom,
        sidePageDivs,
        hideProjectPages,
        controllNotesPage,
    };
})();

/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
const projectManager = (function () {
    let projectsArray = [];
    let projectCounter = 1;

    // Function to save projects (and todos) to localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    };

    const loadFromLocalStorage = () => {
        const projectData = localStorage.getItem('projects');
        if (projectData) {
            const parsedProjects = JSON.parse(projectData);
            projectsArray.push(...JSON.parse(projectData));
            return parsedProjects;

        }
    };

    // store created project tasks
    const createProjectTasks = (finished, title, description, priority, date, projectName) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
    
        const existingTask = project.tasks.find(task => task.title === title);
        if (existingTask) {
            console.log(`A task with the title "${title}" already exists in the project "${projectName}".`);
            return null;
        }
    
        const newTask = { id: projectCounter++, finished, title, description, priority, date, project: projectName };
        project.tasks.push(newTask);
        console.log("Updated projectsArray:", projectsArray);

        saveToLocalStorage();

        return newTask;
    };

    // store created project pages
    const createProject = (name) => {
        const existingProject = projectsArray.find(project => project.name === name);
        if (existingProject) {
            console.log(`A project with the name "${name}" already exists.`);
            return null;
        }
        const newProject = {
            name,
            tasks: [],
            pages: []
        };
        projectsArray.push(newProject);

        saveToLocalStorage();

        return newProject;
    };

    // get project created names.
    const findProjectByName = (name) => {
        return projectsArray.find(project => project.name === name);
    };

    // edit project tasks
    const editProjectTask = (id, projectName, newData) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
        
        const taskIndex = project.tasks.findIndex(task => task.id.toString() === id);
        if (taskIndex === -1) {
            console.log(`Task with ID "${id}" not found in project "${projectName}".`);
            console.log("Type of Id is:", typeof id);
            return null;
        }
        
        console.log("Current task:", { ...project.tasks[taskIndex] });
        const updatedTask = {
            ...project.tasks[taskIndex],
            ...newData
        };
        project.tasks[taskIndex] = updatedTask;
        
        console.log("Updated project tasks:", project.tasks);

        saveToLocalStorage();

        return updatedTask;
    };

    // Delete projectsArray.
    const deleteProject = (name) => {
        const projectIndex = projectsArray.findIndex(project => project.name === name);
        if (projectIndex !== -1) {
            const deletedProject = projectsArray.splice(projectIndex, 1);

            saveToLocalStorage();

            return deletedProject[0];
        } else {
            console.log(`Project "${name}" not found.`);
            return null;
        }
    };

    // Delete project Tasks
    const deleteTask = (id, projectName) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
        const taskIndex = project.tasks.findIndex(task => task.id.toString() === id);
        if (taskIndex !== -1) {
            const deletedTask = project.tasks.splice(taskIndex, 1);

            saveToLocalStorage();

            return deletedTask;
        }
    };

    return {
        projectsArray,
        saveToLocalStorage,
        loadFromLocalStorage,
        createProjectTasks,
        createProject,
        findProjectByName,
        editProjectTask,
        deleteProject,
        deleteTask,
    };
})();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPage.js */ "./src/projectPage.js");
/* harmony import */ var _TodoManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoManager */ "./src/TodoManager.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




// dom file
const newTaskBtn = document.querySelectorAll('.newTaskBtn');
newTaskBtn.forEach(newTaskBtns => {
    newTaskBtns.addEventListener('click', () => {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.chooseTaskBtnDailog()
    });
});

const newTodo = document.querySelectorAll('.newTodo');
newTodo.forEach(newTodos => {
    newTodos.addEventListener('click', () => {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskForm();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.removeEditBtn(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskCreateDailog();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeTaskBtnDailog();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.clearDailogData();
    });
});

const inboxTaskdata = () => {
    const formData = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.getFormData('.mainDialog');
    const newTodoElement = {
        finished: false,
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        date: formData.date
    };

    const storedTodo = _TodoManager__WEBPACK_IMPORTED_MODULE_1__.todoManager.createTodo(
        newTodoElement.finished,
        newTodoElement.title,
        newTodoElement.description,
        newTodoElement.priority,
        newTodoElement.date
    );

    if (storedTodo) {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.renderTodos([storedTodo], document.querySelector('.mainShow'));
    }
};

const addNewTask = document.querySelector('.addBtn');
addNewTask.addEventListener('click', () => {

    inboxTaskdata();
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.hideEditTaskBtn()
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.hideDeleteTaskBtn();
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.clearDailogData();
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeTaskCreateDailog();
});

let selectedTaskId = null;

const handleTaskButtons = (event, containerSelector) => {
    if (event.target.classList.contains('detailTaskBtn')) {
        const taskData = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.gettingTaskData(event.target);
        if (taskData) {
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showDetailDailog();
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.populateDetailDailog(taskData.title, taskData.description, taskData.priority, taskData.date);
        }
    }

    const editData = (captureData, titleId, descriptionId, priorityValue, dateId) => {
        document.getElementById(titleId).value = captureData.title;
        document.getElementById(descriptionId).value = captureData.description;
        const priorityRadio = document.querySelector(`input[value="${captureData.priority}"]`);
        if (priorityRadio) {
            priorityRadio.checked = true;
        }
        document.getElementById(dateId).value = captureData.date;
    }
    
    // Adding event listener for the edit button of each task
    const clickedElement = event.target;
    if (clickedElement.classList.contains('editTaskBtn')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;
        const captureData = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.gettingTaskData(event.target);
        if (captureData) {
            editData(captureData, 'todoTitle', 'todoDescription', captureData.priority, 'todoTaskDate');
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskForm(false);
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showEditTask();
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.removeEditBtn(true);
        }
    }
    
    if (clickedElement.classList.contains('editProjectBtn')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;
        const captureData = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.gettingTaskData(event.target);
        if (captureData) {
            editData(captureData, 'todoPagesTitle', 'todoPagesDescription', captureData.priority, 'todoPagesDate');
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.removeEditBtn(true);
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskForm(false);
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskPageDailog();
        }
    }

    if(clickedElement.classList.contains('deleteTaskBtn')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;

        _TodoManager__WEBPACK_IMPORTED_MODULE_1__.todoManager.deleteTodo(selectedTaskId);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.deleteTaskDetail(selectedTaskId, containerSelector);
    }

    if(clickedElement.classList.contains('deleteProjectTasks')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;

        _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.deleteTask(selectedTaskId, selectedProjectName);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.deleteTaskDetail(selectedTaskId, containerSelector);
    }
}

// Function to handle task completion for both mainShow and projectsTasksShow
const handleTaskCompletion = (clickedElement) => {
    if (clickedElement.classList.contains('finishedTask')) {
        const isChecked = clickedElement.checked;
        const taskContainer = clickedElement.closest('.showTask');
        if (isChecked) {
            taskContainer.classList.add('finished');
            console.log("Task is finished");
        } else {
            taskContainer.classList.remove('finished');
            console.log("Task is not finished");
        }
    }
};

const mainShow = document.querySelector('.mainShow');
mainShow.addEventListener('click', (event) => {
    
    const clickedElement = event.target;
    handleTaskCompletion(clickedElement);

    handleTaskButtons(event, '.mainShow');
});

const changeTaskDetail = () => {
    const taskValue = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.getFormData('.mainDialog');
    console.log(taskValue);

    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.updateTaskDetails(
        selectedTaskId,
        taskValue.title,
        taskValue.description,
        taskValue.priority,
        taskValue.date
    );

    const updatedData = {
        title: taskValue.title,
        description: taskValue.description,
        priority: taskValue.priority,
        date: taskValue.date
    };

    const updatedTodo = _TodoManager__WEBPACK_IMPORTED_MODULE_1__.todoManager.editTodo(selectedTaskId, updatedData);
    if (!updatedTodo) {
        console.log("Todo item not updated successfully");
        return;
    }
}

const updateBtn = document.querySelector('.updateBtn');
updateBtn.addEventListener('click', () => {

    changeTaskDetail();

    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeEditTask();

});

const detailCloseBtn = document.querySelectorAll('.detailCloseBtn');
detailCloseBtn.forEach(detailCloseBtns => {
    detailCloseBtns.addEventListener('click', () => _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeDetailDailog());
});

const sideInbox = document.querySelectorAll('.sideInbox');
sideInbox.forEach(sideInboxs => {
    sideInboxs.addEventListener('click', () => {        
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllAllPages(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllMainPage(true);
    });
});

const sideToday = document.querySelectorAll('.sideToday');
sideToday.forEach(sideTodays => {
    sideTodays.addEventListener('click', () => {        
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllAllPages(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllTodayPage(true);
    });
});

const sideUpcoming = document.querySelectorAll('.sideUpcoming');
sideUpcoming.forEach(sideUpcomings => {
    sideUpcomings.addEventListener('click', () => {        
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllAllPages(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllUpcomingPage(true);
    });
});

const sideAllTasks = document.querySelectorAll('.sideAllTasks');
sideAllTasks.forEach(sideAllTaskss => {
    sideAllTaskss.addEventListener('click', () => {        
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllAllPages(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllAllTasksPage(true);
    });
});

const createNewProject = document.querySelectorAll('.createNewProject');
createNewProject.forEach(createNewProjects => {
    createNewProjects.addEventListener('click', () => {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showProjectPages();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeTaskBtnDailog();
    });
});

const newProjectBtn = document.querySelectorAll('.newProjectBtn');
newProjectBtn.forEach(newProjectBtns => {
    newProjectBtns.addEventListener('click', () => {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.sidePageDivs();
        document.getElementById('projectTitle').value = '';
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeProjectPages();
    });
});

// select the page by the project page name for task
let selectedProjectName = "";
const projectPagesData = (clickedElement) => {
    const pageFormData = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.ProjectPageDom(clickedElement);

    const pageData = {
        title: pageFormData,
        // PageTasks: 
    };

    const projectName = clickedElement.innerText;
    const project = _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.findProjectByName(projectName) || _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.createProject(projectName);
    const existingPage = project.pages.find(page => page.title === pageData.title);
    if (!existingPage) {
        project.pages.push(pageData);
        console.log("Project:", project);
    } else {
        console.log("Page data already exists in the project:", project);
    }
};

const projectNames = document.querySelector('.projectNames');
projectNames.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('newProjectPages')) {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllAllPages(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.controllProjectPage(true);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.hideProjectPages();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.ProjectPageDom(clickedElement);
        selectedProjectName = clickedElement.innerText;
        projectPagesData(clickedElement);
    }
});

const projectsTasksShow = document.querySelector('.projectsTasksShow');
projectsTasksShow.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('projectBtn')) {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskPageDailog();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.showTaskForm(true);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.removeEditBtn(false);
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.clearPagesData();
    }
});

const loadAndRenderTasks = () => {
    _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.loadFromLocalStorage();
    _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.projectsArray.forEach(project => {

        let projectDiv = document.querySelector(`[data-project-name="${project.name}"]`);

        if (!projectDiv) {
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.sidePageDivs(project.name);
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.projectTasksDom(project.name);

            projectDiv = document.querySelector(`[data-project-name="${project.name}"]`);
        }

        if (projectDiv) {
            _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.renderTodos(project.tasks, projectDiv);
        } else {
            console.log(`Project container not found for project: ${project.name}`);
        }
    });
};

// Call loadAndRenderTasks when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadAndRenderTasks();
});

const pageTaskdata = () => {

    const formData = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.getPagesFormData('.pagesDialog');
    const newTodoElement = {
        finished: false,
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        date: formData.date
    };

    const storedTask = _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.createProjectTasks(
        newTodoElement.finished,
        newTodoElement.title,
        newTodoElement.description,
        newTodoElement.priority,
        newTodoElement.date,
        selectedProjectName
    );

    console.log("Selected task ID:", selectedTaskId);
    console.log("Selected project name:", selectedProjectName);
    console.log("Stored Task:", storedTask);

    if (storedTask) {
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.renderTodos([storedTask], document.getElementById(selectedProjectName));
    }
};

const newPageBtn = document.querySelectorAll('.newPageBtn');
newPageBtn.forEach(newPageBtns => {
    newPageBtns.addEventListener('click', () => {
        pageTaskdata();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.hideDeleteProjectBtn();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.hideEditProjectBtn();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.clearPagesData();
        _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeTaskPageDailog();
    });
});

const changeProjectDetail = () => {
    const taskValue = _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.getPagesFormData('.pagesDialog');
    console.log(taskValue);

    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.updateTaskDetails(
        selectedTaskId,
        taskValue.title,
        taskValue.description,
        taskValue.priority,
        taskValue.date
    );

    const updatedData = {
        title: taskValue.title,
        description: taskValue.description,
        priority: taskValue.priority,
        date: taskValue.date
    };

    const updatedProjectTask = _projectPage_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.editProjectTask(selectedTaskId, selectedProjectName, updatedData);
    if (!updatedProjectTask) {
        console.log("Project task not updated successfully");
        return;
    }
}

const updateProjectTask = document.querySelector('.updateProjectTask');
updateProjectTask.addEventListener('click', () => {

    changeProjectDetail();
    _dom_js__WEBPACK_IMPORTED_MODULE_2__.dom.closeTaskPageDailog();

});

const projectDivs = document.querySelector('.projectsTasksShow');
projectDivs.addEventListener('click', (event) => {

    const clickedElement = event.target;
    handleTaskCompletion(clickedElement);

    handleTaskButtons(event, `#${selectedProjectName}`);
});

/*
1. function to create a todo list. (Done).
2. function to create a new project. (Done).
DOM MINIPULATION:

    1.  nav and basic layout.(Done).
    2.  new task button and a dialogue show when clicked. And closed when submit.(Done).
    3.  Dialogue basic edit when input data, display on screen.(Done).
    4.  Create all the pages (projects, notes etc). Notes are seperate work in the end after 
        todo.(Done).
    5.  Also make sure in the side bar for the new project when selected inside dialog only 
        ask for the title to create a field/div for that project. (Done).
    6.  When select that project create a new page for that project, And inside the
        that page, we can create todo's of that project.(Done).
    7.  Create Today, completedTasks and upComming pages.(Done).
    8.  Add other functions needed inside dialogue. (e.g., priority, description, calander).(Done)
    9.  Add (check), (edit), (delete), (priority), date(div), (Description) etc inside todo tasks.(Done).
    10. Create a detail button for each task which will show a dailog with all the details
        of title, description(it will not show on task only in detail dialog), priority,
        Date etc. (Only create, functionality in next).(Done).
    11. Make the Dailog and Detail functions work (description, Title) (priority next).
        inside the todo tasks.(edit, delete, check, date later in the next task).(Done).
    12. Create priority sections, when click show the priority on todo and on detail dialog.(Done).
    13. Make the edit, (delete) functions work for the tasks (Check later). (Done).
        a. when click on the btn should show the dialog.(Done).
        b. store the data of the task inside an object and push it inside an array when taskEdit btn is clicked.(Done)
        c. Access the data from the array inside the dialog when click on editBtn.(Done)
        d. And when the add btn is clicked push the edit data from the dialog and update the task.(Done)
    14. Make the calander working so it shows the date selected on the task and inside the description. (Done)
    15. Make the check work. (Done)

    15. Make the data Storage for it working.

    16. Now Put todo's tasks of Inbox and project pages in the all tasks when created.
    17. Do the remaining css and other stuff.
    18. Make the date work that if date is today's it will go to today, all Tasks and where task is created.

*/
})();

/******/ })()
;
//# sourceMappingURL=main.js.map