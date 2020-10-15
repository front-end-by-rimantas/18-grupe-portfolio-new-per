"use strict";

const header = document.querySelector('header');
const navLink = document.querySelectorAll('.nav-a');
const headerImg = document.querySelector('.nav-bar .img');

window.addEventListener("scroll", (e) => {

    let top = window.scrollY;

    if (top >= 500) {
        header.classList.add('active');

        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.add('nav-b')
        };

        headerImg.classList.add('logo2');

    } else {
        header.classList.remove('active');

        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('nav-b')
        };

        headerImg.classList.remove('logo2');
    }
});
