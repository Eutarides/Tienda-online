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
                width:40%;
                height:60%;
                display:flex;
                flex-direction:column;
                jutify-content:center;
            }
            .login-body{
                width:60%;
                height:40%;
                flex-direction:column;
                display:flex;
            }
            .login-title{
                width:100%;
                height:40%;
            }
            .login-title h2{
                font-size:0.5rem;
            }
            .login-description{
                width:100%;
                height:40%;
            }
            .login-description h2{
                font-size:0.5rem;
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
                        <input class="user-login" name="username" type="text" placeholder="nombre de usuario">
                    </div>
                    <div class="password-input">
                        <input class="user-login" name="password" type="text" placeholder="contraseña">
                    </div>
                    <div class="login_button">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
        `;

    }
}

customElements.define('login-component', Login);