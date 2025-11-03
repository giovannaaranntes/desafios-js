document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);

    let resultado = '*'; // default se ninguém ganhar

    // Função para verificar se um jogador ganhou
    // O jogador vence se todos escolheram o mesmo valor ou todos são diferentes entre si
    if ((a !== b && b !== c && a !== c) || (a === b && b === c)) {
        resultado = '*';
    } else if (a !== b && a !== c) {
        resultado = 'A';
    } else if (b !== a && b !== c) {
        resultado = 'B';
    } else if (c !== a && c !== b) {
        resultado = 'C';
    }

    document.getElementById('resultado').textContent = `Vencedor: ${resultado}`;
});
