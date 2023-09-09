import {navTemplate} from './nav.js';

/* nav */
const nav = document.getElementById('nav');
nav.innerHTML = navTemplate;

/* botón menú */
const btnMenu = document.getElementById('menu');
btnMenu.addEventListener('click', () => {
    if(nav.style.display === 'flex') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';
    }
})