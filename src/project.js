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
    const projectBtnDiv = document.createElement('div');
    const projectBtn = document.createElement('button');
    const pageTaskDiv = document.createElement('div');
    const pageTaskPara = document.createElement('p');
    
    projectPage.classList.add('projectPage');
    projectPage.setAttribute('id', 'mainContent');
    titleDiv.classList.add('projectTitle');
    projectBtnDiv.classList.add('projectBtnDiv');
    projectBtn.classList.add('projectBtn');
    pageTaskDiv.classList.add('pageTaskDiv');
    pageTaskPara.classList.add('pageTaskPara');
    
    pageTitle.textContent = clickedPage.textContent;
    projectBtn.textContent = "Add Task";

    mainContainer.prepend(projectPage);
    projectPage.prepend(titleDiv);
    titleDiv.appendChild(projectTitle);
    projectTitle.appendChild(pageTitle);
    projectPage.appendChild(projectBtnDiv);
    projectBtnDiv.appendChild(projectBtn);
    projectPage.appendChild(pageTaskDiv);
    pageTaskDiv.appendChild(pageTaskPara);
    
    const projectBtns = document.querySelectorAll(".projectBtn");
    const pagesDialog = document.querySelector(".pagesDialog");
    projectBtns.forEach((projectBtn) => {
        projectBtn.addEventListener('click', (event) => {
        if (event.target.classList.contains('projectBtn')) {
            pagesDialog.showModal();
        }
        });
    });
}