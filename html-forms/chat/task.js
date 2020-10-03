'use strict'

const openWidget = Array.from(document.querySelectorAll('.chat-widget__side'));
const chatShow = Array.from(document.querySelectorAll('.chat-widget'));

//для тображения времени
let now;
function date(now) {
    now = new Date().getHours() + ':' + new Date().getMinutes();
    return(now);
};

//ответы бота
let response =
['Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
'Где Ваша совесть?',
'Мы ничего не будем Вам продавать.',
'К сожалению, все операторы сейчас заняты, не пишите нам больше.',
'До свидания!',
'Нам не нужны клиенты.',
'Уходите. Просто уходите.',
'Мы вам перезвоним. Если будете себя хорошо вести.'];

function randomResponse(response) {
    let rand = Math.floor(Math.random() * response.length);
    return response[rand];
};


//открытие виджета
openWidget[0].addEventListener('click', function() {
    chatShow[0].classList.add('chat-widget_active');
});

//переписка
const messages = document.querySelector( '.chat-widget__messages' );
const textInput = document.getElementById('chat-widget__input');
textInput.addEventListener('keydown', function(event) {
if(event.code =='Enter') {
        
//сообщение пользователя
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${date(now)}</div>
        <div class="message__text">${textInput.value}</div>
        </div>
        `;
        textInput.value ='';

        //сообщение бота
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${date(now)}</div>
            <div class="message__text">${randomResponse(response)}</div>
        </div>
        `;
    };
});
