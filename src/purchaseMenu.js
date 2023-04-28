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
                height:100%;
                display:flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-between;
                flex-direction:column;
            }
            .modal-item-button{
                width:90%;
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
        </style>
        <div class="purchase-menu">
            <slot name="modal-item-title"></slot>
            <slot name="modal-price"></slot>
            <slot name="modal-tabs"></slot>
            <slot name="modal-plus-minus"></slot>           
            <div class="modal-item-button">
                <button>INSCRIBEME</button>
            </div>
        </div>
        `;

    }
}

customElements.define('purchase-menu-component', PurchaseMenu);