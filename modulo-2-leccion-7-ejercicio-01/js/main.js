'use strict';

function workWithMovies() {
    const movies = ['Amanece que no es poco', 'El señor de los anillos', 'Requiem por un sueño'];
    movies[3] = 'Origen';
    console.log(movies);

    movies[3] = 'Your name';
    console.log(movies);

    movies[0] = 'El lobo de Wall street';
    console.log(movies);
}

workWithMovies();