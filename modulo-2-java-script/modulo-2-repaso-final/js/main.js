'use strict';

const palette = document.querySelector('.js-palette');
const paletteItem = document.querySelector('.js-item');

let palettesData = [];
function paintPalettes() {
    for (const palette of palettesData) {
        html += `<li`

    }
}

fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then(response => response.json())
    .then(palettesData => {
        console.log(palettesData.palettes)
    });
;