// Initialize Feather Icons
feather.replace();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Dropdown untuk Produk
const productsButton = document.getElementById('products-button');
const productsDropdown = document.getElementById('products-dropdown');

productsButton.addEventListener('click', () => {
    productsDropdown.classList.toggle('hidden');
});

// Menutup dropdown jika mengklik di luar
window.addEventListener('click', (event) => {
    if (!productsButton.contains(event.target) && !productsDropdown.contains(event.target)) {
        productsDropdown.classList.add('hidden');
    }
});

// Dropdown untuk Profil
const lainnyaButton = document.getElementById('lainnya-button');
const lainnyaDropdown = document.getElementById('lainnya-dropdown');

lainnyaButton.addEventListener('click', () => {
    lainnyaDropdown.classList.toggle('hidden');
});

// Menutup dropdown jika mengklik di luar
window.addEventListener('click', (event) => {
    if (!lainnyaButton.contains(event.target) && !lainnyaDropdown.contains(event.target)) {
        lainnyaDropdown.classList.add('hidden');
    }
});

