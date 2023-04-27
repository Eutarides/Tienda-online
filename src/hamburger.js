class Hamburger extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .hamburger{
                height: 2rem;
                width: 100%;
                position:relative;
            }
            
            .hamburger .line {
                display: block;
                background-color:hsl(192, 15%, 94%);
                width: 30%;
                height: 0.3rem;
                position: absolute;
                left:50%;
                border-radius: 0.25rem;
                transition: all 0.4s;
                -webkit-transition: all 0.4s;
                -moz-transition: all 0.4s;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
            }
            
            .hamburger .line.line-1 {
                top: 10%;
            }
            
            .hamburger .line.line-2 {
                top: 50%;
            }
            
            .hamburger .line.line-3 {
                top: 90%;
            }
            
            .hamburger:hover .line-1, .hamburger:focus .line-1 {
                transform: translateY(-0.25rem);
                -webkit-transform: translateY(-0.25rem);
                -moz-transform: translateY(-0.25rem);
            }
            
            .hamburger:hover .line-3, .hamburger:focus .line-3 {
                transform: translateY(0.25rem);
                -webkit-transform: translateY(0.25rem);
                -moz-transform: translateY(0.25rem);
            }
            
            .hamburger.active .line-1 {
                transform: translateY(0.65rem) translateX(0) rotate(45deg);
                -webkit-transform: translateY(0rem) translateX(0rem) rotate(45deg);
                -moz-transform: translateY(0.65rem) translateX(0) rotate(45deg);
                top: 25%;
            }
            
            .hamburger.active .line-2 {
                opacity: 0;
            }
            
            .hamburger.active .line-3 {
                transform: translateY(-0.65rem) translateX(0) rotate(-45deg);
                -webkit-transform: translateY(-0.32rem) translateX(0px) rotate(-45deg);
                -moz-transform: translateY(-0.65rem) translateX(0) rotate(-45deg);
                top: 40%;
            }
        </style>
        <div class="hamburger">
            <span class="line line-1"></span>
            <span class="line line-2"></span>
            <span class="line line-3"></span>
        </div>
        `;

    }
}

customElements.define('hamburger-component', Hamburger);