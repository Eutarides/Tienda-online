class Slider extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .slider{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                position: relative;
                height: 65vh;
                overflow: hidden;
                width:100%;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            .slider-title{
                position: absolute;
                text-align: center;
                left: 10%;
                top: 23%;
                z-index: 1001;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            h1{
                font-size: 3.5rem;
                color: rgb(255, 255, 255);
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
                text-align: center;

            }
            .slider-description{
                position: absolute;
                text-align: center;
                width: 50%;
                left: 5%;
                top: 40%;
                z-index:1001;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            p{
                color:rgb(255, 255, 255);
                font-size: 1.5rem;
                font-weight: 100;
                line-height: 160%;
                font-family: "Poppins", sans-serif;
                margin: 0;
                text-align: center;
            }
            .slider-button{
                position: absolute;
                border-radius: 35px;
                background-color:hsl(207, 76%, 53%);
                padding: 0.6rem 1rem;
                text-align: center;
                border:none;
                color: white;
                width:22%;
                left: 18%;
                z-index: 1001;
                top: 60%;
            }
            button{
                border-radius: 30px;
                background-color: hsl(207, 76%, 53%);
                cursor: pointer;
                text-align: center;
                border:none;
                color: white;
                width:100%;
                font-size:1.7rem;
                height:3rem;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                line-height: 1.15;
                margin: 0;
            }
            .slider-image{
                position: absolute;
                width: 100%;
                z-index: 1000;
                display: initial;
                visibility: visible;
                opacity: 1;
                animation-delay: 1s;
                animation-duration: 5s;
                animation-fill-mode: forwards;
                animation-name: fadeIn;

                @include fadeIn (1s, 5s);
            }
            img{
                object-fit: cover;
                max-width: 100%;
                border-style: none;
            }
        </style>
        <div class="slider">
            <div class="slider-title"><h1>Iniciate en la aerografía</h1></div>
            <div class="slider-description"><p>Aprende a usar esta increíble herramienta de trabajo artístico o expande tus conocimientos en la materia. ¿A qué esperas?</p></div>
            <div class="slider-image">
                <picture>
                    <img src="../images/slider.webp" alt="Mano sosteniendo aerógrafo.">
                </picture>
            </div>
            <div class="slider-button modal-button">
                <button>APÚNTAME</button>
            </div>
        </div>
        `;

    }
}

customElements.define('slider-component', Slider);