export const handleProjectClick = (clickedElement) => {
    const projectTasksTitle = document.querySelector('.projectTasksTitle');

    const projectName = clickedElement.textContent;
    projectTasksTitle.textContent = projectName;

    let projectDiv = document.getElementById(projectName);
    if (!projectDiv) {
        const projectsTasksShow = document.querySelector('.projectsTasksShow');
        projectDiv = document.createElement('div');
        const projectBtn = document.createElement('button');
        const removeProject = document.createElement('button');


        projectDiv.id = projectName;
        projectDiv.className = 'projectDiv';
        projectBtn.className = 'projectBtn';
        removeProject.className = 'removeProject';

        projectBtn.textContent = "Create Task";
        removeProject.textContent = "Delete Project";

        projectsTasksShow.appendChild(projectDiv);
        projectDiv.appendChild(projectBtn);
        projectDiv.appendChild(removeProject);
    }
    
    const selectedProjectDiv = document.querySelectorAll(`#${projectName}`);
    selectedProjectDiv.forEach(selectedProjectDivs => {
        selectedProjectDivs.style.display = 'inline';
    });
}