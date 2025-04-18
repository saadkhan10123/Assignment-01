// JavaScript for the Home page

// Sample post data for dynamic loading
const additionalPostsData = [
    {
        author: "TechGuru",
        authorImage: "https://picsum.photos/40?random=101",
        timeAgo: "5 hours ago",
        views: "245K",
        title: "The future of web development is here",
        text: "Just discovered this amazing new framework that's changing how I build websites!",
        image: "https://picsum.photos/600?random=101",
        likes: "8.3k",
        comments: "621",
        shares: "1.2k",
        isTrending: true,
        isHot: false,
        hasSecondImage: false
    },
    {
        author: "DesignMaster",
        authorImage: "https://picsum.photos/40?random=102",
        timeAgo: "8 hours ago",
        views: "187K",
        title: "UI design trends that will dominate 2025 ✨",
        text: "These design patterns are taking over the industry. Check out my analysis!",
        image: "https://picsum.photos/600?random=102",
        likes: "12.4k",
        comments: "934",
        shares: "3.7k",
        isTrending: false,
        isHot: true,
        hasSecondImage: false
    },
    {
        author: "CodeNinja",
        authorImage: "https://picsum.photos/40?random=103",
        timeAgo: "12 hours ago",
        views: "321K",
        title: "I built this entire app in just 24 hours 🚀",
        text: "The hackathon challenge was tough, but I managed to create something awesome!",
        image: "https://picsum.photos/600?random=103",
        likes: "15.7k",
        comments: "1.2k",
        shares: "4.3k",
        isTrending: true,
        isHot: false,
        hasSecondImage: true,
        secondImage: "https://picsum.photos/600?random=203"
    },
    {
        author: "AIExplorer",
        authorImage: "https://picsum.photos/40?random=104",
        timeAgo: "1 day ago",
        views: "512K",
        title: "This AI model can now write entire websites from scratch",
        text: "The pace of AI development is absolutely mind-blowing. Look at what this new model can do!",
        image: "https://picsum.photos/600?random=104",
        likes: "23.9k",
        comments: "2.8k",
        shares: "7.1k",
        isTrending: false,
        isHot: true,
        hasSecondImage: false
    },
    {
        author: "CyberSecurity",
        authorImage: "https://picsum.photos/40?random=105",
        timeAgo: "2 days ago",
        views: "178K",
        title: "ALERT: Major security vulnerability discovered in popular framework",
        text: "If you're using this framework, update immediately. Here's what you need to know about the exploit.",
        image: "https://picsum.photos/600?random=105",
        likes: "9.2k",
        comments: "1.6k",
        shares: "5.4k",
        isTrending: false,
        isHot: false,
        hasSecondImage: false
    },
    {
        author: "GameDev",
        authorImage: "https://picsum.photos/40?random=106",
        timeAgo: "4 days ago",
        views: "423K",
        title: "I made this game using only JavaScript and HTML Canvas 🎮",
        text: "No frameworks, no libraries, just pure JavaScript. Here's how I did it!",
        image: "https://picsum.photos/600?random=106",
        likes: "18.6k",
        comments: "2.3k",
        shares: "6.8k",
        isTrending: true,
        isHot: false,
        hasSecondImage: true,
        secondImage: "https://picsum.photos/600?random=206"
    },
    {
        author: "StartupFounder",
        authorImage: "https://picsum.photos/40?random=107",
        timeAgo: "1 week ago",
        views: "892K",
        title: "From 0 to $1M in revenue in just 6 months 💰",
        text: "Our bootstrapped startup journey and the key lessons we learned along the way.",
        image: "https://picsum.photos/600?random=107",
        likes: "34.8k",
        comments: "4.2k",
        shares: "9.7k",
        isTrending: false,
        isHot: true,
        hasSecondImage: false
    },
    {
        author: "DataScientist",
        authorImage: "https://picsum.photos/40?random=108",
        timeAgo: "3 days ago",
        views: "275K",
        title: "Analyzing 10 years of GitHub data revealed these surprising trends",
        text: "I crunched the numbers on a decade of open source projects. The results will surprise you!",
        image: "https://picsum.photos/600?random=108",
        likes: "14.3k",
        comments: "1.9k",
        shares: "5.2k",
        isTrending: true,
        isHot: false,
        hasSecondImage: false
    },
    {
        author: "UXResearcher",
        authorImage: "https://picsum.photos/40?random=109",
        timeAgo: "5 days ago",
        views: "198K",
        title: "Why your user testing methodology is probably wrong",
        text: "Common mistakes in UX research and how to fix them for more accurate results.",
        image: "https://picsum.photos/600?random=109",
        likes: "7.6k",
        comments: "1.1k",
        shares: "3.4k",
        isTrending: false,
        isHot: false,
        hasSecondImage: false
    },
    {
        author: "BlockchainDev",
        authorImage: "https://picsum.photos/40?random=110",
        timeAgo: "6 days ago",
        views: "356K",
        title: "Built my first dApp and here's what I learned 🔗",
        text: "The challenges of blockchain development and how to overcome them as a beginner.",
        image: "https://picsum.photos/600?random=110",
        likes: "11.8k",
        comments: "1.7k",
        shares: "4.8k",
        isTrending: false,
        isHot: true,
        hasSecondImage: true,
        secondImage: "https://picsum.photos/600?random=210"
    }
];

