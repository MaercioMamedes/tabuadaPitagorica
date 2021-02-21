var matriz = []
var linhaMaster = []
var colunaMaster = []
var numero = 4

for(let x = 0; x<=numero+1; x++){
    if(x!=0){
        linhaMaster.push(x)
        colunaMaster.push(x)
    }
    
}

console.log(linhaMaster)
console.log(colunaMaster)

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

console.log(matriz)