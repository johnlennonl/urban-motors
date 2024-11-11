// Inicialización de Swiper
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('#myCarousel', {
        loop: true, // Activa el bucle
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000, // Cambia cada 3 segundos
            disableOnInteraction: false, // Continúa el autoplay después de la interacción
        },
        slidesPerView: 1, // Muestra una imagen a la vez
        spaceBetween: 10, // Espacio entre imágenes
        // Puedes agregar más configuraciones de Swiper según tus necesidades
    });
});
