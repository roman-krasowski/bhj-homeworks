'use strict'
let checkbox = Array.from(document.querySelectorAll('.interest__check'));
let parent;

//находим чекбоксы-потомки
for(let i=0; i<checkbox.length; i++) {
    if(checkbox[i].closest('.interests_active')) {
        //находим родительские чекбоксы
        parent = checkbox[i].closest('.interests_active');
        parent = parent.closest('.interest');
        parent = parent.querySelector('.interest__check');
        
        checkbox[i].addEventListener('click', () => {
            if(checkbox[i].checked = true) {
                parent.indeterminate = true;

            } else if(parent.checked = true) {
                for(let i=0; i<checkbox.length; i++) {
                    checkbox[i].checked = true;
                }
            } //+вариант, когда нажаты все потомки и родитель должен быть также нажат?
        }); 
    }
}
