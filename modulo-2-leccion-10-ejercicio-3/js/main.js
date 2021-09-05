'use strict';
const username = document.querySelector('.js-finder');
const buttonFinder = document.querySelector('.js-button');

function getUserInformation() {
    const login = username.value;
    fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(function (data) {
            const name = document.querySelector('.js-name');
            name.innerHTML = data.login

            const avatar = document.querySelector('.js-photo');
            avatar.src = data.avatar_url

            const repo = document.querySelector('.js-repo');
            repo.innerHTML = data.public_repos
        })
}
buttonFinder.addEventListener('click', getUserInformation);
