import { projectPages } from './project';
import { notesPages } from './notes';
import { today } from './today';
import { upComing } from './upcoming';
import { complete } from './complete-task';

// Add maindata to the pages.
export const dialogData = () => {
  const pageControl = document.querySelector(".todoTypesDialog");
  const showButton = document.querySelector(".newTaskBtn");
  const mainDialog = document.querySelector('.mainDialog');
  const newTodo = document.querySelector('.newTodo');
  const addTaskButton = document.querySelector(".addBtn");
  const tasksContainer = document.querySelector('.tasksContainer');
  const titleInput = document.getElementById('todoTitle');
  const createNewProject = document.querySelector('.createNewProject');
  const newProjectBtn = document.querySelector('.newProjectBtn');
  const projectDialog = document.querySelector('.projectDialog');
  const projectInput = document.getElementById('projectTtile');
  const addProjectName = document.querySelector('.projectNames');

  
  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    pageControl.showModal();
  });
  
  newTodo.addEventListener('click', () => {
    mainDialog.showModal();
    pageControl.close();
  });

  createNewProject.addEventListener('click', () => {
    projectDialog.showModal();
    pageControl.close();
  });

  
  // "Add Task" button adds todo task.
  addTaskButton.addEventListener("click", () => {
    
    const taskTitleDiv = document.createElement('div');
    const taskElement = document.createElement('div');
    const taskCheck = document.createElement('div');
    const taskCheckInput = document.createElement('input');
    const taskCheckLabel = document.createElement('label')
    const taskEdit = document.createElement('div');
    const taskRemove = document.createElement('div');
    const taskPriority = document.createElement('div');
    const taskDate = document.createElement('div');

    taskTitleDiv.className = "taskTitleDiv";
    taskElement.className = "taskElement";
    taskCheck.className = "taskCheck";
    taskEdit.className = "taskEdit";
    taskRemove.className = "taskRemove";
    taskPriority.className = "taskPriority";
    taskDate.className = "taskDate";

    taskEdit.textContent = "Edit Task";
    taskRemove.textContent = "Delete Task";
    taskPriority.textContent = "Task Priority"
    taskDate.textContent = "Task Date";
    taskElement.textContent = titleInput.value;
    
    const taskInputId = Math.floor(Math.random() * 100);

    // Assigning the attributes to created checkbox
    taskCheckInput.type = "checkbox";
    taskCheckInput.name = "taskCheckInput";
    taskCheckInput.id = `taskCheckInput${taskInputId}`;
    taskCheckLabel.htmlFor = `taskCheckInput${taskInputId}`;


    tasksContainer.appendChild(taskTitleDiv);
    tasksContainer.appendChild(taskCheck);
    taskTitleDiv.appendChild(taskElement);
    taskTitleDiv.appendChild(taskCheckLabel);
    taskTitleDiv.appendChild(taskCheckInput);
    taskCheck.appendChild(taskEdit);
    taskCheck.appendChild(taskRemove);
    taskCheck.appendChild(taskPriority);
    taskCheck.appendChild(taskDate);

    titleInput.value = "";
    mainDialog.close();
  });
  
  // Creates a new element and adds project Names.
  newProjectBtn.addEventListener('click', () => {
    
    const projectElement = document.createElement('div');
    projectElement.className = 'newProjectPages';
    projectElement.textContent = projectInput.value;
    
    addProjectName.appendChild(projectElement);
    projectInput.value = "";
    projectDialog.close();
    
    pageControlCreate();
  });
  
  const newPageBtn = document.querySelector(".newPageBtn");
  const pagesDialog = document.querySelector('.pagesDialog');
  const pageTitle = document.getElementById('pageTitle');
  newPageBtn.addEventListener('click', () => {

    const pageTaskDiv = document.querySelector('.pageTaskDiv');
    const pageTaskPara = document.createElement('div');
    const newElement = document.createElement('div');
    const pageCheck = document.createElement('div');
    const pageCheckInput = document.createElement('input');
    const pageCheckLabel = document.createElement('label')
    const pageEdit = document.createElement('div');
    const pageRemove = document.createElement('div');
    const pagePriority = document.createElement('div');
    const pageDate = document.createElement('div');

    newElement.className = 'newElement';
    pageCheck.className = "pageCheck";
    pageEdit.className = "pageEdit";
    pageRemove.className = "pageRemove";
    pagePriority.className = "pagePriority";
    pageDate.className = "pageDate";
    pageTaskPara.className ='pageTaskPara';

    pageEdit.textContent = "Edit Page";
    pageRemove.textContent = "Delete Page";
    pagePriority.textContent = "Page Priority"
    pageDate.textContent = "Page Date";
    newElement.textContent = pageTitle.value;

    const pageInputId = Math.floor(Math.random() * 100);

    // Assigning the attributes to created checkbox
    pageCheckInput.type = "checkbox";
    pageCheckInput.name = "pageCheckInput";
    pageCheckInput.id = `pageCheckInput${pageInputId}`;
    pageCheckLabel.htmlFor = `pageCheckInput${pageInputId}`;

    pageTaskPara.appendChild(newElement);
    pageTaskPara.appendChild(pageCheckLabel);
    pageTaskPara.appendChild(pageCheckInput);
    pageTaskDiv.appendChild(pageTaskPara);

    pageTitle.value = '';
    pagesDialog.close();
  });
}

// Changes the pages after removing them.
export const pageControlCreate = () => {
  const sideInbox = document.querySelector('.sideInbox');
  const mainContainer = document.querySelector(".mainContainer");
  const mainPage = document.querySelector(".mainPage");
  const sidePages = document.querySelectorAll('.newProjectPages');
  const sideNotes = document.querySelector('.sideNotes');

  // To select sidebar Main Page.
  sideInbox.addEventListener('click', () => {
    clearTab();
    mainContainer.prepend(mainPage);
  });

  // To select sidebar Today Tasks Page.
  const sideToday = document.querySelector('.sideToday');
  sideToday.addEventListener('click', () => {
    clearTab();
    today();
  });

  const sideFuture = document.querySelector('.sideFuture');
  sideFuture.addEventListener('click', () => {
    clearTab();
    upComing();
  });

  const completeSide = document.querySelector('.completeSide');
  completeSide.addEventListener('click', () => {
    clearTab();
    complete();
  });

  // To select sidebar Project Pages.
  sidePages.forEach(page => {
    page.addEventListener("click", () => {
      clearTab();
      projectPages(page);
    });
  });

  // To select sidebar Notes Page.
  sideNotes.addEventListener("click", () => {
    clearTab();
    notesPages();
  });
}

// Removes the main page.
function clearTab() {
  const mainContainer = document.querySelector(".mainContainer");
  const mainContent = document.getElementById("mainContent");
  if(mainContent) {
    mainContainer.removeChild(mainContent);
  }
}