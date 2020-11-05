'use strict'

let modal = Array.from(document.getElementsByClassName('modal'))[0];

//console.log(document.cookie);
//document.cookie = 'modalStatus=open';
//document.cookie = 'modalStatus=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';

if(document.cookie != 'modalStatus=closed') {
    modal.classList.add('modal_active');
};

let modalClose = document.getElementsByClassName('modal__close_times');
modalClose = Array.from(modalClose);
for(let i=0; i<modalClose.length; i++) {
    modalClose[i].addEventListener('click', function() {
        this.closest('.modal').classList.remove('modal_active');
        document.cookie = 'modalStatus=closed';
    });

};

/*
// Если куки на странице не одна, то нужно вызвать функцию ниже для получения значения
//куки с именем modalStatus; как передать аргумент в функцию ниже (где сейчас проставлено modalStatus) и запустить ее?

const getCookie = (modalStatus) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + modalStatus + "=");
    if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
    }
    getCookie(modalStatus);
    */
