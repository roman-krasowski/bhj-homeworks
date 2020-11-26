
'use strict'
let checkbox = Array.from(document.querySelectorAll('.interest__check'));
let element = Array.from(document.getElementsByClassName('interest'));
let parent = document.getElementsByClassName('interests_active');

let parents =[];
let childs = [];

for(let i=0; i<element.length; i++) {
    if(element[i].closest('.interests_active')) {
        childs.push(element[i]);
        element[i].addEventListener('click', () => {
            let parent = element[i].closest('.interests_active');
            parent = parent.closest('.interest');
            parent = parent.querySelector('.interest__check');

            if(element[i].checked = true) {
                parent.indeterminate = true;
            } else {
                parent.checked = false;
            }
        });
    } else {
        parents.push(element[i]);
    }
}

// console.log(childs);
// console.log(parents);
