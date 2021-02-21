function insert(idLinha,valor,x){
    var linha = window.document.getElementById(idLinha)
    var celula = window.document.createElement("td")
    celula.innerText=valor
    celula.className="col"+x
    linha.appendChild(celula)


}

function criarLinha(id,matriz){
    var tabela = window.document.getElementById("tabela")
    var linha = window.document.createElement("tr")
    var idLinha = "linha"+id
    linha.id=idLinha
    tabela.appendChild(linha)


    for(let x = 0; x<matriz.length;x++){
        insert(idLinha,matriz[x],x)

    }  
    
}

function preenchendoLinha(matriz){
    for(let x = 0;x<matriz.length;x++){
        criarLinha(x,matriz[x])

    }
}

function gerarMatriz(valor){
    var matriz = []
    var linhaMaster = []
    var colunaMaster = []
    for(let x = 0; x<=valor; x++){
        if(x!=0){
            linhaMaster.push(x)
            colunaMaster.push(x)
        }
    
    }

    matriz.push(linhaMaster)
    for(var linha = 0; linha<linhaMaster.length; linha++){
        let vetor = []
        for(var coluna= 0; coluna<colunaMaster.length; coluna++){
            vetor.push(linhaMaster[linha]*colunaMaster[coluna])
        }
        matriz.push(vetor)
    }
    
    matriz[0].reverse()
    matriz[0].push("X")
    matriz[0].reverse()

    for(var x=1;x<matriz.length;x++){
        matriz[x].reverse()
        matriz[x].push(x)
        matriz[x].reverse()
    
    }
    return matriz
}

function apagar(){
    var RESULTADO = window.document.getElementById("resultado")
    RESULTADO.innerHTML=""

}

function main(){
    apagar()
    var TXvalor = window.document.getElementById("numero")
    var valor = Number(TXvalor.value)
    if(valor>10){
        window.confirm("Você digitou um número maior que 10 e o resultado pode sair da área de plotagem, deseja continuar?")
    }
    var matriz = gerarMatriz(valor)
    var RESULTADO = window.document.getElementById("resultado")
    var TABELA = window.document.createElement("table")
    TABELA.id="tabela"
    RESULTADO.appendChild(TABELA)
    preenchendoLinha(matriz)
}
