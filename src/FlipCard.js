class FlipCard extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .contact{
                height:100vh;
                position:relative;
                width:100%;
                margin-bottom: 35em;
            }
            .contact-map{
                position:absolute;
                width:100%;
                height:75rem;
                z-index: -1;
            }
            .contact-map iframe{
                width:100%;
                height:50%;
            }
            .contact-card{
                height: 45vh;
                max-height: 45vh;
                position: relative;
                top: 25%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 35%;
            }
           
            .contact-card .contact-card-front{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                width: 100%;  
                backface-visibility: hidden;
                padding: 3rem 2rem;
                transform: perspective(1000px) rotateY(0deg);
                transition: 1s;
            }
           
            .contact-card.active .contact-card-front{
                transform: perspective(1000px) rotateY(180deg);
            }
           
            .contact-card .contact-card-back{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                top: 0;  
                left: 0;
                width: 100%;  
                height: 100%;
                padding: 3rem 2rem;
                backface-visibility: hidden;
                transform: perspective(1000px) rotateY(-180deg);
                transition: 1s;
            }
            .contact-card.active .contact-card-back{
                transform: perspective(1000px) rotateY(0deg);
            }
            .contact-close-button{
                width:80%;
                margin-left:10%;
                height:20%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            button{
                width:100%;
                height:70%;
                align-items: center;
                background-color: hsl(207, 76%, 53%);
                border:none;
                border-radius:5px;
                color:white;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 1.2rem;
                line-height: 1.15;
                margin: 0;
            }

        </style>
        <div class="contact">
            <div class="contact-map"><iframe src="https://www.openstreetmap.org/export/embed.html?bbox=2.636353969573975%2C39.57497719823338%2C2.6398944854736333%2C39.57678410330158&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/39.57588/2.63812">Ver mapa más grande</a></small>
            </div>
            <div class="contact-card active">
                <div class="contact-card-front">
                    <slot name="front"></slot>
                </div>
                <div class="contact-card-back">
                    <slot name="back"></slot>
                    <div class="contact-close-button flip-button">
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('flipcard-component', FlipCard);