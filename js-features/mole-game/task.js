//Assignment 3
let score;

function getHole(index) {
    let activeHole = document.getElementById(`hole${index}`);
    activeHole = activeHole.className;

        activeHole.onclick = function getHole(index) {
            score += 1;
        }
}

if (score == 10) {
    alert('Вы выиграли');
}
