var control=0                

function adicionar(){
    let linha = window.document.getElementById("linha1")
    let celula = window.document.createElement("td")
    

    celula.innerText="olá mundo"

    linha.appendChild(celula)
                           

}

function coluna(){
    control++                                                        
    let coluna = window.document.getElementById("tabela")
    let Tcoluna = window.document.createElement("tr")
    Tcoluna.id="linha"+control
    let text="é nóis"
    let linha = window.document.getElementById(Tcoluna.id)
    let celula = window.document.createElement("td")
    
    celula.innerText=text

    linha.appendChild(celula)



}