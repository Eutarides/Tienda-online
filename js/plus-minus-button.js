export default (() => {
    let pluss = document.querySelectorAll('.plus-button button');
    let minuss = document.querySelectorAll('.minus-button button');

    pluss.forEach((plus)=>{
        plus.addEventListener("click", () => {

            let units = plus.closest('.plus-minus-button').querySelector('input');
    
            units.value = (parseInt(units.value)+1)

            document.dispatchEvent(new CustomEvent('notification', {
                detail: {
                    text: "Producto añadido a la cesta",
                    type: 'success'
                }
            }))
        });
        
    })

    minuss.forEach((minus)=>{
        minus.addEventListener("click", () => {

            let units = minus.closest('.plus-minus-button').querySelector('input');
    
            if(units.value > 1){
                units.value = (parseInt(units.value)-1)

                document.dispatchEvent(new CustomEvent('notification', {
                    detail: {
                        text: "Producto eliminado de la cesta",
                        type: 'error'
                    }
                }))
            }
        });
    })
  
})();