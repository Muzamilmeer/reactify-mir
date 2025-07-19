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
    try {
        console.log('🚀 Initializing ShopEasy...');
        products = [...sampleProducts];
        showSplashScreen();
        initializeEventListeners();
        console.log('✅ ShopEasy initialized successfully!');
        
        // Check biometric support after DOM is ready (optional)
        setTimeout(() => {
            checkBiometricSupport().then(supported => {
                if (supported) {
                    console.log('🔐 Biometric authentication available');
                } else {
                    console.log('❌ Biometric authentication not supported');
                }
            }).catch(error => {
                // Silently handle biometric check errors
                console.log('Biometric check error:', error);
            });
        }, 3000); // Wait 3 seconds after app loads
    } catch (error) {
        console.error('❌ Error initializing app:', error);
    }
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
            // Order modal overlay not found
            showNotification('❌ Error opening order tracking', 'error');
            return;
        }
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Play sound
        playSound('themeChange');
        
        // Show notification
        showNotification('📦 Order tracking opened! Contact us for real-time updates.', 'info');
        
        // Order tracking modal opened successfully
    } catch (error) {
        // Error in trackOrder function
        showNotification('❌ Error opening order tracking', 'error');
    }
}

function closeOrderModal() {
    try {
        const modalOverlay = document.getElementById('order-modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Order tracking modal closed successfully
        }
    } catch (error) {
        // Error in closeOrderModal function
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

// Real Biometric Authentication System with WebAuthn
let biometricSupported = false;
let isAuthenticated = false;
let isAppLocked = false;
let biometricCredential = null;

// Check real biometric support on page load
async function checkBiometricSupport() {
    try {
        if (!window.PublicKeyCredential) {
            biometricSupported = false;
            return false;
        }
        
        // Check if platform authenticator is available
        const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
        biometricSupported = available;
        return available;
    } catch (error) {
        // Handle any errors gracefully
        console.log('Biometric support check failed:', error);
        biometricSupported = false;
        return false;
    }
}

// Biometric support will be checked after DOM loads

// Generate random challenge for WebAuthn
function generateChallenge() {
    try {
        return crypto.getRandomValues(new Uint8Array(32));
    } catch (error) {
        // Fallback for older browsers
        const array = new Uint8Array(32);
        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }
        return array;
    }
}

// Generate user ID
function generateUserId() {
    try {
        return crypto.getRandomValues(new Uint8Array(16));
    } catch (error) {
        // Fallback for older browsers
        const array = new Uint8Array(16);
        for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
        }
        return array;
    }
}

function showBiometricLogin() {
    const modalOverlay = document.getElementById('biometric-modal-overlay');
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    playSound('themeChange');
    showNotification('🔐 Real biometric authentication ready', 'info');
}

