let todoArray = [];

export const createTodo = (check, title, description, priority, date) => {
    console.log({check, title, description, priority, date});
    todoArray.push({check, title, description, priority, date});
    console.log(todoArray);
    return { check, title, description, priority, date };
}