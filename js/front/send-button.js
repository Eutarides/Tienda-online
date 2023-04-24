export default (() => {
    let sends = document.querySelectorAll('.send-button');

    let validations = {
        "only-letters": {
            "regex" : /^[a-zA-Z\s]+$/g,
            "message": "Sólo letras"
        },
        "only-numbers": {
            "regex" : /\d/g,
            "message" : "Sólo números"
        },
        "telephone": {
            "regex" : /^\d{9}$/g,
            "message" : "Teléfono no válido"
        },
        "email": {
            "regex" : /\w+@\w+\.\w+/g,
            "message" : "email no válido"
        }
    }

    let validForm = true;

    sends.forEach((send)=>{
        send.addEventListener('click', event =>{
            event.preventDefault();
            validateForm(send.closest('form').elements);
        })
    })

    let validateForm = elements => {

        for( let i = 0 ; i < elements.length; i++){
    
            let element = elements[i];
    
            if(element.dataset.validate) {

                if(element.value.match(validations[element.dataset.validate].regex) == null) {
                    element.classList.add('invalid');
                    console.log(validations[element.dataset.validate].message)
                    console.log(element.parentElement)
                    validForm = false;
                }else{
                    element.classList.remove('invalid');
                }
            
            }
        }

        const invalid = document.querySelectorAll('.invalid');
        const inval = invalid.name;

        if(!validForm){
            let alert = document.createElement("span");
            
        }
    };
  
})();