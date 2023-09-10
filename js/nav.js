console.log(window.location)
let ruta = "/puntoNet/"

export const navTemplate = //html
                `
                <ul class="nav__ul">
                    <li class="nav__li">
                        <a href="${ruta}index.html" class="nav__a">
                            <img src="${ruta}assets/iconos/home.svg" alt="" class="nav__imgIco">
                            Home
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${ruta}/pages/construccion.html" class="nav__a">
                            <img src="${ruta}/assets/iconos/list-box.svg" alt="" class="nav__imgIco">
                            Historia
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${ruta}pages/construccion.html" class="nav__a">
                            <img src="${ruta}assets/iconos/biografia.svg" alt="" class="nav__imgIco">
                            Biografías
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${ruta}pages/construccion.html" class="nav__a">
                            <img src="${ruta}assets/iconos/cd.svg" alt="" class="nav__imgIco">
                            Sistemas
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${ruta}pages/construccion.html" class="nav__a">
                            <img src="${ruta}assets/iconos/folder-tree.svg" alt="" class="nav__imgIco">
                            Tabla evolutiva
                        </a>
                    </li>
                    <li class="nav__li">
                        <a href="${ruta}pages/construccion.html" class="nav__a">
                            <img src="${ruta}assets/iconos/bibliografia.svg" alt="" class="nav__imgIco">
                            Bibliografía
                        </a>
                    </li>
                </ul>
                `
