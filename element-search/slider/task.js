'use strict'

let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let leftArrow = Array.from(document.getElementsByClassName('slider__arrow_prev'));;
let rightArrow = Array.from(document.getElementsByClassName('slider__arrow_next'));

let clickCount = 0;

//добаввляет класс slider__item_active при клике назад
function prevSlide() {
    clickCount -=1;
    if (clickCount < 0) {
        clickCount = sliderItem.length - 1;
        console.log(clickCount);
        sliderItem[clickCount].classList.add('slider__item_active');
    } else {
        sliderItem[clickCount].classList.add('slider__item_active');
    };
};

//добаввляет класс slider__item_active при клике вперед
function nextSlide() {
    clickCount +=1;
    if (clickCount < sliderItem.length) {
        sliderItem[clickCount].classList.add('slider__item_active');
    } else {
        clickCount = 0;
        sliderItem[clickCount].classList.add('slider__item_active');
    };
};

//удаляет класс slider__item_active у всех элеменов слайдера
function removeClass() {
    for (let i=0; i<sliderItem.length; i++) {
        if (sliderItem[i].classList.contains('slider__item_active')) {
            sliderItem[i].classList.remove('slider__item_active');
        };
    };
};

leftArrow[0].addEventListener('click', removeClass);
leftArrow[0].addEventListener('click', prevSlide);

rightArrow[0].addEventListener('click', removeClass);
rightArrow[0].addEventListener('click', nextSlide);
