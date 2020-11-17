'use strict'
let progress = document.getElementById('progress');
let fileInput = document.getElementById('form');

/*
//данные для проверки подгрузки файла
fileInput.addEventListener("change", () => {
    for(let i=0; i<fileInput.length; i++) {
        console.log("Filename: " + fileInput.files[i].name);
        console.log("Type: " + fileInput.files[i].type);
        console.log("Size: " + fileInput.files[i].size + " bytes");
    };
});
*/

fileInput.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total; 
      } 
        xhr.onload = function() {
        alert( 'Загружено на сервер');
    };

    xhr.send(formData);
});
