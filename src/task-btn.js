import { projectPages } from './project';
import { notesPages } from './notes';

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
    
    const taskElement = document.createElement('div');
    taskElement.className = "taskElement";
    taskElement.textContent = titleInput.value;
    
    tasksContainer.appendChild(taskElement);
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

    const pageTaskPara = document.querySelector('.pageTaskPara');

    const newElement = document.createElement('div');
    newElement.className = 'newElement';
    newElement.textContent = pageTitle.value;

    pageTaskPara.appendChild(newElement);
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