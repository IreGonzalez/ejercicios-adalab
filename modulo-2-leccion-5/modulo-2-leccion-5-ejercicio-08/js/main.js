'use strict';

const button = document.querySelector('.js_button');
const button2 = document.querySelector('.js_button2');

// function handleClick() {
//     if (button.classList.contains(`button`)) {
//         button.classList.replace('button', 'clicked');
//     }
//     else if (button.classList.contains(`clicked`)) {
//         button.classList.replace('clicked', 'button');
//     }

// }
function handleClick(event) {
    let listener = event.currentTarget;
    if (listener.classList.contains('js_button')) {
        button.classList.toggle('clicked')
    }
    else if (listener.classList.contains('js_button2')) {
        button2.classList.toggle('clicked')

    }

}
button2.addEventListener('click', handleClick);
button.addEventListener('click', handleClick);