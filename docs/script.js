// Carousel Logic
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot-indicator');

window.moveCarousel = (n) => {
    showSlides(slideIndex += n);
}

window.currentSlide = (n) => {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// Auto-advance every 5 seconds
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .diagram-container, .stat-card, .stack-card, .mac-window').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

