import { add } from "date-fns";

export const dom = (function () {
    const taskDetailDailog = document.querySelector('.taskDetailDailog');
    const todoTypesDialog = document.querySelector('.todoTypesDialog');
    const projectDialog = document.querySelector('.projectDialog');
    const mainDialog = document.querySelector('.mainDialog');

    const createTodoElement = (task) => {
        const showTask = document.createElement('div');
        const finishedTask = document.createElement('div');
        const titleTask = document.createElement('div');
        const descriptionTask = document.createElement('div');
        const priorityTask = document.createElement('div');
        const dateTask = document.createElement('div');
        const detailTaskBtn = document.createElement('button');
        const editTaskBtn = document.createElement('button');
        const deleteTaskBtn = document.createElement('button');
    
        showTask.className = "showTask";
        showTask.dataset.id = task.id;
        finishedTask.className = "finishedTask";
        titleTask.className = "titleTask";
        descriptionTask.className = "descriptionTask";
        priorityTask.className = "priorityTask";
        dateTask.className = "dateTask";
        detailTaskBtn.className = "detailTaskBtn";
        editTaskBtn.className = "editTaskBtn";
        deleteTaskBtn.className = "deleteTaskBtn";
    
        finishedTask.textContent = task.finished;
        titleTask.textContent = task.title;
        descriptionTask.textContent = task.description;
        priorityTask.textContent = task.priority;
        dateTask.textContent = task.date;
        detailTaskBtn.textContent = "Task Detail";
        editTaskBtn.textContent = "Edit";
        deleteTaskBtn.textContent = "Delete";
    
        showTask.appendChild(finishedTask);
        showTask.appendChild(titleTask);
        showTask.appendChild(descriptionTask);
        showTask.appendChild(priorityTask);
        showTask.appendChild(dateTask);
        showTask.appendChild(detailTaskBtn);
        showTask.appendChild(editTaskBtn);
        showTask.appendChild(deleteTaskBtn);
    
        return showTask;
    };
    
    const renderTodos = (tasks) => {
        const mainShow = document.querySelector('.mainShow');
        tasks.forEach(task => {
            const showTask = createTodoElement(task);
            mainShow.appendChild(showTask);
        });
    };

    const chooseTaskBtnDailog = () => todoTypesDialog.showModal();
    const closeTaskBtnDailog = () => todoTypesDialog.close();
    const showTaskCreateDailog = () => mainDialog.showModal();
    const closeTaskCreateDailog = () => mainDialog.close();
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

    const getFormData = () => {
        const title = document.getElementById('todoTitle').value;
        const description = document.getElementById('todoDescription').value;
        const priority = document.querySelectorAll('.priorityTask');
        const checkedPriorityTask = Array.from(priority).find(task => task.checked);
        const date = document.getElementById('todoTaskDate').value;
    
        const selectedPriority = checkedPriorityTask ? checkedPriorityTask.value : "You haven't selected any priority";
    
        return {
            title: title,
            description: description,
            priority: selectedPriority,
            date: date,
        };
    };

    const showTaskForm = (showCreateButton = true) => {
        const createTaskBtn = document.querySelector('.addBtn');
        if (createTaskBtn) {
            createTaskBtn.style.display = showCreateButton ? 'inline' : 'none';
        }
    };

    const removeEditBtn = (closeEditBtn = true) => {
        const updateBtn = document.querySelector('.updateBtn');
        if(updateBtn) {
            updateBtn.style.display = closeEditBtn ? 'inline' : 'none';
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
        } else {
            console.error('Invalid priority:', priority);
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
            console.log("Description element:", descriptionElement);
            if (descriptionElement) {
                descriptionElement.textContent = updateDescription;
            }

            const priorityElement = taskElement.querySelector('.priorityTask');
            console.log("Priority element:", priorityElement);
            if (priorityElement) {
                priorityElement.textContent = updatePriority;
            }

            const dateElement = taskElement.querySelector('.dateTask');
            console.log("Date element:", dateElement);
            if (dateElement) {
                dateElement.textContent = updateDate;
            }
        } else {
            console.log("Task element not found.");
        }
    };

    const deleteTaskDetail = (taskId) => {
        const mainShow = document.querySelector('.mainShow');
        const taskElement = document.querySelector(`.showTask[data-id="${taskId}"]`);
        mainShow.removeChild(taskElement);
    };

    const clearDailogData = () => {
        document.getElementById('todoTitle').value = '';
        document.getElementById('todoDescription').value = '';
        const priorityTasks = document.querySelectorAll('.priorityTask');
        priorityTasks.forEach(task => task.checked = false);
        document.getElementById('todoTaskDate').value = '';
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
        showDetailDailog,
        closeDetailDailog,
        showProjectPages,
        closeProjectPages,
        populateDetailDailog,
        gettingTaskData,
        showAddTaskForm,
        hideAddTaskForm,
        getFormData,
        showTaskForm,
        showEditTask,
        removeEditBtn,
        closeEditTask,
        populateMainDetailDailogForm,
        updateTaskDetails,
        deleteTaskDetail,
        clearDailogData,
        controllMainPage,
        controllTodayPage,
        controllUpcomingPage,
        controllCompletePage,
        controllProjectPage,
        controllAllPages,
        sidePageDivs,
        hideProjectPages,
        controllNotesPage,
    };
})();