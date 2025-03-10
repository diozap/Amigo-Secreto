//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    const listaAmigos = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);

    nomeInput.value = "";
    nomeInput.focus();
}

function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const amigos = Array.from(listaAmigos.getElementsByTagName("li"));

    if (amigos.length === 0) {
        alert("Adicione ao menos um amigo para realizar o sorteio.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)].textContent;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}