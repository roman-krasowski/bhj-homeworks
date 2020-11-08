'use strict'

const pollTitle = document.getElementById('poll__title');
const answersContainer = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            let id = JSON.parse(xhr.response).id;
            let poll = JSON.parse(xhr.response).data.title;
            let answers = JSON.parse(xhr.response).data.answers;
            pollTitle.textContent = poll;
            for(let i=0; i<answers.length; i++) {
                let answer = document.createElement('button');
                answer.textContent = answers[i];
                answersContainer.insertAdjacentElement('beforeend', answer);
                
                answer.addEventListener('click', function() {
                    alert('Спасибо, ваш голос засчитан!');

//выгрузка статистики с сервера и подсчет %
                    let stat = new XMLHttpRequest();
                            stat.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                            stat.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            stat.send('vote=' + id + '&answer=' + answers.indexOf(answer.textContent));
                            stat.onreadystatechange = function() {
                                if(stat.readyState === 4) {
                                    let statData = JSON.parse(stat.response).stat;
                                    let sumVotes;
                                    let statDataVotes = statData[i].votes;
                                    for(let i=0; i<statDataVotes.length; i++) {
                                        
                                        sumVotes += statDataVotes[i];
                                        /*
                                        let statDataAnswer = statData[i].answer;
                                        
                                        console.log(statDataAnswer);
                                        console.log(statDataVotes);
                                        
                                        */  
                                    };
                                    console.log(sumVotes);
                                };
                            }; 
                });
            };
        };
    };
