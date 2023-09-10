let ruta
const location = window.location.pathname
const host = '/puntoNet/'

if(location === "/index.html" || location === "/puntoNet/index.html") {
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
                            <img src="${ruta}/assets/iconos/home.svg" alt="" class="nav__imgIco">
                            Home
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/list-box.svg" alt="" class="nav__imgIco">
                            Historia
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/biografia.svg" alt="" class="nav__imgIco">
                            Biografías
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/cd.svg" alt="" class="nav__imgIco">
                            Sistemas
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/folder-tree.svg" alt="" class="nav__imgIco">
                            Tabla evolutiva
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${host}pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/bibliografia.svg" alt="" class="nav__imgIco">
                            Bibliografía
                        </a>
                    </li>
                </ul>
                `
