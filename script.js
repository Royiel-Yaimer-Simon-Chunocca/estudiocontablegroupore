document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentSlide].classList.add("active");
        currentSlide = (currentSlide + 1) % slides.length;
    }

    setInterval(showSlide, 3000); // Cambiar la imagen cada 3 segundos
});

