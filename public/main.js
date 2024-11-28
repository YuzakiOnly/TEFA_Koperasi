document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('search-toggle');
    const searchPopup = document.getElementById('search-popup');
    const searchSubmit = document.getElementById('search-submit');
    const searchInput = document.getElementById('search-input');

    // Toggle search popup
    searchToggle.addEventListener('click', () => {
        searchPopup.classList.toggle('hidden');
        searchInput.focus();
    });

    // Close search popup when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchToggle.contains(event.target) && !searchPopup.contains(event.target)) {
            searchPopup.classList.add('hidden');
        }
    });

    // Handle search submission
    searchSubmit.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search functionality here
            alert(`Searching for: ${searchTerm}`);
            // You would typically redirect to a search results page or perform AJAX search
        }
    });

    // Allow Enter key to submit search
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Implement search functionality here
                alert(`Searching for: ${searchTerm}`);
            }
        }
    });
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileSidebar = document.getElementById('mobile-sidebar');
const closeSidebar = document.getElementById('close-sidebar');

hamburgerMenu.addEventListener('click', () => {
    mobileSidebar.classList.remove('hidden');
});

closeSidebar.addEventListener('click', () => {
    mobileSidebar.classList.add('hidden');
});

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
}

feather.replace();
