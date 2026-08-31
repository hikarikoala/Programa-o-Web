const campoTexto = document.getElementById("campo-texto");
const totalLetras = document.getElementById("total-letras");

campoTexto.oninput = function () {
    totalLetras.textContent = campoTexto.value.length;
};