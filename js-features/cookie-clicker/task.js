//Assignment 2
const clickInitial = document.getElementById("C");
const cookie = document.getElementById("cookie");
let clickNew;

cookie.onclick = function changeSize() {
    clickNew = clickInitial.textContent;
    clickNew = parseInt(clickNew, 10) + 1;
    clickInitial.textContent = clickNew;

    if (clickNew % 2 == 0) {
        cookie.width = 200;
        cookie.width = 200;
    } else {
        cookie.width = 250;
        cookie.width = 250;
    }
};
