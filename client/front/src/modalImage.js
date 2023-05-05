class ModalImage extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .image-column{
                width:100%;
                display:flex;
                justify-content:space-between;
                padding-left:10%;
                height:100%;
                align-items:center;
            }
            .image-column picture{
                width:100%;
                display:flex;
                height:85%;
            }
            img{
                object-fit: cover;
                max-width: 100%;
                border-style: none;
            }
        </style>
        <div class="image-column">
            <picture>
                <img src="./images/airbrush-detailed-modal.jpg" alt="aerógrafo evolution">
            </picture>
        </div>
        `;

    }
}

customElements.define('modal-image-component', ModalImage);