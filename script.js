// Selecionando os elementos do HTML
const form = document.getElementById('form');
const fichasList = document.getElementById('fichasList');

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Função para adicionar ficha na lista
function adicionarFicha(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Pegando os dados do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipoSanguineo = document.getElementById('tipoSanguineo').value;
    const escolaridade = document.getElementById('escolaridade').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    // Calculando o IMC
    const imc = calcularIMC(peso, altura);

    // Criando um item para a lista
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${nome}</strong><br>
        Idade: ${idade} anos<br>
        Tipo Sanguíneo: ${tipoSanguineo}<br>
        Escolaridade: ${escolaridade}<br>
        Altura: ${altura} m<br>
        Peso: ${peso} kg<br>
        IMC: ${imc}
    `;

    // Adicionando o item à lista de fichas
    fichasList.appendChild(li);

    // Limpando o formulário
    form.reset();
}

// Adicionando evento ao formulário
form.addEventListener('submit', adicionarFicha);
