export const dom = (function () {

    const createTodoElement = (task) => {
        const showTask = document.createElement('div');
        showTask.className = "showTask";
        showTask.textContent = task;
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