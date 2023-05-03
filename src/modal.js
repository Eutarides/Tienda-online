class Modal extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal{
                display: flex;
                justify-content: space-between;
                width: 60%;
                height: 60vh;
                left: 20%;
                position: fixed;
                top: 20%;
                box-shadow: 0rem 0rem 2rem 1rem hsl(0, 0%, 62%);
                overflow:hidden;
            }
            .modal-image{
                width: 45%;
                height:100%;
            }
            .modal-mother-column{
                width: 50%;
                height:100%;
            }
        </style>
        <div class="modal">
            <div class="modal-image">
                <slot name="modal-image"></slot>
            </div>
            <div class="modal-mother-column">
                <slot name="modal-mother-column"></slot>
            </div>
        </div>
        `;

    }
}

customElements.define('modal-component', Modal);