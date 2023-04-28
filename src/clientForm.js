class ClientForm extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .client-form{
                width:65%;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height:100%;
            }
            
            .image-menu{
                display:flex;
                justify-content: center;
                flex-direction: row;
                background-color: white;
                border-radius: 5px;
                margin-bottom:2rem;
            }
            
            .image-menu-title{
                width:12%;
                background-color:rgb(119, 173, 193);
                border-radius: 5px;
                display: flex;
                align-items: center;
            }
            
            .image-menu-title h3{
                text-align: center;
                padding-left:10%;
                color:white;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            
            .image-input{
                width:80%;
                height:2.7rem;
            }
            
            .image-input input{
                width:99%;
                height:95%;
                border-style: none;
                font-weight: 800;
                font-family: "Poppins", sans-serif;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            
            .image-menu svg{
                width:5%;
                fill:rgb(119, 173, 193);
            }
            
            .form-row{
                display: flex;
                height:35%;
                align-items:center;
                justify-content: space-between;
                gap: 1rem;
                width: 100%;
            }
            
            .form-element{
                height:100%;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                gap:1rem;
                width: 100%;
            }
            
            .element-placeholder{
                height:20%;
                margin: 1% 0 1%;
                width:100%;
                text-align: center;
            }
            
            .element-placeholder p{
                font-size: 1.2rem;
                color:white;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            
            .form-element input{
                height:40%;
                border-radius:7px;
                border-style: none;
                text-align: center;
                box-sizing: border-box;
                width: 100%;
                font-family: "Poppins", sans-serif;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
                background-color:rgb(96, 105, 201)
            }
        </style>
        <form>
            <div class="image-menu">
                <div class="image-menu-title">
                    <h3>Principal</h3>
                </div>
                <div class="image-input">
                    <input placeholder="Imágenes">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <div class="element-placeholder">
                        <p>Nombre de usuario</p>
                    </div>
                    <input name="username" type="text">
                </div>
                <div class="form-element">
                    <div class="element-placeholder">
                        <p>Email</p>
                    </div>
                    <input name="email" type="text">
                </div>
            </div>
            <div class="form-row">
                <div class="form-element">
                    <div class="element-placeholder">
                        <p>Contraseña</p>
                    </div>
                    <input name="password" type="text">
                </div>
                <div class="form-element">
                    <div class="element-placeholder">
                        <p>Confirma Contraseña</p>
                    </div>
                    <input name="confirmPassword" type="text">
                </div>
            </div>
        </form>
        `;

    }
}

customElements.define('client-form-component', ClientForm);