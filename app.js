let listaDeAmigos = [];

// Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo == '') {
        alert('Insira um nome válido');
    } else {
        listaDeAmigos.push(amigo);
        // Limpa o campo de entrada
        document.querySelector('input').value = '';
    }
}
// Adiciona os eventos aos botões
document.getElementById('button-add').addEventListener('click', () => {
    listarAmigos('listaAmigos');
});

// Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
function listarAmigos(tag) {
    const lista = document.querySelector(`#${tag}`);
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os novos elementos

    for (let i = 0; i < listaDeAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

// Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
function sortearAmigo() {
    document.getElementById('button-sortear').addEventListener('click', sortearAmigo);
    if (listaDeAmigos.length === 0) {
        alert('A lista está vazia! Adicione amigos antes de sortear.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`;
}