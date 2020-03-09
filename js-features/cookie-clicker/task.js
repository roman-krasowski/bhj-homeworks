//Assignment 2
let clickInitial = document.getElementById("C");
const cookie = document.getElementById("cookie");
let clickNew;

function changeSize() {
    cookie.width = 400;
    cookie.width = 300;
    clickNew = clickInitial.textContent;
    clickNew = parseInt(clickNew, 10) + 1;
    clickInitial.textContent = clickNew;
};

cookie.onclick = changeSize;
