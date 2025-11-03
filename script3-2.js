document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pega os valores
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);

    // Cria um array e ordena decrescente
    const pontuacoes = [a, b, c].sort((x, y) => y - x);

    // O vice-campeão é o segundo maior
    const viceCampeao = pontuacoes[1];

    // Exibe resultado
    document.getElementById('resultado').textContent = `Pontuação do vice-campeão: ${viceCampeao}`;
});
