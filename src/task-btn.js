export const dialogWork = () => {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector(".newTaskBtn");
  const closeButton = document.querySelector(".addBtn");
  
  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });
  
  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}

function showDialogData() {

}