// 3. Dynamic Content Loading for Trending Posts
function loadMoreTrendingPosts() {
    const trendingSection = document.querySelector('.trending-section');
    
    // Example trending posts data that would normally come from an API
    const trendingPostsData = [
        {
            title: "#TechGurus",
            description: "Why Progressive Web Apps are the future of mobile web development",
            likes: "45.2K",
            comments: "3.8K",
            shares: "12K",
            views: "982K",
            timeAgo: "5 hours ago"
        },
        {
            title: "#DevLife",
            description: "The most underrated programming languages you should learn in 2025",
            likes: "32K",
            comments: "4.1K",
            shares: "9.7K",
            views: "756K",
            timeAgo: "12 hours ago"
        },
        {
            title: "#AIFuture",
            description: "How machine learning is revolutionizing healthcare - real applications that save lives",
            likes: "67K",
            comments: "5.3K",
            shares: "23K",
            views: "1.4M",
            timeAgo: "1 day ago"
        }
    ];
    
    // Create loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<i class="bi bi-arrow-repeat spinning"></i> Loading more posts...';
    trendingSection.appendChild(loadingIndicator);
    
    // Simulate API request delay
    setTimeout(() => {
        // Remove loading indicator
        trendingSection.removeChild(loadingIndicator);
        
        // Add new trending posts
        trendingPostsData.forEach(post => {
            const trendingPost = document.createElement('div');
            trendingPost.className = 'trending-post';
            trendingPost.innerHTML = `
                <div class="trending-details">
                    <h4 class="trending-title">${post.title}</h4>
                    <p class="trending-desc">${post.description}</p>
                    <div class="trending-meta">
                        <span><i class="bi bi-heart"></i> ${post.likes} likes</span>
                        <span><i class="bi bi-chat"></i> ${post.comments} comments</span>
                        <span><i class="bi bi-share"></i> ${post.shares} shares</span>
                        <span><i class="bi bi-eye"></i> ${post.views} Views</span>
                    </div>
                </div>
                <div class="trending-time">${post.timeAgo}</div>
            `;
            trendingSection.appendChild(trendingPost);
        });
        
        // Update the load more button text and show success toast
        document.getElementById('load-more-btn').textContent = 'Load More';
        showToast('Success! New trending posts loaded', 'success');
    }, 1500);
}

// 4. Toast Notification System
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

// 5. Post Interaction Simulation
function initPostInteractions() {
    const interactionItems = document.querySelectorAll('.interaction-item');
    
    interactionItems.forEach(item => {
        if (item.hasInitialized) return; // Skip if already initialized
        
        item.hasInitialized = true;
        item.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const countSpan = this.querySelector('span');
            const countText = countSpan.textContent.trim();
            
            // Parse the count correctly while preserving K or M
            let currentCount;
            let isK = false;
            let isM = false;
            
            if (countText.toLowerCase().includes('k')) {
                currentCount = parseFloat(countText.toLowerCase().replace('k', '')) * 1000;
                isK = true;
            } else if (countText.toLowerCase().includes('m')) {
                currentCount = parseFloat(countText.toLowerCase().replace('m', '')) * 1000000;
                isM = true;
            } else {
                currentCount = parseInt(countText.replace(/[^\d]/g, ''));
            }
            
            // If already liked (has active class), unlike it
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                icon.classList.remove('active');
                
                // Decrement count and format
                const newCount = currentCount - 1;
                countSpan.textContent = formatCount(newCount);
                
                // Show toast for unlike
                if (icon.classList.contains('bi-heart')) {
                    showToast('Post unliked', 'info');
                }
            } else {
                // Like the post
                this.classList.add('active');
                icon.classList.add('active');
                
                // Increment count and format
                const newCount = currentCount + 1;
                countSpan.textContent = formatCount(newCount);
                
                // Show different toasts based on interaction type
                if (icon.classList.contains('bi-heart')) {
                    showToast('Post liked!', 'success');
                } else if (icon.classList.contains('bi-chat')) {
                    showToast('Comment section opened', 'info');
                } else if (icon.classList.contains('bi-arrow-repeat')) {
                    showToast('Post shared!', 'success');
                }
            }
        });
    });
}

