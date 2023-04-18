export default (() => {

    document.addEventListener("notification", (event =>{

        let notification = document.querySelector(".notification");
        let notificationText = document.getElementById("notification-text");
        
        // Podemos utilizar los parámetros que se han enviado en el evento, escribiendo event.detail y a continuación el nombre del parámetro.
        notificationText.innerHTML = event.detail.text;
        notification.classList.add('active');
        notification.classList.add(event.detail.type);

        setTimeout(() => {
            notification.classList.remove('active');
            notification.classList.remove(event.detail.type);
        }, 5000);
    }));
})();