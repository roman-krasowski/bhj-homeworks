'use strict'

let text = Array.from(document.getElementsByClassName('rotator__case'));
let dataAttr = text[0].getAttribute('data-color');
let speed;

function switchText() {
    let rand = Math.floor(Math.random() * text.length);
    for(let i=0; i<text.length; i++) {
        text[i].classList.remove('rotator__case_active');
        text[i].setAttribute('style', '');
    };
    let fontColor = text[rand].getAttribute('data-color');
    speed = text[rand].getAttribute('data-speed');
    text[rand].style.color = fontColor;
    text[rand].classList.toggle('rotator__case_active');
    return speed;
    
};

setInterval(switchText, 1000);
