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

            .filter-form{
                width:90%;
                height:50%;
                display:flex;
                justify-content:space-between;
                display:none;
            }

            .filter-form.active{
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

            .input-row{
                display:flex;
            }

            .input-row svg{
                width:13%;
            }
        </style>
        <div class="filter active">
            <div class= "filter-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
                </svg>
            </div>
            <form class="filter-form active">
                <div class="input-title">
                    <p>Id</p>
                    <div class="input-row">
                        <input name="id" type="text" class="id-input active">
                    </div>
                </div>
                <div class="input-title">
                    <p>Name</p>
                    <div class="input-row">
                        <input name="name" type="text" class="name-input active">
                    </div>
                </div>
                <div class="input-title">
                    <p>Email</p>
                    <div class="input-row">
                        <input name="email" type="text" class="email-input active">
                    </div>
                </div>
            </form>
        </div>
        `;

        let filterSvg = this.shadow.querySelector('.filter-svg');
        let filter = this.shadow.querySelector('.filter');
        let filterForm = this.shadow.querySelector('.filter-form');
        let filterSVG = this.shadow.querySelector('svg');

        filterSvg.addEventListener('click', function() {
            filter.classList.toggle('active');
            filterForm.classList.toggle('active');
            filterSVG.classList.toggle('active');

            let formData = Object.fromEntries(new FormData(filterForm));
            let URL = "http://localhost:8080/api/admin"
            let params = new URLSearchParams(formData);

            fetch(`${URL}/users?${params}`)
                .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error: " + response.status);
                }
                })
                .then((data) => {
                    const event = new CustomEvent("filter-results", {
                        detail: {
                        data: data,
                        },
                    });
                    document.dispatchEvent(event);
                })
                .catch((error) => {
                    console.error(error);
                })
            
        });




        // let inputRows = this.shadow.querySelectorAll('.input-row');
        // inputRows.forEach(inputRow => {
        //     let searchIcon = inputRow.querySelector('.search-icon');
        //     searchIcon.addEventListener('click', () => {
        //         let input = inputRow.querySelector('input').value;
        //         let fieldName = inputRow.parentNode.querySelector('p').textContent.toLowerCase();
        //         let url;
                
        //         if (fieldName === 'id') {
        //             url = `http://127.0.0.1:8080/api/admin/users/${input}`;
        //         } else if (fieldName === 'name') {
        //             url = `http://127.0.0.1:8080/api/admin/users?name=${input}`;
        //         } else if (fieldName === 'email') {
        //             url = `http://127.0.0.1:8080/api/admin/users?email=${input}`;
        //         }
                
        //         fetch(url)
        //             .then(response => {
        //                 response.json();
        //                 console.log(response);
        //             })
        //             .then(data => {
        //                 console.log(data);
        //             })
        //             .catch(error => {
        //                 console.error(error);
        //             });
        //     });
        // });

    }
}

customElements.define('filter-component', Filter);