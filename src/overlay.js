class Overlay extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .overlay{
                background-color: hsla(0, 0%, 100%);
                height: 100vh;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 3000;
                display: none;
            }
            .overlay.active{
                background-color: hsla(0, 0%, 100%);
                height: 100vh;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 3000;
                display: block;
            }
        </style>
        <div class="overlay active">
            <slot name="modal"></slot>
        </div>
        `;

    }
}

customElements.define('overlay-component', Overlay);