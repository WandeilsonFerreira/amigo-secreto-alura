let amigos = []

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;          
}

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    
    if (amigo == ""){
        exibirTextoNaTela('#erro-menssage', 'Por favor, insira um nome.');
    }
    else{
        exibirTextoNaTela('#erro-menssage', '');
        amigos.push(amigo)
        limparCampo();
    }
    exibirTextoNaTela('#listaAmigos', amigos);
}

function sortearAmigo(){
    if (amigos.length === 0){
        exibirTextoNaTela('#erro-menssage', 'Por favor, insira um nome.');
    } else {
        exibirTextoNaTela('#erro-menssage', '');
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let elementoSorteado = amigos[indiceAleatorio];
        exibirTextoNaTela('#resultado', elementoSorteado);        
    }

}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
