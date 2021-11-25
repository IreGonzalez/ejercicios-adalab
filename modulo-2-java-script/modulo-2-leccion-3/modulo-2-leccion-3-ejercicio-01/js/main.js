'use strict';
const img = document.querySelector('.js-img');

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
const userAvatar = '';

//const userAvatar ='http://www.fillmurray.com/300/300';

img.src = userAvatar || DEFAULT_AVATAR;