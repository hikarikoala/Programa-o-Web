const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = '☀️ Ativar Modo Claro';
    } else {
        btnTema.textContent = '🌙 Ativar Modo Escuro';
    }
});

const campoNome = document.getElementById('campo-nome');
const btnSaudacao = document.getElementById('btn-saudacao');
const txtSaudacao = document.getElementById('txt-saudacao');
const contagemCaracteres = document.getElementById('contagem-caracteres');

btnSaudacao.addEventListener('click', () => {
    const nome = campoNome.value.trim();
    if (nome !== "") {
        txtSaudacao.textContent = `Olá, ${nome}!`;
        txtSaudacao.className = 'text-center text-success';
    } else {
        txtSaudacao.textContent = 'Digite algo no campo acima.';
        txtSaudacao.className = 'text-center text-danger';
    }
});

campoNome.addEventListener('input', () => {
    contagemCaracteres.textContent = campoNome.value.length;
});


const displayContador = document.getElementById('display-contador');
let contador = 0;

function atualizarContador() {
    displayContador.textContent = contador;
    displayContador.classList.remove('text-success', 'text-danger', 'text-muted');
    
    if (contador > 0) {
        displayContador.classList.add('text-success');
    } else if (contador < 0) {
        displayContador.classList.add('text-danger');
    } else {
        displayContador.classList.add('text-muted');
    }
}

document.getElementById('btn-aumentar').addEventListener('click', () => {
    contador++;
    atualizarContador();
});

document.getElementById('btn-diminuir').addEventListener('click', () => {
    contador--;
    atualizarContador();
});

document.getElementById('btn-zerar').addEventListener('click', () => {
    contador = 0;
    atualizarContador();
});


const tarefaInput = document.getElementById('tarefa-input');
const listaTarefas = document.getElementById('lista-tarefas');

document.getElementById('btn-add-tarefa').addEventListener('click', () => {
    const texto = tarefaInput.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = texto;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    listaTarefas.appendChild(li);
    tarefaInput.value = ''; 
});

const btnDica = document.getElementById('btn-dica');
const txtDica = document.getElementById('txt-dica');

btnDica.addEventListener('click', () => {
    if (txtDica.style.display === 'none') {
        txtDica.style.display = 'block';
        btnDica.textContent = 'Ocultar Dica';
    } else {
        txtDica.style.display = 'none';
        btnDica.textContent = 'Mostrar Dica';
    }
});


const calcV1 = document.getElementById('calc-v1');
const calcV2 = document.getElementById('calc-v2');
const resultadoCalc = document.getElementById('resultado-calc');

document.getElementById('btn-somar').addEventListener('click', () => {
    const res = Number(calcV1.value) + Number(calcV2.value);
    resultadoCalc.textContent = res;
});

document.getElementById('btn-subtrair').addEventListener('click', () => {
    const res = Number(calcV1.value) - Number(calcV2.value);
    resultadoCalc.textContent = res;
});

document.getElementById('btn-dividir').addEventListener('click', () => {
    const n1 = Number(calcV1.value);
    const n2 = Number(calcV2.value);
    
    if (n2 === 0) {
        resultadoCalc.textContent = "Impossível dividir por 0";
    } else {
        resultadoCalc.textContent = (n1 / n2).toFixed(2);
    }
});


const blocoCor = document.getElementById('bloco-cor');

function alterarBloco(cor, nome) {
    blocoCor.style.backgroundColor = cor;
    blocoCor.textContent = nome;
}

document.getElementById('btn-cor-blue').addEventListener('click', () => alterarBloco('var(--primary)', 'Azul'));
document.getElementById('btn-cor-green').addEventListener('click', () => alterarBloco('var(--success)', 'Verde'));
document.getElementById('btn-cor-red').addEventListener('click', () => alterarBloco('var(--danger)', 'Vermelho'));
document.getElementById('btn-cor-purple').addEventListener('click', () => alterarBloco('var(--purple)', 'Roxo'));