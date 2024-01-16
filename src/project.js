export const project = () => {
    let projectArray = [];
    
    let projectTitle = "Something";
    projectArray.push({projectTitle});
    console.log(projectArray);
    return {
        projectArray,
        projectTitle
    }
}

export const projectPages = (clickedPage) => {
    const mainContainer = document.querySelector(".mainContainer");
    const projectPage = document.createElement('div');
    const titleDiv = document.createElement('div');
    const projectTitle = document.createElement('div');
    const pageTitle = document.createElement('h2');
    const projectBtn = document.createElement('button');
    
    projectPage.classList.add('projectPage');
    projectPage.setAttribute('id', 'mainContent');
    titleDiv.classList.add('projectTitle');
    projectBtn.classList.add('projectBtn');
    
    pageTitle.textContent = clickedPage.textContent;
    projectBtn.textContent = "Add Task";

    mainContainer.prepend(projectPage);
    projectPage.prepend(titleDiv);
    titleDiv.appendChild(projectTitle);
    projectTitle.appendChild(pageTitle);
    projectPage.appendChild(projectBtn);
    
    
}