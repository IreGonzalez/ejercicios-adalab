'use strict';
const button = document.querySelector('.js_button');

function listener(event) {
    console.log(event)
}

button.addEventListener('click', listener);

//La propiedad type que aàrece, creo que es un método