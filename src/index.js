import { createTodo } from './todo-task-show';
import { project } from './project';
import { dialogData, pageControlCreate } from './task-btn';

createTodo("na", "Something", "anything to do", "important", "");
project();
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
    9.  Add (check), (edit), (delete), (priority), date(div) etc inside todo tasks.(Done).

    10. Make the Dailog other functions (priority, description) work inside the todo tasks. 
        (edit, delete, check will work in the next task).
    12. Make the edit, delete functions work for the tasks.(Check later)
    11. Make the calander working so that it will add to its specific pages according to date
        and add the date to the task created.
    12. Put todo's in the rest of the right pages when created.(Also make the check work).
    13. Do the remaining css and other stuff.
    14. Finally move to notes and make a dialogue for them to make them working.

*/