import { complete } from "./complete-task";

export const today = () => {
    const mainContainer = document.querySelector(".mainContainer");
    const todayTitle = document.createElement('div');
    const todayPage = document.createElement('div');
    const todayTasksTitle = document.createElement('h2');
    const completeTask = document.createElement('div');

    todayPage.setAttribute('id', 'mainContent');
    todayPage.classList.add('todayPage');
    todayTitle.className = "todayTitle";
    todayTasksTitle.classList.add('todayTasksTitle');
    completeTask.className = "completeTask";

    todayTasksTitle.innerText = "Today Tasks";

    mainContainer.prepend(todayPage);
    todayPage.appendChild(todayTitle);
    todayPage.appendChild(completeTask);
    todayTitle.appendChild(todayTasksTitle);
};