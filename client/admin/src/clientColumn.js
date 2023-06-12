class ClientColumn extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.data = [];
        this.currentPage = 1;
        this.totalPages= null;
    }

    static get observedAttributes () { return ['url'] }

    async connectedCallback () {
        document.addEventListener('refresh-table',  async () => {
            await this.loadData()
            await this.render()
        })
    }

    async attributeChangedCallback (name, oldValue, newValue) {
        await this.loadData()
        await this.render()
    }

    async loadData(){
        await fetch('http://127.0.0.1:8080/api/admin/users')
        .then(response => {
            return response.json();
        }).then(data => {
            this.data = data;
        })
    }

    async render() {

        this.shadow.innerHTML = 
        `
        <style>
            .client-item-images svg{
                width:100%;
                fill:white;
            }

            .edit-button{
                width:6%;
            }

            .delete-button{
                width:6%;
            }
            
            .client-item{
                width:90%;
                margin-bottom:1rem;
            }
            
            .client-item-images{
                height:25%;
                display:flex;
                flex-direction: row;
                justify-content: end;
                gap:0.5rem;
                background-color: rgb(119, 173, 193);

            }
            
            .client-item-data{
                height:65%;
                width:100%;
                background-color:rgb(96, 105, 201);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                gap:1rem;
            }
            
            .client-item-data-row{
                width:95%;
                height:30%;
                flex-direction: column;
                display: flex;
                justify-content: space-between;
            }
            
            .client-item-data-row p{
                color:white;
                font-size: 1.3rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            
            .info{
                height:90%;
            }

            .client-item-data div{
                width:95%;
                height:50%;
                flex-direction: column;
                display: flex;
                color:white;
                font-size: 1.3rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }

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
                height:50%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }

            .table{
                height:100%;
            }
        </style>
        
        <div class="table">
        </div>
        <div class="menu">
        </div>
        `;

        this.data.rows.forEach(element=>{

        let table = this.shadow.querySelector(".table");
        let clientItem = document.createElement("div");
        clientItem.className = "client-item";
        table.appendChild(clientItem);
        
        let clientItemImages = document.createElement("div");
        clientItemImages.className = "client-item-images";
        clientItem.appendChild(clientItemImages)
        
        let editButton = document.createElement("div");
        editButton.classList.add("edit-button");
        editButton.dataset.id = element.id;
        clientItemImages.appendChild(editButton);
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>`;

        let deleteButton = document.createElement("div");
        deleteButton.classList.add("delete-button");
        deleteButton.dataset.id = element.id;
        clientItemImages.appendChild(deleteButton);
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>`;
        
        let clientItemData = document.createElement("div");
        clientItemData.className = "client-item-data";
        clientItem.appendChild(clientItemData);



        for (const [key, value] of Object.entries(element)) {
            if (key !== "id") {
              const dataRow = document.createElement("div");
              dataRow.textContent = `${key}   :    ${value}`;
              clientItemData.appendChild(dataRow);
            }
          }

        })

        let menu = this.shadow.querySelector(".menu");

        let buttonMenu = document.createElement("div");
        buttonMenu.className = "button-menu";
        menu.appendChild(buttonMenu);

        let menuNav = document.createElement("nav");
        buttonMenu.appendChild(menuNav);

        let menuUl = document.createElement("ul");
        menuNav.appendChild(menuUl);

        let menuFirstLi = document.createElement("li");
        menuFirstLi.className = "first-li";
        menuUl.appendChild(menuFirstLi);

        let menuFirstLiDiv = document.createElement("div");
        menuFirstLiDiv.classname= "firs-li-button";
        menuFirstLi.appendChild(menuFirstLiDiv);

        let firstButton = document.createElement("button");
        firstButton.textContent = "<<";
        menuFirstLiDiv.appendChild(firstButton);

        let menuPreviousLi = document.createElement("li");
        menuPreviousLi.className = "previous-li";
        menuUl.appendChild(menuPreviousLi);

        let menuPreviousLiDiv = document.createElement("div");
        menuPreviousLiDiv.classname= "previous-li-button";
        menuPreviousLi.appendChild(menuPreviousLiDiv);

        let previousButton = document.createElement("button");
        previousButton.textContent = "<";
        menuPreviousLiDiv.appendChild(previousButton);

        let menuInputLi = document.createElement("li");
        menuInputLi.className = "input-li";
        menuUl.appendChild(menuInputLi);

        let counter = document.createElement("input");
        counter.className= "page-counter";
        menuInputLi.appendChild(counter);

        let menuNextLi = document.createElement("li");
        menuNextLi.className = "next-li";
        menuUl.appendChild(menuNextLi);

        let menuNextLiDiv = document.createElement("div");
        menuNextLiDiv.classname= "next-li-button";
        menuNextLi.appendChild(menuNextLiDiv);

        let nextButton = document.createElement("button");
        nextButton.textContent = ">";
        menuNextLiDiv.appendChild(nextButton);

        let menuLastLi = document.createElement("li");
        menuLastLi.className = "last-li";
        menuUl.appendChild(menuLastLi);

        let menuLastLiDiv = document.createElement("div");
        menuLastLiDiv.classname= "last-li-button";
        menuLastLi.appendChild(menuLastLiDiv);

        let lastButton = document.createElement("button");
        lastButton.textContent = ">";
        menuLastLiDiv.appendChild(lastButton);

        

        this.renderButtons()
    }

    renderButtons = async () => {
             
        let deleteButtons = this.shadow.querySelectorAll('.delete-button');

        deleteButtons.forEach((deleteButton)=>{
            deleteButton.addEventListener('click', event =>{
                document.dispatchEvent(new CustomEvent('open-overlay', {
                    detail: {
                        id: deleteButton.dataset.id
                    }
                }))
            })
        })


        let editButtons = this.shadow.querySelectorAll('.edit-button');

        editButtons.forEach((editButton)=>{
            editButton.addEventListener('click', event =>{
                document.dispatchEvent(new CustomEvent('load-data', {
                    detail: {
                        id: editButton.dataset.id
                    }
                }))
            })
        } )
    }
}

customElements.define('client-column-component', ClientColumn);