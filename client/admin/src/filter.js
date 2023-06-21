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
                height:100%;
                background-color: white;
                align-items:center;
                border-radius: 5px;
                display:flex;
                margin-left:5%;
                flex-direction: column;
                margin-bottom:none;
            }

            .filter-svg{
                width:3%;
                height:50%;
            }
            svg{
                width:100%;
                fill:rgb(119, 173, 193);
            }

            svg.active{
                width:100%;
                fill:hsl(120, 59%, 41%);
            }

            .filter-inputs{
                width:90%;
                height:50%;
                display:flex;
                justify-content:space-between;
                display:none;
            }

            .filter-inputs.active{
                width:90%;
                height:50%;
                display:flex;
                justify-content:space-between;
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

            .input-title{
                width:20%;
                height:90%;
                display:flex;
                flex-direction:column;
                gap:0.5rem;
                margin-bottom:0.5rem;
            }

            .input-title p{
                font-family: "Poppins", sans-serif;
                font-size: 100%;
                line-height: 1.15;
                color:rgb(119, 173, 193);
                text-align:center;
                font-weight:900;
                margin:0;
            }

            .filter input.active{
                height:60%;
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
            }
        </style>
        <div class="filter">
            <div class= "filter-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
                </svg>
            </div>
            <div class="filter-inputs">
                <div class="input-title">
                    <p>Id</p>
                    <input name="id" type="text" class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                </div>
                <div class="input-title">
                    <p>Name</p>
                    <input name="username" type="text" class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                </div>
                <div class="input-title">
                    <p>Email</p>
                    <input name="email" type="text" class="active">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                </div>
            </div>
        </div>
        `;

        let filterSvg = this.shadow.querySelector('.filter-svg');
        let filter = this.shadow.querySelector('.filter');
        let filterInputs = this.shadow.querySelector('.filter-inputs');
        let filterSVG = this.shadow.querySelector('svg');

        filterSvg.addEventListener('click', function() {
            filter.classList.toggle('active');
            filterInputs.classList.toggle('active');
            filterSVG.classList.toggle('active');
        });

        let inputs = this.shadow.querySelectorAll('input');
        inputs.forEach((input)=>{
            input
        })
        

    }
}

customElements.define('filter-component', Filter);