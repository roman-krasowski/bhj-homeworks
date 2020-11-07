'use strict'

const loader = document.getElementById('loader');

const fxRate = document.getElementById('items');
let itemCode = document.getElementsByClassName('item__code')[0];
let itemValue = document.getElementsByClassName('item__value')[0];

//создаем запрос на данные
let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
//если запрос выполнен успешно
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            let valuteArray = JSON.parse(xhr.response).response.Valute;

//как вставить сгенерированные ниже ноды в HTML?
            for(let key in valuteArray) {
                console.log(fxRate.cloneNode(true));
                itemCode.textContent = key;
                let amountArray = valuteArray[key];
                itemValue.textContent = amountArray.Value;
            }; 
        };
        loader.classList.remove('loader_active');
    };
