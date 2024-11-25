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

//notifikasi
const notificationContainer = document.querySelector('.notification-container');
        let notificationCount = 0;

        const NOTIFICATION_TYPES = {
            success: {
                icon: 'check-circle',
                title: 'Produk Berhasil Disimpan',
                colors: {
                    bg: 'bg-blue-50',
                    border: 'border-blue-300',
                    text: 'text-blue-800',
                    iconBg: 'bg-blue-100',
                    iconText: 'text-blue-500',
                    closeHover: 'hover:bg-blue-200'
                }
            },
        };

        function createNotification(type) {
            const id = `notification-${notificationCount++}`;
            const notifType = NOTIFICATION_TYPES[type];
            const colors = notifType.colors;

            const notification = document.createElement('div');
            notification.id = id;
            notification.className = `notification notification-enter`;

            notification.innerHTML = `
            <div class="flex w-full items-center p-3 ${colors.text} rounded-lg ${colors.bg} border ${colors.border}" role="alert">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${colors.iconText} ${colors.iconBg} rounded-lg">
                <i class="fas fa-${notifType.icon}"></i>
                </div>
            <div class="ms-3 text-sm font-medium">
                ${notifType.title}
            </div>
                <button onclick="removeNotification('${id}')" type="button" 
                class="ms-auto -mx-1.5 -my-1.5 ${colors.bg} ${colors.iconText} rounded-lg focus:ring-2 focus:ring-${colors.iconText} p-1.5 ${colors.closeHover} inline-flex items-center justify-center h-8 w-8">
                <span class="sr-only">Close</span>
                <i class="fas fa-times"></i>
                </button>
            </div>`;

            notificationContainer.appendChild(notification);

            // Auto remove after 4 seconds
            setTimeout(() => {
                if (document.getElementById(id)) {
                    removeNotification(id);
                }
            }, 4000);
        }

        function removeNotification(id) {
            const notification = document.getElementById(id);
            if (notification) {
                notification.classList.add('hidden');
                setTimeout(() => {
                    notification.remove();
                }, 100);
            }
        }