'use strict'

const loader = document.getElementById('loader');

const fxRate = document.getElementById('items');
let fxRateItem = document.getElementsByClassName('item')[0];
let itemCode = document.getElementsByClassName('item__code')[0];
let itemValue = document.getElementsByClassName('item__value')[0];

//создает запрос на данные и парсит
let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
    fxRateItem.remove();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            let valuteArray = JSON.parse(xhr.response).response.Valute;

//генерирование и вставка HTML
            for(let key in valuteArray) {
                itemCode.textContent = key;
                let amountArray = valuteArray[key];
                itemValue.textContent = amountArray.Value;
                fxRate.appendChild(fxRateItem.cloneNode(true));
                fxRateItem.remove();
            }; 
    };
        loader.classList.remove('loader_active');
    };
