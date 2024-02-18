import { add } from "date-fns";

export const dom = (function () {
    const taskDetailDailog = document.querySelector('.taskDetailDailog');
    const todoTypesDialog = document.querySelector('.todoTypesDialog');
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
            return {
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
        // Conditionally show or hide the create task button
        const createTaskBtn = document.querySelector('.addBtn');
        if (createTaskBtn) {
            createTaskBtn.style.display = showCreateButton ? 'inline' : 'none';
        }
    };


    const taskEditFunction = (title, description, priority, date) => {
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

    const EditTodoTasksChanges = (title, description, priority, date) => {
        const titleElements = document.querySelectorAll('.titleTask');
        titleElements.forEach(element => {
            element.textContent = title;
        });

        const descriptionElements = document.querySelectorAll('.descriptionTask');
        descriptionElements.forEach(element => {
            element.textContent = description;
        });

        const priorityElements = document.querySelectorAll('.priorityTask');
        priorityElements.forEach(element => {
            element.textContent = priority;
        });

        const dateElements = document.querySelectorAll('.dateTask');
        dateElements.forEach(element => {
            element.textContent = date;
        });
    };
    
    const clearDailogData = () => {
        document.getElementById('todoTitle').value = '';
        document.getElementById('todoDescription').value = '';
        const priorityTasks = document.querySelectorAll('.priorityTask');
        priorityTasks.forEach(task => task.checked = false);
        document.getElementById('todoTaskDate').value = '';
    };

    return {
        renderTodos,
        chooseTaskBtnDailog,
        closeTaskBtnDailog,
        showTaskCreateDailog,
        closeTaskCreateDailog,
        showDetailDailog,
        closeDetailDailog,
        populateDetailDailog,
        gettingTaskData,
        showAddTaskForm,
        hideAddTaskForm,
        getFormData,
        showEditTask,
        closeEditTask,
        taskEditFunction,
        EditTodoTasksChanges,
        clearDailogData,
        showTaskForm,
    };
})();