'use strict';

//variables

const nameIn = document.querySelector ('.js-name');
const buttonAction = document.querySelector ('.js-button');

//funciones

function action (){
    console.log(`Hola ${nameIn}`)
}
//eventos

buttonAction.addEventListener ('click' , action)
