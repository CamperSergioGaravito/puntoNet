console.log(window.location)
let ruta
switch(window.location.pathname) {
    case "/index.html":
        ruta = './assets'
    case "/pages/construccion.html":
        ruta = '../assets'
}

export const navTemplate = //html
                `
                <ul class="nav__ul">
                    <li class="nav__li">
                        <a href="../index.html" class="nav__a">
                            <img src="${ruta}/iconos/home.svg" alt="" class="nav__imgIco">
                            Home
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/iconos/list-box.svg" alt="" class="nav__imgIco">
                            Historia
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/iconos/biografia.svg" alt="" class="nav__imgIco">
                            Biografías
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/iconos/cd.svg" alt="" class="nav__imgIco">
                            Sistemas
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/iconos/folder-tree.svg" alt="" class="nav__imgIco">
                            Tabla evolutiva
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="../pages/construccion.html" class="nav__a">
                            <img src="${ruta}/iconos/bibliografia.svg" alt="" class="nav__imgIco">
                            Bibliografía
                        </a>
                    </li>
                </ul>
                `