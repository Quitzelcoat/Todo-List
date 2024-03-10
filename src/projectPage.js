export const projectManager = (function () {
    let projectsArray = [];
    let projectCounter = 1;

    // store created project tasks
    const createProjectTasks = (finished, title, description, priority, date, projectName) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
    
        const existingTask = project.tasks.find(task => task.title === title);
        if (existingTask) {
            console.log(`A task with the title "${title}" already exists in the project "${projectName}".`);
            return null;
        }
    
        const newTask = { id: projectCounter++, finished, title, description, priority, date, project: projectName };
        project.tasks.push(newTask);
        return newTask;
    };

    // store created project pages
    const createProject = (name) => {
        const existingProject = projectsArray.find(project => project.name === name);
        if (existingProject) {
            console.log(`A project with the name "${name}" already exists.`);
            return null;
        }
        const newProject = {
            name, 
            tasks: [],
            pages: []
        };
        projectsArray.push(newProject);
        return newProject;
    };

    // get project created names.
    const findProjectByName = (name) => {
        return projectsArray.find(project => project.name === name);
    };

    // edit project tasks
    const editProjectTask = (id, projectName, newData) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
        
        const taskIndex = project.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            console.log(`Task with ID "${id}" not found in project "${projectName}".`);
            return null;
        }
        
        console.log("Current task:", { ...project.tasks[taskIndex] });
        const updatedTask = Object.assign(project.tasks[taskIndex], newData);
        return updatedTask;
    };

    


    // Delete projectsArray.
    const deleteProject = (name) => {
        const projectIndex = projectsArray.findIndex(project => project.name === name);
        if (projectIndex !== -1) {
            const deletedProject = projectsArray.splice(projectIndex, 1);
            return deletedProject[0];
        } else {
            console.log(`Project "${name}" not found.`);
            return null;
        }
    };

    // Delete project Tasks
    const deleteTask = (id, projectName) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
        const taskIndex = project.tasks.findIndex(task => task.id.toString() === id);
        if (taskIndex !== -1) {
            const deletedTask = project.tasks.splice(taskIndex, 1);
            return deletedTask;
        } else {
            console.log(`Task with ID "${id}" not found in project "${projectName}".`);
            return null;
        }
    };

    const findTaskIndex = (project, taskId) => {
        return project.tasks.findIndex(task => task.id === taskId);
    };

    return {
        projectsArray,
        createProjectTasks,
        createProject,
        findProjectByName,
        editProjectTask,
        deleteProject,
        deleteTask,
        findTaskIndex,
    };
})();
