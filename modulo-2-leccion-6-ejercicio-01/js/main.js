'use strict'

const placeToAdalaber1 = document.querySelector('.js-adalaber1');
const placeToAdalaber2 = document.querySelector('.js-adalaber2');

let adalaberName = '';
let adalaberAge = '';
let adalaberJob = '';

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

function infoAdalaber1() {
    adalaberName = adalaber1.name;
    adalaberAge = adalaber1.age;
    adalaberJob = adalaber1.job;
    return `Mi nombre es ${adalaberName}, tengo ${adalaberAge} y soy ${adalaberJob}`
}

function infoAdalaber2() {
    adalaberName = adalaber2.name;
    adalaberAge = adalaber2.age;
    adalaberJob = adalaber2.job;
    return `Mi nombre es ${adalaberName}, tengo ${adalaberAge} y soy ${adalaberJob}`
}