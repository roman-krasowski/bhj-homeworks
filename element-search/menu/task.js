'use strict'

let menu =document.getElementsByClassName('menu');
menu = Array.from(menu);

let menuItem = document.querySelectorAll('.menu__link');
menuItem = Array.from(menuItem);

//останавливает действие по умолчанию (переход по ссылке)
function stopLink(event) {
  event.preventDefault();
};

for(let i=0; i<menuItem.length; i++) {
  menuItem[i].addEventListener('click', stopLink);
  menuItem[i].addEventListener('click', function() {
      let parentItem = menuItem[i].closest('.menu__item');
  
      if (parentItem.querySelector('ul').className = 'menu_sub') {
        parentItem.querySelector('ul').classList.add('menu_active');
      };
  });
};
