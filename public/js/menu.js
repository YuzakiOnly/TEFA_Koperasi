// document.addEventListener('DOMContentLoaded', () => {
//     const sliderWrapper = document.getElementById('slider-wrapper');
//     const prevBtn = document.getElementById('prev-btn');
//     const nextBtn = document.getElementById('next-btn');
//     const dotsContainer = document.getElementById('dots-container');
//     let currentIndex = 0;

//     // Get the number of slides (pages)
//     const slides = sliderWrapper.querySelectorAll('.grid');
//     const totalSlides = slides.length;

//     // Next button functionality
//     nextBtn.addEventListener('click', () => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateSlider();
//     });

//     // Previous button functionality
//     prevBtn.addEventListener('click', () => {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         updateSlider();
//     });

//     // Update slider position and dots
//     function updateSlider() {
//         sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
//         // Update dots
//         const dots = dotsContainer.querySelectorAll('span');
//         dots.forEach((dot, index) => {
//             dot.classList.toggle('bg-blue-500', index === currentIndex);
//             dot.classList.toggle('bg-gray-300', index !== currentIndex);
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentPage = 0;
    const totalPages = 2; // Update this based on your total number of pages

    function updateSlider() {
        const offset = -currentPage * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateSlider();
        }
    });
});






    const overlay = document.getElementById('transition-overlay');

    function startPageTransition(event, href) {
        event.preventDefault(); // Mencegah navigasi langsung
        overlay.classList.remove('opacity-0', 'pointer-events-none'); // Menampilkan overlay
        overlay.classList.add('opacity-100'); // Transisi ke opacity 100

        setTimeout(() => {
            window.location.href = href; // Navigasi ke halaman berikutnya
        }, 500); // Durasi sesuai `duration-500` (500ms)
    }

