// carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        carousel.style.transform = `translateX(-${currentSlide * 20}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});


