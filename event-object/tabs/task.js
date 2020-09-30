'use strict'

let tab = Array.from(document.querySelectorAll('.tab'));
let content = Array.from(document.querySelectorAll('.tab__content'));

for(let i=0; i<tab.length; i++) {

    let arr = [tab[i].className]; //получаем массив из классов каждого элемента
    let activeNow = arr.indexOf('tab tab_active'); //определяем, какой элемент сейчас активный

    tab[i].addEventListener('click', function() {
        tab[activeNow].classList.remove('tab_active');
        content[activeNow].classList.remove('tab__content_active');
        tab[i].classList.add('tab_active');
        content[i].classList.add('tab__content_active');
    });
};
