class ButtonMenu extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .button-menu{
                width:100%;
                height:10%;
                backgroun-color:grey;
                align-items:center;
                display:flex;
                justify-content:space-between;
            }
            ul {
                display: flex;
                gap: 2rem;
                justify-content: space-between;
                list-style: none;
                padding-left: 0;
            }
            li {
                display: list-item;
                text-align: -webkit-match-parent;
                font-family: "Poppins", sans-serif;
                list-style: none;
                padding-left: 0;
                width:4vh;
            }
            input{
                width:100%;
                height:65%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
            .page-counter{
                width:100%;
                justify-content
            }
            button{
                width:100%;
                height:65%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
        </style>
        <div class="button-menu">
            <nav>
                <ul>
                    <li>
                        <div class="first-button">
                            <button><<</button>
                        </div>
                    </li>
                    <li>
                        <div class="previous-button">
                            <button><</button>
                        </div>
                    </li>
                    <li>
                        <div class="page-counter">
                            <input>
                        </div>
                    </li>
                    <li>
                        <div class="next-button">
                            <button>></button> 
                        </div>
                    </li>
                    <li>
                        <div class="last-button">
                            <button>>></button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        `;

    }
}

customElements.define('button-menu-component', ButtonMenu);