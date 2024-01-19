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
    9.  Add (check), (edit), (delete), (priority), date(div), (Description) etc inside todo tasks.(Done).
    10. Create a detail button for each task which will show a dailog with all the details
        of title, description(it will not show on task only in detail dialog), priority,
        Date etc. (Only create, functionality in next).(Done).
        
    11. Make the Dailog and Detail functions work (description, Title) (priority next)
        inside the todo tasks.(edit, delete, check, date later in the next task).
    12. Create priority sections, when click show the priority on todo and on detail dialog.
    13. Make the edit, delete functions work for the tasks.(Check later)
    14. Make the calander working so that it will add to its specific pages according to date
        and add the date to the task created.
    15. Put todo's in the rest of the right pages when created. Also make the check work.
    16. Do the remaining css and other stuff.
    17. Finally move to notes and make a dialogue for them to make them working.

*/