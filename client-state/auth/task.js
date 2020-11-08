'use strict'

let signin = document.getElementsByClassName('signin')[0];
signin.classList.add('signin_active');

const signinForm = document.getElementById('signin__form');

signinForm.addEventListener('submit', (e) => {

    let formData = new formData(signinForm);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    //request.addEvenListener('readystatechange', function() {
        //if (this.readyState == request.DONE && this.status == 200) {
            //let data = JSON.parse(this.responseText);
            //let output = '<ul>';
            //for (let key in data) {
            //  output += '<li><b>' + key + data[key] + '</b>: ' + data[key] + '<li>';
            //}
            //output += '</ul>';
            //document.getElementById('welcome').innerHTML = output;
     //   }
   // });
    //request.send(formData);
    e.preventDefault();
});
