'use strict';

//declaramos las variables

const body = document.querySelector('.js_body');

//declaramos la función a realizar cuando surja el evento

function changeBackground(event) {
    if (event.key === 'r') {
        if (body.classList.contains('purple')) {
            body.classList.remove('purple');
        }
        body.classList.add('red');
    }
    else if (event.key === 'p') {
        if (body.classList.contains('red')) {
            body.classList.remove('red');
        }
        body.classList.toggle('purple');
    }
}

body.addEventListener('keydown', changeBackground);