// Helper function to format large numbers (e.g., 1.2k, 3.4M)
function formatCount(count) {
    // Handle strings with K or M already in them
    if (typeof count === 'string') {
        // If the count already has 'k' or 'M', parse it correctly
        if (count.toLowerCase().includes('k')) {
            const numPart = parseFloat(count.toLowerCase().replace('k', ''));
            return numPart.toFixed(1) + 'k';
        } else if (count.toLowerCase().includes('m')) {
            const numPart = parseFloat(count.toLowerCase().replace('m', ''));
            return numPart.toFixed(1) + 'M';
        }
        
        // Convert to number if it's a plain number as string
        count = parseInt(count.replace(/[^\d]/g, ''));
    }
    
    // Format based on size
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
}

// Function to create post HTML
function createPostHTML(post) {
    let postHTML = `
        <div class="post-header">
            <div class="post-author">
                <img src="${post.authorImage}" alt="Profile" class="author-pic">
                <div class="author-info">
                    <div class="author-name">${post.author}</div>
                    <div class="post-meta">${post.timeAgo} • ${post.views} Views</div>
                </div>
            </div>`;
    
    if (post.isHot) {
        postHTML += `
            <div class="hot-mention">
                <span class="hot-badge">Hot Meme!!!</span>
                <i class="bi bi-fire"></i>
            </div>`;
    } else if (post.isTrending) {
        postHTML += `
            <div class="hot-mention">
                <span class="hot-badge">Trending</span>
                <i class="bi bi-fire"></i>
            </div>`;
    }
    
    postHTML += `
            <div class="post-actions">
                <i class="bi bi-three-dots-vertical"></i>
            </div>
        </div>
        
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>`;
            
    if (post.text) {
        postHTML += `<div class="post-text">${post.text}</div>`;
    }
    
    if (post.hasSecondImage) {
        postHTML += `
            <div class="post-image-grid post-image-grid-2">
                <img src="${post.image}" alt="Post image" class="post-image">
                <img src="${post.secondImage}" alt="Post image" class="post-image">
            </div>`;
    } else {
        postHTML += `
            <div class="post-image-grid">
                <img src="${post.image}" alt="Post image" class="post-image">
            </div>`;
    }
    
    postHTML += `
            <div class="post-interactions">
                <div class="interaction-item">
                    <i class="bi bi-heart"></i>
                    <span>${post.likes}</span>
                </div>
                <div class="interaction-item">
                    <i class="bi bi-chat"></i>
                    <span>${post.comments}</span>
                </div>
                <div class="interaction-item">
                    <i class="bi bi-arrow-repeat"></i>
                    <span>${post.shares}</span>
                </div>
            </div>
        </div>
    `;
    
    return postHTML;
}

// Load random posts - new implementation
function loadRandomPosts() {
    const postsSection = document.querySelector('.posts-section');
    if (!postsSection) return;
    
    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-indicator';
    loadingIndicator.innerHTML = '<i class="bi bi-arrow-repeat spinning"></i> Loading more posts...';
    postsSection.appendChild(loadingIndicator);
    
    // Shuffle the posts array to randomize order
    const shuffledPosts = [...additionalPostsData].sort(() => Math.random() - 0.5);
    
    // Simulate loading delay
    setTimeout(() => {
        // Remove loading indicator
        postsSection.removeChild(loadingIndicator);
        
        // Create container for new posts
        const randomPostsContainer = document.createElement('div');
        randomPostsContainer.className = 'random-posts-container';
        
        // Add container to posts section
        postsSection.appendChild(randomPostsContainer);
        
        // Add a heading for random posts
        const randomPostsHeading = document.createElement('h4');
        randomPostsHeading.className = 'random-posts-heading';
        randomPostsHeading.textContent = 'More Posts You Might Like';
        randomPostsHeading.style.margin = '2rem 0 1rem';
        randomPostsHeading.style.color = 'var(--text-primary-color)';
        randomPostsContainer.appendChild(randomPostsHeading);
        
        // Create and append each post
        shuffledPosts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'random-post';
            postElement.innerHTML = createPostHTML(post);
            randomPostsContainer.appendChild(postElement);
            
            // Add post divider except for the last post
            if (index < shuffledPosts.length - 1) {
                const divider = document.createElement('hr');
                divider.className = 'post-divider';
                randomPostsContainer.appendChild(divider);
            }
        });
        
        // Initialize post interactions for new posts
        initPostInteractions();
        
        // Show toast when posts are loaded
        showToast('New posts loaded!', 'success');
    }, 1500);
}

