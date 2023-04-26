class ContactInfo extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .contact-card-front{
                display:flex;
                justify-content:space-between;
                flex-direction: column;
                height:100%;
                position: absolute;
                backface-visibility: hidden;
                transform: perspective(1000px) rotateY(0deg);
                transition: 1s;
                align-items: left;
                width:90%;
            }
            .contact-card.active .contact-card-front{
                transform: perspective(1000px) rotateY(180deg);
            }
            .contact-card-title{
                width:100%;
                margin-bottom:10%;
            }
            .contact-card-title h2{
                text-align: center;
                font-size: 2rem;
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                color: hsl(0, 0%, 34%);
                margin: 0;
            }
            .contact-card-details{
                display: flex;
                flex-direction: column;
                height:100%;
            }
            .contact-card-details-item{
                display:flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top:1rem;
            }
            .contact-card-details-item-image{
                height:3em;
                width:5%;
            }
            .contact-card-details-item-description{
                width:91%;
            }
            .contact-card-details-item-description h3{
                font-family: "Poppins", sans-serif;
                color: hsl(0, 0%, 34%);
                margin: 0;
            }
            .contact-card-checkout{
                width:70%;
                margin-left:15%;
                height:100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .contact-card-checkout button{
                width:100%;
                height:50%;
                align-items: center;
                background-color: hsl(207, 76%, 53%);
                border:none;
                border-radius:5px;
                color:white;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
        </style>
            <div class="contact-card-title">
                <h2>Ponte en contacto.</h2>
            </div>
            <div class="contact-card-details">
                <div class="contact-card-details-item">
                    <div class="contact-card-details-item-image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                        </svg>
                    </div>
                    <div class="contact-card-details-item-description">
                        <h3>Calle Falsa 123, puerta B</h3>
                    </div>
                </div>
                <div class="contact-card-details-item">
                    <div class="contact-card-details-item-image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                        </svg>
                    </div>
                    <div class="contact-card-details-item-description">
                        <h3>+34 971 155 359</h3>
                    </div>
                </div>
                <div class="contact-card-details-item">
                    <div class="contact-card-details-item-image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                        </svg>
                    </div>
                    <div class="contact-card-details-item-description">
                        <h3>ChromatICservice@gmail.com</h3>
                    </div>
                </div>
                <div class="contact-card-checkout flip-button">
                    <button class="send-button">Contáctanos.</button>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-info-component', ContactInfo);