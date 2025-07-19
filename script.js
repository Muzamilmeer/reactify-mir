// Shopping App JavaScript

// App State
let cart = [];
let products = [];
let wishlist = [];
let currentCategory = 'all';
let currentView = 'grid';
let currentTheme = 'light';
let notifications = [];

// Sample Products Data
const sampleProducts = [
    {
        id: 1,
        title: "Cotton T-Shirt",
        description: "Premium quality cotton t-shirt for daily wear",
        price: 599,
        originalPrice: 899,
        category: "fashion",
        rating: 4.5,
        reviews: 1250,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Formal Trouser",
        description: "Elegant formal trouser for office wear",
        price: 1299,
        originalPrice: 1899,
        category: "fashion",
        rating: 4.6,
        reviews: 890,
        badge: "Hot",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Casual Jeans",
        description: "Comfortable denim jeans for casual outings",
        price: 1599,
        originalPrice: 2199,
        category: "fashion",
        rating: 4.4,
        reviews: 567,
        badge: "New",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Wedding Suit 3-Piece",
        description: "Premium wedding suit with blazer, trouser & waistcoat",
        price: 8999,
        originalPrice: 12999,
        category: "fashion",
        rating: 4.9,
        reviews: 234,
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Analog Watch",
        description: "Classic analog watch with leather strap",
        price: 2499,
        originalPrice: 3499,
        category: "electronics",
        rating: 4.7,
        reviews: 445,
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        title: "Digital Watch",
        description: "Modern digital watch with multiple features",
        price: 1999,
        originalPrice: 2999,
        category: "electronics",
        rating: 4.3,
        reviews: 1890,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        title: "Kurta Pajama Set",
        description: "Traditional kurta pajama set for festivals",
        price: 1799,
        originalPrice: 2499,
        category: "fashion",
        rating: 4.6,
        reviews: 678,
        badge: "Festival",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        title: "Formal Shirt",
        description: "Crisp formal shirt for professional look",
        price: 899,
        originalPrice: 1299,
        category: "fashion",
        rating: 4.5,
        reviews: 1123,
        badge: "Office",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        title: "Leather Shoes",
        description: "Genuine leather formal shoes for men",
        price: 2999,
        originalPrice: 3999,
        category: "fashion",
        rating: 4.8,
        reviews: 892,
        badge: "Quality",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        title: "Casual Sneakers",
        description: "Comfortable sneakers for daily wear",
        price: 1899,
        originalPrice: 2599,
        category: "fashion",
        rating: 4.4,
        reviews: 756,
        badge: "Comfort",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        title: "Polo T-Shirt",
        description: "Stylish polo t-shirt for smart casual look",
        price: 799,
        originalPrice: 1199,
        category: "fashion",
        rating: 4.5,
        reviews: 1034,
        badge: "Style",
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        title: "Leather Belt",
        description: "Premium leather belt with metal buckle",
        price: 699,
        originalPrice: 999,
        category: "fashion",
        rating: 4.3,
        reviews: 445,
        badge: "Essential",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        title: "Chino Pants",
        description: "Comfortable chino pants for casual wear",
        price: 1199,
        originalPrice: 1699,
        category: "fashion",
        rating: 4.4,
        reviews: 623,
        badge: "Casual",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        title: "Sports Watch",
        description: "Waterproof sports watch with stopwatch feature",
        price: 1599,
        originalPrice: 2199,
        category: "electronics",
        rating: 4.6,
        reviews: 789,
        badge: "Sports",
        image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        title: "Blazer Jacket",
        description: "Formal blazer jacket for business meetings",
        price: 3499,
        originalPrice: 4999,
        category: "fashion",
        rating: 4.7,
        reviews: 456,
        badge: "Business",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop"
    }
];

