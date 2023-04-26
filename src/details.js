class Details extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .details{
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 0 18em 0 18em;
                height: 40em;
                margin-top:5rem;
            }
            .three-columns{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height:30rem;
            }
            .details-column{
                width:32%;
            }
            .details-item{
                display: flex;
                justify-content: space-between;
                height:11em;
            }
            .detail-items-image{
                width:13%;
            }
            svg{
                width:100%;
                fill:hsl(207, 76%, 53%);
            }
            .detail-items-text{
                display: flex;
                flex-direction: column;
                margin-left: 0.7rem;
                width:75%;
            }
            .detail-items-text-title{
                margin-bottom:0.7rem;
            }
            h3{
                font-family: "Poppins", sans-serif;
                color: hsl(0, 0%, 34%);
                margin: 0;
            }
            p{
                font-weight: 100;
                color:rgb(143, 143, 143);
                font-size: 0.9rem;
                letter-spacing: 0.05rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .details-image{
                display:flex;
                flex-direction: column;
                align-items: center;
                height:50%;
            }
            picture{
                display:flex;
                flex-direction: column;
                align-items: center;
                height:100%;
                margin:8rem 0 10rem;
            }
            img{
                object-fit: cover;
                max-width: 100%;
                border-style: none;
            }
        </style>
        <div class="details">
            <div class="three-columns">
                <div class="details-column">
                    <div class="details-item">
                        <div class="detail-items-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tools</title><path d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z" />
                            </svg>
                        </div>
                        <div class="detail-items-text">
                            <div class="detail-items-text-title">
                                <h3>Herramienta:</h3>
                            </div>
                            <div class="detail-items-text-description">
                                <p>Aerógrafo Harder and Steinbeck Evolution.</p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="detail-items-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-range</title><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /></svg>
                        </div>
                        <div class="detail-items-text">
                            <div class="detail-items-text-title">
                                <h3>Fecha:</h3>
                            </div>
                            <div class="detail-items-text-description">
                                <p>El curso tendrá lugar el 27 y 28 de enero de 2024.</p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="detail-items-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                        </div>
                        <div class="detail-items-text">
                            <div class="detail-items-text-title">
                                <h3>Dirección:</h3>
                            </div>
                            <div class="detail-items-text-description">
                                <p>La sede de ChromatIC será el lugar en el que se llevará a cabo el curso, Calle Falsa 123.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="details-column">
                    <div class="details-image">
                        <picture>
                            <img src="../images/Evolution-airbrush-black.jpg" alt="Aerógrafo Harder and Steinbeck Evolution.">
                        </picture>
                    </div>
                </div>
                <div class="details-column">
                    <div class="details-item">
                        <div class="detail-items-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hours-24</title><path d="M13 2.05V4.07C16.95 4.56 20 7.92 20 12C20 15.21 18.08 18 15.28 19.28L13 17V22H18L16.78 20.78C19.91 19.07 22 15.76 22 12C22 6.82 18.05 2.55 13 2.05M11 2C9.05 2.2 7.2 2.96 5.68 4.21L7.1 5.63C8.23 4.75 9.58 4.2 11 4V2M4.2 5.68C2.96 7.2 2.2 9.05 2 11H4C4.19 9.58 4.75 8.23 5.63 7.1L4.2 5.68M6 8V10H9V11H8C6.9 11 6 11.9 6 13V16H11V14H8V13H9C10.11 13 11 12.11 11 11V10C11 8.9 10.11 8 9 8H6M12 8V13H15V16H17V13H18V11H17V8H15V11H14V8H12M2 13C2.2 14.95 2.97 16.8 4.22 18.32L5.64 16.9C4.76 15.77 4.2 14.42 4 13H2M7.11 18.37L5.68 19.79C7.2 21.03 9.05 21.8 11 22V20C9.58 19.81 8.24 19.25 7.11 18.37Z" />
                            </svg>
                        </div>
                        <div class="detail-items-text">
                            <div class="detail-items-text-title">
                                <h3>Horario:</h3>
                            </div>
                            <div class="detail-items-text-description">
                                <p>El curso se impartirá desde las 10:00 a las 18:00 con un descanso de una hora a las 13:00.</p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="detail-items-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>human-male-board</title><path d="M20,17A2,2 0 0,0 22,15V4A2,2 0 0,0 20,2H9.46C9.81,2.61 10,3.3 10,4H20V15H11V17M15,7V9H9V22H7V16H5V22H3V14H1.5V9A2,2 0 0,1 3.5,7H15M8,4A2,2 0 0,1 6,6A2,2 0 0,1 4,4A2,2 0 0,1 6,2A2,2 0 0,1 8,4Z" />
                            </svg>
                        </div>
                        <div class="detail-items-text">
                            <div class="detail-items-text-title">
                                <h3>Tutor:</h3>
                            </div>
                            <div class="detail-items-text-description">
                                <p>Julio Cortázar será el encargado de introducirte a la aerografía, con sus más de veinte años de experiencia.</p>
                            </div>
                        </div>
                    </div>
                    <div class="details-item">
                        <div class="detail-items-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>palette-advanced</title><path d="M22,22H10V20H22V22M2,22V20H9V22H2M18,18V10H22V18H18M18,3H22V9H18V3M2,18V3H16V18H2M9,14.56A3,3 0 0,0 12,11.56C12,9.56 9,6.19 9,6.19C9,6.19 6,9.56 6,11.56A3,3 0 0,0 9,14.56Z" />
                            </svg>
                        </div>
                        <div class="detail-items-text">
                            <div class="detail-items-text-title">
                                <h3>Productos:</h3>
                            </div>
                            <div class="detail-items-text-description">
                                <p>Los productos de aerografía que se usarán en el curso, pertenecen a la marca Vallejo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('details-component', Details);