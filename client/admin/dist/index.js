(()=>{var n={894:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.data=[]}static get observedAttributes(){return["url"]}async connectedCallback(){document.addEventListener("refresh-table",(async()=>{await this.loadData(),await this.render()}))}async attributeChangedCallback(n,e,t){await this.loadData(),await this.render()}async loadData(){await fetch("http://127.0.0.1:8080/api/admin/users").then((n=>n.json())).then((n=>{this.data=n}))}async render(){this.shadow.innerHTML='\n        <style>\n\n\n            .client-item-images svg{\n                width:100%;\n                fill:white;\n            }\n\n            .edit-button{\n                width:8%;\n            }\n\n            .delete-button{\n                width:8%;\n            }\n            \n            .client-item{\n                width:90%;\n                height:30%;\n            }\n            \n            .client-item-images{\n                height:25%;\n                display:flex;\n                flex-direction: row;\n                justify-content: end;\n                gap:0.5rem;\n                background-color: rgb(119, 173, 193);\n\n            }\n            \n            .client-item-data{\n                height:65%;\n                width:90%;\n                background-color:rgb(96, 105, 201);\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                flex-direction: column;\n                gap:1rem;\n            }\n            \n            .client-item-data-row{\n                width:95%;\n                height:30%;\n                flex-direction: column;\n                display: flex;\n                justify-content: space-between;\n            }\n            \n            .client-item-data-row p{\n                color:white;\n                font-size: 1.3rem;\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n            }\n            \n            .info{\n                height:90%;\n            }\n\n            .client-item-data div{\n                width:95%;\n                height:30%;\n                flex-direction: column;\n                display: flex;\n                justify-content: space-between;\n                color:white;\n                font-size: 1.3rem;\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n            }\n        </style>\n        \n        <div class="table">\n        </div>\n        ',console.log(this.data.rows),this.data.rows.forEach((n=>{let e=this.shadow.querySelector(".table"),t=document.createElement("div");t.className="client-item",e.appendChild(t);let i=document.createElement("div");i.className="client-item-images",t.appendChild(i);let s=document.createElement("div");s.classList.add("edit-button"),i.appendChild(s),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />\n        </svg>';let r=document.createElement("div");r.classList.add("delete-button"),i.appendChild(r),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />\n        </svg>';let a=document.createElement("div");a.className="client-item-data",e.appendChild(a);for(const[e,t]of Object.entries(n))if("id"!==e){const n=document.createElement("div");n.textContent=`${e}   :    ${t}`,a.appendChild(n)}}))}}customElements.define("client-column-component",n)},238:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            .client-form{\n                width:65%;\n                display:flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height:100%;\n            }\n            \n            .image-menu{\n                display:flex;\n                justify-content: space-between;\n                flex-direction: row;\n                background-color: white;\n                border-radius: 5px;\n                margin-bottom:2rem;\n            }\n\n            .image-menu-title{\n                width:30%;\n                display:flex;\n                flex-direction:row;\n                gap:1px;\n            }\n            \n            .image-menu-title-principal{\n                width:45%;\n                background-color:rgb(119, 173, 193);\n                border-radius: 5px;\n                display: flex;\n                align-items: center;\n                height:100%;\n            }\n\n            .image-menu-title-imagenes{\n                width:45%;\n                background-color:rgb(119, 173, 193);\n                border-radius: 5px;\n                display: flex;\n                align-items: center;\n            }\n\n            .image-menu-title-imagenes h3{\n                text-align: center;\n                padding-left:10%;\n                color:white;\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n            }\n            \n            .image-menu-title-principal h3{\n                text-align: center;\n                padding-left:15%;\n                color:white;\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n            }      \n\n            .image-menu-svg{\n                width:15%;\n                display:flex;\n            }\n            \n            .image-menu-svg svg{\n                width:40%;\n                fill:rgb(119, 173, 193);\n            }\n\n            .send-form-button{\n                width:40%;\n            }\n\n            .send-form-button svg{\n                width:100%;\n                fill:rgb(119, 173, 193);\n            }\n            \n            .form-row{\n                display: flex;\n                height:35%;\n                align-items:center;\n                justify-content: space-between;\n                gap: 1rem;\n                width: 100%;\n                margin-top:1rem;\n            }\n            \n            .form-element{\n                height:100%;\n                display:flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content:center;\n                gap:1rem;\n                width: 100%;\n            }\n            \n            .element-placeholder{\n                height:20%;\n                margin: 1% 0 1%;\n                width:100%;\n                text-align: center;\n            }\n            \n            .element-placeholder p{\n                font-size: 1.2rem;\n                color:white;\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n            }\n            \n            .form-element input{\n                height:40%;\n                border-radius:7px;\n                border-style: none;\n                text-align: center;\n                box-sizing: border-box;\n                width: 100%;\n                font-family: "Poppins", sans-serif;\n                overflow: visible;\n                font-size: 100%;\n                line-height: 1.15;\n                margin: 0;\n                background-color:rgb(96, 105, 201)\n            }\n        </style>\n        <form>\n            <div class="image-menu">\n                <div class="image-menu-title">\n                    <div class="image-menu-title-principal">\n                        <h3>Principal</h3>\n                    </div>\n                    <div class="image-menu-title-imagenes">\n                        <h3>Imágenes</h3>\n                    </div>\n                </div>\n                <div class="image-menu-svg">\n                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />\n                    </svg>\n                    <div class="send-form-button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></div>\n                </div>\n            </div>\n            <div class="form-row">\n                <div class="form-element">\n                    <div class="element-placeholder">\n                        <p>Nombre de usuario</p>\n                    </div>\n                    <input name="name" type="text">\n                </div>\n                <div class="form-element">\n                    <div class="element-placeholder">\n                        <p>Email</p>\n                    </div>\n                    <input name="email" type="text">\n                </div>\n            </div>\n            <div class="form-row">\n                <div class="form-element">\n                    <div class="element-placeholder">\n                        <p>Contraseña</p>\n                    </div>\n                    <input name="password" type="password">\n                </div>\n                <div class="form-element">\n                    <div class="element-placeholder">\n                        <p>Confirma Contraseña</p>\n                    </div>\n                    <input name="confirmPassword" type="password">\n                </div>\n            </div>\n        </form>\n        ';let n=this.shadow.querySelector("form");this.shadow.querySelector(".send-form-button").addEventListener("click",(e=>{e.preventDefault();let t=new FormData(n),i=Object.fromEntries(t.entries());fetch("http://127.0.0.1:8080/api/admin/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((n=>n.json())).then((n=>{console.log(n),new CustomEvent("refresh-table",{})})).catch((n=>{console.log(n)}))}))}}customElements.define("client-form-component",n)},970:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            .data-management{\n                display:flex;\n                flex-direction:row;\n                justify-content:space-between;\n                height:70vh;\n                width:90%;\n                margin-top: 2%;\n                margin-left:5%;\n            }\n            \n            .client-column{\n                width:45%;\n                display:flex;\n                flex-direction: column;\n                height:100%;\n                justify-content: space-between;\n                gap: 1rem;\n            }\n\n            .client-form{\n                width:65%;\n                display:flex;\n                flex-direction: column;\n                justify-content: space-between;\n                height:100%;\n            }\n        </style>\n        <div class="data-management">\n            <div class="client-column">\n                <slot name="client-column"></slot>\n            </div>\n            <div class="client-form">\n                <slot name="client-form"></slot>\n            </div>\n        </div>\n        '}}customElements.define("data-management-component",n)},468:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            .filter{\n                width:90%;\n                height:3rem;\n                background-color: white;\n                align-items:center;\n                border-radius: 5px;\n                display:flex;\n                margin-left:5%;\n            }\n            svg{\n                width:2%;\n                padding: 0.5% 48% 0 48%;\n                fill:rgb(119, 173, 193);\n            }\n        </style>\n        <div class="filter">\n            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />\n            </svg>\n        </div>\n        '}}customElements.define("filter-component",n)},1:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            .hamburger{\n                height: 2.5rem;\n                width: 100%;\n                position:relative;\n                margin-top:0.5rem;\n            }\n            \n            .hamburger .line {\n                display: block;\n                background-color:hsl(192, 15%, 94%);\n                width: 100%;\n                height: 0.3rem;\n                position: absolute;\n                left:0%;\n                border-radius: 0.25rem;\n                transition: all 0.4s;\n                -webkit-transition: all 0.4s;\n                -moz-transition: all 0.4s;\n                line-height: 1.15;\n                -webkit-text-size-adjust: 100%;\n            }\n            \n            .hamburger .line.line-1 {\n                top: 10%;\n            }\n            \n            .hamburger .line.line-2 {\n                top: 50%;\n            }\n            \n            .hamburger .line.line-3 {\n                top: 90%;\n            }\n            \n            .hamburger:hover .line-1, .hamburger:focus .line-1 {\n                transform: translateY(-0.25rem);\n                -webkit-transform: translateY(-0.25rem);\n                -moz-transform: translateY(-0.25rem);\n            }\n            \n            .hamburger:hover .line-3, .hamburger:focus .line-3 {\n                transform: translateY(0.25rem);\n                -webkit-transform: translateY(0.25rem);\n                -moz-transform: translateY(0.25rem);\n            }\n            \n            .hamburger.active .line-1 {\n                transform: translateY(0.65rem) translateX(0) rotate(45deg);\n                -webkit-transform: translateY(0rem) translateX(0rem) rotate(45deg);\n                -moz-transform: translateY(0.65rem) translateX(0) rotate(45deg);\n                top: 25%;\n            }\n            \n            .hamburger.active .line-2 {\n                opacity: 0;\n            }\n            \n            .hamburger.active .line-3 {\n                transform: translateY(-0.65rem) translateX(0) rotate(-45deg);\n                -webkit-transform: translateY(-0.32rem) translateX(0px) rotate(-45deg);\n                -moz-transform: translateY(-0.65rem) translateX(0) rotate(-45deg);\n                top: 40%;\n            }\n        </style>\n        <div class="hamburger">\n            <span class="line line-1"></span>\n            <span class="line line-2"></span>\n            <span class="line line-3"></span>\n        </div>\n        ',this.shadow.querySelectorAll(".hamburger").forEach((n=>{n.addEventListener("click",(()=>{n.classList.toggle("active"),n.parentElement.classList.toggle("active"),n.parentElement.querySelectorAll("svg").forEach((n=>{n.classList.toggle("active")}))}))}))}}customElements.define("hamburger-component",n)},477:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            \n            .header-title h1{\n                color:white;\n                font-size: 2.5rem;\n                font-weight: 600;\n                text-decoration: none;\n                font-family: "Poppins", sans-serif;\n                margin: 0;\n            }\n        </style>\n        <div class="header-title">\n            <h1>Clientes</h1>\n        </div>\n        '}}customElements.define("header-title-component",n)},832:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n        .login{\n            width:30%;\n            height:35rem;\n            display:flex;\n            flex-direction:column;\n            align-items: center;\n            background-color:hsl(207, 76%, 53%);\n            justify-content:center;\n            margin-left:35%;\n            margin-right:35%;\n            border-radius: 20px;\n            gap:1rem;\n        }\n        .login-body{\n            width:60%;\n            height:30%;\n            flex-direction:column;\n            display:flex;\n            align-items: center;\n            gap:1.5rem;\n        }\n        .login-title{\n            width:100%;\n            height:40%;\n        }\n        .login-title h2{\n            font-size:2rem;\n            text-align: center;\n            font-family: "Poppins", sans-serif;\n            background-color: hsl(194, 86%, 67%);\n            border-radius: 10px;\n            width:60%;\n            margin-left:20%;\n        }\n        .login-description{\n            width:50%;\n            height:40%;\n            margin-left:15%;\n            margin-right:15%;\n        }\n        .login-description h3{\n            font-size:1rem;\n            text-align: center;\n            font-family: "Poppins", sans-serif;\n            background-color: hsl(194, 86%, 67%);\n            border-radius: 10px;\n        }\n        \n        .login-form{\n            width:50%;\n            height:40%;\n        }\n        \n        .login-form form{\n            width:100%;\n            height:100%;\n            gap:2rem;\n        }\n        .user-input input{\n            box-sizing: border-box;\n            width: 100%;\n            height:100%;\n            font-family: "Poppins", sans-serif;\n            overflow: visible;\n            font-size: 100%;\n            line-height: 1.15;\n            margin: 0;\n            margin-top:1.5rem;\n        }\n        \n        .password-input input{\n            box-sizing: border-box;\n            width: 100%;\n            height:100%;\n            font-family: "Poppins", sans-serif;\n            overflow: visible;\n            font-size: 100%;\n            line-height: 1.15;\n            margin: 0;\n            margin-top:1rem;\n        }\n        \n        .send-form-button{\n            width:40%;\n            height:20%;\n            margin-left:30%;\n            margin-right:30%;\n            margin-top:1rem;\n        }\n        \n        .send-form-button button{\n            height:100%;\n            width:100%;\n            border-radius: 10px;\n            border-width: 3px;\n            border-color: hsl(207, 76%, 53%);\n            font-family: "Poppins", sans-serif;\n            text-transform: none;\n            overflow: visible;\n            font-size: 100%;\n            line-height: 1.15;\n            margin: 0;\n        }\n\n        </style>\n        <div class="login">\n            <div class="login-body">\n                <div class="login-title">\n                    <h2>Login</h2>\n                </div>\n                <div class="login-description">\n                    <h3>Introduce tus datos de usuario</h3>\n                </div>\n            </div>\n            <div clas="login-form">\n                <form>\n                    <div class="user-input">\n                        <input class="user-login" name="username" type="text" placeholder="nombre de usuario">\n                    </div>\n                    <div class="password-input">\n                        <input class="user-login" name="password" type="text" placeholder="contraseña">\n                    </div>\n                    <div class="send-form-button">\n                        <button>Login</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        ';let n=document.getElementById("form");document.getElementById("send-form-button").addEventListener("click",(e=>{e.preventDefault();let t=new FormData(n),i=Object.fromEntries(t.entries());fetch("http://192.168.1.16:8080/api/admin/users",{method:"POST",headers:{"Content-Type":"application/json","x-access-token":sessionStorage.getItem("accessToken")},body:JSON.stringify(i)}).then((n=>n.json())).then((n=>{document.dispatchEvent(new CustomEvent("message",{detail:{text:"Formulario enviado correctamente",type:"success"}}))})).catch((n=>{console.log(n)}))}))}}customElements.define("login-component",n)},18:()=>{class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML='\n        <style>\n            img {\n                object-fit: cover;\n                max-width: 100%;\n            }\n            .header-logo{\n                width:100%;\n            }\n        </style>\n        <div class="header-logo">\n            <picture>\n                <a href="#"><img src="./images/Logo.webp" alt="Chromatic, vive tus colores."></a>\n            </picture>\n        </div>\n        '}}customElements.define("logo-component",n)}},e={};function t(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";t(18),t(832),t(477),t(1),t(468),t(970),t(238),t(894)})()})();