export default (() => {
    let inputs = document.querySelectorAll(".limit-counter");

    inputs.forEach((input)=> {
        
        input.addEventListener('input', () => {

            let counter = input.parentElement.querySelector(".counter");

            const maxChars = 20;
            const count = input.value.length;
            
            if (count > maxChars) {
                input.value = input.value.slice(0, maxChars);
                count = maxChars;
            }

            counter.textContent = `${count}/${maxChars}`;

        });
      
    })
  
})();