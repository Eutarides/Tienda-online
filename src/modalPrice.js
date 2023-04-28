class ModalPrice extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-price{
                display:flex;
                align-items: center;
                justify-content: space-between;
                width:90%;
            }
            .modal-item-offer{
                width:23%;
                background-color: hsl(27, 87%, 47%);
                text-align: center;
                margin-right:35%;
                border-radius: 2px;
                height: 0.9rem;
                margin-top: 1rem;
            }
            .modal-item-offer h3{
                text-transform: uppercase;
                font-size: 0.7rem;
                color: white;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .modal-item-price{
                width:20%;
                margin-left:3rem;
                margin-top: 1rem;
            }
            .modal-item-price h2{
                color: hsl(207, 76%, 53%);
                font-size:2.8rem;
                font-weight: 600;
                text-decoration: none;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
        </style>
        <div class="modal-price">
            <div class="modal-item-price">
                <h2>€150</h2>
            </div>
            <div class="modal-item-offer">
                <h3>Edición única</h3>
            </div>
        </div>
        `;

    }
}

customElements.define('modal-price-component', ModalPrice);