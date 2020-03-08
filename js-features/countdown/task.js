//Assigment 1
const countdown = function() {
    let timerStart = document.getElementById("timer");
    timer.textContent -= 1;

    if (timer.textContent < 0) {
        alert("Вы победили в конкурсе!");
    }
}

setInterval(countdown, 1000);
