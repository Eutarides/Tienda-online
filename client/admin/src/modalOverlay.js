import { API_URL } from '../config/config.js'

class ModalOverlay extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    async connectedCallback () {
        document.addEventListener('open-modal-overlay',  async event => {
            const overlay = this.shadow.querySelector('.overlay');
            overlay.classList.toggle('active');
            
        })

        this.render()
    }

    render() {

        this.shadow.innerHTML = 
        `
        <style>
            .overlay{
                height: 50vh;
                position: fixed;
                top: 0;
                width: 50vh;
                z-index: 3000;
                display: none;
                background-color: hsl(194, 65%, 45%);
                right:38%;
                top:40%;
            }
            
            .overlay.active{
                height: 80vh;
                position: fixed;
                top: 0;
                width: 110vh;
                z-index: 3000;
                display: block;
                background-color: hsl(194, 68%, 71%);
                right:20%;
                top:5%;
                border-radius:10px;
            }

            .overlay-menu{
                height:10%;
                display:flex;
                align-items:left;
                gap:0.2rem;
                padding-left:1rem;
                margin-top:1rem;
            }

            .image-overlay{
                height:70%;
                display:flex;
                display:none;
            }

            .image-overlay.active{
                height:70%;
                display:flex;
                flex-direction:column;
            }

            .image-overlay-title{
                height:15%;
                padding-left:3%;
                margin-top:1rem;
            }

            .image-overlay-title p{
                font-size: 1.3rem;
                font-family: "Poppins", sans-serif;
                margin: 0;
            }

            .image-overlay-svg{
                fill:black;
                width:10%;
                padding-left:2rem;
            }

            .gallery-overlay{
                height:80%;
                display:flex;
                justify-content:space-between;
                display:none;
                position:relative;
            }

            .gallery-overlay.active{
                height:80%;
                display:flex;
                justify-content:space-between;
                display: block;
                position:relative;
            }

            .overlay-button{
                background-color:rgb(54, 119, 143);
                width:20%;
                border-radius: 5px;
                display: flex;
                align-items: center;
                height:100%;
                font-family: "Poppins", sans-serif;
                font-size:1.3rem;
            }

            .overlay-button.active{
                background-color:rgb(119, 173, 193);
                width:20%;
                border-radius: 5px;
                display: flex;
                align-items: center;
                height:100%;
                font-family: "Poppins", sans-serif;
                font-size:1.3rem;
            }

            .overlay-menu svg{
                margin-left:50%;
                width:10%;
            }

            .image{
                width:80%;
                height:80%:
            }

            .gallery-overlay-menu{
                width:20%;
                right:5%;
                top:10%;
                position:absolute;
            }

            .gallery-overlay-menu p{
                text-align:center;
                font-family: "Poppins", sans-serif;
                font-size:1.3rem;
            }

            .gallery-overlay input{
                width:100%;
                border-radius:7px;
                border-style: none;
                height:1.5rem;
            }

            .img.selected{
                border: 2px hsl(84, 71%, 46%);
            }

            .gallery-overlay button{
                bottom:0%;
                right:5%;
                width:20%;
                height:10%;
                background-color: rgb(119, 173, 193);
                color:white;
                cursor: pointer;
                border-radius:10px;
                border:none;
                font-size:1.3rem;
                position:absolute;
            }


        </style>
        <div class="overlay">
            <div class="overlay-menu">
                <button class="overlay-button active" data-value="1">Imágenes</button>
                <button class="overlay-button" data-value="2">Galería</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
            </div>
            <div class="image-overlay row active" data-value="1">
                <div class="image-overlay-title">
                    <p>Selecciona una imágen.</p>
                </div>
                <div class="image-overlay-svg">
                    <input type="file" id="file-input" style="display: none;">
                    <label for="file-input">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab-plus</title><path d="M3,3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z" /></svg>
                    </label>                
                </div>
            </div>
            <div class="gallery-overlay row" data-value="2">
                <div class="gallery-overlay-menu">
                    <p>Título</p>
                    <input class="title"></input>
                    <p>Texto alternativo</p>
                    <input class="alt"></input>
                </div>
                <button>Elegir imagen</button>
            </div>
        </div>
        `;
        
        let overlayButtons = this.shadow.querySelectorAll(".overlay-button");
        let rows = this.shadow.querySelectorAll(".row");

        overlayButtons.forEach((overlayButton) => {
            overlayButton.addEventListener('click', (event) => {
                overlayButtons.forEach((overlayButton)=>{
                    overlayButton.classList.remove('active')
                });
                overlayButton.classList.add('active');

                rows.forEach( row => {
                    if (overlayButton.dataset.value == row.dataset.value){
                        row.classList.add('active');
                    }else if(overlayButton.dataset.value != row.dataset.value){
                        row.classList.remove('active');
                    }
                })
            });
        });

        let closeButton = this.shadow.querySelector(".overlay-menu svg");
        let overlay = this.shadow.querySelector(".overlay");

        closeButton.addEventListener('click', (event) => {
            overlay.classList.remove('active');
        });


        let addFile = this.shadow.querySelector("#file-input");

        addFile.addEventListener('change', (event)=>{
            event.preventDefault();
            let file = event.target.files[0];
            let formData = new FormData();
            formData.append('file',file);
            
            fetch(`${API_URL}/api/admin/images`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
                },
                method: 'POST',
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {

                console.log(data)

                data.forEach(element=>{

                    let gallery = this.shadow.querySelector('.gallery-overlay');
                    let imageDiv = document.createElement("div");
                    imageDiv.classname= "image";
                    gallery.appendChild(imageDiv);
        
                    let image = document.createElement("img");
                    image.classname= "selected";
                    image.dataset.src = `${API_URL}/api/admin/images/${filename}`;
                    image.setAttribute('src', `${API_URL}/api/admin/images/${filename}`)
                    imageDiv.appendChild(image);
        
                })
            });

        })

        let searchButton = this.shadow.querySelector(".gallery-overlay button")
        searchButton.addEventListener('click', ()=>{
            const selectedImage = this.shadow.querySelector('.gallery-overlay selected');
            const src = selectedImage.getAttribute('src');
            
            const titleInput = this.shadow.querySelector('.gallery-overlay-menu title');
            const title = titleInput.value;
            
            const altInput = this.shadow.querySelector('.gallery-overlay-menu alt');
            const alt = altInput.value;
            
            const data = {
                src: src,
                title: title,
                alt: alt
            };

            const jsonData = JSON.stringify(data);
            console.log(jsonData);

            const eventData = {
                detail: {
                  jsonData: jsonData
                }
            };


            const customEvent = new CustomEvent('data-selected', eventData);

            this.dispatchEvent(customEvent);
        })
    }
    
}

customElements.define('modal-overlay-component', ModalOverlay);