'use strict'
const checkbox = document.querySelectorAll('.interest__check');


for(let i=0; i<checkbox.length; i++) {
    checkbox[i].addEventListener('click', (event) => {
        let target = event.target;
        let childLi = target.closest('li').querySelectorAll('ul li');

        if(childLi.length > 0) {
            for(let j=0; j<childLi.length; j++) {
                childLi[j].querySelector('input').checked = target.checked;
            }
        }
        
        upListChecked(target);

    })
}

function upListChecked(target) {
    let parentUlChild = target.closest('ul');
    let childInput = parentUlChild.querySelectorAll('input');
    let parentLiUl = parentUlChild.closest('li');
    
    if(parentLiUl) {
        let inputParentUlLi = parentLiUl.querySelector('input');
        let array = [];
        for(let i=0; i<childInput.length; i++) {
            array.push(childInput[i].checked);
        }

        inputParentUlLi.checked = array.every(Boolean);
        inputParentUlLi.indeterminate = !array.every(Boolean) && array.some(Boolean);

        upListChecked(inputParentUlLi);
    }

}
