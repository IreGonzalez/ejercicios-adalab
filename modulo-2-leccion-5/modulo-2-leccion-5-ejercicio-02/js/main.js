'use strict';

//variables

const nameIn = document.querySelector('.js-name');
const buttonAction = document.querySelector('.js-button');

//funciones

function action(event) {
    event.preventDefault();
    console.log(`Hola ${nameIn.value}`)
}
//eventos

buttonAction.addEventListener('click', action)