// Sound Effects
const playSound = (type) => {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const playTone = (frequency, duration, type = 'sine') => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.6, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    };
    
    switch(type) {
        case 'splash':
            // Welcome sound - longer and louder melody
            playTone(523.25, 0.4); // C5
            setTimeout(() => playTone(659.25, 0.4), 200); // E5
            setTimeout(() => playTone(783.99, 0.5), 400); // G5
            setTimeout(() => playTone(1046.50, 0.6), 700); // C6
            setTimeout(() => playTone(783.99, 0.4), 1000); // G5
            setTimeout(() => playTone(659.25, 0.4), 1200); // E5
            setTimeout(() => playTone(523.25, 0.8), 1400); // C5 - long final note
            break;
        case 'addToCart':
            // Enhanced success sound - celebration melody
            playTone(523.25, 0.15); // C5
            setTimeout(() => playTone(659.25, 0.15), 80); // E5
            setTimeout(() => playTone(783.99, 0.2), 160); // G5
            setTimeout(() => playTone(1046.50, 0.25), 250); // C6
            setTimeout(() => playTone(1318.51, 0.3), 350); // E6 - high celebration note
            break;
        case 'removeFromCart':
            // Remove sound
            playTone(392.00, 0.1);
            setTimeout(() => playTone(329.63, 0.15), 50);
            break;
        case 'checkout':
            // Checkout success
            playTone(523.25, 0.1);
            setTimeout(() => playTone(659.25, 0.1), 80);
            setTimeout(() => playTone(783.99, 0.1), 160);
            setTimeout(() => playTone(1046.50, 0.2), 240);
            break;
        case 'openApp':
            // App opening sound - magical ascending melody
            playTone(392.00, 0.2); // G4
            setTimeout(() => playTone(523.25, 0.2), 100); // C5
            setTimeout(() => playTone(659.25, 0.2), 200); // E5
            setTimeout(() => playTone(783.99, 0.25), 300); // G5
            setTimeout(() => playTone(1046.50, 0.3), 400); // C6
            setTimeout(() => playTone(1318.51, 0.4), 500); // E6 - magical high note
            break;
        case 'wishlistAdd':
            // Wishlist add sound - sweet ascending notes
            playTone(659.25, 0.15); // E5
            setTimeout(() => playTone(783.99, 0.15), 80); // G5
            setTimeout(() => playTone(1046.50, 0.2), 160); // C6
            break;
        case 'wishlistRemove':
            // Wishlist remove sound - descending notes
            playTone(783.99, 0.15); // G5
            setTimeout(() => playTone(659.25, 0.15), 80); // E5
            setTimeout(() => playTone(523.25, 0.2), 160); // C5
            break;
        case 'themeChange':
            // Theme change sound - quick beep
            playTone(1046.50, 0.1); // C6
            setTimeout(() => playTone(1318.51, 0.15), 60); // E6
            break;
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    products = [...sampleProducts];
    showSplashScreen();
    initializeEventListeners();
});

// Splash Screen
function showSplashScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');
    const openBtn = document.getElementById('open-app-btn');
    
    // Handle open button click
    openBtn.addEventListener('click', () => {
        // Play special opening sound
        playSound('openApp');
        
        // Add click animation to button
        openBtn.style.transform = 'translateY(-1px) scale(0.95)';
        openBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
        openBtn.disabled = true;
        
        // Wait for sound to play, then open app
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainApp.classList.remove('hidden');
                mainApp.style.opacity = '1';
                loadProducts();
            }, 500);
        }, 1200); // Slightly longer to let the full sound play
    });
}

// Event Listeners
function initializeEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            filterProducts();
        });
    });
    
    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.dataset.view;
            toggleView();
        });
    });
    
    // Cart functionality
    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('cart-overlay').addEventListener('click', closeCart);
    
    // Search functionality
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
    
    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', checkout);
    
    // CTA button
    document.querySelector('.cta-btn').addEventListener('click', () => {
        document.querySelector('.products-section').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

// Load and Display Products
function loadProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    const productsToShow = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Add animation delay to cards
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 0;">
            <span class="product-badge">${product.badge}</span>
            <div class="wishlist-btn" onclick="toggleWishlist(${product.id})" data-id="${product.id}">
                <i class="far fa-heart"></i>
            </div>
        </div>
        <div class="product-info">
            <h4 class="product-title">${product.title}</h4>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Add to Cart
                </button>
                <button class="quick-view-btn" onclick="quickView(${product.id})">
                    <i class="fas fa-eye"></i>
                    Quick View
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Generate Star Rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Filter Products
function filterProducts() {
    loadProducts();
}

// Search Products
function searchProducts(query) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    if (query.trim() === '') {
        loadProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>No products found</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
    }
}

// Toggle View
function toggleView() {
    const container = document.getElementById('products-container');
    if (currentView === 'list') {
        container.style.gridTemplateColumns = '1fr';
        container.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'flex';
            card.style.maxWidth = 'none';
        });
    } else {
        container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
        container.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'block';
        });
    }
}

// Cart Functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    playSound('addToCart');
    
    // Show success animation
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.background = '#2ecc71';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '#667eea';
    }, 1000);
}

function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCartUI();
        playSound('removeFromCart');
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #666;">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: 10px; color: #ff4757;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toLocaleString('en-IN');
}

