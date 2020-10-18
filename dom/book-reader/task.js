'use strict'

let book = Array.from(document.getElementsByClassName('book'))[0];
let font = Array.from(document.querySelectorAll('.font-size'));
let color = Array.from(document.querySelectorAll('.book__control_color > .color'));
let background = Array.from(document.querySelectorAll('.book__control_background > .color'));

function stopLink(event) {
    event.preventDefault();
  };

for(let i=0; i<font.length; i++) {
    font[i].addEventListener('click', stopLink);
    font[i].addEventListener('click', () => {
        let active = font.findIndex(s => s.classList.contains('font-size_active'));
        font[active].classList.remove('font-size_active');
        font[i].classList.add('font-size_active');

        if(font[i].classList.contains('font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else if (font[i].classList.contains('font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
        };
    });
};

for(let i=0; i<color.length; i++) {
    color[i].addEventListener('click', stopLink);
    color[i].addEventListener('click', function() {
      let active = color.findIndex(c => c.classList.contains('color_active'));
      color[active].classList.remove('color_active');
      color[i].classList.add('color_active');
      
      if(color[i].classList.contains('color_gray')) {
          book.classList.remove('book_color-whitesmoke')
          book.classList.add('book_color-gray');
      } else if (color[i].classList.contains('color_whitesmoke')) {
          book.classList.remove('book_color-gray');
          book.classList.add('book_color-whitesmoke');
      } else {
          book.classList.remove('book_color-gray');
          book.classList.remove('book_color-whitesmoke')
      }
    });
};

for(let i=0; i<background.length; i++) {
    background[i].addEventListener('click', stopLink);
    background[i].addEventListener('click', function() {
    let active = background.findIndex(b => b.classList.contains('color_active'));
    background[active].classList.remove('color_active');
    background[i].classList.add('color_active');

    if(background[i].classList.contains('color_gray')) {
        book.classList.remove('color_black')
        book.classList.add('color_gray');
    } else if (background[i].classList.contains('color_black')) {
        book.classList.remove('color_gray');
        book.classList.add('color_black');
    } else {
        book.classList.remove('color_gray');
        book.classList.remove('color_black')
    }
    });
};
