export const complete = () => {
    const mainContainer = document.querySelector(".mainContainer");
    const completePage = document.createElement('div');
    const completeTitle = document.createElement('h2');

    completePage.classList.add('todayPage');
    completePage.setAttribute('id', 'mainContent');
    completeTitle.classList.add('todayTasksTitle');

    completeTitle.innerText = "Completed Tasks";

    mainContainer.prepend(completePage);
    completePage.appendChild(completeTitle);
}