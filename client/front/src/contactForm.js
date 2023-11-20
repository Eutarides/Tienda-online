class ContactForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        html`
        <style>
            .form{
                height:100%;
            }
            .formulario{
                height:100%;
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                gap:3rem;
                margin-top:2rem;
                width:80%;
                margin-left:10%;
            }
            .form-row{
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                height:3rem;
            }
            .form-row .form-element{
                width: 100%;
                height:100%;
            }
            .form-row input{
                box-sizing: border-box;
                width: 100%;
                height:100%;
                border-radius:5px;
                font-size:1rem;
                font-weight:600;
            }
            .form-element button{
                width: 100%;
                height:100%;
                background-color: $primary-color;
                font-size: 1.7rem;
                color:white;
                border:none;
                border-radius: 5px;
            }
            .form-element{
                position: relative;
                height:100%;
            }
            .counter{
                position:absolute;
                right:5%;
                top:25%;
            }
            .invalid{
                border:1px solid red;
            }    
        </style>
        <form>
            <div class="formulario">
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="name" type="text" placeholder="Nombre" data-validate="only-letters">
                    </div>
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="email" type="text" placeholder="e-mail" data-validate="email">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="concept" type="text" placeholder="Concepto">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input name="message" type="text" placeholder="Mensage">
                    </div>
                </div>
            </div>
        </form>
        `;

    }
}

customElements.define('contact-form-component', ContactForm);