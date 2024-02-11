import { todoManager } from './TodoManager';
import { project } from './project';
import { dom } from './dom.js';

import { dialogData, pageControlCreate } from './task-btn';

// TodoManager file
const newTodo = todoManager.createTodo(false, "Finish report", "Complete the quarterly report", "High", new Date(), "Work");
console.log(newTodo);

project();

// dom file
todoManager.createTodo(false, "Task 1", "Do something", "High", "2024-02-11", "something");
todoManager.createTodo(false, "Task 2", "Do anything", "Medium", "2024-02-12", "something");
dom.renderTodos(todoManager.findTodosByProject('something'));

// task-btn file
dialogData();
pageControlCreate();

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
        b. store the data of the task inside an object and push it inside an array when taskEdit
        c. btn is clicked.(Done)
        d. Access the data from the array inside the dialog when click on editBtn.(Done)
        e. And when the add btn is clicked push the edit data from the dialog and update
            the task.(Done)
    14. Make the calander working so it shows the date selected on the task and inside the description. (Done)

    15. Make the data Storage for it working.

    16. Now Put todo's tasks in the right pages when created.
    17. Put todo's in the rest of the right pages when created. Also make the check work.
    18. Do the remaining css and other stuff.
    19. Finally move to notes and make a dialogue for them to make them working.

*/