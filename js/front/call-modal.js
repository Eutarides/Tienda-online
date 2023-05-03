export default (() => {

    document.addEventListener('modal', (event =>{

       this.shadow.querySelector('modal').classList.toggle('active');
    }));
})();