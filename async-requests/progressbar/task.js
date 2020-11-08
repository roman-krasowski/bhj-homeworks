'use strict'
const progress = document.getElementById('progress');
let fileInput = document.getElementsByTagName('input')[0];

//данные для проверки подгрузки файла
fileInput.addEventListener("change", () => {
    for(let i=0; i<fileInput.files.length; i++) {
        console.log("Filename: " + fileInput.files[i].name);
        console.log("Type: " + fileInput.files[i].type);
        console.log("Size: " + fileInput.files[i].size + " bytes");
    };
});

fileInput.addEventListener('submit', (e) => {
    let form = new FormData();
    form.append('file', fileInput.files[0]);
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    xhr.send(form);
    xhr.onload = function() {
        console.log('The file has been uploaded');
    };

    e.preventDefault();
});
