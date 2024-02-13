export const dom = (function () {

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

        // const allTask = `${task.finished} ${task.title} ${task.description} ${task.priority} ${task.date}`;
        // showTask.textContent = allTask;
        
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

        detailBtn();
        editBtn();
        deleteBtn();
    };

    const detailBtn = () => {
        const detailTaskBtn = document.querySelectorAll('.detailTaskBtn');
        const taskDetailDailog = document.querySelector('.taskDetailDailog');
        const detailCloseBtn = document.querySelector('.detailCloseBtn');

        detailTaskBtn.forEach(detailTaskBtns => {
            detailTaskBtns.addEventListener ('click', () => {
                populateDetailDialog();
                taskDetailDailog.showModal();
            });
        });

        detailCloseBtn.addEventListener('click', () => {
            taskDetailDailog.close();
        });
    };

    const editBtn = () => {
        const editTaskBtn = document.querySelectorAll('.editTaskBtn');
        editTaskBtn.forEach(editTaskBtns => {
            editTaskBtns.addEventListener('click', () => {
                
            });
        });
    }

    const deleteBtn = () => {
        const deleteTaskBtn = document.querySelectorAll('.deleteTaskBtn');
        deleteTaskBtn.forEach(deleteTaskBtns => {
            deleteTaskBtns.addEventListener('click', () => {
                
            });
        });
    }

    const populateDetailDialog = (title, description, priority, date) => {
        const taskDetailTitle = document.querySelector('.taskDetailTitle');

        taskDetailTitle.textContent = title;
    };

    return {
        renderTodos,
    };
})();