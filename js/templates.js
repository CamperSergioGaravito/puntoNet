console.log(window.location)
let ruta
const location = window.location.pathname
let host;

if(location === "/puntoNet/") {
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
                        <a href="../index.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/home.svg" alt="" class="nav__imgIco">
                            Home
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/historia.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/list-box.svg" alt="" class="nav__imgIco">
                            Historia
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/biografia.svg" alt="" class="nav__imgIco">
                            Biografías
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/cd.svg" alt="" class="nav__imgIco">
                            Sistemas
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/folder-tree.svg" alt="" class="nav__imgIco">
                            Tabla evolutiva
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/bibliografia.svg" alt="" class="nav__imgIco">
                            Bibliografía
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
