export default (() => {
    let hamburgers = document.querySelectorAll('.team-member-hamburger');
    hamburgers.forEach((hamburger)=>{
        hamburger.addEventListener('click', ()=>{
            hamburger.classList.toggle('active');
            hamburger.parentElement.classList.toggle('active');

            let svgs = hamburger.parentElement.querySelectorAll('svg');

            svgs.forEach(svg => {
                svg.classList.toggle("active");
            })
        })
    });
})();