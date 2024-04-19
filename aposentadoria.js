const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

function soma(idade,contribuicao){
    return idade+contribuicao
}

if(sexo == "F" && idade>=30){
    if(soma(idade,contribuicao)>=85){
        console.log('Silvana, você pode se aposentar!')
    }else {
        console.log('Silvana, você ainda não pode se aposentar!')
    }
} else if (sexo == "M" && idade>=35) {
    if(soma(idade,contribuicao)>= 95){
        console.log('O senhor pode se aposentar!')
    }else{
        console.log('O senhor ainda não pode se aposentar!')
    }
    
} else {
    console.log("Você não atingiu os requisitos para se aposentar!")
}