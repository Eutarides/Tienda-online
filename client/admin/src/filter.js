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
                flex-direction: column;
            }

            .filter.active{
                width:90%;
                height:3rem;
                background-color: white;
                align-items:center;
                border-radius: 5px;
                display:flex;
                margin-left:5%;
                flex-direction: column;
                height:6rem;
            }

            .filter-svg{
                width:3%;
                height:10%;
            }
            svg{
                width:100%;
                fill:rgb(119, 173, 193);
            }

            svg.active{
                width:2%;
                padding: 0.5% 48% 0 48%;
                fill:hsl(120, 59%, 41%);
            }

            .filter-inputs{
                width:10%;
                diplay:flex;
            }

            .filter input{
                height:40%;
                border-radius:7px;
                border-style: none;
                text-align: center;
                box-sizing: border-box;
                width: 30%;
                font-family: "Poppins", sans-serif;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
                display:none
            }

            .filter input.active{
                height:13%;
                border-radius:5px;
                border-style: none;
                text-align: center;
                box-sizing: border-box;
                width: 100%;
                font-family: "Poppins", sans-serif;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
                display:flex;
                background-color:rgb(96, 105, 201);
                bottom:0%;
                margin-top:3rem;
            }
        </style>
        <div class="filter active">
            <div class= "filter-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
                </svg>
            </div>
            <div class="filter-inputs">
                <input name="id" type="text" class="active">
                <input name="username" type="text" class="active">
                <input name="email" type="text" class="active">
            </div>
        </div>
        `;

    }
}

customElements.define('filter-component', Filter);