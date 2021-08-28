'use strict';

//declaro las variables para poder trabajar con ellas

const paragraph = document.querySelector('.js_paragraph');

//declaro la función que utilizaré cuando se realice la acción o evento

function changeBackgroundColor(event) {
    paragraph.classList.add('scroll')
}

//indico el evento que hará que se ejecute la función

addEventListener('scroll', changeBackgroundColor)