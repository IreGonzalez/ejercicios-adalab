//EJERCICIO 2.1
// const add = (a, b) => {
//     return (
//         a + b
//     )
// }

// console.log(add(5, 9));

//EJERCICIO 2.2
// const fs = require('fs');

// const myObject = {
//     user: "Mari Carmen",
//     email: "mari@gmail.com",
//     age: 28,
// };
// console.log(myObject);

// const handleWriter = (err) => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('the file has been saved');
//     }
// }

// fs.writeFile('./output.txt', JSON.stringify(myObject), handleWriter)

//EJERCICIO2.3

const fs = require('fs');
const read = require("./modulos/read.js")

const handleReader = (err, read) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('el texto es:');
    }
}

fs.readFile('./input-file.json', 'utf-8', read.handleReader)