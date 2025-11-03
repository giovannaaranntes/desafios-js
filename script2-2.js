// Script do Desafio 2.2 – Melhor Aluno

const form = document.getElementById('form');
const camposDiv = document.getElementById('campos');
const gerarBtn = document.getElementById('gerarCampos');
const submitBtn = form.querySelector('button[type="submit"]');
const resultado = document.getElementById('resultado');

gerarBtn.addEventListener('click', () => {
    const n = parseInt(document.getElementById('n').value);

    if (isNaN(n) || n < 1 || n > 20) {
        resultado.textContent = "⚠️ O número de alunos deve ser entre 1 e 20.";
        resultado.style.color = "#f87171";
        return;
    }

    // Limpa os campos antes de gerar novamente
    camposDiv.innerHTML = '';

    // Gera os campos de entrada (nome e nota)
    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        div.classList.add('linhaAluno');
        div.innerHTML = `
            <input type="text" class="nome" placeholder="Nome do aluno ${i + 1}" required>
            <input type="number" class="nota" placeholder="Nota" step="0.1" min="0" max="10" required>
        `;
        camposDiv.appendChild(div);
    }

    // Mostra o botão de enviar
    submitBtn.style.display = "inline-block";
    resultado.textContent = '';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomes = Array.from(document.querySelectorAll('.nome')).map(i => i.value.trim());
    const notas = Array.from(document.querySelectorAll('.nota')).map(i => parseFloat(i.value));

    // Validação simples
    if (nomes.includes("") || notas.some(isNaN)) {
        resultado.textContent = "⚠️ Preencha todos os campos corretamente!";
        resultado.style.color = "#f87171";
        return;
    }

    // Encontra o índice da maior nota
    const maiorNota = Math.max(...notas);
    const indice = notas.indexOf(maiorNota);
    const melhorAluno = nomes[indice];

    resultado.style.color = "#4ade80";
    resultado.textContent = `🏅 O melhor aluno é ${melhorAluno}, com nota ${maiorNota.toFixed(1)}!`;
});
