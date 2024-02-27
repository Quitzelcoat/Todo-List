const projectManager = (function () {
    let projects = [];
    let projectCounter = 1;

    // store created project tasks
    const createProjectTasks = (finished, title, description, priority, date, project) => {
        // const project = findProjectByName(projectName);
        if (!project) {
            // console.log(`Project "${projectName}" not found.`);
            return null;
        }

        const newTask = { id: projectCounter++, finished, title, description, priority, date };
        project.tasks.push(newTask);
        return newTask
    }

    // store created project pages
    const createProject = (name) => {
        const existingProject = projects.find(project => project.name === name);
        if (existingProject) {
            console.log(`A project with the name "${name}" already exists.`);
            return null;
        }
        const newProject = { 
            name, 
            tasks: [],
            pages: [] // Add a property to store page data
        };
        projects.push(newProject);
        return newProject;
    };

    // get project created names.
    const findProjectByName = (name) => {
        return projects.find(project => project.name === name);
    };

    // edit project tasks
    const editProjectTask = (projectName, taskId, newData) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
        const task = project.tasks.find(task => task.id === taskId);
        if (!task) {
            console.log(`Task with ID "${taskId}" not found in project "${projectName}".`);
            return null;
        }
        Object.assign(task, newData);
        return task;
    };

    // Delete projects.
    const deleteProject = (name) => {
        const projectIndex = projects.findIndex(project => project.name === name);
        if (projectIndex !== -1) {
            const deletedProject = projects.splice(projectIndex, 1);
            return deletedProject[0];
        } else {
            console.log(`Project "${name}" not found.`);
            return null;
        }
    };

    // Delete project Tasks
    const deleteTask = (projectName, taskId) => {
        const project = findProjectByName(projectName);
        if (!project) {
            console.log(`Project "${projectName}" not found.`);
            return null;
        }
        const taskIndex = project.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            const deletedTask = project.tasks.splice(taskIndex, 1);
            return deletedTask[0];
        } else {
            console.log(`Task with ID "${taskId}" not found in project "${projectName}".`);
            return null;
        }
    };

    return {
        projects,
        createProjectTasks,
        createProject,
        findProjectByName,
        editProjectTask,
        deleteProject,
        deleteTask,
    };
})();