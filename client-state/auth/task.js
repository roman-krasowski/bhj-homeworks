'use strict'

let signin = document.getElementById('signin');
signin.classList.add('signin_active');
let signinForm = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');

//введенные юзером логин и пароль
let login = document.getElementsByName('login');
let password = document.getElementsByName('password');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    login = Array.from(login)[0].value;
    password = Array.from(password)[0].value;

//введенные юзером данные передаются в форму    
    let form = new FormData();
    form.append('login', login);
    form.append('password', password);
    
//данные формы отпарвляются на сервер
    let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
        xhr.send(form);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                let response = JSON.parse(xhr.responseText);
                if(response.success === true) {
                    console.log(response.user_id);
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    welcome.textContent += response.user_id;
                } else {
                    alert('Неверный логин/пароль');
                    console.log(login);
                }
            }
        }
});
