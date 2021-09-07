'use strict'

const placeToAdalaber1 = document.querySelector('.js-adalaber1');
const placeToAdalaber2 = document.querySelector('.js-adalaber2');

const adalaber1 = {}
adalaber1.name = 'Susana',
    adalaber1.age = 34,
    adalaber1.job = 'Periodista';
adalaber1.showBioAdalaber1 = function () {
    return 'Mi nombre es' + this.name + ', tengo' + this.age + 'y soy' + this.job;
};

const adalaber2 = {}
adalaber2.name = 'Rocío',
    adalaber2.age = 25,
    adalaber2.job = 'Actriz';

adalaber2.showBioAdalaber2 = function () {
    return 'Mi nombre es' + this.name + ', tengo' + this.age + 'y soy' + this.job;
};

placeToAdalaber1.innerHTML = adalaber1.showBioAdalaber1();
placeToAdalaber2.innerHTML = adalaber2.showBioAdalaber2();