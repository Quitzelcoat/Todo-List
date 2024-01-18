export const upComing = () => {
    const mainContainer = document.querySelector(".mainContainer");
    const futurePage = document.createElement('div');
    const futureTitle = document.createElement('h2');

    futurePage.classList.add('todayPage');
    futurePage.setAttribute('id', 'mainContent');
    futureTitle.classList.add('todayTasksTitle');

    futureTitle.innerText = "Future Tasks";

    mainContainer.prepend(futurePage);
    futurePage.appendChild(futureTitle);
}