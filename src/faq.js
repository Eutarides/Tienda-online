class Faq extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .faq{
                display: flex;
                justify-content:space-between ;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                margin-top: 10rem;
            }
            h2{
                font-size: 3rem;
                word-spacing: 0.05rem;
                color:hsl(0, 0%, 25%);
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .faq-description{
                width:40%;
            }
             p{
                font-size: 1.1rem;
                color:hsl(0, 0%, 53%);
                text-align: center;
                line-height: 2rem;
                margin-bottom: 5rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .faq-items{
                display:flex;
                justify-content:space-between;
                flex-direction: column;
                width:73%;
            }
            .faq-item{
                display:flex;
                justify-content:end;
                flex-direction: row;
                flex-wrap:wrap;
                max-height: 20rem;
                min-height: 7rem;
            }
            .faq-item-title{
                width: 90%;
                border-bottom: 1px solid gray;
                height:50%;
            }
             h3{
                font-size: 1.6rem;
                color:hsl(0, 0%, 25%);
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .faq-item-description{
                height:0;
                opacity: 0;
                transition: 0.5s;
            }
            .faq-item-description.active{
                width:92%;
                height:100%;
                opacity: 1;
            }
             p{
                margin:1.5rem 0 4rem;
                color:hsl(0, 0%, 57%);
                word-spacing: 0.2rem;
                line-height: 1.7rem;
                font-size:1.1rem;
                font-weight:400;
                font-family: "Poppins", sans-serif;
            }
            .plus-minus-toggle {
                cursor: pointer;
                position: relative;
                width: 30px;
                height: 30px;
            }
            .plus-minus-toggle::before,
            .plus-minus-toggle::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            height: 2px;
            background-color: black;
            transform: translate(-50%, -50%);
            transition: transform 0.3s ease, opacity 0.3s ease;
            }
            .plus-minus-toggle::before {
                transform-origin: center center;
                transform: translate(-50%, -50%) rotate(0deg);
            }
            .plus-minus-toggle::after {
                transform-origin: center center;
                transform: translate(-50%, -50%) rotate(90deg);
            }
            .plus-minus-toggle.active::before {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            .plus-minus-toggle.active::after {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            .plus-minus-toggle.active::before {
                opacity: 0;
            }
        </style>
        <div class="faq">
            <div class="faq-title">
                <h2>Bootstrap 5 FAQ</h2>
            </div>
            <div class="faq-description">
                <p>A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do</p>
            </div>
            <div class="faq-items">
                <div class="faq-item">
                    <div class="faq-item-title">
                        <h3>How do I order?</h3>
                    </div>
                    <div class="plus-minus-toggle">
                        <div></div>
                    </div>
                    <div class="faq-item-description">
                        <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-title">
                        <h3>How can i make the payment?</h3>
                    </div>
                    <div class="plus-minus-toggle">
                        <div></div>
                    </div>
                    <div class="faq-item-description">
                        <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-title">
                        <h3>How much time does it take to receive the order?</h3>
                    </div>
                    <div class="plus-minus-toggle">
                        <div></div>
                    </div>
                    <div class="faq-item-description">
                        <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-title">
                        <h3>Can I resell the products?</h3>
                    </div>
                    <div class="plus-minus-toggle">
                        <div></div>
                    </div>
                    <div class="faq-item-description">
                        <p>We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.</p>
                    </div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('faq-component', Faq);