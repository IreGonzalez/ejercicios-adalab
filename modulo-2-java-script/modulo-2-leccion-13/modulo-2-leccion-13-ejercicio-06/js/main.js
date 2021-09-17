'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

const parPins = users.filter(user => user.pin % 2 === 0);
console.log(parPins);


for (const usersParPins of parPins) {
    const accessUsers = usersParPins.name;
    console.log(`${accessUsers} : esta usuaria tiene acceso`);

}