// Shopping App JavaScript

// App State
let cart = [];
let products = [];
let currentCategory = 'all';
let currentView = 'grid';

// Sample Products Data
const sampleProducts = [
    {
        id: 1,
        title: "Premium Wireless Headphones",
        description: "High-quality sound with noise cancellation",
        price: 199.99,
        originalPrice: 249.99,
        category: "electronics",
        rating: 4.8,
        reviews: 1250,
        badge: "Sale",
        icon: "fas fa-headphones"
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        description: "Track your health and fitness goals",
        price: 299.99,
        originalPrice: 399.99,
        category: "electronics",
        rating: 4.6,
        reviews: 890,
        badge: "Hot",
        icon: "fas fa-clock"
    },
    {
        id: 3,
        title: "Designer Leather Jacket",
        description: "Premium quality genuine leather",
        price: 159.99,
        originalPrice: 199.99,
        category: "fashion",
        rating: 4.9,
        reviews: 567,
        badge: "New",
        icon: "fas fa-tshirt"
    },
    {
        id: 4,
        title: "Professional Camera",
        description: "Capture perfect moments in 4K",
        price: 899.99,
        originalPrice: 1199.99,
        category: "electronics",
        rating: 4.7,
        reviews: 234,
        badge: "Sale",
        icon: "fas fa-camera"
    },
    {
        id: 5,
        title: "Luxury Handbag",
        description: "Elegant design for every occasion",
        price: 129.99,
        originalPrice: 179.99,
        category: "fashion",
        rating: 4.5,
        reviews: 445,
        badge: "Trending",
        icon: "fas fa-shopping-bag"
    },
    {
        id: 6,
        title: "Smart Home Speaker",
        description: "Voice controlled smart assistant",
        price: 89.99,
        originalPrice: 119.99,
        category: "electronics",
        rating: 4.4,
        reviews: 1890,
        badge: "Popular",
        icon: "fas fa-volume-up"
    },
    {
        id: 7,
        title: "Yoga Mat Set",
        description: "Complete set for your yoga practice",
        price: 49.99,
        originalPrice: 69.99,
        category: "sports",
        rating: 4.6,
        reviews: 678,
        badge: "Bestseller",
        icon: "fas fa-dumbbell"
    },
    {
        id: 8,
        title: "Coffee Maker Deluxe",
        description: "Brew perfect coffee every morning",
        price: 179.99,
        originalPrice: 229.99,
        category: "home",
        rating: 4.8,
        reviews: 1123,
        badge: "Choice",
        icon: "fas fa-coffee"
    },
    {
        id: 9,
        title: "Programming Book Bundle",
        description: "Complete guide to modern development",
        price: 79.99,
        originalPrice: 119.99,
        category: "books",
        rating: 4.9,
        reviews: 892,
        badge: "Educational",
        icon: "fas fa-book"
    },
    {
        id: 10,
        title: "Gaming Mechanical Keyboard",
        description: "RGB backlit with mechanical switches",
        price: 149.99,
        originalPrice: 199.99,
        category: "electronics",
        rating: 4.7,
        reviews: 756,
        badge: "Gaming",
        icon: "fas fa-keyboard"
    },
    {
        id: 11,
        title: "Running Shoes Pro",
        description: "Lightweight and comfortable for athletes",
        price: 119.99,
        originalPrice: 159.99,
        category: "sports",
        rating: 4.5,
        reviews: 1034,
        badge: "Sport",
        icon: "fas fa-running"
    },
    {
        id: 12,
        title: "Indoor Plant Collection",
        description: "Beautiful plants to brighten your home",
        price: 39.99,
        originalPrice: 59.99,
        category: "home",
        rating: 4.3,
        reviews: 445,
        badge: "Green",
        icon: "fas fa-leaf"
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
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    };
    
    switch(type) {
        case 'splash':
            // Welcome sound - ascending notes
            playTone(523.25, 0.2); // C5
            setTimeout(() => playTone(659.25, 0.2), 100); // E5
            setTimeout(() => playTone(783.99, 0.3), 200); // G5
            break;
        case 'addToCart':
            // Success sound
            playTone(659.25, 0.1);
            setTimeout(() => playTone(783.99, 0.15), 50);
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
    
    // Play welcome sound
    setTimeout(() => playSound('splash'), 500);
    
    // Hide splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.style.opacity = '0';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainApp.classList.remove('hidden');
            mainApp.style.opacity = '1';
            loadProducts();
        }, 500);
    }, 3000);
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
            <i class="${product.icon}"></i>
            <span class="product-badge">${product.badge}</span>
        </div>
        <div class="product-info">
            <h4 class="product-title">${product.title}</h4>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                <span class="original-price">$${product.originalPrice}</span>
            </div>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
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
                    <i class="${item.icon}"></i>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
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
    cartTotal.textContent = total.toFixed(2);
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
        alert(`Order placed successfully!\nTotal: $${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}\nThank you for shopping with ShopEasy!`);
        
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