'use strict'

let activeHole = document.getElementsByClassName('hole_has-mole');
let hole = document.getElementsByClassName('hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let score = 0;
let miss = 0;

for (let i=1; i<hole.length; i++) {
    hole[i].addEventListener('click', function() {
        
        if (hole[i].className.includes('hole_has-mole')) {
        dead.textContent = score+=1;
            if (score == 10) {
                alert('Вы выиграли!');
                lost.textContent = 0;
                dead.textContent = 0;
                score =0;
                miss = 0; 
            }
        } else {
        lost.textContent = miss+=1
            if (miss == 5) {
                alert('Крот Вас уделал :(');
                lost.textContent = 0;
                dead.textContent = 0;
                score = 0;
                miss = 0; 
            }
        };
    });
};
