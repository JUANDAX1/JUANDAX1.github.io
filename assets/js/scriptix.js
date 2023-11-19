// scriptix.js

/*
const imagenesExpansibles = document.querySelectorAll(".expandirx");

imagenesExpansibles.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        if (imagen.classList.contains("expandida")) {
            imagen.style.transform = "scale(1)";
            imagen.style.transformOrigin = "center center";
            imagen.classList.remove("expandida");
        } else {
            imagen.style.transform = "scale(1.5)";
            imagen.style.transformOrigin = "center center";
            imagen.classList.add("expandida");
        }
    });
});
*/

const imagenesExpansibles = document.querySelectorAll(".expandirx");

imagenesExpansibles.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        if (imagen.classList.contains("expandida")) {
            imagen.style.transform = "scale(1)";
            imagen.style.transformOrigin = "center center";
            imagen.classList.remove("expandida");
            imagen.style.zIndex = "auto"; // Restablecer el z-index a su valor predeterminado
        } else {
            // Asignar un z-index más alto cuando la imagen se expanda
            imagen.style.transform = "scale(1.5)";
            imagen.style.transformOrigin = "center center";
            imagen.classList.add("expandida");
            imagen.style.zIndex = "9999"; // Establecer un valor alto de z-index
        }
    });
});


function confirmarDescarga() {
    var confirmacion = confirm("¿deseas descargar el archivo Business Case?");
    if (confirmacion) {
        window.location.href = "images/Business Case_Ecommerce_Public.xlsx";
    }
}


