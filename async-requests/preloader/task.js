'use strict'

const fxRate = document.getElementById('items');
let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {

        let data = JSON.parse(this.responseText);

        let fx = data.response.Valute;
        for(let i=0; i<fx.length; i++) {
            console.log(i.CharCode);
            console.log(i.Value);
        };
        }; 
    };
