class Filter extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .filter{
                width:90%;
                height:3rem;
                background-color: white;
                align-items:center;
                border-radius: 5px;
                display:flex;
                margin-left:5%;
            }
            svg{
                width:2%;
                padding: 0.5% 48% 0 48%;
                fill:rgb(119, 173, 193);
            }
        </style>
        <div class="filter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
            </svg>
        </div>
        `;

    }
}

customElements.define('filter-component', Filter);