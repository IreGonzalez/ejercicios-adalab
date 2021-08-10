'use strict';

//variables
const text = document.querySelector('.js-title');
const button = document.querySelector('.js-button');

//función

function change () {
    text.innerHTML =  ('Mi primer click, ¡ole yo y la mujer que me parió!')
}

//evento

button.addEventListener('click', change)