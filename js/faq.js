export default (() => {
    let plusminuss=document.querySelectorAll('.plus-minus-toggle');
    let descriptions = document.querySelectorAll('.faq-item-description');
    plusminuss.forEach((plusminus)=>{
        plusminus.addEventListener('click',()=>{
            plusminus.classList.toggle('active');

            let descriptions = plusminus.parentElement.querySelectorAll('.faq-item-description');

            descriptions.forEach((description)=>{
                description.classList.toggle('active');
            })
           
        })
    });

})();