'use strict'

let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

let modalClose = document.getElementsByClassName('modal__close');
modalClose = Array.from(modalClose);
for(let i=0; i<modalClose.length; i++) {
    modalClose[i].addEventListener('click', function() {
        modalMain.classList.remove('modal_active');
    });
};

let success = document.getElementsByClassName('show-success');
let modalSuccess = document.getElementById('modal_success');
success = Array.from(success);
for (let i=0; i<success.length; i++) {
    success[i].addEventListener('click', function() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });
}
