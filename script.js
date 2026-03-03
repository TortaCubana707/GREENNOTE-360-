// Esperamos a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos el botón y la lista de pasos
    const botonPasos = document.getElementById("btn-pasos");
    const listaPasos = document.getElementById("lista-pasos");

    // Agregamos el evento de clic al botón
    botonPasos.addEventListener("click", function() {
        
        // Comprobamos si la lista está oculta o visible
        if (listaPasos.classList.contains("oculto")) {
            // Si está oculta, la mostramos y cambiamos el texto del botón
            listaPasos.classList.remove("oculto");
            botonPasos.textContent = "Ocultar pasos ⬆️";
        } else {
            // Si está visible, la ocultamos de nuevo
            listaPasos.classList.add("oculto");
            botonPasos.textContent = "Ver pasos para plantar 🌻";
        }
    });

});
