function insert(idC){
    var coluna = window.document.getElementById(idC)
    var celula = window.document.createElement("td")
    

    celula.innerText="olá mundo"
    coluna.appendChild(celula)


}

function criarLinha(){
    var tabela = window.document.getElementById("tabela")
    var coluna = window.document.createElement("tr")

    coluna.id="linha2"

    tabela.appendChild(coluna)


}

function preenchendoLinha(idC,control){
    for(let x=0;x<4;x++){
    insert(idC+control)
}
}
var RESULTADO = window.document.getElementById("resultado")

var TABELA = window.document.createElement("table")
TABELA.id="tabela"

RESULTADO.appendChild(TABELA)

var LINHA = window.document.createElement("tr")
LINHA.id="linha1"

TABELA.appendChild(LINHA)

var control=1
var idC ="linha"
preenchendoLinha(idC,control)
criarLinha()
control++
preenchendoLinha(idC,control)
