class ModalButton extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            button {
                border-radius: 30px;
                background-color:$secondary-color ;
                padding: 0.6rem 1rem;
                text-align: center;
                width:10%;
                border:none;
                color: white;
                font-family: "Poppins", sans-serif;
                webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
                background-color: hsl(27, 87%, 47%);
            }
            a {
                color:hsl(0, 0%, 66%);
                font-size: 1rem;
                text-transform: uppercase;
                font-family: "Poppins", sans-serif;
                margin: 0;
                font-weight: 600;
                text-decoration: none;
                transition: 300ms;
                background-color: transparent;
                list-style: none;
                color: white;
            }
        </style>
        <div class="header-checkout modal-button">
            <button>
                <a href="#">INSCRIBIRME</a>
            </button>
        </div>
        `;
        const botones = this.shadow.querySelectorAll('.modal-button');
        // const overlay = document.querySelector('.overlay');
    
        // botones.forEach((boton)=>{
        //     boton.addEventListener('click', ()=> {
        //         overlay.classList.toggle('active');
        //     })
    
        // });
        botones.forEach((boton)=>{
            boton.addEventListener("click", () =>{
                document.dispatchEvent(new CustomEvent('call'))
            })
        })

    }
}

customElements.define('modal-button-component', ModalButton);