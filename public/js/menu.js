document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dotsContainer = document.getElementById('dots-container');
    let currentIndex = 0;

    // Get the number of slides (pages)
    const slides = sliderWrapper.querySelectorAll('.grid');
    const totalSlides = slides.length;

    // Next button functionality
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Update slider position and dots
    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach((dot, index) => {
            dot.classList.toggle('bg-blue-500', index === currentIndex);
            dot.classList.toggle('bg-gray-300', index !== currentIndex);
        });
    }
});