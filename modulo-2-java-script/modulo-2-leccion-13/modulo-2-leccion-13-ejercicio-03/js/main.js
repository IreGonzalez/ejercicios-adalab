'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];
//poner el saludo por defecto

const user = users.name;
const usersSaludation = users.map(user => `'Bienvenida' ${user}`)

console.log(usersSaludation);

//Comprobar si es premium
for (const user of users) {
    const usersPremium = users.isPremium;
    if (usersPremium === true) {
        const usersPremiumSaludation = 
    }
    else { }
}