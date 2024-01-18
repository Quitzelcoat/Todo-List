export const today = () => {
    const mainContainer = document.querySelector(".mainContainer");
    const todayPage = document.createElement('div');
    const todayTasksTitle = document.createElement('h2');

    todayPage.classList.add('todayPage');
    todayPage.setAttribute('id', 'mainContent');
    todayTasksTitle.classList.add('todayTasksTitle');

    todayTasksTitle.innerText = "Today Tasks";

    mainContainer.prepend(todayPage);
    todayPage.appendChild(todayTasksTitle);
}