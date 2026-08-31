const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const btnSomar = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado");

btnSomar.onclick = function () {
    const n1 = Number(inputNum1.value);
    const n2 = Number(inputNum2.value);

    const somar = n1 + n2;
    resultado.textContent = somar;
};