// Common JavaScript functionality for HiveMind

// 1. Dark/Light Mode Toggle
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    
    // By default, use dark theme (no need to add dark-theme class as it's already the default)
    // Only check if user has specifically chosen light theme
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill theme-icon"></i>Light';
            themeToggleBtn.setAttribute('data-theme', 'light');
        }
    } else {
        // Ensure dark theme is the default (already applied in CSS)
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill theme-icon"></i>Dark';
            themeToggleBtn.setAttribute('data-theme', 'dark');
        }
    }
    
    // Toggle theme when button is clicked
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = this.getAttribute('data-theme');
            
            if (currentTheme === 'light') {
                // Switch to dark mode
                body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
                this.innerHTML = '<i class="bi bi-moon-fill theme-icon"></i>Dark';
                this.setAttribute('data-theme', 'dark');
                showThemeChangedToast('Dark');
            } else {
                // Switch to light mode
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
                this.innerHTML = '<i class="bi bi-sun-fill theme-icon"></i>Light';
                this.setAttribute('data-theme', 'light');
                showThemeChangedToast('Light');
            }
        });
    }
}

// Display a toast notification when theme changes
function showThemeChangedToast(themeName) {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast toast-info';
    
    // Set icon based on theme
    let icon = themeName === 'Dark' ? 'moon-fill' : 'sun-fill';
    
    // Add content to toast
    toast.innerHTML = `
        <div class="toast-icon"><i class="bi bi-${icon}"></i></div>
        <div class="toast-message">${themeName} theme activated</div>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Remove toast after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// 2. Scroll-to-Top Button
function initScrollToTopButton() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Add theme toggle to the header
function addThemeToggle() {
    const headerIcons = document.querySelector('.header-icons');
    if (headerIcons && !document.getElementById('theme-toggle-btn')) {
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle-container icon-btn theme-switch';
        
        // Get current theme
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const iconClass = currentTheme === 'light' ? 'bi-sun-fill' : 'bi-moon-fill';
        const themeName = currentTheme === 'light' ? 'Light' : 'Dark';
        
        themeToggle.innerHTML = `
            <button id="theme-toggle-btn" class="theme-toggle-button" data-theme="${currentTheme}">
                <i class="bi ${iconClass} theme-icon"></i>${themeName}
            </button>
        `;
        
        headerIcons.prepend(themeToggle);
    }
}

// Initialize common features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add theme toggle to header
    addThemeToggle();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize scroll to top button
    initScrollToTopButton();
});