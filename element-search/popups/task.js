const showModalWindow = document.querySelector("#modal_main");
const closeModalWindow = document.querySelectorAll("modal__close");
const modalSuccess = document.querySelector("modal_success");

function closeButtonClick() {
    closeModalWindow = Array.from(closeModalWindow);
    let displayNone = closeModalWindow[1];
    displayNone.style.display = "none";
}

closeModalWindow.onclick = closeButtonClick;
