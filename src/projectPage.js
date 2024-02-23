export const handleProjectClick = (clickedElement) => {
    const projectTasksTitle = document.querySelector('.projectTasksTitle');

    const projectName = clickedElement.textContent;
    projectTasksTitle.textContent = projectName;

    let projectDiv = document.getElementById(projectName);
    if (!projectDiv) {
        const projectsTasksShow = document.querySelector('.projectsTasksShow');
        projectDiv = document.createElement('div');
        projectDiv.id = projectName;
        projectDiv.className = 'projectDiv';
        projectDiv.textContent = projectName;
        projectsTasksShow.appendChild(projectDiv);
    }
    
    const selectedProjectDiv = document.querySelectorAll(`#${projectName}`);
    selectedProjectDiv.forEach(selectedProjectDivs => {
        selectedProjectDivs.style.display = 'inline';
    });
}