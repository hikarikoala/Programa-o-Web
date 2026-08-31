const quadrado= document.getElementById("quadrado");
const btnVermelho= document.getElementById("btn-vermelho");
const btnAzul= document.getElementById("btn-azul");
const btnVerde= document.getElementById("btn-verde");



btnVermelho.onclick = function () {
    quadrado.style.backgroundColor="#dc2626";
    quadrado.textContent="Vermelho";
};

btnVerde.onclick = function () {
    quadrado.style.backgroundColor="#16a34a";
    quadrado.textContent="Verde";
};

btnAzul.onclick = function () {
    quadrado.style.backgroundColor="#2563eb";
    quadrado.textContent="Azul";
};