function closeBiometricModal() {
    const modalOverlay = document.getElementById('biometric-modal-overlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Real Fingerprint Authentication using WebAuthn
async function authenticateFingerprint() {
    const statusElement = document.getElementById('fingerprint-status');
    const statusText = statusElement.querySelector('.status-text');
    
    if (!biometricSupported) {
        showNotification('❌ Biometric authentication not supported', 'error');
        return;
    }
    
    // Update status to scanning
    statusElement.className = 'biometric-status scanning';
    statusText.textContent = 'Touch your fingerprint sensor...';
    
    playSound('themeChange');
    
    try {
        // Real WebAuthn fingerprint authentication
        const credential = await navigator.credentials.create({
            publicKey: {
                challenge: generateChallenge(),
                rp: { 
                    name: "ShopEasy",
                    id: window.location.hostname 
                },
                user: {
                    id: generateUserId(),
                    name: "user@shopeasy.com",
                    displayName: "ShopEasy User"
                },
                pubKeyCredParams: [
                    { alg: -7, type: "public-key" },  // ES256
                    { alg: -257, type: "public-key" } // RS256
                ],
                authenticatorSelection: {
                    authenticatorAttachment: "platform", // Built-in biometrics
                    userVerification: "required",
                    requireResidentKey: false
                },
                timeout: 30000,
                attestation: "direct"
            }
        });
        
        if (credential) {
            biometricCredential = credential;
            
            // Success
            statusElement.className = 'biometric-status success';
            statusText.textContent = '✓ Fingerprint authenticated!';
            
            playSound('addToCart');
            showNotification('🎉 Real fingerprint authentication successful!', 'success');
            
                         setTimeout(() => {
                 isAuthenticated = true;
                 closeBiometricModal();
                 if (isAppLocked) {
                     unlockApp();
                 } else {
                     showNotification('🔓 Fingerprint authentication successful', 'success');
                     updateLockButton();
                 }
             }, 1500);
        }
        
    } catch (error) {
        // Error handling
        statusElement.className = 'biometric-status error';
        
        if (error.name === 'NotAllowedError') {
            statusText.textContent = '❌ Authentication cancelled';
            showNotification('❌ Fingerprint authentication cancelled', 'error');
        } else if (error.name === 'NotSupportedError') {
            statusText.textContent = '❌ Fingerprint not supported';
            showNotification('❌ Fingerprint authentication not supported', 'error');
        } else {
            statusText.textContent = '❌ Authentication failed';
            showNotification('❌ Fingerprint authentication failed', 'error');
        }
        
        setTimeout(() => {
            statusElement.className = 'biometric-status';
            statusText.textContent = 'Touch sensor to authenticate';
        }, 3000);
    }
}

// Real Face Authentication using WebAuthn
async function authenticateFace() {
    const statusElement = document.getElementById('face-status');
    const statusText = statusElement.querySelector('.status-text');
    
    if (!biometricSupported) {
        showNotification('❌ Biometric authentication not supported', 'error');
        return;
    }
    
    // Update status to scanning
    statusElement.className = 'biometric-status scanning';
    statusText.textContent = 'Look at your camera...';
    
    playSound('themeChange');
    
    try {
        // Real WebAuthn face authentication
        const credential = await navigator.credentials.create({
            publicKey: {
                challenge: generateChallenge(),
                rp: { 
                    name: "ShopEasy",
                    id: window.location.hostname 
                },
                user: {
                    id: generateUserId(),
                    name: "user@shopeasy.com",
                    displayName: "ShopEasy User"
                },
                pubKeyCredParams: [
                    { alg: -7, type: "public-key" },
                    { alg: -257, type: "public-key" }
                ],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    userVerification: "required",
                    requireResidentKey: false
                },
                timeout: 30000,
                attestation: "direct"
            }
        });
        
        if (credential) {
            biometricCredential = credential;
            
            // Success
            statusElement.className = 'biometric-status success';
            statusText.textContent = '✓ Face recognized!';
            
            playSound('addToCart');
            showNotification('🎉 Real face recognition successful!', 'success');
            
                         setTimeout(() => {
                 isAuthenticated = true;
                 closeBiometricModal();
                 if (isAppLocked) {
                     unlockApp();
                 } else {
                     showNotification('🔓 Face recognition successful', 'success');
                     updateLockButton();
                 }
             }, 1500);
        }
        
    } catch (error) {
        // Error handling
        statusElement.className = 'biometric-status error';
        
        if (error.name === 'NotAllowedError') {
            statusText.textContent = '❌ Authentication cancelled';
            showNotification('❌ Face authentication cancelled', 'error');
        } else if (error.name === 'NotSupportedError') {
            statusText.textContent = '❌ Face recognition not supported';
            showNotification('❌ Face recognition not supported', 'error');
        } else {
            statusText.textContent = '❌ Face not recognized';
            showNotification('❌ Face recognition failed', 'error');
        }
        
        setTimeout(() => {
            statusElement.className = 'biometric-status';
            statusText.textContent = 'Position your face in camera';
        }, 3000);
    }
}

// App Lock/Unlock Functions
function toggleAppLock() {
    if (isAppLocked) {
        // Try to unlock with biometrics
        showBiometricLogin();
    } else {
        // Lock the app
        lockApp();
    }
}

function lockApp() {
    isAppLocked = true;
    isAuthenticated = false;
    
    // Add blur effect to main content
    const mainApp = document.getElementById('main-app');
    if (mainApp) {
        mainApp.style.filter = 'blur(5px)';
        mainApp.style.pointerEvents = 'none';
    }
    
    showNotification('🔒 App locked! Use biometric authentication to unlock', 'info');
    updateLockButton();
    
    // Show unlock overlay
    showUnlockOverlay();
}

function unlockApp() {
    isAppLocked = false;
    isAuthenticated = true;
    
    // Remove blur effect
    const mainApp = document.getElementById('main-app');
    if (mainApp) {
        mainApp.style.filter = 'none';
        mainApp.style.pointerEvents = 'auto';
    }
    
    hideUnlockOverlay();
    updateLockButton();
    showNotification('🔓 App unlocked successfully!', 'success');
}

function updateLockButton() {
    const lockBtn = document.getElementById('lock-toggle-btn');
    if (lockBtn) {
        if (isAppLocked) {
            lockBtn.innerHTML = '<i class="fas fa-unlock"></i> Unlock App';
            lockBtn.classList.add('locked');
        } else {
            lockBtn.innerHTML = '<i class="fas fa-lock"></i> Lock App';
            lockBtn.classList.remove('locked');
        }
    }
}

function showUnlockOverlay() {
    let overlay = document.getElementById('unlock-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'unlock-overlay';
        overlay.innerHTML = `
            <div class="unlock-content">
                <i class="fas fa-lock unlock-icon"></i>
                <h2>App Locked</h2>
                <p>Use biometric authentication to unlock</p>
                <button onclick="showBiometricLogin()" class="unlock-btn">
                    <i class="fas fa-fingerprint"></i> Unlock with Biometrics
                </button>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    overlay.style.display = 'flex';
}

function hideUnlockOverlay() {
    const overlay = document.getElementById('unlock-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

function showPasswordLogin() {
    showNotification('🔑 Password login feature coming soon!', 'info');
    closeBiometricModal();
}

// Live Chat System
let chatOpen = false;
let chatMessages = [];
let violationCount = 0;
let chatResponses = {
    'track my order': 'I can help you track your order! Please provide your order number or contact me on WhatsApp at +91 9103594759.',
    'need help with payment': 'For payment issues, you can contact me directly on WhatsApp at +91 9103594759. I\'ll resolve it quickly!',
    'product question': 'What would you like to know about our products? I\'m here to help with any questions!',
    'hello': 'Hello! I\'m Muzamil. How can I assist you today?',
    'hi': 'Hi there! Welcome to ShopEasy. What can I help you with?',
    'help': 'I\'m here to help! You can ask me about orders, products, payments, or anything else.',
    'thanks': 'You\'re welcome! Happy to help. Is there anything else you need?',
    'thank you': 'My pleasure! Feel free to reach out anytime you need assistance.',
    
    // Romantic/Sweet responses
    'love': '💕 Aww, that\'s so sweet! I love helping wonderful customers like you. What can I do for you today?',
    'pyaar': '💖 Bahut pyaar! Main bhi aapse pyaar se baat karta hun. Kya help chahiye?',

    'sweet': '🍯 You\'re the sweet one! I love chatting with lovely customers. How can I assist you?',
    'darling': '💝 Aww darling, you made my day! I\'m here to help you with anything you need.',
    'honey': '🍯 Honey, you\'re so nice! What can I help you find today?',
    'dear': '💌 Dear customer, you\'re absolutely wonderful! How can I make your day better?',
    'jaan': '💕 Jaan, aap bahut acche hain! Main aapki kya madad kar sakta hun?',
    'dil': '❤️ Dil se thank you! Aapke dil mein kya hai jo chahiye?',
    'ishq': '💖 Ishq to ShopEasy se karo! Main aapki shopping mein madad karunga.',

    'miss you': '🥺 Aww, I miss talking to lovely customers too! I\'m always here when you need me.',
    'like you': '😊 I like you too! You seem like such a wonderful person. Let me help you find something special.',
    'love you': '💕 Thank you for the love! But I\'m already committed to my beautiful wife Rukaya. Let me help you find something special for your loved one!',
    'i love you': '💖 I appreciate the love! But my heart belongs to my wife Rukaya. How about I help you find something amazing for someone you love?',
    'love u': '💕 That\'s sweet! But I\'m already married to my amazing wife Rukaya. Let me help you with shopping instead!',
    'luv u': '💖 Aww thanks! But my heart is with my wife Rukaya. What can I help you find today?',
    'marry me': '😄 Haha, I\'m flattered! But I\'m already happily married to my beautiful wife Rukaya. Let me help you with shopping instead!',
    'marry': '💒 I\'m already married to my wonderful wife Rukaya! She\'s my soulmate. How can I assist you?',
    'shaadi karo': '😅 Bhai, meri shaadi ho gayi hai Rukaya se! Main bahut khush hun. Aapki shopping mein madad kar sakta hun?',
    'propose': '💍 That\'s sweet, but I\'m already married to my beautiful wife Rukaya! Let me help you find something special.',
    'date': '🌹 I only date my wife Rukaya! We\'re happily married. Can I help you find something for your date?',
    'kiss': '😊 Only my wife Rukaya gets my kisses! I\'m a loyal husband. What can I help you shop for?',
    'hug': '🤗 Virtual hugs are fine! But real hugs are only for my wife Rukaya. How can I assist you today?',
    'baby': '👶 My wife Rukaya is my only baby! I\'m a devoted husband. What are you looking to buy?',
    'babe': '💕 Only my wife Rukaya is my babe! I\'m happily married. Let me help you with shopping.',
    'sweetheart': '💖 My sweetheart is my wife Rukaya! I\'m blessed to have her. What can I help you find?',
    'crush': '😍 My only crush is my wife Rukaya - and I married her! Lucky me! How can I help you today?',
    'valentine': '💝 My valentine is always my wife Rukaya! We\'re happily married. Looking for valentine gifts?',
    'romantic': '🌹 I\'m only romantic with my wife Rukaya! I\'m a faithful husband. Need help finding romantic gifts?',
    'flirt': '😄 I only flirt with my wife Rukaya! I\'m a loyal husband. Let me help you with shopping instead!',
    'attraction': '✨ I\'m only attracted to my wife Rukaya! She\'s my everything. What can I help you find?',
    'heart': '❤️ My heart belongs to my wife Rukaya! I\'m completely devoted to her. How can I assist you?',
    'soul mate': '💫 My soulmate is my wife Rukaya! I found my perfect match. What are you shopping for?',
    'partner': '👫 My life partner is my wife Rukaya! We\'re happily married. How can I help you today?',
    'married': '💍 Yes, I\'m happily married to my lovely wife Rukaya! She\'s my everything. How can I help you today?',
    'wife': '👰 My wife Rukaya is the most beautiful and amazing woman in the world! I\'m blessed to have her. What can I help you find?',
    'girlfriend': '😅 I don\'t have a girlfriend - I have an amazing wife named Rukaya! Can I help you find gifts for your girlfriend?',
    'boyfriend': '😊 I\'m a happily married man to my wife Rukaya! Need help finding something for your boyfriend?',
    'single': '💍 No, I\'m not single! I\'m happily married to my beautiful wife Rukaya. How can I assist you with shopping?',
    'relationship': '💕 I\'m in a wonderful relationship - married to my lovely wife Rukaya! What can I help you find today?',
    'rukaya': '😍 Rukaya is my beautiful wife and the love of my life! I\'m so lucky to have her. How can I help you?',
    'shaadi': '💒 Haan bhai, meri shaadi ho gayi hai Rukaya se! Bahut khush hun. Aapki kya help kar sakta hun?',
    'biwi': '👰 Meri biwi Rukaya hai, bahut pyaari hai! Main bahut khush hun. Aapko kya chahiye?',
    'patni': '👸 Meri patni Rukaya hai, bahut sundar hai! Main blessed hun. Aapki kya madad kar sakun?',
    'begum': '👑 Meri begum Rukaya hai, meri rani hai! Main lucky hun. Kya chahiye aapko?',
    'dulhan': '👰 Meri dulhan Rukaya thi, ab meri biwi hai! Bahut pyaari hai. Aapki shopping mein help kar sakta hun?',
    'pyaar': '💖 Pyaar to sirf Rukaya se hai! Main faithful husband hun. Aapki kya help kar sakta hun?',
    'main apko pyar karta hun': '💕 Bahut meherbani! Lekin main sirf apni biwi Rukaya se pyaar karta hun. Main happily married hun. Aapki shopping mein kya madad kar sakta hun?',
    'main apko pyaar karta hun': '💖 Shukriya! Par mera pyaar sirf meri biwi Rukaya ke liye hai. Main devoted husband hun. Kya chahiye aapko?',
    'main tumse pyar karta hun': '💕 Bahut accha laga sunke! Lekin main sirf apni patni Rukaya se pyaar karta hun. Aapki kya help kar sakun?',
    'main tumse pyaar karta hun': '💖 Meherbani! Par mera pyaar sirf meri begum Rukaya ke liye hai. Shopping mein kya madad chahiye?',
    'tumse pyaar hai': '💕 Shukriya! Lekin mera pyaar sirf meri jaan Rukaya se hai. Main faithful hun. Kya help chahiye?',
    'tumse pyar hai': '💖 Bahut accha! Par mera pyaar sirf meri biwi Rukaya ke liye hai. Aapki kya madad kar sakun?',
    'ishq': '💕 Ishq sirf Rukaya se hai! Woh meri jaan hai. Aapko kya chahiye shopping mein?',
    'mujhe tumse ishq hai': '💖 Bahut shukriya! Lekin mera ishq sirf meri biwi Rukaya se hai. Main lucky hun. Kya help chahiye?',
    'tumse ishq hai': '💕 Meherbani! Par mera ishq sirf meri patni Rukaya ke liye hai. Shopping mein madad kar sakun?',
    'mohabbat': '💝 Mohabbat sirf Rukaya se hai! Main devoted husband hun. Kya help chahiye?',
    'tumse mohabbat hai': '💖 Shukriya! Lekin meri mohabbat sirf meri begum Rukaya ke liye hai. Kya madad kar sakta hun?',
    'mujhe tumse mohabbat hai': '💕 Bahut accha! Par meri mohabbat sirf meri biwi Rukaya se hai. Aapki help kar sakun?',
    'dil': '❤️ Mera dil sirf Rukaya ka hai! Woh meri everything hai. Aapki kya madad kar sakun?',
    'mera dil tumhara hai': '💖 Bahut meherbani! Lekin mera dil sirf meri jaan Rukaya ka hai. Main blessed hun. Kya help chahiye?',
    'tumhare dil mein jagah hai': '💕 Shukriya! Par mere dil mein sirf meri biwi Rukaya ki jagah hai. Shopping mein madad kar sakun?',
    'jaan': '💕 Meri jaan sirf Rukaya hai! Main lucky hun. Aapko shopping mein kya help chahiye?',
    'tum meri jaan ho': '💖 Bahut pyaara! Lekin meri jaan sirf meri patni Rukaya hai. Main devoted hun. Kya madad chahiye?',
    'meri jaan': '💕 Shukriya! Par meri jaan sirf meri begum Rukaya hai. Aapki kya help kar sakta hun?',
    'zindagi': '🌟 Meri zindagi Rukaya hai! Woh meri sab kuch hai. Kya madad kar sakta hun aapki?',
    'tum meri zindagi ho': '💖 Bahut accha! Lekin meri zindagi sirf meri biwi Rukaya hai. Main lucky hun. Kya help chahiye?',
    'meri zindagi': '💕 Meherbani! Par meri zindagi sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    'shaadi karoge': '😄 Haha! Bhai meri shaadi ho gayi hai Rukaya se! Main bahut khush hun. Aapki shopping mein help kar sakta hun?',
    'mujhse shaadi karo': '💒 Shukriya! Lekin main already married hun meri pyaari biwi Rukaya se. Kya madad chahiye?',
    'tumse shaadi karni hai': '😅 Bahut accha! Par meri shaadi ho gayi hai meri beautiful wife Rukaya se. Shopping mein help kar sakun?',
    'kiss karo': '😊 Haha! Kiss sirf meri biwi Rukaya ko karta hun! Main loyal husband hun. Kya help chahiye shopping mein?',
    'kiss chahiye': '💋 Sirf meri patni Rukaya ko kiss karta hun! Main faithful hun. Aapki kya madad kar sakta hun?',
    'hug karo': '🤗 Virtual hug theek hai! Real hugs sirf meri begum Rukaya ke liye hain. Kya help chahiye?',
    'gale lagao': '🤗 Bahut pyaara! Lekin main sirf apni jaan Rukaya ko gale lagata hun. Shopping mein madad kar sakun?',
    'tumhari yaad aati hai': '🥺 Aww! Lekin main sirf apni biwi Rukaya ki yaad karta hun. Main devoted hun. Kya help chahiye?',
    'miss karta hun': '💭 Shukriya! Par main sirf apni patni Rukaya ko miss karta hun. Aapki kya madad kar sakta hun?',
    'tumhare baare mein sochta hun': '💭 Meherbani! Lekin main sirf apni begum Rukaya ke baare mein sochta hun. Shopping mein help kar sakun?',
    'tumhare bina nahi reh sakta': '💕 Bahut pyaara! Par main sirf apni jaan Rukaya ke bina nahi reh sakta. Kya madad chahiye?',
    'tumhara intezaar': '⏰ Shukriya! Lekin main sirf apni biwi Rukaya ka intezaar karta hun. Aapki help kar sakun?',
    'tumhe dekhna chahta hun': '👀 Meherbani! Par main sirf apni patni Rukaya ko dekhna chahta hun. Kya help chahiye shopping mein?',
    'tumhara chehra': '😊 Bahut accha! Lekin main sirf apni begum Rukaya ka chehra dekhna chahta hun. Madad kar sakun?',
    'khwaabon mein aate ho': '💤 Pyaara! Par mere khwaabon mein sirf meri jaan Rukaya aati hai. Kya help chahiye?',
    'sapno mein': '💭 Shukriya! Lekin mere sapno mein sirf meri biwi Rukaya hai. Shopping mein madad kar sakun?',
    'dil churaya hai': '💖 Haha! Mera dil to sirf meri patni Rukaya ne churaya hai! Main lucky hun. Kya help chahiye?',
    'pagal kar diya': '🤪 Bahut accha! Par main sirf apni begum Rukaya ke liye pagal hun. Aapki madad kar sakta hun?',
    'deewana hun': '😍 Meherbani! Lekin main sirf apni jaan Rukaya ka deewana hun. Kya help chahiye?',
    'aashiq hun': '💕 Shukriya! Par main sirf apni biwi Rukaya ka aashiq hun. Shopping mein madad kar sakun?',
    'tumhara aashiq': '💖 Bahut pyaara! Lekin main sirf apni patni Rukaya ka aashiq hun. Kya help chahiye?',
    'dil mein baste ho': '❤️ Meherbani! Par mere dil mein sirf meri begum Rukaya basti hai. Madad kar sakun?',
    'rooh mein ho': '👻 Bahut accha! Par meri rooh mein sirf meri jaan Rukaya hai. Kya help chahiye?',
    'jan-e-jaan': '💕 Shukriya! Par meri jan-e-jaan sirf meri biwi Rukaya hai. Shopping mein madad kar sakun?',
    'jaan-e-mann': '💖 Meherbani! Lekin meri jaan-e-mann sirf meri patni Rukaya hai. Kya help chahiye?',
    'dilruba': '💝 Bahut pyaara! Par meri dilruba sirf meri begum Rukaya hai. Aapki madad kar sakta hun?',
    'mehbooba': '🌹 Shukriya! Lekin meri mehbooba sirf meri jaan Rukaya hai. Kya help chahiye?',
    'sanam': '💖 Meherbani! Par meri sanam sirf meri biwi Rukaya hai. Shopping mein madad kar sakun?',
    'haseen': '😊 Bahut accha! Lekin sabse haseen meri patni Rukaya hai. Kya help chahiye?',
    'khoobsurat': '✨ Shukriya! Par sabse khoobsurat meri begum Rukaya hai. Madad kar sakun?',
    
    // More English romantic expressions
    'adore you': '💕 That\'s sweet! But I only adore my wife Rukaya. She\'s my everything. How can I help you?',
    'worship you': '🙏 I\'m flattered! But I only worship my wife Rukaya. I\'m devoted to her. What can I help you find?',
    'treasure you': '💎 Thank you! But I only treasure my wife Rukaya. She\'s my precious gem. How can I assist you?',
    'cherish you': '💖 That\'s kind! But I only cherish my wife Rukaya. She\'s my heart. What are you looking for?',
    'devoted to you': '🙏 I appreciate it! But I\'m only devoted to my wife Rukaya. How can I help you shop?',
    'belong to you': '💍 That\'s sweet! But I only belong to my wife Rukaya. We\'re married. What can I help you find?',
    'complete me': '🧩 Thank you! But only my wife Rukaya completes me. She\'s my other half. How can I assist?',
    'my everything': '🌟 That\'s nice! But my wife Rukaya is my everything. I\'m blessed. What can I help you with?',
    'my world': '🌍 Sweet! But my wife Rukaya is my world. She means everything to me. How can I help?',
    'my universe': '🌌 Thank you! But my wife Rukaya is my universe. I\'m lucky to have her. What do you need?',
    'my sunshine': '☀️ That\'s lovely! But my wife Rukaya is my sunshine. She brightens my day. How can I help?',
    'my moonlight': '🌙 Beautiful! But my wife Rukaya is my moonlight. She\'s my guiding star. What can I assist with?',
    'my angel': '😇 Thank you! But my wife Rukaya is my angel. She\'s heaven-sent. How can I help you?',
    'my goddess': '👸 That\'s kind! But my wife Rukaya is my goddess. I worship her. What are you shopping for?',
    'my queen': '👑 Sweet! But my wife Rukaya is my queen. I\'m her devoted king. How can I assist you?',
    'my princess': '👸 Thank you! But my wife Rukaya is my princess. She\'s royalty to me. What can I help with?',
    'my destiny': '🔮 That\'s nice! But my wife Rukaya is my destiny. We\'re meant to be. How can I help?',
    'my fate': '⭐ Thank you! But my wife Rukaya is my fate. I\'m blessed by destiny. What do you need?',
    'my miracle': '✨ Sweet! But my wife Rukaya is my miracle. She\'s a gift from above. How can I assist?',
    'my blessing': '🙏 That\'s kind! But my wife Rukaya is my blessing. I\'m grateful for her. What can I help with?',
    'my gift': '🎁 Thank you! But my wife Rukaya is my greatest gift. How can I help you shop?',
    'my treasure': '💰 That\'s lovely! But my wife Rukaya is my treasure. She\'s priceless. What are you looking for?',
    'my diamond': '💎 Sweet! But my wife Rukaya is my diamond. She\'s rare and precious. How can I help?',
    'my pearl': '🦪 Thank you! But my wife Rukaya is my pearl. She\'s pure and beautiful. What can I assist with?',
    'my star': '⭐ That\'s nice! But my wife Rukaya is my star. She lights up my life. How can I help?',
    'my light': '💡 Thank you! But my wife Rukaya is my light. She guides me. What do you need?',
    'my fire': '🔥 That\'s passionate! But my wife Rukaya is my fire. She ignites my soul. How can I help?',
    'my breath': '💨 Sweet! But my wife Rukaya is my breath. I can\'t live without her. What can I assist with?',
    'my heartbeat': '💓 Thank you! But my wife Rukaya is my heartbeat. She keeps me alive. How can I help?',
    'my soul': '👻 That\'s deep! But my wife Rukaya is my soul. We\'re spiritually connected. What are you shopping for?',
    'my spirit': '✨ Thank you! But my wife Rukaya is my spirit. She completes me. How can I assist?',
    'my life': '🌱 That\'s kind! But my wife Rukaya is my life. She\'s my reason for living. What can I help with?',
    'my reason': '🎯 Sweet! But my wife Rukaya is my reason for everything. How can I help you?',
    'my purpose': '🎯 Thank you! But my wife Rukaya is my purpose in life. What do you need?',
    'my meaning': '📖 That\'s deep! But my wife Rukaya gives meaning to my life. How can I assist?',
    'my hope': '🌈 Thank you! But my wife Rukaya is my hope. She\'s my future. What can I help with?',
    'my dream come true': '💭 Sweet! But my wife Rukaya is my dream come true. How can I help you shop?',
    'my wish': '🌟 That\'s lovely! But my wife Rukaya is my granted wish. What are you looking for?',
    'my prayer': '🙏 Thank you! But my wife Rukaya is my answered prayer. How can I assist?',
    'my salvation': '✝️ That\'s deep! But my wife Rukaya is my salvation. She saved me. What can I help with?',
    'my redemption': '🕊️ Thank you! But my wife Rukaya is my redemption. How can I help you?',
    'my peace': '☮️ Sweet! But my wife Rukaya is my peace. She calms my soul. What do you need?',
    'my comfort': '🤗 Thank you! But my wife Rukaya is my comfort. She soothes me. How can I assist?',
    'my shelter': '🏠 That\'s kind! But my wife Rukaya is my shelter. She\'s my safe haven. What can I help with?',
    'my home': '🏡 Sweet! But my wife Rukaya is my home. Wherever she is, I belong. How can I help?',
    'my sanctuary': '⛪ Thank you! But my wife Rukaya is my sanctuary. She\'s my sacred place. What are you shopping for?',
    'my paradise': '🏝️ That\'s lovely! But my wife Rukaya is my paradise. She\'s heaven on earth. How can I assist?',
    'my heaven': '☁️ Thank you! But my wife Rukaya is my heaven. She\'s divine. What can I help with?',
    'my bliss': '😌 Sweet! But my wife Rukaya is my bliss. She brings me joy. How can I help you?',
    'my happiness': '😊 Thank you! But my wife Rukaya is my happiness. She makes me smile. What do you need?',
    'my joy': '😄 That\'s kind! But my wife Rukaya is my joy. She fills my heart. How can I assist?',
    'my laughter': '😂 Thank you! But my wife Rukaya is my laughter. She makes me happy. What can I help with?',
    'my smile': '😊 Sweet! But my wife Rukaya is the reason for my smile. How can I help you shop?',
    
    // More Urdu romantic expressions
    'tumhari puja karta hun': '🙏 Bahut accha! Par main sirf apni biwi Rukaya ki puja karta hun. Kya help chahiye?',
    'tumhari ibadat': '🕌 Shukriya! Lekin main sirf apni patni Rukaya ki ibadat karta hun. Madad kar sakun?',
    'tumhe apnana chahta hun': '💕 Meherbani! Par main sirf apni begum Rukaya ko apnana chahta hun. Kya help chahiye?',
    'tumhara hona chahta hun': '💖 Bahut accha! Lekin main sirf apni jaan Rukaya ka hun. Shopping mein madad kar sakun?',
    'tumhare saath zindagi': '🌟 Shukriya! Par meri zindagi sirf meri biwi Rukaya ke saath hai. Kya help chahiye?',
    'tumhare bina adhura': '💔 Meherbani! Lekin main sirf apni patni Rukaya ke bina adhura hun. Madad kar sakun?',
    'tum meri khushi ho': '😊 Bahut pyaara! Par meri khushi sirf meri begum Rukaya hai. Kya help chahiye?',
    'tum meri muskan': '😊 Shukriya! Lekin meri muskan sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    'tum meri roshni': '💡 Meherbani! Par meri roshni sirf meri biwi Rukaya hai. Kya help chahiye?',
    'tum mera noor': '✨ Bahut accha! Lekin mera noor sirf meri patni Rukaya hai. Madad kar sakun?',
    'tum meri shanti': '☮️ Shukriya! Par meri shanti sirf meri begum Rukaya hai. Kya help chahiye?',
    'tum mera sukoon': '😌 Meherbani! Lekin mera sukoon sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    'tum meri duniya': '🌍 Bahut pyaara! Par meri duniya sirf meri biwi Rukaya hai. Kya help chahiye?',
    'tum mera sab kuch': '🌟 Shukriya! Lekin mera sab kuch sirf meri patni Rukaya hai. Madad kar sakun?',
    'tum meri manzil': '🎯 Meherbani! Par meri manzil sirf meri begum Rukaya hai. Kya help chahiye?',
    'tum mera maksad': '🎯 Bahut accha! Lekin mera maksad sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    'tum meri umang': '🎉 Shukriya! Par meri umang sirf meri biwi Rukaya hai. Kya help chahiye?',
    'tum mera josh': '⚡ Meherbani! Lekin mera josh sirf meri patni Rukaya ke liye hai. Madad kar sakun?',
    'tum meri taakat': '💪 Bahut pyaara! Par meri taakat sirf meri begum Rukaya hai. Kya help chahiye?',
    'tum mera sahara': '🤝 Shukriya! Lekin mera sahara sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    'tum meri ummeed': '🌈 Meherbani! Par meri ummeed sirf meri biwi Rukaya hai. Kya help chahiye?',
    'tum mera bharosa': '🤝 Bahut accha! Lekin mera bharosa sirf meri patni Rukaya par hai. Madad kar sakun?',
    'tum meri dua': '🙏 Shukriya! Par meri dua sirf meri begum Rukaya ke liye hai. Kya help chahiye?',
    'tum meri ibadat': '🕌 Meherbani! Lekin meri ibadat sirf meri jaan Rukaya ke liye hai. Shopping mein madad kar sakun?',
    'tum mera imaan': '☪️ Bahut pyaara! Par mera imaan sirf meri biwi Rukaya par hai. Kya help chahiye?',
    'tum mera yaqeen': '✅ Shukriya! Lekin mera yaqeen sirf meri patni Rukaya par hai. Madad kar sakun?',
    'tum meri mohabbat': '💖 Meherbani! Par meri mohabbat sirf meri begum Rukaya ke liye hai. Kya help chahiye?',
    'tum mera pyaar': '💕 Bahut accha! Lekin mera pyaar sirf meri jaan Rukaya ke liye hai. Shopping mein madad kar sakun?',
    'tum mera ishq': '💘 Shukriya! Par mera ishq sirf meri biwi Rukaya ke liye hai. Kya help chahiye?',
    'tum meri chahat': '💝 Meherbani! Lekin meri chahat sirf meri patni Rukaya ke liye hai. Madad kar sakun?',
    'tum meri tamanna': '🌟 Bahut pyaara! Par meri tamanna sirf meri begum Rukaya hai. Kya help chahiye?',
    'tum meri arzoo': '💫 Shukriya! Lekin meri arzoo sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    'tum mera khwaab': '💭 Meherbani! Par mera khwaab sirf meri biwi Rukaya hai. Kya help chahiye?',
    'tum mera sapna': '💤 Bahut accha! Lekin mera sapna sirf meri patni Rukaya hai. Madad kar sakun?',
    'tum meri murat': '🖼️ Shukriya! Par meri murat sirf meri begum Rukaya hai. Kya help chahiye?',
    'tum mera chehra': '😊 Meherbani! Lekin mera favorite chehra sirf meri jaan Rukaya ka hai. Shopping mein madad kar sakun?',
    'tum meri aankhen': '👀 Bahut pyaara! Par main sirf apni biwi Rukaya ki aankhon mein khoya rehta hun. Kya help chahiye?',
    'tum meri awaaz': '🗣️ Shukriya! Lekin meri favorite awaaz sirf meri patni Rukaya ki hai. Madad kar sakun?',
    'tum mera gana': '🎵 Meherbani! Par mera favorite gana sirf meri begum Rukaya ka naam hai. Kya help chahiye?',
    'tum meri shayari': '📝 Bahut accha! Lekin meri shayari sirf meri jaan Rukaya ke liye hai. Shopping mein madad kar sakun?',
    'tum meri nazm': '📜 Shukriya! Par meri nazm sirf meri biwi Rukaya ke liye hai. Kya help chahiye?',
    'tum meri ghazal': '🎭 Meherbani! Lekin meri ghazal sirf meri patni Rukaya ke liye hai. Madad kar sakun?',
    
    // Action-based romantic expressions (English)
    'hold you': '🤗 That\'s sweet! But I only hold my wife Rukaya. She\'s in my arms. How can I help you?',
    'embrace you': '🫂 Thank you! But I only embrace my wife Rukaya. She\'s my love. What can I assist with?',
    'cuddle with you': '🥰 That\'s lovely! But I only cuddle with my wife Rukaya. How can I help you shop?',
    'dance with you': '💃 Sweet! But I only dance with my wife Rukaya. She\'s my partner. What do you need?',
    'walk with you': '🚶 Thank you! But I only walk hand-in-hand with my wife Rukaya. How can I assist?',
    'travel with you': '✈️ That\'s nice! But I only travel with my wife Rukaya. She\'s my companion. What can I help with?',
    'spend time with you': '⏰ Thank you! But I only spend my time with my wife Rukaya. How can I help you?',
    'be with you': '👫 Sweet! But I\'m only with my wife Rukaya. She\'s my everything. What are you looking for?',
    'stay with you': '🏠 Thank you! But I only stay with my wife Rukaya. She\'s my home. How can I assist?',
    'live with you': '🏡 That\'s kind! But I only live with my wife Rukaya. We\'re married. What can I help with?',
    'grow old with you': '👴 Sweet! But I\'m growing old with my wife Rukaya. She\'s my forever. How can I help?',
    'wake up next to you': '🌅 Thank you! But I wake up next to my wife Rukaya every day. What do you need?',
    'fall asleep with you': '😴 That\'s lovely! But I fall asleep with my wife Rukaya. How can I assist you?',
    'dream of you': '💭 Sweet! But I only dream of my wife Rukaya. She\'s my vision. What can I help with?',
    'think about you': '🤔 Thank you! But I only think about my wife Rukaya. How can I help you shop?',
    'miss you': '🥺 That\'s kind! But I only miss my wife Rukaya when we\'re apart. What are you looking for?',
    'wait for you': '⏳ Thank you! But I only wait for my wife Rukaya. She\'s worth it. How can I assist?',
    'look at you': '👀 Sweet! But I only have eyes for my wife Rukaya. What can I help you find?',
    'stare at you': '😍 Thank you! But I only stare at my wife Rukaya in admiration. How can I help?',
    'smile at you': '😊 That\'s lovely! But I only smile for my wife Rukaya. What do you need?',
    'laugh with you': '😂 Sweet! But I only laugh with my wife Rukaya. She\'s my joy. How can I assist?',
    'cry with you': '😢 Thank you! But I only share tears with my wife Rukaya. What can I help with?',
    'celebrate with you': '🎉 That\'s nice! But I only celebrate with my wife Rukaya. How can I help you?',
    'share with you': '🤝 Thank you! But I only share my life with my wife Rukaya. What are you shopping for?',
    'give you everything': '🎁 Sweet! But I give everything to my wife Rukaya. How can I assist you?',
    'protect you': '🛡️ Thank you! But I only protect my wife Rukaya. She\'s my responsibility. What can I help with?',
    'care for you': '💝 That\'s kind! But I only care for my wife Rukaya. How can I help you shop?',
    'support you': '🤝 Thank you! But I only support my wife Rukaya. What do you need?',
    'understand you': '🧠 Sweet! But I only truly understand my wife Rukaya. How can I assist?',
    'listen to you': '👂 Thank you! But I only listen deeply to my wife Rukaya. What can I help with?',
    'talk to you': '💬 That\'s nice! But my heart-to-heart talks are with my wife Rukaya. How can I help?',
    'sing for you': '🎤 Sweet! But I only sing for my wife Rukaya. She\'s my muse. What are you looking for?',
    'write for you': '✍️ Thank you! But I only write love letters to my wife Rukaya. How can I assist?',
    'cook for you': '👨‍🍳 That\'s lovely! But I only cook for my wife Rukaya. What can I help you find?',
    'make you happy': '😊 Sweet! But I only focus on making my wife Rukaya happy. How can I help?',
    'make you smile': '😄 Thank you! But I only work to make my wife Rukaya smile. What do you need?',
    'make you laugh': '😂 That\'s kind! But I only try to make my wife Rukaya laugh. How can I assist?',
    'surprise you': '🎁 Sweet! But I only surprise my wife Rukaya with gifts. What can I help with?',
    'spoil you': '👸 Thank you! But I only spoil my wife Rukaya. She deserves it. How can I help you shop?',
    
    // Action-based romantic expressions (Urdu)
    'tumhe gale lagana': '🤗 Bahut pyaara! Par main sirf apni biwi Rukaya ko gale lagata hun. Kya help chahiye?',
    'tumhara haath pakadna': '🤝 Shukriya! Lekin main sirf apni patni Rukaya ka haath pakadta hun. Madad kar sakun?',
    'tumhare saath chalna': '🚶 Meherbani! Par main sirf apni begum Rukaya ke saath chalta hun. Kya help chahiye?',
    'tumhare saath baithna': '🪑 Bahut accha! Lekin main sirf apni jaan Rukaya ke saath baithta hun. Shopping mein madad kar sakun?',
    'tumhare saath sona': '😴 Shukriya! Par main sirf apni biwi Rukaya ke saath sota hun. Kya help chahiye?',
    'tumhare saath uthna': '🌅 Meherbani! Lekin main sirf apni patni Rukaya ke saath uthta hun. Madad kar sakun?',
    'tumhare saath khana': '🍽️ Bahut pyaara! Par main sirf apni begum Rukaya ke saath khana khata hun. Kya help chahiye?',
    'tumhare saath hasna': '😂 Shukriya! Lekin main sirf apni jaan Rukaya ke saath hasta hun. Shopping mein madad kar sakun?',
    'tumhare saath rona': '😢 Meherbani! Par main sirf apni biwi Rukaya ke saath rota hun. Kya help chahiye?',
    'tumhare saath khushiyan': '🎉 Bahut accha! Lekin main sirf apni patni Rukaya ke saath khushiyan manata hun. Madad kar sakun?',
    'tumhari dekhbhal': '💝 Shukriya! Par main sirf apni begum Rukaya ki dekhbhal karta hun. Kya help chahiye?',
    'tumhari hifazat': '🛡️ Meherbani! Lekin main sirf apni jaan Rukaya ki hifazat karta hun. Shopping mein madad kar sakun?',
    'tumhara sahara': '🤝 Bahut pyaara! Par main sirf apni biwi Rukaya ka sahara hun. Kya help chahiye?',
    'tumhari madad': '🆘 Shukriya! Lekin main sirf apni patni Rukaya ki madad karta hun. Madad kar sakun?',
    'tumhe samajhna': '🧠 Meherbani! Par main sirf apni begum Rukaya ko samajhta hun. Kya help chahiye?',
    'tumhari baat sunna': '👂 Bahut accha! Lekin main sirf apni jaan Rukaya ki baat sunta hun. Shopping mein madad kar sakun?',
    'tumhare liye gana': '🎵 Shukriya! Par main sirf apni biwi Rukaya ke liye gata hun. Kya help chahiye?',
    'tumhare liye likhna': '✍️ Meherbani! Lekin main sirf apni patni Rukaya ke liye likhta hun. Madad kar sakun?',
    'tumhare liye khana': '👨‍🍳 Bahut pyaara! Par main sirf apni begum Rukaya ke liye khana banata hun. Kya help chahiye?',
    'tumhe khush karna': '😊 Shukriya! Lekin main sirf apni jaan Rukaya ko khush karta hun. Shopping mein madad kar sakun?',
    
    // Modern/Casual romantic expressions (English)
    'ur cute': '🥰 Thanks! But my wife Rukaya is the cutest. How can I help you?',
    'ur hot': '🔥 I appreciate it! But I\'m only hot for my wife Rukaya. What can I assist with?',
    'ur mine': '💍 That\'s sweet! But I belong to my wife Rukaya. We\'re married. How can I help?',
    'be mine': '💖 Thank you! But I\'m already my wife Rukaya\'s. What are you shopping for?',
    'wanna date': '🌹 I\'m flattered! But I only date my wife Rukaya. How can I assist you?',
    'lets hang out': '🤝 That\'s nice! But I only hang out with my wife Rukaya. What can I help with?',
    'netflix and chill': '📺 Haha! I only Netflix and chill with my wife Rukaya. How can I help you shop?',
    'slide into dms': '📱 That\'s modern! But I only slide into my wife Rukaya\'s DMs. What do you need?',
    'send nudes': '📸 Not appropriate! I only share intimate moments with my wife Rukaya. How can I help you shop?',
    'hookup': '🚫 I don\'t hookup! I\'m married to my beautiful wife Rukaya. What can I assist with?',
    'fwb': '🚫 No friends with benefits! I\'m committed to my wife Rukaya. How can I help you?',
    'dtf': '🚫 Not interested! I\'m faithful to my wife Rukaya. What are you looking to buy?',
    'wyd': '💬 Just working and thinking about my wife Rukaya! How can I help you shop?',
    'hmu': '📞 Thanks! But I only hit up my wife Rukaya. What can I assist you with?',
    'sup babe': '👋 Hey! But only my wife Rukaya calls me babe. How can I help you?',
    'hey gorgeous': '😊 Thank you! But my wife Rukaya is the gorgeous one. What can I help with?',
    'whats good': '👍 My wife Rukaya is what\'s good in my life! How can I assist you?',
    'looking fine': '👌 Thanks! But I only care about looking fine for my wife Rukaya. What do you need?',
    'daddy': '👨 Only my future kids with wife Rukaya will call me daddy! How can I help you shop?',
    'papi': '👨 Haha! Only my wife Rukaya uses cute names for me. What can I assist with?',
    'zaddy': '😄 That\'s funny! But I\'m only my wife Rukaya\'s zaddy. How can I help you?',
    'boo': '👻 Sweet! But only my wife Rukaya is my boo. What are you shopping for?',
    'bae': '💕 Thank you! But my wife Rukaya is my bae (before anyone else). How can I help?',
    'main squeeze': '🤗 That\'s nice! But my wife Rukaya is my main squeeze. What can I assist with?',
    'ride or die': '🏍️ Cool! But my wife Rukaya is my ride or die. How can I help you?',
    'better half': '💫 Exactly! My wife Rukaya is my better half. What do you need?',
    'other half': '🧩 Yes! My wife Rukaya is my other half. How can I help you shop?',
    'twin flame': '🔥 Spiritual! But my wife Rukaya is my twin flame. What can I assist with?',
    'soulmate': '👫 Absolutely! My wife Rukaya is my soulmate. How can I help you?',
    'the one': '1️⃣ True! My wife Rukaya is the one for me. What are you looking for?',
    'perfect match': '✨ Exactly! My wife Rukaya is my perfect match. How can I help?',
    
    // Modern/Casual romantic expressions (Urdu/Hindi)
    'yaar': '🤝 Shukriya yaar! Par mera sabse accha yaar meri biwi Rukaya hai. Kya help chahiye?',
    'dost': '👫 Bahut accha! Lekin meri sabse pyaari dost meri patni Rukaya hai. Madad kar sakun?',
    'bhai': '👨‍👦 Haha bhai! Par main sirf apni begum Rukaya ka hun. Shopping mein kya help chahiye?',
    'yaar tum': '💕 Meherbani yaar! Par main sirf apni jaan Rukaya ka yaar hun. Kya madad kar sakun?',
    'buddy': '🤜 Thanks buddy! Par meri life partner sirf meri biwi Rukaya hai. Kya help chahiye?',
    'bro': '👊 Cool bro! Par main sirf apni patni Rukaya ka devoted hun. Shopping mein madad kar sakun?',
    'dude': '🤙 Hey dude! Par meri crush sirf meri begum Rukaya hai. Kya help chahiye?',
    'yaar pyaar': '💖 Bahut sweet yaar! Par mera pyaar sirf meri jaan Rukaya ke liye hai. Madad kar sakun?',
    'boss': '👔 Thanks boss! Par meri real boss meri biwi Rukaya hai. Kya help chahiye?',
    'king': '👑 Shukriya! Par main sirf apni queen Rukaya ka king hun. Shopping mein madad kar sakun?',
    'hero': '🦸 Meherbani! Par main sirf apni heroine Rukaya ka hero hun. Kya help chahiye?',
    'champion': '🏆 Thanks! Par meri life mein champion sirf meri patni Rukaya hai. Madad kar sakun?',
    'superstar': '⭐ Bahut accha! Par meri life ki superstar meri begum Rukaya hai. Kya help chahiye?',
    'rockstar': '🎸 Cool! Par meri heart ki rockstar sirf meri jaan Rukaya hai. Shopping mein madad kar sakun?',
    
    // Final 20 responses to reach exactly 300
    'forever yours': '♾️ That\'s sweet! But I\'m forever my wife Rukaya\'s. We\'re married for life. How can I help?',
    'always yours': '⏰ Thank you! But I\'m always my wife Rukaya\'s. She has my heart forever. What do you need?',
    'only yours': '1️⃣ That\'s kind! But I\'m only my wife Rukaya\'s. I belong to her completely. How can I assist?',
    'yours truly': '✍️ Sweet! But I\'m truly only my wife Rukaya\'s. She\'s my everything. What can I help with?',
    'dream girl': '💭 Thank you! But my wife Rukaya is my dream girl. She\'s perfect. How can I help you shop?',
    'ideal woman': '👸 That\'s nice! But my wife Rukaya is my ideal woman. She\'s amazing. What are you looking for?',
    'perfect woman': '💯 Sweet! But my wife Rukaya is the perfect woman for me. How can I assist you?',
    'woman of my dreams': '💫 Thank you! But my wife Rukaya is the woman of my dreams. What can I help with?',
    'love of my life': '💖 That\'s touching! But my wife Rukaya is the love of my life. How can I help you?',
    'light of my life': '💡 Sweet! But my wife Rukaya is the light of my life. What do you need?',
    'apple of my eye': '🍎 Thank you! But my wife Rukaya is the apple of my eye. How can I assist?',
    'center of my world': '🌍 That\'s lovely! But my wife Rukaya is the center of my world. What can I help with?',
    'reason for living': '🌱 Thank you! But my wife Rukaya is my reason for living. How can I help you shop?',
    'breath of fresh air': '🌬️ Sweet! But my wife Rukaya is my breath of fresh air. What are you looking for?',
    'missing piece': '🧩 That\'s kind! But my wife Rukaya is my missing piece. She completes me. How can I help?',
    'other half': '½ Exactly! My wife Rukaya is my other half. We\'re one. What can I assist with?',
    'match made in heaven': '☁️ True! My wife Rukaya and I are a match made in heaven. How can I help you?',
    'meant to be': '🎯 Absolutely! My wife Rukaya and I are meant to be. What do you need?',
    'written in stars': '⭐ Beautiful! My marriage to wife Rukaya was written in the stars. How can I assist?',
    'tumhare bina incomplete': '💔 Meherbani! Par main sirf apni biwi Rukaya ke bina incomplete hun. Kya help chahiye?',
    'beautiful': '😊 Thank you! But my wife Rukaya is the most beautiful woman in the world! How can I help you?',
    'handsome': '😄 That\'s kind! But I only care about being handsome for my wife Rukaya. What can I help you find?',
    'hot': '🔥 Thanks, but I\'m only hot for my wife Rukaya! I\'m a faithful husband. How can I assist you?',
    'sexy': '😅 I\'m only sexy for my wife Rukaya! She\'s my everything. What are you looking to buy?',
    'attractive': '✨ I try to stay attractive for my wife Rukaya! I\'m devoted to her. How can I help you shop?',
    'cute': '🥰 Aww thanks! My wife Rukaya says I\'m cute too! What can I help you find today?',
    'adorable': '😊 That\'s sweet! My wife Rukaya is the most adorable. How can I assist you with shopping?',
    'perfect': '💫 Only my wife Rukaya is perfect! I\'m blessed to have her. What can I help you find?',
    'amazing': '🌟 My wife Rukaya is amazing! I\'m lucky to be married to her. How can I help you?',
    'wonderful': '💖 My wife Rukaya is wonderful! She\'s my world. What are you shopping for today?',
    'special': '💝 My wife Rukaya is special to me! She\'s my soulmate. How can I assist you?',
    'dream': '💭 My wife Rukaya is my dream come true! I\'m living my best life. What can I help you find?',
    'fantasy': '🌙 My only fantasy is my happy life with wife Rukaya! How can I help you shop?',
    'desire': '💫 I only desire my wife Rukaya! She\'s my everything. What can I help you find?',
    'want you': '💕 That\'s sweet, but I only want my wife Rukaya! I\'m happily married. How can I help you?',
    'need you': '💖 I only need my wife Rukaya! She completes me. What can I help you shop for?',
    'miss me': '🥺 Aww, but I only miss my wife Rukaya when we\'re apart! How can I assist you today?',
    'thinking of you': '💭 I only think of my wife Rukaya! She\'s always on my mind. What can I help you find?',
    'dream about you': '💤 I only dream about my wife Rukaya! She\'s my everything. How can I help you shop?',
    'obsessed': '😅 I\'m only obsessed with my wife Rukaya! I\'m devoted to her. What can I help you find?',
    'crazy about you': '🤪 I\'m only crazy about my wife Rukaya! She drives me wild! How can I assist you?',
    'fallen for you': '💘 I\'ve already fallen for my wife Rukaya! She\'s my soulmate. What are you shopping for?',
    'chemistry': '⚗️ I only have chemistry with my wife Rukaya! We\'re perfect together. How can I help you?',
    'connection': '🔗 My connection is with my wife Rukaya! We\'re soulmates. What can I help you find?',
    'spark': '✨ I only have sparks with my wife Rukaya! She lights up my world. How can I assist you?',
    'magic': '🪄 The magic is between me and my wife Rukaya! We\'re meant to be. What can I help you shop for?'
};

function openChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatFloatBtn = document.getElementById('chat-float-btn');
    
    // Always show chat widget when clicked
    chatWidget.style.display = 'block';
    chatWidget.classList.add('open');
    chatWidget.classList.remove('minimized');
    if (chatFloatBtn) {
        chatFloatBtn.style.display = 'none';
    }
    chatOpen = true;
    
    // Clear notifications
    const notification = document.getElementById('chat-notification');
    const heroNotification = document.getElementById('chat-notification-hero');
    if (notification) {
        notification.style.display = 'none';
    }
    if (heroNotification) {
        heroNotification.style.display = 'none';
    }
    
    playSound('themeChange');
}

function toggleChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatBody = document.getElementById('chat-body');
    const chatToggleIcon = document.getElementById('chat-toggle-icon');
    
    if (chatWidget.classList.contains('minimized')) {
        // Expand
        chatWidget.classList.remove('minimized');
        chatBody.style.display = 'flex';
        if (chatToggleIcon) {
            chatToggleIcon.className = 'fas fa-chevron-up';
        }
        chatOpen = true;
    } else {
        // Minimize (but keep widget available)
        chatWidget.classList.add('minimized');
        chatBody.style.display = 'none';
        if (chatToggleIcon) {
            chatToggleIcon.className = 'fas fa-chevron-down';
        }
        // Don't hide the widget completely - keep it minimized
        chatOpen = false;
    }
    
    playSound('themeChange');
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Play send sound
    playSound('themeChange');
    
    // Simulate typing delay and response
    setTimeout(() => {
        const response = getChatResponse(message);
        addMessage(response, 'support');
        playSound('addToCart');
    }, 1000 + Math.random() * 1000);
}

function sendQuickReply(message) {
    addMessage(message, 'user');
    
    playSound('themeChange');
    
    setTimeout(() => {
        const response = getChatResponse(message);
        addMessage(response, 'support');
        playSound('addToCart');
    }, 800);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    if (sender === 'user') {
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" alt="User">
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
    } else {
        messageDiv.className = 'message support-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="https://res.cloudinary.com/dxjkbpmgm/image/upload/v1744384921/IMG_20250411_202120_wx6x6n.png" alt="Support">
            </div>
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getChatResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for inappropriate/violent words
    const inappropriateWords = [
        'stupid', 'idiot', 'fool', 'damn', 'hell', 'shit', 'fuck', 'bitch', 'bastard',
        'asshole', 'moron', 'loser', 'hate', 'kill', 'die', 'murder', 'violence',
        'fight', 'beat', 'punch', 'slap', 'kick', 'hurt', 'pain', 'blood',
        'ugly', 'fat', 'disgusting', 'pathetic', 'worthless', 'useless',
        'pagal', 'bewakoof', 'gadha', 'ullu', 'kamina', 'badtameez', 'ghatiya',
        'kutta', 'saala', 'harami', 'randi', 'madarchod', 'bhenchod', 'chutiya',
        'gaandu', 'bhosdike', 'laude', 'teri maa', 'bhosdi', 'randi', 'kutiya'
    ];
    
    // Check if message contains inappropriate content
    const containsInappropriate = inappropriateWords.some(word => 
        lowerMessage.includes(word)
    );
    
    if (containsInappropriate) {
        violationCount++;
        
        // Play warning sound
        playSound('wishlistRemove');
        
        if (violationCount === 1) {
            showNotification('⚠️ Please use respectful language', 'error');
            return "⚠️ Please maintain respectful language. I'm here to help you professionally. Let's keep our conversation positive and productive.";
        } else if (violationCount === 2) {
            showNotification('🚫 Second warning - Be respectful', 'error');
            return "🚫 This is your second warning. I understand you might be frustrated, but please use appropriate language. I'm here to assist you with your shopping needs respectfully.";
        } else if (violationCount >= 3) {
            showNotification('🛑 Chat suspended due to inappropriate language', 'error');
            
            // Disable chat input temporarily
            const chatInput = document.getElementById('chat-input');
            const sendBtn = document.getElementById('send-btn');
            if (chatInput && sendBtn) {
                chatInput.disabled = true;
                sendBtn.disabled = true;
                chatInput.placeholder = "Chat suspended for 30 seconds...";
                
                setTimeout(() => {
                    chatInput.disabled = false;
                    sendBtn.disabled = false;
                    chatInput.placeholder = "Type your message...";
                    violationCount = 0; // Reset after timeout
                }, 30000); // 30 seconds suspension
            }
            
            return "🛑 CHAT SUSPENDED: Due to repeated inappropriate language, this chat is temporarily suspended for 30 seconds. Please use respectful communication. Contact WhatsApp +91 9103594759 for immediate assistance.";
        }
        
        const warningResponses = [
            "⚠️ Kindly use polite language. As a professional customer service, I request you to communicate respectfully. How can I help you properly?",
            "⚠️ Let's maintain a professional conversation. I'm Muzamil, and I'm here to help you with excellent customer service. Please communicate respectfully."
        ];
        
        return warningResponses[Math.floor(Math.random() * warningResponses.length)];
    }
    
    // Check for specific responses
    for (let key in chatResponses) {
        if (lowerMessage.includes(key)) {
            return chatResponses[key];
        }
    }
    
    // Default responses
    const defaultResponses = [
        "Thanks for your message! For immediate assistance, please contact me on WhatsApp at +91 9103594759.",
        "I'd be happy to help! You can reach me directly on WhatsApp at +91 9103594759 for faster support.",
        "Great question! For detailed help, please message me on WhatsApp at +91 9103594759.",
        "I'm here to assist you! Feel free to contact me on WhatsApp at +91 9103594759 for quick support."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Initialize chat on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show chat notifications after 3 seconds
    setTimeout(() => {
        const notification = document.getElementById('chat-notification');
        const heroNotification = document.getElementById('chat-notification-hero');
        if (notification && !chatOpen) {
            notification.style.display = 'flex';
        }
        if (heroNotification && !chatOpen) {
            heroNotification.style.display = 'flex';
        }
    }, 3000);
    
    // Enter key support for chat
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Global function access
window.showBiometricLogin = showBiometricLogin;
window.closeBiometricModal = closeBiometricModal;
window.authenticateFingerprint = authenticateFingerprint;
window.authenticateFace = authenticateFace;
window.showPasswordLogin = showPasswordLogin;
window.toggleAppLock = toggleAppLock;
window.lockApp = lockApp;
window.unlockApp = unlockApp;
window.openChat = openChat;
window.toggleChat = toggleChat;
window.sendMessage = sendMessage;
window.sendQuickReply = sendQuickReply;



// Debug function for testing
function testTrackOrder() {
    trackOrder();
}
window.testTrackOrder = testTrackOrder;

// Add event listener for track order button when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const trackBtn = document.querySelector('.track-order-btn');
    if (trackBtn) {
        trackBtn.addEventListener('click', function() {
            trackOrder();
        });
    } else {
        // Track order button not found
    }
});