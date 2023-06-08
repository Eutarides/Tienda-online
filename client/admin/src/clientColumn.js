class ClientColumn extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.data = []
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
                width:8%;
            }

            .delete-button{
                width:8%;
            }
            
            .client-item{
                width:90%;
                height:30%;
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
                width:90%;
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
                height:30%;
                flex-direction: column;
                display: flex;
                justify-content: space-between;
                color:white;
                font-size: 1.3rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
        </style>
        
        <div class="table">
        </div>
        `;

        console.log(this.data.rows)

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
        clientItemImages.appendChild(editButton);
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>`;

        let deleteButton = document.createElement("div");
        deleteButton.classList.add("delete-button");
        clientItemImages.appendChild(deleteButton);
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>`;
        
        let clientItemData = document.createElement("div");
        clientItemData.className = "client-item-data";
        table.appendChild(clientItemData);

        for (const [key, value] of Object.entries(element)) {
            if (key !== "id") {
              const dataRow = document.createElement("div");
              dataRow.textContent = `${key}   :    ${value}`;
              clientItemData.appendChild(dataRow);
            }
          }

        })
    }
}

customElements.define('client-column-component', ClientColumn);