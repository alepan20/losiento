document.getElementById('yes-button').addEventListener('click', () => {
    alert('Me comunicare mas enserio ');
    setTimeout(() => {
        window.location.href = 'sobrepensar.html'; // Cambia esto en cada archivo
    }, 100); // Pequeño retraso para asegurar que la alerta se haya mostrado
});

document.getElementById('no-button').addEventListener('click', function(e) {
    e.preventDefault();
    var yesButton = document.getElementById('yes-button');
    var currentSize = parseInt(window.getComputedStyle(yesButton).fontSize) || 18;
    yesButton.style.fontSize = (currentSize + 2) + 'px';

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

