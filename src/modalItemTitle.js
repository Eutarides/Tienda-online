class ModalItemTitle extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-item-title{
                display:flex;
                flex-direction: column;
                align-items: left;
                width:100%;
                position:relative;
                height:15%;
            }
            h2{
                position:absolute;
                top:40%;
                text-transform: uppercase;
                font-size: 2.5rem;
                color:hsl(0, 0%, 21%);
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            h3{
                position:absolute;
                top:0%;
                text-transform: uppercase;
                font-size: 1.4rem;
                font-weight:370;
                color: grey;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            h4{
                position:absolute;
                top:100%;
                text-transform: uppercase;
                font-weight:100;
                font-family: "Poppins", sans-serif;
                margin: 0;
                text-decoration: none;
                color: hsl(0, 0%, 34%);
            }
        </style>
        <div class="modal-item-title">
            <h2>Plazas Limitadas</h2>
            <h3>Curso Aerografía</h3>
            <h4>27 y 28 de enero de 2024</h4>
        </div>
        `;

    }
}

customElements.define('modal-item-title-component', ModalItemTitle);