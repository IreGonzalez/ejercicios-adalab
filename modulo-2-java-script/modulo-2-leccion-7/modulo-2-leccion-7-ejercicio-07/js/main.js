'use strict'

const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'

    }
]

function countAdalabers() {
    const numberOfAdalabers = adalabers.length;
    return numberOfAdalabers;
}
console.log(`Hay ${countAdalabers()} Adalabers en clase`);

function averageAge() {
    let sum = 0;
    for (let members = 0; members <= adalabers.length - 1; members++) {
        let adalabersAge = adalabers[members].age;
        console.log(adalabersAge);
        sum = 

    }
}
console.log(averageAge);

// function theYoungest() {

// }

// function countDesigners() {

// }