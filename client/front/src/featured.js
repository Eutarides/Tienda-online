class Featured extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .featured{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                margin: 5% 20% 0;
                text-align: center;
                align-items: center;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            .featured-title{
                padding:0 0 1%;
            }
             h2{
                font-size:3rem;
                color:rgb(61, 61, 61);
                text-transform: uppercase;
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
            
            }
            .featured-description{
                width:73%;
            }
             p{
                font-size:1.3rem;
                font-weight:100;
                color:hsl(0, 0%, 56%);
                word-spacing:0.2em;
                line-height:1.7em;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .featured-items{
                display:flex;
                justify-content:space-between;
                align-items: center;
                margin-top:7%;
            }
            .three-columns{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height:30rem;
            }
            .column{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width:25%;
                align-items: center;
                height:100%;
            }
            .featured-item{
                display: flex;
                flex-direction: column;
                width:100%;
                align-items: center;
                height:100%;
            }
            .featured-item-image{
                width:50%;
                height:40%;
            }
             img{
                height:65%;
                padding-top: 40%;
                object-fit: cover;
                max-width: 100%;
                border-style: none;
            }
            .featured-item-title{
                margin:20% 0 5%;
            }
             h3{
                font-size:1.6rem;
                font-family: "Poppins", sans-serif;
                color: hsl(0, 0%, 34%);
                margin: 0;
            }
            .featured-item-description{
                width:100%;
            }
             p{
                font-weight:100;
                line-height:1.6em;
                font-family: "Poppins", sans-serif;
                color: hsl(0, 0%, 34%);
                margin: 0;
            }
        </style>
        <div class="featured">
            <div class="featured-title"><h2>Objetivos del curso</h2></div>
            <div class="featured-description"><p>Si quieres aprender a manejar el aerógrafo estas son las áreas esenciales para desarrollarte en el manejo de esta herramnienta.</p></div>
            <div class="featured-items">
                <div class="three-columns">
                    <div class="column">
                        <div class="featured-item">
                            <div class="featured-item-image">
                                <picture>
                                    <img src="./images/airbrush-cleaning2.jpg" alt="Mantenimiento del aerógrafo.">
                                </picture>
                            </div>
                            <div class="featured-item-title"><h3>Mantenimiento y uso adecuado.</h3></div>
                            <div class="featured-item-description"><p>Aprende a diferenciar y cuidar los componentes del aerógrafo, a la vez que a alargar su vida útil.</p></div>
                        </div>                    
                    </div>
                    <div class="column">
                        <div class="featured-item">
                            <div class="featured-item-image">
                                <picture>
                                    <img src="./images/Color Theory-min.webp" alt="Rueda de la teoría del color.">
                                </picture>
                            </div>
                            <div class="featured-item-title"><h3>Teoría del color e iluminación.</h3></div>
                            <div class="featured-item-description"><p>Amplia tus conocimientos sobre la gama cromática y como usar sus combinaciones.</p></div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="featured-item">
                            <div class="featured-item-image">
                                <picture>
                                    <img src="./images/Osl-example.jpg" alt="Ejemplo de OSL">
                                </picture>
                            </div>
                            <div class="featured-item-title"><h3>OSL (Object Source Lighting)</h3></div>
                            <div class="featured-item-description"><p>Esta técnica de iluminación avanzada te permitirá crear el efecto de reflejo natural en superficies.</p></div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('featured-component', Featured);