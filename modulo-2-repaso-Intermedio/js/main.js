'use strict';
//traer a js el h1 donde se pintará la elección
//traer a js el body para que cambiemos la clase según el numero aleatrio
//traer el botón de update para que genere el numero aleatorio
const placeToFace = document.querySelector('.js_face');
const main = document.querySelector('.js_main');
const buttonToGenerateColor = document.querySelector('.js_button');
const moodSelect = document.querySelector('.js_mood');

//genera un nº aleatorio
function numberGenerator(event) {
    event.preventDefault();
    return console.log(Math.floor(Math.random() * 100));
}

//según sea par o impar se pondrá uno u otro fondo 
//No funciona no se por qué
function changeBackground(event) {
    event.preventDefault();
    if (numberGenerator % 2 === 0) {
        main.classList.remove('background_orange');
        main.classList.add('background_yellow');
    }
    else {
        main.classList.remove('background_yellow');
        main.classList.add('background_orange');
    }
}
//Al elegir un mood cambia la cara
function changeFace() {
    const face = moodSelect.Value
    placeToFace.innerHTML = face;
}
//unificamos las funciones 
function handleGenerator() {
    numberGenerator();
    changeFace();
    changeBackground();
}

//llamamos la función al hacer click
buttonToGenerateColor.addEventListener('click', handleGenerator);