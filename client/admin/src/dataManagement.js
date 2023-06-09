class DataManagement extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .data-management{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                height:70vh;
                width:90%;
                margin-top: 2%;
                margin-left:5%;
            }
            
            .client-column{
                width:45%;
                display:flex;
                flex-direction: column;
                height:100%;
                justify-content: space-between;
                gap: 1rem;
            }

            .client-form{
                width:65%;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height:100%;
            }
        </style>
        <div class="data-management">
            <div class="client-column">
                <slot name="client-column"></slot>
            </div>
            <div class="client-form">
                <slot name="client-form"></slot>
            </div>
            <div class="overlay">
                <slot name="overlay"></slot>
            </div>
        </div>
        `;
    }
}

customElements.define('data-management-component', DataManagement);