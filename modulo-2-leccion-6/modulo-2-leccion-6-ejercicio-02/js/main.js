'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'Periodista',
    speak: km => `una maraton de ${km} kilómetros`
}

function run() {
    return console.log('Estoy corriendo ' + adalaber1.speak(50));
}

run();