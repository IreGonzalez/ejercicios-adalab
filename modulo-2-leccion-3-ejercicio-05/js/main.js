'use strict';

const text = document.querySelector('.js_text');
const title = document.querySelector('.js_title');
const paragraph = document.querySelector('.js_paragraph');

if (text.classList.contains('warning')) {
    paragraph.innerHTML = 'Tenga cuidado';
    title.innerHTML = 'AVISO';
} else if (text.classList.contains('error')) {
    paragraph.innerHTML = 'Ha surgido un error';
    title.innerHTML = 'ERROR';
}
else if (text.classList.contains('success')) {
    paragraph.innerHTML = 'Los datos son correctos';
    title.innerHTML = 'CORRECTO';
}
else {
    paragraph.innerHTML = 'NOTIFICACIÓN';
    title.innerHTML = 'Mensaje por defecto'
}