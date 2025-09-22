// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];
let listaSorteados = [];

function agregarAmigo(){
    //obtenemos el valor del input
    let amigo = document.getElementById("amigo").value;
    
    //hacemos las validaciones
    validacionInput(amigo);
    
    //agregamos el amigo a la lista y lo mostramos en pantalla una lista con los amigos a sortear
    listaDeAmigos.push(amigo);
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.innerText = amigo;
    lista.appendChild(li);

    //limpiamos el input
    document.getElementById("amigo").value = "";
}

function sortearAmigo(){
    if(listaDeAmigos.length < 2){
        alert("Agrega al menos 2 amigos para sortear");
        return;
    }

    //obtener un amigo secreto aleatorio
    let amigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    //verificamos si ya se sortearon todos los amigos
    if (listaDeAmigos.length === listaSorteados.length) {
        alert("Todos los amigos han sido sorteados, reinicia para volver a sortear.");
        limpiardatos();
        return;
    }else if (listaSorteados.includes(amigoSecreto)) {

        //si el amigo secreto ya fue sorteado, buscamos uno nuevo hasta encontrar uno que no haya sido sorteado
        while (!listaSorteados.includes(amigoSecreto)) {
           amigoSecreto = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
        }
    }

    //mostramos el amigo secreto sorteado y lo agregamos a la lista de sorteados
    listaSorteados.push(amigoSecreto);
    console.log(listaSorteados);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSecreto}</li>`;
}

function limpiardatos(){
    listaDeAmigos = [];
    listaSorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

function validacionInput(amigo) {
    if(listaDeAmigos.includes(amigo)){
        alert("Este amigo ya fue agregado");
        return;
    }else if(amigo === ""){
        alert("Ingresa un nombre válido");
        return;
    }
}