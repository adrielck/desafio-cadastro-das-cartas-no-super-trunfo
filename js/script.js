
document.getElementById('form-carta').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const forca = document.getElementById('forca').value;
    const defesa = document.getElementById('defesa').value;
    const magia = document.getElementById('magia').value;

    const carta = {
        nome,
        forca,
        defesa,
        magia
    };

    const li = document.createElement('li');
    li.textContent = `Nome: ${carta.nome}, Força: ${carta.forca}, Defesa: ${carta.defesa}, Magia: ${carta.magia}`;
    document.getElementById('lista-cartas').appendChild(li);

    document.getElementById('form-carta').reset();
});
