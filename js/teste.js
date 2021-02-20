var matriz = []
var linhaMaster = []
var colunaMaster = []
var numero = 4

for(let x = 0; x<=numero; x++){
    if(x!=0){
        linhaMaster.push(x)
        colunaMaster.push(x)
    }
    
}

console.log(linhaMaster)
console.log(colunaMaster)


for(var linha = 0; linha<linhaMaster.length; linha++){
    let vetor = []
    for(var coluna= 0; coluna<colunaMaster.length; coluna++){
        vetor.push(linhaMaster[linha]*colunaMaster[coluna])
    }
    matriz.push(vetor)
}

console.log(matriz)