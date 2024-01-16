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

    1. nav and basic layout.(Done).
    2. new task button and a dialogue show when clicked. And closed when submit.(Done).
    3. Dialogue basic edit when input data, display on screen.(Done).
    4. Create all the pages (projects, notes etc). Notes are seperate work in the end after 
        todo.(Done).
    5. Also make sure in the side bar for the new project when selected inside dialog only 
        ask for the title to create a field/div for that project. (Done).
        
    6. When select that project create a new page for that project, And inside the
        that page, we can create todo's of that project.
    7. Put todo's in the right pages when created.
    8. Add other functions needed inside dialogue. And make them work.
        (e.g., priority and stuff).
    9. Add edit and delete functions and make them working etc.
    10. Do the remaining  css and other stuff.
    11. Finall move to notes and make a dialogue for them to make them working.

3. function to push the todo list task to the project. 
4. function for representing what kind of projects to create.
    (e.g., projects, simple todo task and notes)
5. function to show where the following tasks created will be in
    (e.g., in all tasks and complete tasks and todo
        task or notes or projects.)
6. Modules for edit, delete and priority of the task creted.
*/