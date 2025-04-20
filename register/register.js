// JavaScript for Register page with form validation

// Form validation for registration
function initRegisterFormValidation() {
    const registerForm = document.querySelector('form');
    
    if (registerForm) {
        // Add validation on form submission
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // For this implementation, we'll allow any input to register successfully
            showToast('Registration successful! Redirecting...', 'success');
            
            // Redirect to home page after a brief delay - changed from login to home page
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
    // Initialize register form validation
    initRegisterFormValidation();
    
    // Add missing Bootstrap Icons if needed
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const iconLink = document.createElement('link');
        iconLink.rel = 'stylesheet';
        iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
        document.head.appendChild(iconLink);
    }
});

// Register the user by adding the username to local storage
function registerUser() {
    
    // get username and user's full name from the form
    const username = document.getElementById('username').value.trim();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    const fullName = firstName + ' ' + lastName;

    // Check if a user already exists in local storage
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser) {
        showToast('A user is already registered. Please log out first.', 'error');
        window.href = '../login/index.html';
        return;
    }

    // Create a new user object
    const newUser = {
        username: username,
        fullName: fullName
    };

    // Save the new user to local storage
    localStorage.setItem('user', JSON.stringify(newUser));
    showToast('User registered successfully!', 'success');

}