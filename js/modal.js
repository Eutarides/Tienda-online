export default (() => {
    const botones = document.querySelectorAll('.modal-button');
    botones.forEach((boton)=>{
        boton.addEventListener('click', ()=> {
            console.log("clicaste");
        })

    });
  
})();