import {navTemplate,footerTemplate} from './templates.js';

let intervalo = undefined

/* nav */
const nav = document.getElementById('nav')
const header = document.getElementById('header')
const footer = document.getElementById('footer')
nav.innerHTML = navTemplate;
footer.innerHTML = footerTemplate

/* botón menú */
const btnMenu = document.getElementById('menu');
btnMenu.addEventListener('click', () => {
    if(nav.style.display === 'flex') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'flex';
        window.addEventListener('scroll', () => {
            nav.style.display = 'none';
        })
    }
})


