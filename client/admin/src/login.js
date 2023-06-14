class Login extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
        .login{
            width:30%;
            height:35rem;
            display:flex;
            flex-direction:column;
            align-items: center;
            background-color:hsl(207, 76%, 53%);
            justify-content:center;
            margin-left:35%;
            margin-right:35%;
            border-radius: 20px;
            gap:1rem;
        }
        .login-body{
            width:60%;
            height:30%;
            flex-direction:column;
            display:flex;
            align-items: center;
            gap:1.5rem;
        }
        .login-title{
            width:100%;
            height:40%;
        }
        .login-title h2{
            font-size:2rem;
            text-align: center;
            font-family: "Poppins", sans-serif;
            background-color: hsl(194, 86%, 67%);
            border-radius: 10px;
            width:60%;
            margin-left:20%;
        }
        .login-description{
            width:50%;
            height:40%;
            margin-left:15%;
            margin-right:15%;
        }
        .login-description h3{
            font-size:1rem;
            text-align: center;
            font-family: "Poppins", sans-serif;
            background-color: hsl(194, 86%, 67%);
            border-radius: 10px;
        }
        
        .login-form{
            width:50%;
            height:40%;
        }
        
        .login-form form{
            width:100%;
            height:100%;
            gap:2rem;
        }
        .user-input input{
            box-sizing: border-box;
            width: 100%;
            height:100%;
            font-family: "Poppins", sans-serif;
            overflow: visible;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
            margin-top:1.5rem;
        }
        
        .password-input input{
            box-sizing: border-box;
            width: 100%;
            height:100%;
            font-family: "Poppins", sans-serif;
            overflow: visible;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
            margin-top:1rem;
        }
        
        .send-form-button{
            width:40%;
            height:20%;
            margin-left:30%;
            margin-right:30%;
            margin-top:1rem;
        }
        
        .send-form-button button{
            height:100%;
            width:100%;
            border-radius: 10px;
            border-width: 3px;
            border-color: hsl(207, 76%, 53%);
            font-family: "Poppins", sans-serif;
            text-transform: none;
            overflow: visible;
            font-size: 100%;
            line-height: 1.15;
            margin: 0;
        }

        </style>
        <div class="login">
            <div class="login-body">
                <div class="login-title">
                    <h2>Login</h2>
                </div>
                <div class="login-description">
                    <h3>Introduce tus datos de usuario</h3>
                </div>
            </div>
            <div clas="login-form">
                <form>
                    <div class="user-input">
                        <input class="user-login" name="email" type="email" placeholder="email">
                    </div>
                    <div class="password-input">
                        <input class="user-login" name="password" type="text" placeholder="contraseña">
                    </div>
                    <div class="send-form-button">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
        `;

        let form = this.shadow.querySelector('form');
        let sendFormButton = this.shadow.querySelector('.send-form-button');

        sendFormButton.addEventListener('click', event => {

            event.preventDefault();

            let formData = new FormData(form);
            let formDataJson = Object.fromEntries(formData.entries());

            fetch(`http://127.0.0.1:8080/api/auth/users/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': sessionStorage.getItem('accessToken')
                },
                body: JSON.stringify(formDataJson)
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
            }).catch(error => {
                console.log(error);
            });
        });

    }
}

customElements.define('login-component', Login);