class ModalTabs extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .tabs{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height: 25%;
                width:90%;
            }
            .tabs-header{
                width:90%;
                display:flex;
                justify-content:space-between;
                flex-direction: row;
                height:20%;
            }
            .tab{
                width:30%;
            }
            .tab button{
                background-color: hsl(207, 76%, 53%);
                border-radius: 5px;
                border:none;
                width:100%;
                height:100%;
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
                font-size: 100%;
                line-height: 1.15;
                margin: 0;
            }
            .tab button.active{
                border-radius: 5px;
                border:none;
                width:100%;
                height:100%;
                background-color: hsl(27, 87%, 47%);
                font-family: "Poppins", sans-serif;
                -webkit-appearance: button;
                text-transform: none;
                overflow: visible;
            }
            .tab button p{
                color:white;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .tabs-contents{
                height:65%;
            }
            .tab-content{
                position: relative;
                height:16%;
                width:39%;
                border-radius: 5px;
            }
            .tab-content.length{
                position: absolute;
                opacity: 0;
            }
            .tab-content p{
                color: white;
                padding-top: 1rem;
                padding-left: 0.5rem;
                padding-right: 0.5rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }
            .tab-content.length.active{
                opacity: 1;
                background-color: hsl(27, 87%, 47%);
            }
            .tab-content.address{
                position: absolute;
                opacity: 0;
            }
            .tab-content.address.active{
                opacity: 1;
                background-color: hsl(27, 87%, 47%);
            }
            .tab-content.required{
                position: absolute;
                opacity: 0;
                background-color: hsl(27, 87%, 47%);
            }
            .tab-content.required.active{
                opacity:1;
            }
        </style>
        <div class="tabs">
            <div class="tabs-header">
                <div class="tab dur">
                    <button data-value="1" class="active">
                        <p>Duración</p>
                    </button>
                </div>
                <div class="tab dir">
                    <button data-value="2">
                        <p>Dirección</p>
                    </button>
                </div>
                <div class="tab req">
                    <button data-value="3">
                        <p>Requisitos</p>
                    </button>
                </div>
            </div>
            <div class="tabs-contents">
                <div class="tab-content length active" data-value="1">
                    <p>El curso tendrá una duración de doce horas repartidas en dos días del fin de semana especificado en la fecha.</p>
                </div>
                <div class="tab-content address" data-value="2">
                    <p>La dirección del local y las oficins de ChromaIC es: Calle Falsa 123 en la localidad de Palma en la Isla de Mallorca, Islas Baleares.</p>
                </div>
                <div class="tab-content required" data-value="3">
                    <p>Los requisitos mínimos son ganas de aprender una nueva técnica de pintura y la voluntad de integrar lo aprendido en tus hábitos artísticos.</p>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('modal-tabs-component', ModalTabs);