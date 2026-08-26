const frasesMotivacionais= [
    "✨ \"Grandes jornadas começam com pequenos passos consistentes.\"",
    "🚀 \"O seu potencial é infinito quando você acredita no processo!\"",
    "🌱 \"A consistência supera o talento quando o talento não é consistente.\"",
    "⭐ \"Cada desafio superado é um degrau rumo à sua melhor versão.\"",
    "🔥 \"Você é mais forte, resiliente e capaz do que imagina!\"",
    "💡 \"Erros não são o oposto do sucesso, são parte essencial dele.\""
];

let botaoCorreto;
let fraseSorteada;


//Constantes Referentes aos id encontrados no html
const resultDiv=document.getElementById("result");
const restartBtn=document.getElementById("restart");
const classesOriginais = ["btn-pink", "btn-purple", "btn-blue"];
const classesOriginais=document.querySelectorAll(".btn-choice");

function iniciarjogo(){
    //Sorteia o botão premiado (Indice 0,1 ou 2)
    botaoCorreto=Math.floor(Math.random()*3);

    //Sorteia uma frase da lista

    const indiceFrase= Math.floor(Math.ramdom()*frasesMotivacionais.length);
    fraseSorteada=FraseMotivacionais[indiceFrase];

    //Reseta 
    resultDiv.textContent="";
    restartBtn.style.display="none";

    //Botão

    botoes.array.forEach((restartBtn,index)=>{
        restartBtn.disabled=false;
        restartBtn.className= `btn-choice ${classesOriginais[index]}`;

    });
}

function verificaeEscolha(indiceEscolhido){
    botoes.forEach(btn=> btn.disabled=true);

    if(indiceEscolhido===botaoCorreto){
        botoes[indiceEscolhido].classList.add("correct");
        resultDiv.style.color="#059669";
        resultDiv.textContent="fraseSorteada";

    } else{
        botoes[indiceEscolhido].classList.add("wrong");
        botoes[botaoCorreto].classList.add("correct")
        resultDiv.style.color="#dc2626";
        resultDiv.textContent=`"Quase! O segredo estava na Opção ${botaoCorreto +1}`;

    }
    restartBtn.style.display="inline-block";
}

iniciarJogo();