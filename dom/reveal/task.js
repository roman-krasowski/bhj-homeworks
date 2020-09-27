'use strict'

let advBlock = document.getElementsByClassName('reveal');
advBlock = Array.from(advBlock);
let blockTop;
let blockBottom;

for(let i=0; i<advBlock.length; i++) {
    window.addEventListener('scroll', function(){
        blockTop = advBlock[i].getBoundingClientRect().top;
        blockBottom = advBlock[i].getBoundingClientRect().bottom;
        if(blockTop < window.innerHeight && blockBottom < window.innerHeight) {
            advBlock[i].classList.add('reveal_active');
        } else {
            advBlock[i].classList.remove('reveal_active');
        }
    });     
};

//console.log(window.innerHeight); //высота окна браузера
//console.log(blockTop); // расстояние от верха блока до верха окна браузера
//console.log(blockBottom); // расстояние от низа блока до верха окна браузера
