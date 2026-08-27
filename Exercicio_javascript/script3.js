const inputNome=document.getElementById("campo-nome");
const btnOla=document.getElementById("btn-ola");
const textoMensagem=document.getElementById("mensagem");

btnOla.onclick=function(){
    const nome= inputNome.value;

    if(nome===""){
        textoMensagem.textContent="Por favor, digite um nome!";
    } else{
        textoMensagem.textContent="Olá,"+ nome + "!Seja bem-vindo!";
        inputNome.Value=""; //Limpa o Campo

    }
};