'use strict'

let tabs = Array.from(document.querySelectorAll('.tab'));
let contents = Array.from(document.querySelectorAll('.tab__content'));

for (let i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
    let tabActive = tabs.findIndex(t => t.classList.contains('tab_active'));
    tabs[tabActive].classList.remove('tab_active');
    tabs[i].classList.add('tab_active');

    let contentActive = contents.findIndex(c => c.classList.contains('tab__content_active'));
    contents[contentActive].classList.remove('tab__content_active');
    contents[i].classList.add('tab__content_active');
    });
};
