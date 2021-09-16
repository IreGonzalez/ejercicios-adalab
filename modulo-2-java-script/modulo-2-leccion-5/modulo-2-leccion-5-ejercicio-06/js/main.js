'use strict';

let input = document.querySelector('.js_input');

function listener(event) {
    const value = event.currentTarget.value;
    console.log(value);
}
input.addEventListener('keyup', listener);