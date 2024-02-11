export const dom = (function () {

    const createTodoElement = (task) => {
        const showTask = document.createElement('div');
        showTask.className = "showTask";
        const allTask = task.title;
        showTask.textContent = allTask;
        return showTask;
    };

    const renderTodos = (tasks) => {
        const mainShow = document.querySelector('.mainShow');
        tasks.forEach(task => {
            const showTask = createTodoElement(task);
            mainShow.appendChild(showTask);
            // createTodoElement(task);
        });
    };

    return {
        renderTodos,
    };
})();