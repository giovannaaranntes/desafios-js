// Script para comparar as palavras
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const palavraA = document.getElementById('palavraA').value.trim();
    const palavraB = document.getElementById('palavraB').value.trim();

    let resultado = '';

    // Verifica qual palavra tem mais letras
    if (palavraA.length > palavraB.length) {
        resultado = 'A maior palavra é a de Aldo: ' + palavraA;
    } else if (palavraB.length > palavraA.length) {
        resultado = 'A maior palavra é a de Jucimara: ' + palavraB;
    } else {
        resultado = 'Ambas as palavras têm o mesmo número de letras.';
    }

    // Exibe o resultado
    document.getElementById('resultado').textContent = resultado;
});
