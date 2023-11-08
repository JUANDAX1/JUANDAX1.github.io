// scriptix.js


const imagenesExpansibles = document.querySelectorAll(".expandirx");

imagenesExpansibles.forEach(function (imagen) {
    imagen.addEventListener("click", function () {
        if (imagen.classList.contains("expandida")) {
            imagen.style.transform = "scale(1)";
            imagen.style.transformOrigin = "center center";
            imagen.classList.remove("expandida");
        } else {
            imagen.style.transform = "scale(2)";
            imagen.style.transformOrigin = "center center";
            imagen.classList.add("expandida");
        }
    });
});

function confirmarDescarga() {
    var confirmacion = confirm("¿deseas descargar el archivo Busines Case?");
    if (confirmacion) {
        window.location.href = "images/Business Case_Ecommerce_Public.xlsx";
    }
}