/* console.log(window.location) */
let ruta
const location = window.location.pathname
let host;

if(window.location.hostname.includes(".github.io")) {
    host = "https://campersergiogaravito.github.io/puntoNet/";
}
else {
    host = "../"
}

if(location === "/index.html" || location === "/puntoNet/index.html" || location === "/puntoNet/") {
    ruta = './'
}
else {
    ruta = '../'
}

export const navTemplate = //html
                `
                <ul class="nav__ul">
                    <li class="nav__li">
                        <a href="${host}index.html" class="nav__a">
                            <img src="${ruta}assets/iconos/home.svg" alt="" class="nav__imgIco">
                            Home
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/historia.html" class="nav__a">
                            <img src="${ruta}assets/iconos/list-box.svg" alt="" class="nav__imgIco">
                            Historia
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/infografia.html" class="nav__a">
                            <img src="${ruta}assets/iconos/bookmarks.svg" alt="" class="nav__imgIco">
                            Infografía
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/lenguajes.html" class="nav__a">
                            <img src="${ruta}assets/iconos/coding.svg" alt="" class="nav__imgIco">
                            Lenguajes
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/sistema-operativo.html" class="nav__a">
                            <img src="${ruta}assets/iconos/cd.svg" alt="" class="nav__imgIco">
                            Sistemas
                        </a>
                    </li>
                </ul>
                `

export const footerTemplate = //html
                            `
                            <div class="footer__contImg">
                                <img src="${ruta}assets/logoCampus.png" alt="logo Campuslands" class="footer__img">
                            </div>
                            <p class="footer__p">
                                Ésta es una página hecha como práctica para el área de software skills de Campus Lands
                            </p>
                            <p class="footer__p"> Sergio Garavito</p>
                            <p class="footer__p"> 2023</p>
                            `

export const contBtnsAuxTemplate = //html
                                `
                                <button class="contBtns__btn circulo" id="printPdf">
                                    <img src="${ruta}assets/md-print.svg" alt="botón subir" class="contBtns__btnImg">
                                </button>
                                <a href="#header" class="contBtns__btn">
                                    <img src="${ruta}assets/arrow-dropup-circle.svg" alt="botón subir" class="contBtns__btnImg">
                                </a>
                                <a href="#footer" class="contBtns__btn">
                                    <img src="${ruta}assets/arrow-dropdown-circle.svg" alt="botón subir" class="contBtns__btnImg">
                                </a>
                                `
