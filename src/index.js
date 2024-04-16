import{ projectManager } from './projectPage.js'
import { todoManager } from './TodoManager';
import { dom } from './dom.js';

// TodoManager file
const newCreateTodo = todoManager.createTodo(false, "Finish report", "Complete the quarterly report", "High", new Date(), "Work");
console.log(newCreateTodo);

// dom file
const newTaskBtn = document.querySelectorAll('.newTaskBtn');
newTaskBtn.forEach(newTaskBtns => {
    newTaskBtns.addEventListener('click', () => {
        dom.chooseTaskBtnDailog()
    });
});

const newTodo = document.querySelectorAll('.newTodo');
newTodo.forEach(newTodos => {
    newTodos.addEventListener('click', () => {
        dom.showTaskForm();
        dom.removeEditBtn(false);
        dom.showTaskCreateDailog();
        dom.closeTaskBtnDailog();
        dom.clearDailogData();
    });
});

const inboxTaskdata = () => {
    const formData = dom.getFormData('.mainDialog');
    const newTodoElement = {
        finished: false,
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        date: formData.date
    };

    const storedTodo = todoManager.createTodo(
        newTodoElement.finished,
        newTodoElement.title,
        newTodoElement.description,
        newTodoElement.priority,
        newTodoElement.date
    );

    if (storedTodo) {
        dom.renderTodos([storedTodo], document.querySelector('.mainShow'));
        console.log(storedTodo);
    }
};

const addNewTask = document.querySelector('.addBtn');
addNewTask.addEventListener('click', () => {

    inboxTaskdata();
    dom.hideEditTaskBtn()
    dom.hideDeleteTaskBtn();
    dom.clearDailogData();
    dom.closeTaskCreateDailog();
});

let selectedTaskId = null;

const handleTaskButtons = (event, containerSelector) => {
    if (event.target.classList.contains('detailTaskBtn')) {
        const taskData = dom.gettingTaskData(event.target);
        if (taskData) {
            dom.showDetailDailog();
            dom.populateDetailDailog(taskData.title, taskData.description, taskData.priority, taskData.date);
        }
    }

    const editData = (captureData, titleId, descriptionId, priorityValue, dateId) => {
        document.getElementById(titleId).value = captureData.title;
        document.getElementById(descriptionId).value = captureData.description;
        const priorityRadio = document.querySelector(`input[value="${captureData.priority}"]`);
        if (priorityRadio) {
            priorityRadio.checked = true;
        }
        document.getElementById(dateId).value = captureData.date;
    }
    
    // Adding event listener for the edit button of each task
    const clickedElement = event.target;
    if (clickedElement.classList.contains('editTaskBtn')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;
        const captureData = dom.gettingTaskData(event.target);
        if (captureData) {
            editData(captureData, 'todoTitle', 'todoDescription', captureData.priority, 'todoTaskDate');
            dom.showTaskForm(false);
            dom.showEditTask();
            dom.removeEditBtn(true);
        }
    }
    
    if (clickedElement.classList.contains('editProjectBtn')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;
        const captureData = dom.gettingTaskData(event.target);
        if (captureData) {
            editData(captureData, 'todoPagesTitle', 'todoPagesDescription', captureData.priority, 'todoPagesDate');
            dom.removeEditBtn(true);
            dom.showTaskForm(false);
            dom.showTaskPageDailog();
        }
    }

    if(clickedElement.classList.contains('deleteTaskBtn')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;

        todoManager.deleteTodo(selectedTaskId);
        dom.deleteTaskDetail(selectedTaskId, containerSelector);
    }

    if(clickedElement.classList.contains('deleteProjectTasks')) {
        selectedTaskId = clickedElement.closest('.showTask').dataset.id;

        projectManager.deleteTask(selectedTaskId, selectedProjectName);
        dom.deleteTaskDetail(selectedTaskId, containerSelector);
    }
}

