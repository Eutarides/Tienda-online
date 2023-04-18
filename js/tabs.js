export default (() => {
    // let buttons = document.querySelectorAll('.tab button')
    // let details = document.querySelectorAll('.tab-content')

    // buttons.forEach((button) =>{
        
    //     button.addEventListener("click", ()=>{

    //         buttons.forEach(button => {
    //             button.classList.remove('active'); 
    //         })

    //         button.classList.add('active');

    //         details.forEach( detail => {
    //             if (button.dataset.value == detail.dataset.value){
    //                 detail.classList.add('active');
    //             }else if(button.dataset.value != detail.dataset.value){
    //                 detail.classList.remove('active');
    //             }
    //         })
            
    //     })

    // })
    const tabsHeader = document.querySelector('.tabs-header');
    const tabContents = document.querySelector('.tabs-contents');
    const tabs = tabsHeader.querySelectorAll('button');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabsHeader.querySelector('.active').classList.remove('active');
            tabContents.querySelector('.active').classList.remove('active');
            tab.classList.add('active');
            tabContents.querySelector(`[data-value="${tab.dataset.value}"]`).classList.add('active');
        });
    });

  
})();
