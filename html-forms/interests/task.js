'use strict'

//let child = Array.from(document.querySelectorAll('ul.interests_active > li > label > input'));

let parent = [document.querySelector('ul > li'), document.querySelector('ul > li').nextElementSibling]; //сдалать циклом
let child =[];

//определение дочерних элементов
for (let i=0; i<parent.length; i++) {
    child = parent[i].getElementsByTagName('input');
    parent[i] = parent[i].querySelector('label > input');
};

//добавление true на дочерние чекбоксы при нажатии родительского
for(let i=0; i<parent.length; i++) {
    parent[i].addEventListener('click', function() {
        if(parent[i].checked) {
            child[1].checked = true;
        } else {
            child[i].checked = false;
        };
    });;
};

//добавление true родительский чекбокс при нажатии дочерних

console.log(child);
console.log(parent);
