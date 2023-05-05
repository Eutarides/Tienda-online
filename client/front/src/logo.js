class Logo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            img {
                object-fit: cover;
                max-width: 100%;
            }
            .header-logo{
                width:15%;
            }
        </style>
        <div class="header-logo">
            <picture>
                <a href="#"><img src="./images/Logo.webp" alt="Chromatic, vive tus colores."></a>
            </picture>
        </div>
        `;

    }
}

customElements.define('logo-component', Logo);