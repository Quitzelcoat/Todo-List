import { createTodo } from './todo-task-show';
import { projectPages } from './project';
import { dialogWork } from './task-btn';

createTodo("na", "Something", "anything to do", "important", "");
projectPages();
dialogWork();

/*
1. function to create a todo list. (Done).
2. function to create a new project. (Done).
DOM MINIPULATION:
1. nav and basic layout. (Done).
2. new task button and a dialogue show when clicked. And closed when submit. (Done)
3. Dialogue basic edit when input data, display on screen.
4. Create all the pages (projects notes etc). Notes are seperate work in the end after todo.
5. Also make sure in the side bar for the new project when selected only ask for the title to
    create a field/div for that project. And inside can add todo's.
6. Put todo's in the right pages when created.
7. Add other functions needed inside dialogue. And make them work. (e.g., priority and stuff).
8. Add edit and delete functions and make them working etc.
9. Do the remaining  css and other stuff.
10. Finall move to notes and make a dialogue for them to make them working.

3. function to push the todo list task to the project. 
4. function for representing what kind of projects to create.
    (e.g., projects, simple todo task and notes)
5. function to show where the following tasks created will be in
    (e.g., in all tasks and complete tasks and todo
        task or notes or projects.)
6. Modules for edit, delete and priority of the task creted.
*/