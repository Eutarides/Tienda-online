class Menu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>

            nav {
                display:block;
            }
            ul {
                display: flex;
                gap: 2rem;
                justify-content: space-between;
                list-style: none;
                padding-left: 0;
            }
            li {
                display: list-item;
                text-align: -webkit-match-parent;
                font-family: "Poppins", sans-serif;
                list-style: none;
                padding-left: 0;
            }
            a {
                color:hsl(0, 0%, 66%);
                font-size: 1rem;
                text-transform: uppercase;
                font-family: "Poppins", sans-serif;
                margin: 0;
                font-weight: 600;
                text-decoration: none;
                transition: 300ms;
                background-color: transparent;
            }
            .header-menu{
                width:100%;
            }
        </style>
        <div class="header-menu">
            <nav>
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">OBJETIVOS</a>
                    </li>
                    <li>
                        <a href="#">INFORMACIÓN</a>
                    </li>
                    <li>
                        <a href="#">NUESTRO EQUIPO</a>
                    </li>
                    <li>
                        <a href="#">CONTACTO</a>
                    </li>
                </ul>
            </nav>   
        </div>
        `;

    }
}

customElements.define('menu-component', Menu);