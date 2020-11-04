'use strict'

let text = document.getElementById('editor');
text.addEventListener('input', () => {
    localStorage.setItem('savedText', text.value);
});
let savedText = localStorage.getItem('savedText');
text.value = savedText;
