//Assigment 1
const countdown = function() {

    let timerStart = document.getElementById("timer");

    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        timer = 60;
        return timerStart.innerHTML = timer;
    } else {
         timer.textContent -= 1;
    }
}

setInterval(countdown, 1000);
