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
        </style>
        <div class="modal-item">
            <slot name="purchase-menu"></slot>
            <slot name="modal-form"></slot>
        </div>
        `;
    }
}

customElements.define('modal-item-component', ModalItem);