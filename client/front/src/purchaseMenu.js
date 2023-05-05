class PurchaseMenu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .purchase-menu{
                height:90%;
                display:flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-between;
                flex-direction:column;
                padding-top:5%;
            }
            .modal-item-button{
                width:100%;
                height:5rem;
            }
            .modal-item-button button{
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
                line-height: 1.15;
                margin: 0;
            }
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
            .modal-price{
                display:flex;
                align-items: center;
                justify-content: space-between;
                width:90%;
                height:10%;
            }
            .modal-item-offer{
                width:23%;
                background-color: hsl(27, 87%, 47%);
                text-align: center;
                margin-right:35%;
                border-radius: 2px;
                height:40%;
                position:relative;
            }
            .modal-item-offer h3{
                text-transform: uppercase;
                font-size: 0.7rem;
                color: white;
                font-family: "Poppins", sans-serif;
                margin: 0;
                top:15%;
                left:5%;
            }
            .modal-item-price{
                width:30%;
                height:100%;
                position:relative;
            }
            .modal-item-price h2{
                color: hsl(207, 76%, 53%);
                font-size:2.8rem;
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
                top:0%;
            }
            .modal-tabs{
                width:100%;
                height:30%;
            }
            .modal-plus-minus{
                height:10%;
                width:100%;
            }
        </style>
        <div class="purchase-menu">
            <div class="modal-item-title">
                <h2>Plazas Limitadas</h2>
                <h3>Curso Aerografía</h3>
                <h4>27 y 28 de enero de 2024</h4>
            </div>
            <div class="modal-price">
                <div class="modal-item-price">
                    <h2>€150</h2>
                </div>
                <div class="modal-item-offer">
                    <h3>Edición única</h3>
                </div>
            </div>
            <div class="modal-tabs">
                <slot name="modal-tabs"></slot>
            </div>
            <div class="modal-plus-minus">
                <slot name="modal-plus-minus"></slot>
            </div>
            <div class="modal-item-button">
                <button>INSCRIBEME</button>
            </div>
        </div>
        `;

    }
}

customElements.define('purchase-menu-component', PurchaseMenu);