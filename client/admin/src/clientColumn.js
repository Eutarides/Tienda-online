class ClientColumn extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .client-item-images svg{
                width:7%;
                fill:white;
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
                width:100%;
                background-color:rgb(96, 105, 201);
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
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
        </style>
            <div class="client-item">
                <div class="client-item-images">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </div>
                <div class="client-item-data">
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Email:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Nombre:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Apellidos:</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="client-item">
                <div class="client-item-images">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </div>
                <div class="client-item-data">
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Email:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Nombre:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Apellidos:</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="client-item">
                <div class="client-item-images">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </div>
                <div class="client-item-data">
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Email:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Nombre:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Apellidos:</p>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="client-item">
                <div class="client-item-images">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                    </svg>
                </div>
                <div class="client-item-data">
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Email:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Nombre:</p>
                        </div>
                    </div> 
                    <div class="client-item-data-row">
                        <div class="info">
                            <p>Apellidos:</p>
                        </div>
                    </div> 
                </div>
            </div>
        `;

    }
}

customElements.define('client-column-component', ClientColumn);