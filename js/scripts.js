function insert(idLinha,valor){
    var linha = window.document.getElementById(idLinha)
    var celula = window.document.createElement("td")
    celula.innerText=valor
    linha.appendChild(celula)


}

function criarLinha(id,matriz){
    var tabela = window.document.getElementById("tabela")
    var linha = window.document.createElement("tr")
    var idLinha = "linha"+id
    linha.id=idLinha
    tabela.appendChild(linha)

    if(idLinha=='linha0'){
        insert(idLinha,0)
        for(let x = 0; x<matriz.length;x++){
            insert(idLinha,matriz[x])
        }
    } else{
            insert(idLinha,id)
            for(let x = 0; x<matriz.length;x++){
                insert(idLinha,matriz[x])

            }  
        }
}

function preenchendoLinha(matriz){
    for(let x = 1;x<matriz.length;x++){
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

    for(var linha = 0; linha<linhaMaster.length; linha++){
        let vetor = []
        for(var coluna= 0; coluna<colunaMaster.length; coluna++){
            vetor.push(linhaMaster[linha]*colunaMaster[coluna])
        }
        matriz.push(vetor)
    }
    
    return matriz
}

function main(){

    var TXvalor = window.document.getElementById("numero")
    var valor = Number(TXvalor.value)
    var matriz = gerarMatriz(valor)
    var RESULTADO = window.document.getElementById("resultado")
    var TABELA = window.document.createElement("table")
    TABELA.id="tabela"
    RESULTADO.appendChild(TABELA)
    var id = 0
    criarLinha(id,matriz[0])
    preenchendoLinha(matriz)
}
