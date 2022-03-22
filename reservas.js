let contenedor = document.getElementById("contenedor");

contenedor.addEventListener("click", function(evento){
    if (evento.target.classList.contains("w-100")) {
        evento.target.src="stuff/cyan.png"
        bandera = false
    } else if(evento.target.classList.contains("w-100")) {
        evento.target.src="stuff/cyan.png"
        bandera = false
    }
}) 