import { nav } from '../../data/header.js';
function renderHeader() {
    let HTML = '';

    HTML = `<div class="header">
        <nav class="nav-bar col-12">
            <div class="img"></div>
            <div class="nav-links"></div>
            <div class="menu-btn">
                <i class="fa fa-bars"></i>
            </div>
        </nav>
    </div>`;

    return document.querySelector('header').innerHTML = HTML;
}

function renderNav(nav) {
    let HTML = '';

    // nav.array.forEach(element => {
    //     HTML += `<a class="nav-a" href="#${element}">${element}</a>`
    // });

    for (let i = 0; i < nav.length; i++) {
        HTML += `<a class="nav-a" href="#${nav[i]}">${nav[i]}</a>`
    }

    return document.querySelector('.nav-links').innerHTML = HTML;
}



renderHeader();
renderNav(nav);

const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.nav-links');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuNav.classList.add('open');
        menuNav.style.display = "flex"
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuNav.classList.remove('open');
        menuNav.style.display = "none"
        menuOpen = false;
    }
});

export { renderHeader, renderNav }