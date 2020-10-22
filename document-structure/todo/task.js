'use strict'

let input = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');
const addTask = document.getElementsByTagName('button')[0];

addTask.addEventListener('click', stopLink);
addTask.addEventListener('click', () => {
    let text = document.createTextNode(input.value);
    
    //task
    let task = document.createElement('div');
    task.classList.add('task');
    
    //task title
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.append(text);
    
    taskList.appendChild(task);
    task.appendChild(taskTitle);
    task.insertAdjacentHTML('beforeEnd', `<a href="#" class="task__remove">&times;</a>`);
    console.log(taskList);

    input.value = '';

    let removeTask = Array.from(document.querySelectorAll('.task__remove'));
    for(let i=0; i<removeTask.length; i++) {
      removeTask[i].addEventListener('click', () => {
        taskList.removeChild(task);
      });
    };

});

//запрет стандартного действия (переход по ссылке)
function stopLink(event) {
  event.preventDefault();
};
