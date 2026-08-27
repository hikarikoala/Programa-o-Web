let valor= 0;

const visor= document.getElementById("numero");
const btnMais= document.getElementById("btn-mais");
const btnMenos= document.getElementById("btn-menos");

btnMais.onclick=function(){
    valor= valor+1;
    visor.textContent= valor;

};


btnMenos.onclick=function(){
    valor= valor-1;
    visor.textContent= valor;

};

