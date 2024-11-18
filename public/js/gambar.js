const carousel = document.getElementById('carousel');
const images = carousel.children;
const totalImages = images.length;

let currentIndex = 0;
let interval;

// Fungsi memperbarui posisi carousel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Fungsi navigasi ke gambar berikutnya
function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Fungsi navigasi ke gambar sebelumnya
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Event listener untuk tombol
document.getElementById('prev').addEventListener('click', () => {
    prevImage();
    resetInterval();
});

document.getElementById('next').addEventListener('click', () => {
    nextImage();
    resetInterval();
});

// Fungsi autoplay
function startAutoPlay() {
    interval = setInterval(nextImage, 3000); // Ganti gambar setiap 3 detik
}

function resetInterval() {
    clearInterval(interval);
    startAutoPlay();
}

// Mulai autoplay saat halaman dimuat
startAutoPlay();