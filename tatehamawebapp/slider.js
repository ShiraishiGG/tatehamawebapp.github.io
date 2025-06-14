document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    let current = 0;
    setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
    }, 3500);
});