class ModalColumn extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .modal-column{
                display:flex;
                justify-content:space-between;
                width:100%;
                height:100%;
                transition: 0.7s;
            }
            .modal-column.active{
                transform: translateY(-100%);
                transition: 0.7s;
                width:100%;
            }
        </style>
        <div class="modal-column">
            <slot name="modal-item"></slot>
        </div>
        `;

    }
}

customElements.define('modal-column-component', ModalColumn);