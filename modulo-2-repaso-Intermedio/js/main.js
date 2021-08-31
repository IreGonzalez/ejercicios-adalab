'use strict';
//traer a js el h1 donde se pintará la elección
//traer a js el body para que cambiemos la clase según el numero aleatrio
//traer el botón de update para que genere el numero aleatorio
const placeToFace = document.querySelector('.js_face');
const body = document.querySelector('.js_body');
const buttonToGenerateColor = document.querySelector('.js_button');
const moodSelect = document.querySelector('.js_mood');

//genera un nº aleatorio
function numberGenerator(event) {
    event.preventDefault();
    return console.log(Math.floor(Math.random() * 100));
}

buttonToGenerateColor.addEventListener('click', numberGenerator)