// Show new content notification when user reaches end of page
function showNewContentNotification() {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.new-content-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'new-content-notification';
    notification.innerHTML = `
        <div class="notification-icon"><i class="bi bi-arrow-clockwise"></i></div>
        <div class="notification-message">New content available</div>
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Add click event to reload content
    notification.addEventListener('click', () => {
        // Hide notification
        notification.classList.remove('show');
        
        // Show loading spinner
        const mainContent = document.querySelector('.content-area');
        if (mainContent) {
            mainContent.innerHTML = '<div class="reload-spinner"><i class="bi bi-arrow-repeat spinning"></i> Refreshing your feed...</div>';
        }
        
        // Simulate loading delay then reload page
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    });
}

// Handle scroll to detect end of page
function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollTopButton = document.getElementById('scroll-to-top');
    
    // Show/hide scroll to top button
    if (scrollTopButton) {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    }
    
    // Only show notification when user has reached the absolute end of the page
    // AND is not already at the top of the page
    if (scrollPosition >= pageHeight - 5 && window.scrollY > 100) {
        // Show new content notification if not already shown
        if (!document.querySelector('.new-content-notification.show')) {
            showNewContentNotification();
        }
    }
}

// Initialize all home page specific features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize post interactions for existing posts
    initPostInteractions();
    
    // Add scroll-to-top button to DOM
    const scrollTopButton = document.createElement('button');
    scrollTopButton.id = 'scroll-to-top';
    scrollTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    scrollTopButton.title = 'Go to top';
    document.body.appendChild(scrollTopButton);
    
    // Initialize scroll-to-top button functionality
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Load the random posts
    loadRandomPosts();
    
    // Add scroll event listener to detect end of page
    window.addEventListener('scroll', handleScroll);
});

// Add CSS for new features
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .loading-indicator {
            text-align: center;
            padding: 20px;
            color: #777;
        }
        
        .spinning {
            animation: spin 1s linear infinite;
            display: inline-block;
        }
        
        @keyframes spin {
             0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .random-posts-container {
            margin-top: 2rem;
            border-top: 1px solid var(--border-color);
            padding-top: 1rem;
        }
        
        .random-post {
            margin-bottom: 1rem;
        }
        
        .toast-container {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 9999;
        }
        
        .toast {
            background-color: var(--card-bg);
            color: var(--text-primary-color);
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
        
        #scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #6a30eb;
            color: white;
            border: none;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        #scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        #scroll-to-top:hover {
            background-color: #5528c9;
            transform: translateY(-3px);
        }
        
        /* New content notification */
        .new-content-notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-100px);
            background-color: #6a30eb;
            color: white;
            padding: 12px 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            z-index: 2000;
            transition: transform 0.4s ease-out;
            opacity: 0;
        }
        
        .new-content-notification.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        
        .new-content-notification:hover {
            background-color: #5528c9;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
        }
        
        .notification-icon {
            margin-right: 10px;
            font-size: 1.2rem;
        }
        
        .notification-message {
            font-weight: 500;
            font-size: 16px;
        }
        
        .reload-spinner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 300px;
            font-size: 18px;
            color: var(--text-secondary-color);
        }
        
        .reload-spinner i {
            font-size: 40px;
            margin-bottom: 20px;
            color: #6a30eb;
        }
        
        @media (max-width: 768px) {
            #scroll-to-top {
                bottom: 70px; /* Above mobile nav */
                right: 20px;
                width: 40px;
                height: 40px;
                font-size: 20px;
            }
            
            .new-content-notification {
                width: 80%;
                text-align: center;
                justify-content: center;
            }
        }
    `;
    document.head.appendChild(style);
});