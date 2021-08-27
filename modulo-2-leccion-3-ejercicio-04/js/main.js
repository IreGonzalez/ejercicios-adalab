'use strict';

const ageDog = 15;

if (ageDog <= 1) {
    firstYear = ageDog * 15;
    console.log('La edad de tu perro equivale a 15 años de Humano');
} else if (ageDog > 1 && ageDog <= 2) {
    secondYear = 15 + (ageDog - 1) * 9;
    console.log('La edad de tu perro es de 24 años de humano');
} else {
    const ageDogHuman = 15 + 9 + (ageDog - 2) * 5;
    console.log(`La edad de tu perro es de ${ageDogHuman} años de humano`);
}