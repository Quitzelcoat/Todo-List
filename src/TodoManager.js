export const todoManager = (function () {
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
