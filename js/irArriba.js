// Mostrar el botón cuando se desplaza hacia abajo
window.onscroll = function() { toggleButton() };

function toggleButton() {
    const btnTop = document.getElementById("btnTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
}

// Función para desplazarse hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
