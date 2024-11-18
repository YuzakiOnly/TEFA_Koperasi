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
        const ProfilButton = document.getElementById('profil-button');
        const profilDropdown = document.getElementById('profil-dropdown');
    
        profilButton.addEventListener('click', () => {
            profilDropdown.classList.toggle('hidden');
        });
    
        // Menutup dropdown jika mengklik di luar
        window.addEventListener('click', (event) => {
            if (!profilButton.contains(event.target) && !profilDropdown.contains(event.target)) {
                profilDropdown.classList.add('hidden');
            }
        });

        