function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    playSound('checkout');
    
    // Simulate checkout process
    const checkoutBtn = document.querySelector('.checkout-btn');
    const originalText = checkoutBtn.textContent;
    
    checkoutBtn.textContent = 'Processing...';
    checkoutBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Order placed successfully!\nTotal: ₹${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString('en-IN')}\nThank you for shopping with ShopEasy!`);
        
        // Clear cart
        cart = [];
        updateCartUI();
        closeCart();
        
        checkoutBtn.textContent = originalText;
        checkoutBtn.disabled = false;
    }, 2000);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all product cards
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const moveX = (x / rect.width - 0.5) * 20;
            const moveY = (y / rect.height - 0.5) * 20;
            
            const heroIcon = hero.querySelector('.hero-icon');
            if (heroIcon) {
                heroIcon.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        }
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('search-input').focus();
    }
    
    // Escape to close cart
    if (e.key === 'Escape') {
        closeCart();
    }
});

// Add touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - open cart
            openCart();
        } else {
            // Swipe right - close cart
            closeCart();
        }
    }
}

// Theme Toggle Function
function toggleTheme() {
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.parentElement.classList.add('rotating');
    
    playSound('themeChange');
    
    setTimeout(() => {
        if (currentTheme === 'light') {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            currentTheme = 'dark';
            showNotification('🌙 Dark mode enabled', 'theme');
        } else {
            document.body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-moon';
            currentTheme = 'light';
            showNotification('☀️ Light mode enabled', 'theme');
        }
        
        themeIcon.parentElement.classList.remove('rotating');
    }, 250);
}

// Wishlist Functions
function toggleWishlist(productId) {
    const wishlistBtn = document.querySelector(`[data-id="${productId}"]`);
    const product = products.find(p => p.id === productId);
    
    if (wishlist.find(item => item.id === productId)) {
        // Remove from wishlist
        wishlist = wishlist.filter(item => item.id !== productId);
        wishlistBtn.classList.remove('active');
        wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
        playSound('wishlistRemove');
        showNotification(`💔 ${product.title} removed from wishlist`, 'wishlist');
    } else {
        // Add to wishlist
        wishlist.push(product);
        wishlistBtn.classList.add('active');
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
        playSound('wishlistAdd');
        showNotification(`💖 ${product.title} added to wishlist`, 'wishlist');
    }
}

// Quick View Function
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`👁️ Quick view: ${product.title}`, 'info');
    // TODO: Implement quick view modal
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
}

// About Modal Functions
function openAboutModal() {
    const modalOverlay = document.getElementById('about-modal-overlay');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Play a gentle sound
    playSound('themeChange');
    
    // Show notification
    showNotification('👨‍💻 Developer profile opened', 'info');
}

function closeAboutModal() {
    const modalOverlay = document.getElementById('about-modal-overlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modalOverlay = document.getElementById('about-modal-overlay');
    if (e.target === modalOverlay) {
        closeAboutModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modalOverlay = document.getElementById('about-modal-overlay');
        if (modalOverlay.classList.contains('active')) {
            closeAboutModal();
        }
        
        const orderModalOverlay = document.getElementById('order-modal-overlay');
        if (orderModalOverlay && orderModalOverlay.classList.contains('active')) {
            closeOrderModal();
        }
    }
});

// Order Tracking Functions
function trackOrder() {
    try {
        const modalOverlay = document.getElementById('order-modal-overlay');
        if (!modalOverlay) {
            console.error('Order modal overlay not found');
            showNotification('❌ Error opening order tracking', 'error');
            return;
        }
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Play sound
        playSound('themeChange');
        
        // Show notification
        showNotification('📦 Order tracking opened! Contact us for real-time updates.', 'info');
        
        console.log('Order tracking modal opened successfully');
    } catch (error) {
        console.error('Error in trackOrder function:', error);
        showNotification('❌ Error opening order tracking', 'error');
    }
}

function closeOrderModal() {
    try {
        const modalOverlay = document.getElementById('order-modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            console.log('Order tracking modal closed successfully');
        }
    } catch (error) {
        console.error('Error in closeOrderModal function:', error);
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('❌ Your cart is empty! Add some products first.', 'error');
        return;
    }
    
    playSound('addToCart');
    
    // Create order summary
    const orderItems = cart.map(item => `${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`).join('\n');
    const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // WhatsApp message for order
    const whatsappMessage = `🛍️ Hi Muzamil! I want to place an order from ShopEasy:

📦 ORDER DETAILS:
${orderItems}

💰 Total Amount: ₹${totalAmount}

📍 Please confirm my order and provide delivery details.
📞 Contact: Customer from ShopEasy App`;
    
    const whatsappUrl = `https://wa.me/919103594759?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after order and close cart
    setTimeout(() => {
        cart = [];
        updateCartDisplay();
        closeCart();
        showNotification('🛒 Order sent to WhatsApp! We will contact you shortly.', 'success');
    }, 1000);
}

// Close order modal when clicking outside
document.addEventListener('click', (e) => {
    const orderModalOverlay = document.getElementById('order-modal-overlay');
    if (orderModalOverlay && e.target === orderModalOverlay) {
        closeOrderModal();
    }
});

// Make functions globally accessible
window.trackOrder = trackOrder;
window.closeOrderModal = closeOrderModal;
window.proceedToCheckout = proceedToCheckout;

// Debug function
function testTrackOrder() {
    console.log('Testing trackOrder function...');
    trackOrder();
}
window.testTrackOrder = testTrackOrder;

// Add event listener for track order button when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const trackBtn = document.querySelector('.track-order-btn');
    if (trackBtn) {
        trackBtn.addEventListener('click', function() {
            console.log('Track order button clicked');
            trackOrder();
        });
        console.log('Track order button event listener added');
    } else {
        console.error('Track order button not found');
    }
});