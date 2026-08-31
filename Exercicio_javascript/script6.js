const texto = document.getElementById("texto-secreto");
const btnToggle = document.getElementById("btn-toggle");

btnToggle.onclick = function () {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        btnToggle.textContent = "Ocultar texto";
    } else {
        texto.style.display = "none";
        btnToggle.textContent = "Mostrar Texto";
    }
};