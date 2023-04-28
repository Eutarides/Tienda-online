class ModalMotherColumn extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .checkout-cross{
                height:5%;
                width:100%;
                padding-left: 50%;
                position:absolute;
                z-index: 30001;
            }
            .checkout-cross svg{
                width:2rem;
                fill: grey;
            }
            .modal-mother-column{
                display:flex;
                justify-content:space-between;
                width:100%;
                align-items:center;
                height:100%;
                flex-direction: column;
                overflow: hidden;
            }
            .modal-column{
                width:100%;
                height:200%;
            }
        </style>
        <div class="modal-mother-column">
            <div class="checkout-cross">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
            </div>
            <div class="modal-column">
                <slot name="modal-column"></slot>
            <div>
        </div>
        `;

    }
}

customElements.define('modal-mother-column-component', ModalMotherColumn);