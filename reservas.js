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

let envBtn = document.getElementById("boton");
envBtn.addEventListener("click", escuchar);

function escuchar(event) {
    event.preventDefault();
    let pelicula = document.getElementById("pelicula").value;
    let cantidad = document.getElementById("cantidad").value;
    let silla = document.getElementById("silla").value;
    let boleta = 0
    if(silla == "general") {
        boleta = 10000
    } else {
        boleta= 15000
    }

    let total = boleta * cantidad;

    console.log(pelicula);
    console.log(cantidad);
    console.log(silla);
    alert("Precio total" + total + " pesos")
}