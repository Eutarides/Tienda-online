class ModalPlusMinusButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .plus-minus-button{
                display:flex;
                align-items: center;
                justify-content: center;
                width:90%;
                margin-top: 1rem;
                height:6%;
            }
            .plus-minus-button input{
                width:10%;
                height:85%;
               text-align: center;
               font-family: "Poppins", sans-serif;
               overflow: visible;
               font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            .plus-button{
                height: 100%;
                width: 7%;
            }
            .plus-button button{
                height: 100%;
                border:none;
                background-color: hsl(207, 76%, 53%);
                border-radius: 5px;
                width:100%;
                color:white;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            .minus-button{
                height: 100%;
                width: 7%;
            }
            .minus-button button{
                height:100%;
                height: 100%;
                border:none;
                background-color: hsl(207, 76%, 53%);
                border-radius: 5px;
                width:100%;
                color:white;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
        </style>
        <div class="plus-minus-button">
            <div class="minus-button">
                <button>-</button>

            </div>
            <input type="number" value="1">
            <div class="plus-button">
                <button>+</button>
            </div>
        </div>
        `;

    }
}

customElements.define('modal-plus-minus-button-component', ModalPlusMinusButton);