// Function to handle task completion for both mainShow and projectsTasksShow
const handleTaskCompletion = (clickedElement) => {
    if (clickedElement.classList.contains('finishedTask')) {
        const isChecked = clickedElement.checked;
        const taskContainer = clickedElement.closest('.showTask');
        if (isChecked) {
            taskContainer.classList.add('finished');
            console.log("Task is finished");
        } else {
            taskContainer.classList.remove('finished');
            console.log("Task is not finished");
        }
    }
};



const mainShow = document.querySelector('.mainShow');
mainShow.addEventListener('click', (event) => {
    
    const clickedElement = event.target;
    handleTaskCompletion(clickedElement);

    handleTaskButtons(event, '.mainShow');
});

const changeTaskDetail = () => {
    const taskValue = dom.getFormData('.mainDialog');
    console.log(taskValue);

    dom.updateTaskDetails(
        selectedTaskId,
        taskValue.title,
        taskValue.description,
        taskValue.priority,
        taskValue.date
    );

    const updatedData = {
        title: taskValue.title,
        description: taskValue.description,
        priority: taskValue.priority,
        date: taskValue.date
    };

    const updatedTodo = todoManager.editTodo(selectedTaskId, updatedData);
    if (!updatedTodo) {
        console.log("Todo item not updated successfully");
        return;
    }
}

const updateBtn = document.querySelector('.updateBtn');
updateBtn.addEventListener('click', () => {

    changeTaskDetail();

    dom.closeEditTask();

});

const detailCloseBtn = document.querySelectorAll('.detailCloseBtn');
detailCloseBtn.forEach(detailCloseBtns => {
    detailCloseBtns.addEventListener('click', () => dom.closeDetailDailog());
});

const sideInbox = document.querySelectorAll('.sideInbox');
sideInbox.forEach(sideInboxs => {
    sideInboxs.addEventListener('click', () => {        
        dom.controllAllPages(false);
        dom.controllMainPage(true);
    });
});

const sideToday = document.querySelectorAll('.sideToday');
sideToday.forEach(sideTodays => {
    sideTodays.addEventListener('click', () => {        
        dom.controllAllPages(false);
        dom.controllTodayPage(true);
    });
});

const sideUpcoming = document.querySelectorAll('.sideUpcoming');
sideUpcoming.forEach(sideUpcomings => {
    sideUpcomings.addEventListener('click', () => {        
        dom.controllAllPages(false);
        dom.controllUpcomingPage(true);
    });
});

const sideAllTasks = document.querySelectorAll('.sideAllTasks');
sideAllTasks.forEach(sideAllTaskss => {
    sideAllTaskss.addEventListener('click', () => {        
        dom.controllAllPages(false);
        dom.controllAllTasksPage(true);
    });
});

const createNewProject = document.querySelectorAll('.createNewProject');
createNewProject.forEach(createNewProjects => {
    createNewProjects.addEventListener('click', () => {
        dom.showProjectPages();
        dom.closeTaskBtnDailog();
    });
});

const newProjectBtn = document.querySelectorAll('.newProjectBtn');
newProjectBtn.forEach(newProjectBtns => {
    newProjectBtns.addEventListener('click', () => {
        dom.sidePageDivs();
        document.getElementById('projectTitle').value = '';
        dom.closeProjectPages();
    });
});

// select the page by the project page name for task
let selectedProjectName = "";
const projectPagesData = (clickedElement) => {
    const pageFormData = dom.ProjectPageDom(clickedElement);

    const pageData = {
        title: pageFormData,
        // PageTasks: 
    };

    const projectName = clickedElement.innerText;
    const project = projectManager.findProjectByName(projectName) || projectManager.createProject(projectName);
    const existingPage = project.pages.find(page => page.title === pageData.title);
    if (!existingPage) {
        project.pages.push(pageData);
        console.log("Project:", project);
    } else {
        console.log("Page data already exists in the project:", project);
    }
};

const projectNames = document.querySelector('.projectNames');
projectNames.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('newProjectPages')) {
        dom.controllAllPages(false);
        dom.controllProjectPage(true);
        dom.hideProjectPages();
        dom.ProjectPageDom(clickedElement);
        selectedProjectName = clickedElement.innerText;
        projectPagesData(clickedElement);
    }
});

