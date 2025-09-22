// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let listaSorteados = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if(listaDeAmigos.includes(amigo)){
        alert("Este amigo ya fue agregado");
        return;
    }
    listaDeAmigos.push(amigo);
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.innerText = amigo;
    lista.appendChild(li);
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    if(listaDeAmigos.length < 2){
        alert("Agrega al menos 2 amigos para sortear");
        return;
    }
    let amigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    console.log(amigoSecreto);
    if (listaDeAmigos.length === listaSorteados.length) {
        alert("Todos los amigos han sido sorteados, reinicia para volver a sortear.");
        return;
    }else if (listaSorteados.includes(amigoSecreto)) {
        while (!listaSorteados.includes(amigoSecreto)) {
           amigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        }
    }

    listaSorteados.push(amigoSecreto);
    console.log(listaSorteados);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSecreto}</li>`;
}
