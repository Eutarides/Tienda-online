class Overlay extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    async connectedCallback () {
        document.addEventListener('open-overlay',  async event => {
            const overlay = this.shadow.querySelector('.overlay');
            overlay.classList.toggle('active');
            
            this.id = event.detail.id;
        })

        this.render()
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .overlay{
                height: 25vh;
                position: fixed;
                top: 0;
                width: 20vh;
                z-index: 3000;
                display: none;
                background-color: rgb(214, 232, 253);
                right:38%;
                top:40%;
            }
            
            .overlay.active{
                height: 25vh;
                position: fixed;
                top: 0;
                width: 40vh;
                z-index: 3000;
                display: block;
                background-color: rgb(214, 232, 253);
                right:38%;
                top:25%;
                border-radius:10px;
            }

            .modal{
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                align-items:center;
            }

            .modal-message{
                width:60%;
                height:60%;
                display:flex;
                flex-direction:column;
                justify-content:center;
            }

            .modal-message p{
                width:100%;
                height:40%;
                text-align:center;
                font-size:1.3rem;
                font-family: "Poppins", sans-serif;
            }

            .modal-buttons{
                width:80%;
                height:30%;
                display:flex;
                justify-content:space-between;
            }

            .modal-confirm-button{
                width:25%;
            }

            .modal-confirm-button button{
                width:100%;
                height:65%;
                background-color: rgb(24, 104, 209);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }

            .modal-deny-button{
                width:25%;
            }

            .modal-deny-button button{
                width:100%;
                height:65%;
                background-color: rgb(202, 55, 10);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
            }
        </style>
        <div class="overlay">
            <div class="modal">
                <div class="modal-message">
                    <p>¿Desea borrar este registro?</p>
                </div>
                <div class="modal-buttons">
                    <div class="modal-confirm-button">
                        <button>Si</button>
                    </div>
                    <div class="modal-deny-button">
                        <button>No</button>
                    </div>
                </div>              
            </div>
        </div>
        `;

        this.renderButtons()
    }

    renderButtons = async () => {

        let modalConfirmButton = this.shadow.querySelector('.modal-confirm-button');

        modalConfirmButton.addEventListener('click', event => {

            event.preventDefault();
            const overlay = this.shadow.querySelector('.overlay');
            overlay.classList.remove('active');
            fetch(`http://127.0.0.1:8080/api${this.getAttribute('url')}/${this.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
                },
            }).then(response => {
                if (response.ok) {
                    console.log('Registro eliminado con éxito');
                    document.dispatchEvent(new CustomEvent('refresh-table'));
                } else {
                    console.log('Error al eliminar el registro');
                }
            }).catch(error => {
                console.log(error);
            });
        });

        let modalDenyButton = this.shadow.querySelector('.modal-deny-button');

        modalDenyButton.addEventListener('click', event =>{
            const overlay = this.shadow.querySelector('.overlay');
            overlay.classList.remove('active');
        })
        
    }
    
}

customElements.define('overlay-component', Overlay);