// JavaScript for Login page with form validation

// Form validation for login
function initLoginFormValidation() {
    const loginForm = document.querySelector('.login-form');
    
    if (loginForm) {
        // Add validation on form submission
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // For this implementation, we'll allow any input to log in successfully
            showToast('Login successful! Redirecting...', 'success');
            
            // Redirect to home page after a brief delay
            setTimeout(() => {
                window.location.href = '../home/index.html';
            }, 1500);
        });
    }
}

// Toast notification system
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
    
    // Add CSS for toast if not already added
    if (!document.getElementById('toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            .toast-container {
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 9999;
            }
            
            .toast {
                background-color: #333;
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                margin-top: 10px;
                display: flex;
                align-items: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                animation: toast-in-out 3s forwards;
            }
            
            .toast-icon {
                margin-right: 10px;
                font-size: 1.2rem;
            }
            
            .toast-success {
                border-left: 4px solid #4CAF50;
            }
            
            .toast-error {
                border-left: 4px solid #F44336;
            }
            
            .toast-info {
                border-left: 4px solid #2196F3;
            }
            
            @keyframes toast-in-out {
                0% { transform: translateX(-100%); opacity: 0; }
                10% { transform: translateX(0); opacity: 1; }
                90% { transform: translateX(0); opacity: 1; }
                100% { transform: translateX(-100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove toast after animation completes
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize login form validation
    initLoginFormValidation();
    
    // Add missing Bootstrap Icons if needed
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const iconLink = document.createElement('link');
        iconLink.rel = 'stylesheet';
        iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
        document.head.appendChild(iconLink);
    }
});