export default (() => {
    const botones = document.querySelectorAll('.modal-button');
    const modal = document.querySelector('.modal');

    botones.forEach((boton)=>{
        boton.addEventListener('click', ()=> {
            modal.classList.toggle('active');
        })

    });
  
})();