const projectsTasksShow = document.querySelector('.projectsTasksShow');
projectsTasksShow.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('projectBtn')) {
        dom.showTaskPageDailog();
        dom.showTaskForm(true);
        dom.removeEditBtn(false);
        dom.clearPagesData();
    }
});

const loadAndRenderTasks = () => {
    projectManager.loadFromLocalStorage();
    console.log(projectManager.projectsArray);
    projectManager.projectsArray.forEach(project => {

        const projectDiv = document.querySelector(`[data-project-name="${project.name}"]`);

        if (!projectDiv) {
            dom.sidePageDivs(project.name);
            dom.projectTasksDom(project.name);
            console.log("Not present");

            projectDiv = document.querySelector(`[data-project-name="${project.name}"]`);
        }

        console.log("projectDiv:", projectDiv);
        if (projectDiv) {
            console.log("Rendering tasks for project:", project.name);
            dom.renderTodos(project.tasks, projectDiv);
            console.log("Successfully stored");
        } else {
            console.log(`Project container not found for project: ${project.name}`);
        }
    });
};

// Call loadAndRenderTasks when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadAndRenderTasks();
});

const pageTaskdata = () => {

    const formData = dom.getPagesFormData('.pagesDialog');
    const newTodoElement = {
        finished: false,
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        date: formData.date
    };

    const storedTask = projectManager.createProjectTasks(
        newTodoElement.finished,
        newTodoElement.title,
        newTodoElement.description,
        newTodoElement.priority,
        newTodoElement.date,
        selectedProjectName
    );

    console.log("Selected task ID:", selectedTaskId);
    console.log("Selected project name:", selectedProjectName);
    console.log("Stored Task:", storedTask);

    if (storedTask) {
        dom.renderTodos([storedTask], document.getElementById(selectedProjectName));
    }
};

const newPageBtn = document.querySelectorAll('.newPageBtn');
newPageBtn.forEach(newPageBtns => {
    newPageBtns.addEventListener('click', () => {
        pageTaskdata();
        dom.hideDeleteProjectBtn();
        dom.hideEditProjectBtn();
        dom.clearPagesData();
        dom.closeTaskPageDailog();
    });
});

const changeProjectDetail = () => {
    const taskValue = dom.getPagesFormData('.pagesDialog');
    console.log(taskValue);

    dom.updateTaskDetails(
        selectedTaskId,
        taskValue.title,
        taskValue.description,
        taskValue.priority,
        taskValue.date
    );

    const updatedData = {
        title: taskValue.title,
        description: taskValue.description,
        priority: taskValue.priority,
        date: taskValue.date
    };

    const updatedProjectTask = projectManager.editProjectTask(selectedTaskId, selectedProjectName, updatedData);
    if (!updatedProjectTask) {
        console.log("Project task not updated successfully");
        return;
    }
}

const updateProjectTask = document.querySelector('.updateProjectTask');
updateProjectTask.addEventListener('click', () => {

    changeProjectDetail();
    dom.closeTaskPageDailog();

});

const projectDivs = document.querySelector('.projectsTasksShow');
projectDivs.addEventListener('click', (event) => {

    const clickedElement = event.target;
    handleTaskCompletion(clickedElement);

    handleTaskButtons(event, `#${selectedProjectName}`);
});

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
        b. store the data of the task inside an object and push it inside an array when taskEdit btn is clicked.(Done)
        c. Access the data from the array inside the dialog when click on editBtn.(Done)
        d. And when the add btn is clicked push the edit data from the dialog and update the task.(Done)
    14. Make the calander working so it shows the date selected on the task and inside the description. (Done)
    15. Make the check work. (Done)

    15. Make the data Storage for it working.

    16. Now Put todo's tasks of Inbox and project pages in the all tasks when created.
    17. Do the remaining css and other stuff.
    18. Make the date work that if date is today's it will go to today, all Tasks and where task is created.

*/