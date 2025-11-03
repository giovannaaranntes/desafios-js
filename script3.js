document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    // A semi-quadra vai de (0,0) até (432,468)
    // Bola dentro se estiver dentro ou na linha
    let resultado = (x >= 0 && x <= 432 && y >= 0 && y <= 468) ? "dentro" : "fora";

    document.getElementById('resultado').innerHTML = `<p>A bola caiu <strong>${resultado}</strong> da semi-quadra.</p>`;
});

