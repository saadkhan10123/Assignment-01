// JavaScript for Chat page

// Form validation for chat messages
function initChatFormValidation() {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!messageInput.value.trim()) {
                showToast('Please enter a message', 'error');
                messageInput.classList.add('is-invalid');
                return;
            }
            
            // If validation passes, add the message to the chat
            addMessageToChat(messageInput.value.trim());
            messageInput.value = '';
            messageInput.classList.remove('is-invalid');
        });
        
        // Remove invalid class when typing
        if (messageInput) {
            messageInput.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.classList.remove('is-invalid');
                }
            });
        }
    }
}

// Add a new message to the chat
function addMessageToChat(message) {
    const chatMessages = document.querySelector('.chat-messages');
    if (!chatMessages) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = 'message outgoing';
    
    // Get current time
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0');
    
    messageElement.innerHTML = `
        <div class="message-bubble">
            <div class="message-text">${message}</div>
            <div class="message-time">${timeString}</div>
        </div>
        <div class="message-avatar">
            <img src="https://picsum.photos/35?random=1" alt="You" class="avatar-image">
        </div>
    `;
    
    chatMessages.appendChild(messageElement);
    
    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Show sending toast
    showToast('Message sent!', 'success');
    
    // Simulate a reply after a random delay
    setTimeout(() => {
        simulateReply();
    }, Math.random() * 2000 + 1000); // Random delay between 1-3 seconds
}

// Simulate an incoming reply
function simulateReply() {
    const chatMessages = document.querySelector('.chat-messages');
    if (!chatMessages) return;
    
    const replyElement = document.createElement('div');
    replyElement.className = 'message incoming';
    
    // Get current time
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0');
    
    // List of possible automated replies
    const replies = [
        "That's interesting!",
        "Tell me more about that.",
        "I've been thinking about that too.",
        "Thanks for sharing your thoughts!",
        "Have you considered looking at it from a different perspective?",
        "That's great news!",
        "I'll get back to you on that later.",
        "I appreciate your message.",
        "Let's catch up soon!"
    ];
    
    // Get a random reply
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    replyElement.innerHTML = `
        <div class="message-avatar">
            <img src="https://picsum.photos/35?random=2" alt="Contact" class="avatar-image">
        </div>
        <div class="message-bubble">
            <div class="message-text">${randomReply}</div>
            <div class="message-time">${timeString}</div>
        </div>
    `;
    
    // Show typing indicator first
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = `
        <div class="message-avatar">
            <img src="https://picsum.photos/35?random=2" alt="Contact" class="avatar-image">
        </div>
        <div class="typing-bubble">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    `;
    
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // After showing typing for a bit, replace with the actual message
    setTimeout(() => {
        chatMessages.removeChild(typingIndicator);
        chatMessages.appendChild(replyElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Show notification
        showToast('New message received', 'info');
    }, 1500);
}

// Toast notification system (for chat page)
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

// Initialize search functionality
function initChatSearch() {
    const searchInput = document.getElementById('chat-search');
    const chatList = document.querySelectorAll('.chat-list-item');
    
    if (searchInput && chatList.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            chatList.forEach(item => {
                const username = item.querySelector('.chat-username').textContent.toLowerCase();
                const lastMessage = item.querySelector('.chat-last-message').textContent.toLowerCase();
                
                if (username.includes(searchTerm) || lastMessage.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show message if no results
            const visibleItems = document.querySelectorAll('.chat-list-item[style="display: flex"]');
            const noResultsMessage = document.getElementById('no-chat-results');
            
            if (visibleItems.length === 0 && searchTerm) {
                if (!noResultsMessage) {
                    const noResults = document.createElement('div');
                    noResults.id = 'no-chat-results';
                    noResults.className = 'no-results-message';
                    noResults.textContent = 'No chats match your search';
                    document.querySelector('.chat-list').appendChild(noResults);
                }
            } else if (noResultsMessage) {
                noResultsMessage.remove();
            }
        });
    }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chat form validation
    initChatFormValidation();
    
    // Initialize chat search
    initChatSearch();
    
    // Add scroll-to-top button to DOM if not already added
    if (!document.getElementById('scroll-to-top')) {
        const scrollTopButton = document.createElement('button');
        scrollTopButton.id = 'scroll-to-top';
        scrollTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
        scrollTopButton.title = 'Go to top';
        document.body.appendChild(scrollTopButton);
    }
    
});