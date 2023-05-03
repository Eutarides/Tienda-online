class ModalItem extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-item{
                height:100%;
                width:100%;
            }
            .purchase-menu{
                height:100%;
                width:100%;
            }
            .modal-form{
                height:100%;
                width:100%;
            }
        </style>
        <div class="modal-item">
            <div class="purchase-menu">
                <slot name="purchase-menu"></slot>
            </div>
            <div class="modal-form">
                <slot name="modal-form"></slot>
            </div>
        </div>

        `;
    }
}

customElements.define('modal-item-component', ModalItem);