// Script do Desafio 2: Campeã de Streaming
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const n = parseInt(document.getElementById('n').value);
    const valoresStr = document.getElementById('valores').value.trim();

    // Quebra os valores em um array de números
    const valores = valoresStr.split(' ').map(Number);

    // Verifica se a quantidade bate com N
    if (valores.length !== n) {
        document.getElementById('resultado').textContent = 
            "⚠️ A quantidade de valores não corresponde ao número de músicas informado!";
        document.getElementById('resultado').style.color = "#f87171";
        return;
    }

    // Calcula o maior número de toques
    const maior = Math.max(...valores);

    document.getElementById('resultado').style.color = "#4ade80";
    document.getElementById('resultado').textContent = 
        `🎶 A música mais tocada teve ${maior} reproduções!`;
});
