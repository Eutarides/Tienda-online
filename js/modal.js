export default (() => {
    const botones = document.querySelectorAll('.modal-button');
    const overlay = document.querySelector('.overlay');

    botones.forEach((boton)=>{
        boton.addEventListener('click', ()=> {
            overlay.classList.toggle('active');
        })

    });

    const cross = document.querySelector('.checkout-cross');

    cross.addEventListener('click', ()=> {
        overlay.classList.toggle('active');
    });

    let modal = document.querySelector('.modal-column');
    let final = document.querySelector('.modal-item-button');

    final.addEventListener('click', ()=> {
        modal.classList.toggle('active');
    });

    let volver = document.querySelector('.goback-button');

    volver.addEventListener('click' , ()=> {
        modal.classList.toggle('active');
    });


})();