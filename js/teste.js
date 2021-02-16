var matriz = []
var linhaMaster = []
var colunaMaster = []
var numero = 10

for(var numero = 4; numero>0; numero--){
    linhaMaster.push(numero)
    colunaMaster.push(numero)
}
linhaMaster.sort()
colunaMaster.sort()
console.log(linhaMaster)
console.log(colunaMaster)
console.log(linhaMaster*colunaMaster)


for(var linha = 0; linha<linhaMaster.length; linha++){
    let vetor = []
    for(var coluna= 0; coluna<colunaMaster.length; coluna++){
        vetor.push(linhaMaster[linha]*colunaMaster[coluna])
    }
    matriz.push(vetor)
}

console.log(matriz)