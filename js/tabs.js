export default (() => {
    let buttons = document.querySelectorAll('.tab button')
    let details = document.querySelectorAll('.tab-content')

    buttons.forEach((button)=>{
        button.addEventListener("click", () => {
            details.classList.toggle('active');
        })
    })
  
})();