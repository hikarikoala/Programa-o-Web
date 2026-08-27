const inputItem=document.getElementById("campo-item");
const btnAdd=document.getElementById("btn-adicionar");
const lista=document.getElementById("minha-lista");

btnAdd.onclick=function(){
    const texto=inputItem.value.trim();

    if(texto!=""){
        const item= document.createElement("li");
        item.className="task-item";
        item.textContent= texto;

        lista.appendChild(item);
        inputItem.value="";
    }
};