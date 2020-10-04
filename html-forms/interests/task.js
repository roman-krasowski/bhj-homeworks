'use strict'

//let checkbox = Array.from(document.querySelectorAll('.interest__check'));
let listElement = Array.from(document.querySelectorAll('.interest'));

/*
1) получаем все чекбоксы
2) находим чекбоксы, у которых есть дочерние чекбоксы
3) завешиваем функцию на чекбоксы пункта 2
*/

let parent = listElement[0].nextElementSibling;
let child = Array.from(parent.querySelectorAll('input'));

for (let i=0; i<child.length; i++) {
    child[i].addEventListener('click', function() {
        if(child[0].checked == true) {
            child[1].checked == true;
        };
    });
};
