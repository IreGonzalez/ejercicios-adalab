'use strict';

const button = document.querySelector('.js_button');

// function handleClick() {
//     if (button.classList.contains(`button`)) {
//         button.classList.replace('button', 'clicked');
//     }
//     else if (button.classList.contains(`clicked`)) {
//         button.classList.replace('clicked', 'button');
//     }

// }
function handleClick() {
    button.classList.toggle('clicked')
}
button.addEventListener('click', handleClick);