'use strict'
/*
Логика:
1) получаем элементы, для которых необходима подсказка
2) берем текст подсказки из полученных элементов
3) создаем div, в которм будет располагаться подсказка и присваем ей существующий класс .tooltip
4) добавляем обработчик события, вставляющий созданные элементы в DOM
*/

let elem = Array.from(document.querySelectorAll('.has-tooltip'));
let title;
let tip;

for (let i=0; i<elem.length; i++) {
    title = elem[i].getAttribute('title');
    tip = document.createElement('div');
    let text = document.createTextNode(title);
    tip.classList.add('tooltip');
    tip.append(text);
    elem[i].innerHTML += tip[i];
    elem[i].append(tip[i]);

    console.log(tip);
};
