import { add } from "date-fns";

export const dom = (function () {
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
        const todayPage = document.querySelector('.todayPage');
        if(todayPage) {
            todayPage.style.display = hideTodayPage ? 'inline' : 'none';
        }
    }

    const controllUpcomingPage = (hideUpcomingPage = true) => {
        const upcomingPage = document.querySelector('.upcomingPage');
        if(upcomingPage) {
            upcomingPage.style.display = hideUpcomingPage ? 'inline' : 'none';
        } 
    }

    const controllCompletePage = (hideCompletePage = true) => {
        const completePage = document.querySelector('.completePage');
        if(completePage) {
            completePage.style.display = hideCompletePage ? 'inline' : 'none';
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
        const todayPage = document.querySelector('.todayPage');
        const upcomingTasks = document.querySelector('.upcomingPage');
        const completeTasks = document.querySelector('.completePage');
        const projectPage = document.querySelector('.projectPage');
        const notesPage = document.querySelector('.notesPage');

        if (mainPage) { mainPage.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (todayPage) { todayPage.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (upcomingTasks) { upcomingTasks.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (completeTasks) { completeTasks.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (projectPage) { projectPage.style.display = hideInboxPages ? 'inline' : 'none'; }
        if (notesPage) { notesPage.style.display = hideInboxPages ? 'inline' : 'none'; }
    };
    
    const sidePageDivs = () => {
        const projectTtile = document.getElementById('projectTtile').value;
        const projectNames = document.querySelector('.projectNames');
        const newProjectPages = document.createElement('li');

        newProjectPages.className = "newProjectPages";

        newProjectPages.textContent = projectTtile;
        
        projectNames.appendChild(newProjectPages);
        
    };
    
    const hideProjectPages = () => {
        const projectDiv = document.querySelectorAll('.projectDiv');
        projectDiv.forEach(projectDivs => {
            projectDivs.style.display = 'none';
        });
    };

    const ProjectPageDom = (clickedElement) => {
        const projectTasksTitle = document.querySelector('.projectTasksTitle');
        const projectName = clickedElement.textContent;
        projectTasksTitle.textContent = projectName;

        let projectDiv = document.getElementById(projectName);
        if (!projectDiv) {
            const projectsTasksShow = document.querySelector('.projectsTasksShow');
            projectDiv = document.createElement('div');
            const projectBtn = document.createElement('button');
            const removeProject = document.createElement('button');


            projectDiv.id = projectName;
            projectDiv.className = 'projectDiv';
            projectBtn.className = 'projectBtn';
            removeProject.className = 'removeProject';

            projectBtn.textContent = "Create Task";
            removeProject.textContent = "Delete Project";

            projectsTasksShow.appendChild(projectDiv);
            projectDiv.appendChild(projectBtn);
            projectDiv.appendChild(removeProject);
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
        controllTodayPage,
        controllUpcomingPage,
        controllCompletePage,
        controllProjectPage,
        controllAllPages,
        ProjectPageDom,
        sidePageDivs,
        hideProjectPages,
        controllNotesPage,
    };
})();