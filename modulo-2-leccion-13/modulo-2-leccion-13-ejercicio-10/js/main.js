'use strict';
const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

//Encontrar el nombre de la usuaria que tiene asociada la incidencia
const impact = users.find(user => user.pin === 5232);
console.log(impact.name);

//Eliminarla del array
const userToErase = users.findIndex(user => user.pin === 5232);
console.log(userToErase);


users.splice(userToErase, 1);
console.log(users);
