document.getElementById('yes-button').addEventListener('click', () => {
    alert('Lo siento amor :c');
    // Redirige a la siguiente página específica
    window.location.href = 'celos.html'; // Cambia esto en cada archivo
});

document.getElementById('no-button').addEventListener('click', function(e) {
    e.preventDefault();
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');

    // Agrandar el botón "Sí"
    var currentSize = parseInt(yesButton.style.fontSize) || 18;
    yesButton.style.fontSize = (currentSize + 4) + 'px';
    yesButton.classList.add('enlarged'); // Agrega la clase que agranda el botón


});

let noButton = document.getElementById('no-button');
let scale = 1; // Factor de escala inicial

noButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Reducir el factor de escala
    scale -= 0.1;
    if (scale <= 0.1) {
        scale = 0.1; // Tamaño mínimo para evitar que el botón se haga demasiado pequeño
    }

    // Aplicar la escala al botón
    noButton.style.transform = `scale(${scale})`;
});
