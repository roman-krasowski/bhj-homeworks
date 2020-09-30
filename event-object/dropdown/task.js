'use strict'

let dropMenu = document.querySelector('.dropdown__list');
let menu = document.querySelector('.dropdown__value');

//открытие меню
menu.addEventListener('click', function() {
        dropMenu.classList.add('dropdown__list_active');
    });

//добавление выбранного значения в меню
let menuText = document.querySelectorAll('.dropdown__link');
menuText = Array.from(menuText);
for(let i=0; i<menuText.length; i++) {
    menuText[i].closest('.dropdown__item').addEventListener('click', function() {
        menu.textContent = this.textContent;
        dropMenu.classList.remove('dropdown__list_active');
    });
    menuText[i].addEventListener('click', stopLink);   
};

//запрет стандартного действия (переход по ссылке)
function stopLink(event) {
    event.preventDefault();
  };
