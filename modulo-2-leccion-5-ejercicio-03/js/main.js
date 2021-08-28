'use strict'

const paragraph = document.querySelector('.js-paragraph');

//declaro la funcion que indica la acción de añadir un párrafo

function addParagraph(event) {
    return paragraph.innerHTML += paragraph.value;
}

//al pasar el cursor por ecima debe crear una línea de código en el html

paragraph.addEventListener('mouseover', addParagraph)