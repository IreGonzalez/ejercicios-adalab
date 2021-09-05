'use strict';
function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector(".js-img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}
function getAnotherDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector(".js-anotherImg");
            img.src = data.message;
            img.alt = "Otro perro";
        });
}

const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

const btn2 = document.querySelector(".js-anotherDog");
btn2.addEventListener("click", getAnotherDogImage);