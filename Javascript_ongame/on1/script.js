const frasesMotivacionais = [
  "✨ \"Grandes jornadas começam com pequenos passos consistentes.\"",
  "🚀 \"O seu potencial é infinito quando você acredita no processo!\"",
  "🌱 \"A consistência supera o talento quando o talento não é consistente.\"",
  "⭐ \"Cada desafio superado é um degrau rumo à sua melhor versão.\"",
  "🔥 \"Você é mais forte, resiliente e capaz do que imagina!\"",
  "💡 \"Erros não são o oposto do sucesso, são parte essencial dele.\""
];

let botaoCorreto;
let fraseSorteada;

const resultDiv = document.getElementById("result");
const restartBtn = document.getElementById("restart");
const botoes = document.querySelectorAll(".btn-choice");
const classesOriginais = ["btn-pink", "btn-purple", "btn-blue"];

function iniciarJogo() {
 
  botaoCorreto = Math.floor(Math.random() * 3);

  const indiceFrase = Math.floor(Math.random() * frasesMotivacionais.length);
  fraseSorteada = frasesMotivacionais[indiceFrase];


  resultDiv.textContent = "";
  restartBtn.style.display = "none";

  botoes.forEach((btn, index) => {
    btn.disabled = false;
    btn.className = `btn-choice ${classesOriginais[index]}`;
  });
}

function verificarEscolha(indiceEscolhido) {
  botoes.forEach(btn => btn.disabled = true);

  if (indiceEscolhido === botaoCorreto) {
    botoes[indiceEscolhido].classList.add("correct");
    resultDiv.style.color = "#059669";
    resultDiv.textContent = fraseSorteada;
  } else {
    botoes[indiceEscolhido].classList.add("wrong");
    botoes[botaoCorreto].classList.add("correct");
    resultDiv.style.color = "#dc2626";
    resultDiv.textContent = ` Quase! O segredo estava na Opção ${botaoCorreto + 1}.`;
  }

  restartBtn.style.display = "inline-block";
}

iniciarJogo();