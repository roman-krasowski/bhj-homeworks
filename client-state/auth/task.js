'use strict'

let signin = document.getElementById('signin');
let signinForm = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');

//проверяет, был ли ранее пользователь авторизован
if(localStorage.getItem('authUser') !== null) {
    welcome.classList.add('welcome_active');
    welcome.textContent += localStorage.getItem('authUser');
} else {
    signin.classList.add('signin_active');
}

//если пользватель не был ранее авторизован
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = new FormData(signinForm);

//данные формы отпарвляются на сервер
    let xhr = new XMLHttpRequest();
    console.log(xhr);
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
        xhr.send(form);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                let response = JSON.parse(xhr.responseText);
                if(response.success === true) {
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    localStorage.removeItem('authUser');
                    welcome.textContent += response.user_id;
                    localStorage.setItem('authUser', response.user_id);
                } else {
                    alert('Неверный логин/пароль');
                }
            }
        }
});

//localStorage.removeItem('authUser');
