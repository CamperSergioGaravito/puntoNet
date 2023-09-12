import {navTemplate,footerTemplate,contBtnsAuxTemplate} from './templates.js';

let intervalo = undefined

/* nav */
const nav = document.getElementById('nav')
const header = document.getElementById('header')
const footer = document.getElementById('footer')
const contBtns = document.getElementById('contBtnsAux')
nav.innerHTML = navTemplate
footer.innerHTML = footerTemplate
contBtns.innerHTML = contBtnsAuxTemplate

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

const printPdf = document.getElementById('printPdf')
printPdf.addEventListener('click', () => {
    window.print()
})


