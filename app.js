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

