class ModalForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>

            .formulario{
                height:90%;
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                gap: 1rem;
                margin-top:2rem;
                width:90%;
            }
            .form-row{
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                margin-top:1rem;
            }
            .form-row .form-element{
                width: 100%;
                height:10%;
            }
            .form-row input{
                box-sizing: border-box;
                width: 100%;
                height:100%;
                font-family: "Poppins", sans-serif;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            .form-element button{
                width: 100%;
                height:100%;
                background-color: hsl(207, 76%, 53%);
                font-size: 1.7rem;
                color:white;
                border:none;
                border-radius: 5px;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            .form-element{
                position: relative;
            }
            .counter{
                position:absolute;
                right:5%;
                top:25%;
            }
            .invalid{
                border:1px solid red;
            }
            .goback-button button{
                height:100%;
                border-radius: 10px;
                border-width: 3px;
                border-color: hsl(207, 76%, 53%);
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            .goback-button{
                height:8%;
                display: flex;
                justify-content:center;
            }

        </style>
        <form>
            <div class="formulario">
                <div class="goback-button">
                    <button>Volver atrás</button>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="name" type="text" placeholder="Nombre" data-validate="only-letters">
                    </div>
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="apellidos" type="text" placeholder="Apellidos" data-validate="only-letters">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="email" type="text" placeholder="Correo electrónico" data-validate="email">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="direccion" type="text" placeholder="Dirección">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="comunidad-autonoma" type="text" placeholder="Comunidad Autónoma" data-validate="only-letters">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="telefono" type="text" placeholder="Teléfono" data-validate="telephone">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="localidad" type="text" placeholder="Localidad" data-validate="only-letters">
                    </div>
                    <div class="form-element">
                        <span class="counter"></span>
                        <input class="limit-counter" name="codigo-postal" type="text" placeholder="Código postal" data-validate="only-numbers">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                        <button class="send-button">FINALIZAR COMPRA</button>
                    </div>
                </div>
            </div>
        </form>
        `;

    }
}

customElements.define('modal-form-component', ModalForm);