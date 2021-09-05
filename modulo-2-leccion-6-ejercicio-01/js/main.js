'use strict'

const placeToAdalaber1 = document.querySelector('.js-adalaber1');
const placeToAdalaber2 = document.querySelector('.js-adalaber2');

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'Periodista'
}

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'Actriz'
}

function infoAdalaber1(a, b, c) {
    placeToAdalaber1.innerHTML = `Mi nombre es ${a}, tengo ${b} y soy ${c}.`
}
function infoAdalaber2(a, b, c) {
    placeToAdalaber2.innerHTML = `Mi nombre es ${a}, tengo ${b} y soy ${c}.`
}

infoAdalaber1(adalaber1.name, adalaber1.age, adalaber1.job);
infoAdalaber2(adalaber2.name, adalaber2.age, adalaber2.job);
