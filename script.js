function votar(){
    let idade = prompt("digite a sua idade")
    idade= Number(idade)
    if (idade >= 18 && idade <= 70){
        alert ("você é obrigado a votar.")        
    }
    else{
        alert("você não é obrigado a votar")
    }
}
function acesso(){

    let usuariocerto="aluno123", senhacerta="123", usuario, senha
    senhacerta = Number(senhacerta)

    usuario = prompt ("digite o seu nome de usuario")
    
    if(usuario == usuariocerto){
        senha = prompt ("digite a sua senha")
        if (senha == senhacerta){
            alert("você entrou no sistema")
        }
        else{
            alert("você não entrou no sistema")
        }
    }
    else{
        alert("você não entrou no sistema")
    }
}
function evento() {
    let idade = prompt("Digite sua idade");
    idade = Number(idade);

    let ingresso = false;
    let vip = false;

    if (idade >= 18) {
        alert("Você tem a idade certa.");
        
        let ingressoResposta = prompt("Você tem ingresso? (digite sim ou não)").toLowerCase();
        if (ingressoResposta === "sim") {
            ingresso = true;
        }

        if (ingresso) {
            alert("Muito bem.");
            
            let vipResposta = prompt("Você é VIP? (digite sim ou não)").toLowerCase();
            if (vipResposta === "sim") {
                vip = true;
            }
            
            if (vip) {
                alert("Ótimo, a sala VIP é à direita.");
            } else {
                alert("Tranquilo, a pista é à esquerda.");
            }
        } else {
            alert("Você precisa comprar seu ingresso primeiro, volte quando comprar.");
        }
    } else {
        alert("Você não tem a idade mínima.");
    }
}
function rg(){
    let numerorg = prompt("digite seu rg")

    if (numerorg.length > 9 | numerorg.length <= 8){
        alert ("digite um rg válido")
    }
}

