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
  const mainShow = document.querySelector('.mainShow');
  const titleInput = document.getElementById('todoTitle');
  const createNewProject = document.querySelector('.createNewProject');
  const newProjectBtn = document.querySelector('.newProjectBtn');
  const projectDialog = document.querySelector('.projectDialog');
  const projectInput = document.getElementById('projectTtile');
  const addProjectName = document.querySelector('.projectNames');
  const newPageBtn = document.querySelector(".newPageBtn");
  const pagesDialog = document.querySelector('.pagesDialog');
  const pageTitle = document.getElementById('pageTitle');

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

  const taskDataArray = [];

  // "Add Task" button adds todo task.
  addTaskButton.addEventListener("click", () => {
    const todoDescription = document.getElementById('todoDescription');
    const taskDetailPriority = document.querySelector('.taskDetailPriority');
    const priorityTask = document.querySelectorAll('input[name="priorityTask"]');
    const taskDetailText = document.querySelector('.taskDetailText');
    const taskDetailTitle = document.querySelector('.taskDetailTitle');
    const taskDetailDailog = document.querySelector('.taskDetailDailog');
    const taskTitleDiv = document.createElement('div');
    const taskElement = document.createElement('div');
    const taskDescText = document.createElement('div');
    const taskCheck = document.createElement('div');
    const taskCheckInput = document.createElement('input');
    const taskCheckLabel = document.createElement('label')
    const taskDetailBtn = document.createElement('button');
    const taskEdit = document.createElement('div');
    const taskRemove = document.createElement('div');
    const taskPriority = document.createElement('div');
    const taskDate = document.createElement('div');
    const removeTask = document.createElement('div');

    const checkedPriorityTask = Array.from(priorityTask).find(task => task.checked);

    taskTitleDiv.className = "taskTitleDiv";
    taskElement.className = "taskElement";
    taskCheck.className = "taskCheck";
    taskEdit.className = "taskEdit";
    taskRemove.className = "taskRemove";
    taskPriority.className = "taskPriority";
    taskDate.className = "taskDate";
    taskDetailBtn.className = "taskDetailBtn";
    taskDescText.className = "taskDescText";
    removeTask.className = "removeTask";

    const taskDetailObject = {
      title: titleInput.value,
      description: todoDescription.value,
      priority: checkedPriorityTask ? `${checkedPriorityTask.value}` : `You haven't selected any priority`,
    };
    
    taskDataArray.push(taskDetailObject);
    console.log(taskDataArray);

    taskEdit.textContent = "Edit Task";
    taskRemove.textContent = "Delete Task";
    taskDate.textContent = "Task Date";
    taskDetailBtn.textContent = "Detail";
    taskElement.textContent = taskDetailObject.title;
    taskDetailTitle.textContent = taskDetailObject.title;
    taskDescText.textContent = taskDetailObject.description;
    taskDetailText.textContent = taskDetailObject.description;
    taskPriority.textContent = taskDetailObject.priority

    taskDetailBtn.addEventListener('click', () => {
      taskDetailPriority.textContent = taskDetailObject.priority;
    });

    const taskInputId = Math.floor(Math.random() * 100);
    
    // Assigning the attributes to created checkbox
    taskCheckInput.type = "checkbox";
    taskCheckInput.name = "taskCheckInput";
    taskCheckInput.id = `taskCheckInput${taskInputId}`;
    taskCheckLabel.htmlFor = `taskCheckInput${taskInputId}`;

    mainShow.appendChild(removeTask);
    removeTask.appendChild(taskTitleDiv);
    removeTask.appendChild(taskCheck);
    taskTitleDiv.appendChild(taskElement);
    taskTitleDiv.appendChild(taskCheckLabel);
    taskTitleDiv.appendChild(taskCheckInput);
    taskCheck.appendChild(taskDetailBtn);
    taskCheck.appendChild(taskEdit);
    taskCheck.appendChild(taskRemove);
    taskCheck.appendChild(taskPriority);
    taskCheck.appendChild(taskDate);

    // Open and show the content on dialog for Main Pages.
    taskDetailBtn.addEventListener('click', () => {
      const currentTaskTitle = taskElement.textContent;
      const currentTaskDescription = taskDescText.textContent;

      taskDetailTitle.textContent = currentTaskTitle;
      taskDetailText.textContent = currentTaskDescription;
      taskDetailDailog.showModal();
    });

    // Closes the dialog for Main Pages.
    const detailCloseBtn = document.querySelector('.detailCloseBtn');
    detailCloseBtn.addEventListener('click', () => {
      taskDetailDailog.close();
    });
    
    
    taskRemove.addEventListener('click', () => {
      if (removeTask) {
        mainShow.removeChild(removeTask);
      }
    });
    
    if(newTodo) {
      newTodo.addEventListener('click', () => {
        todoDescription.value = "";
        titleInput.value = "";
      });
    }
    mainDialog.close();

    // Edit the task and Update It
    taskEdit.addEventListener('click', () => {
      mainDialog.showModal();

      titleInput.value = taskDetailObject.title;
      todoDescription.value = taskDetailObject.description;
      const priorityInput = document.querySelector(`input[name="priorityTask"][value="${taskDetailObject.priority}"]`);
      if (priorityInput) {
        priorityInput.checked = true;
      }

      isEditingTask = true; 
    });
    
    let isEditingTask = false;
    let addTaskListener = () => {
      const title = titleInput.value;
      taskDetailObject.title = title;
      taskElement.textContent = title;
      mainDialog.close();
      isEditingTask = false;
    };
    if (taskEdit) {
      addTaskButton.addEventListener('click', () => {
        if (isEditingTask) {
          addTaskListener();

          mainShow.removeChild(removeTask);
        }
      });
    }

  });
  

  // Creates a new element and adds project Names For Side Bar.
  newProjectBtn.addEventListener('click', () => {
    const projectElement = document.createElement('div');
    projectElement.className = 'newProjectPages';
    projectElement.textContent = projectInput.value;
    addProjectName.appendChild(projectElement);
    
    projectInput.value = "";
    projectDialog.close();
    pageControlCreate();
  });
  
  // Creates new Pages and adds html inside it.
  newPageBtn.addEventListener('click', () => {
    const priorityPage = document.querySelectorAll('input[name="priorityPage"]');
    const taskDetailPriority = document.querySelector('.taskDetailPriority');
    const taskDetailText = document.querySelector('.taskDetailText');
    const taskDetailTitle = document.querySelector('.taskDetailTitle');
    const pagesDescription = document.getElementById('pagesDescription');
    const taskDetailDailog = document.querySelector('.taskDetailDailog');
    const pageTaskDiv = document.querySelector('.pageTaskDiv');
    const pageTaskPara = document.createElement('div');
    const newElement = document.createElement('div');
    const pageDescText = document.createElement('div');
    const pageCheckInput = document.createElement('input');
    const pageCheckLabel = document.createElement('label')
    const pageCheck = document.createElement('div');
    const pageDetailBtn = document.createElement('button');
    const pagePriority = document.createElement('div');
    const pageEdit = document.createElement('div');
    const pageRemove = document.createElement('div');
    const pageDate = document.createElement('div');
    const removePage = document.createElement('div');

    newElement.className = 'newElement';
    pageCheck.className = "pageCheck";
    pageEdit.className = "pageEdit";
    pageRemove.className = "pageRemove";
    pagePriority.className = "pagePriority";
    pageDate.className = "pageDate";
    pageTaskPara.className ='pageTaskPara';
    pageDescText.className = 'pageDescText';
    pageDetailBtn.className = 'pageDetailBtn';
    pageCheckInput.className = 'page-CheckInput';
    removePage.className = 'removePage';

    pageEdit.textContent = "Edit Page";
    pageRemove.textContent = "Delete Page";
    pagePriority.textContent = "Page Priority"
    pageDate.textContent = "Page Date";
    pageDetailBtn.textContent = "Detail";
    newElement.textContent = pageTitle.value;
    taskDetailTitle.textContent = pageTitle.value;
    pageDescText.textContent = pagesDescription.value;
    taskDetailText.textContent = pagesDescription.value;
    
    pageDetailBtn.addEventListener('click', () => {
      taskDetailPriority.textContent = pagePriority.textContent;
    });
    
    const checkedpriorityPage = Array.from(priorityPage).find(task => task.checked);
    pagePriority.textContent = checkedpriorityPage ? `${checkedpriorityPage.value}` : `You haven't selected any priority`;
    const pageInputId = Math.floor(Math.random() * 100);

    // Assigning the attributes to created checkbox
    pageCheckInput.type = "checkbox";
    pageCheckInput.name = "pageCheckInput";
    pageCheckInput.id = `pageCheckInput${pageInputId}`;
    pageCheckLabel.htmlFor = `pageCheckInput${pageInputId}`;

    pageTaskDiv.appendChild(removePage);
    removePage.appendChild(pageTaskPara);
    removePage.appendChild(pageCheck);
    pageTaskPara.appendChild(newElement);
    pageTaskPara.appendChild(pageCheckLabel);
    pageTaskPara.appendChild(pageCheckInput);
    pageCheck.appendChild(pageDetailBtn);
    pageCheck.appendChild(pagePriority);
    pageCheck.appendChild(pageEdit);
    pageCheck.appendChild(pageRemove);
    pageCheck.appendChild(pageDate);

    pageTitle.value = '';
    pagesDescription.value = '';
    pagesDialog.close();

    // Open and show the content on dialog for Pages.
    pageDetailBtn.addEventListener('click', () => {
      const currentPageTitle = newElement.textContent;
      const currentPageDescription = pageDescText.textContent;

      taskDetailTitle.textContent = currentPageTitle;
      taskDetailText.textContent = currentPageDescription;
      taskDetailDailog.showModal();
    });

    // Close the dialog for Pages.
    const detailCloseBtn = document.querySelector('.detailCloseBtn');
    detailCloseBtn.addEventListener('click', () => {
      taskDetailDailog.close();
    });

    pageRemove.addEventListener('click', () => {
      if (removePage) {
        pageTaskDiv.removeChild(removePage);
      }
    });
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