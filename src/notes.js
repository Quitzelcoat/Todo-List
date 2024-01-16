export const notesPages = () => {
    const mainContainer = document.querySelector(".mainContainer");
    const notesPage = document.createElement('div');
    const notesTitle = document.createElement('h2');

    notesPage.classList.add('notesPage');
    notesPage.setAttribute('id', 'mainContent');
    notesTitle.classList.add('projectTitle');

    notesTitle.innerText = "Notes";

    mainContainer.prepend(notesPage);
    notesPage.appendChild(notesTitle);

}