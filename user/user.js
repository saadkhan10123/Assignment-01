// JavaScript for User Profile Page

// Expandable sections feature for FAQs/About sections
function initExpandableSections() {
    const expandableSections = document.querySelectorAll('.expandable-section');
    
    expandableSections.forEach(section => {
        const header = section.querySelector('.expandable-header');
        
        header.addEventListener('click', () => {
            // Toggle active class
            section.classList.toggle('active');
        });
    });
}

// User activity chart using Chart.js
function initActivityChart() {
    const activityCanvas = document.getElementById('activity-chart');
    
    if (activityCanvas && typeof Chart !== 'undefined') {
        const ctx = activityCanvas.getContext('2d');
        
        // Sample data - this would typically come from an API
        const activityData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Posts',
                    backgroundColor: 'rgba(82, 113, 255, 0.5)',
                    borderColor: 'rgba(82, 113, 255, 1)',
                    data: [12, 19, 15, 28, 22, 32],
                    tension: 0.4
                },
                {
                    label: 'Likes',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: [45, 39, 61, 58, 71, 82],
                    tension: 0.4
                }
            ]
        };
        
        new Chart(ctx, {
            type: 'line',
            data: activityData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Activity Over Time'
                    }
                }
            }
        });
    }
}

// Lazy loading for profile images
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-load');
                    imageObserver.unobserve(img);
                    showToast('New content loaded!', 'info');
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy-load');
        });
    }
}

// Toast notification system (for user profile page)
function showToast(message, type = 'info') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Set icon based on toast type
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    // Add content to toast
    toast.innerHTML = `
        <div class="toast-icon"><i class="bi bi-${icon}"></i></div>
        <div class="toast-message">${message}</div>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Remove toast after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add achievement badges animation
function initAchievementBadges() {
    const badges = document.querySelectorAll('.achievement-badge');
    
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.classList.add('badge-animated');
        });
        
        badge.addEventListener('mouseleave', function() {
            this.classList.remove('badge-animated');
        });
        
        // Add click event to show details
        badge.addEventListener('click', function() {
            const badgeName = this.getAttribute('data-badge-name');
            const badgeDesc = this.getAttribute('data-badge-desc');
            
            showToast(`${badgeName}: ${badgeDesc}`, 'info');
        });
    });
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize expandable sections
    initExpandableSections();
    
    // Initialize activity chart if Chart.js is available
    if (typeof Chart !== 'undefined') {
        initActivityChart();
    }
    
    // Initialize lazy loading
    initLazyLoading();
    
    // Initialize achievement badges
    initAchievementBadges();
    
    // Add scroll-to-top button to DOM if not already added
    if (!document.getElementById('scroll-to-top')) {
        const scrollTopButton = document.createElement('button');
        scrollTopButton.id = 'scroll-to-top';
        scrollTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
        scrollTopButton.title = 'Go to top';
        document.body.appendChild(scrollTopButton);
    }
    
    // Add dark mode toggle to the header if not already added
    const headerIcons = document.querySelector('.header-icons');
    if (headerIcons && !document.getElementById('dark-mode-toggle')) {
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle-container icon-btn';
        themeToggle.innerHTML = `
            <i class="bi bi-sun-fill theme-icon"></i>
            <label class="theme-toggle-label">
                <input type="checkbox" id="dark-mode-toggle">
                <span class="theme-toggle-slider"></span>
            </label>
            <i class="bi bi-moon-fill theme-icon"></i>
            <span>Theme</span>
        `;
        headerIcons.prepend(themeToggle);
    }
});