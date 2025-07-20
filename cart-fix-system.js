// CART FIX SYSTEM - PREVENT UNWANTED OPENING
console.log('🛒 Loading Cart Fix System...');

// Cart state tracking
let cartOpenState = false;
let lastCartAction = 0;
const CART_ACTION_COOLDOWN = 500; // 500ms cooldown

// Disable all automatic cart opening mechanisms
function disableAutoCartOpen() {
    console.log('🚫 Disabling automatic cart opening...');
    
    // Disable swipe gestures completely
    if (window.handleSwipe) {
        window.handleSwipe = function() {
            console.log('🚫 Swipe gesture blocked - cart opening disabled');
        };
    }
    
    // Remove touch event listeners that might trigger cart
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
    
    // Override any functions that might auto-open cart
    if (window.openCart) {
        const originalOpenCart = window.openCart;
        window.openCart = function(forceOpen = false) {
            // Only allow if explicitly forced or from click
            if (forceOpen || event && event.type === 'click') {
                return originalOpenCart();
            } else {
                console.log('🚫 Cart opening blocked - not from click');
            }
        };
    }
}

// Enhanced cart control with strict click-only policy
function strictCartControl() {
    console.log('🔒 Implementing strict cart control...');
    
    // Override cart button click handler
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        // Remove all existing event listeners
        cartBtn.replaceWith(cartBtn.cloneNode(true));
        const newCartBtn = document.getElementById('cart-btn');
        
        // Add single click handler with cooldown
        newCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const now = Date.now();
            if (now - lastCartAction < CART_ACTION_COOLDOWN) {
                console.log('🕐 Cart action on cooldown');
                return;
            }
            
            lastCartAction = now;
            
            if (!cartOpenState) {
                openCartSafely();
            } else {
                closeCartSafely();
            }
        });
        
        console.log('✅ Cart button click handler updated');
    }
}

// Safe cart opening function
function openCartSafely() {
    console.log('🛒 Opening cart safely via click...');
    
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay && !cartOpenState) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        cartOpenState = true;
        
        // Play sound if available
        if (typeof playSound === 'function') {
            playSound('themeChange');
        }
        
        console.log('✅ Cart opened successfully');
    }
}

// Safe cart closing function
function closeCartSafely() {
    console.log('🛒 Closing cart...');
    
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartSidebar && cartOverlay && cartOpenState) {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        cartOpenState = false;
        
        // Play sound if available
        if (typeof playSound === 'function') {
            playSound('themeChange');
        }
        
        console.log('✅ Cart closed successfully');
    }
}

// Block unwanted cart triggers
function blockUnwantedCartTriggers() {
    console.log('🛡️ Blocking unwanted cart triggers...');
    
    // Block hover events on cart
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('mouseenter', function(e) {
            e.stopPropagation();
        });
        
        cartBtn.addEventListener('mouseleave', function(e) {
            e.stopPropagation();
        });
    }
    
    // Block accidental touch events
    document.addEventListener('touchstart', function(e) {
        // Only allow touch on cart button itself
        if (e.target.id !== 'cart-btn' && !e.target.closest('#cart-btn')) {
            // Block any touch that might trigger cart
            const cartSidebar = document.getElementById('cart-sidebar');
            if (cartSidebar && !cartSidebar.contains(e.target)) {
                e.stopPropagation();
            }
        }
    }, true);
    
    // Override addToCart to NOT open cart
    if (window.addToCart) {
        const originalAddToCart = window.addToCart;
        window.addToCart = function(productId) {
            // Call original function but prevent cart opening
            const result = originalAddToCart.call(this, productId);
            
            // Ensure cart doesn't open after adding item
            const cartSidebar = document.getElementById('cart-sidebar');
            if (cartSidebar && cartSidebar.classList.contains('open') && !cartOpenState) {
                cartSidebar.classList.remove('open');
                const cartOverlay = document.getElementById('cart-overlay');
                if (cartOverlay) {
                    cartOverlay.classList.remove('active');
                }
                document.body.style.overflow = 'auto';
                console.log('🚫 Prevented cart auto-open after adding item');
            }
            
            return result;
        };
    }
}

// Monitor cart state and prevent unwanted changes
function monitorCartState() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.id === 'cart-sidebar') {
                const hasOpenClass = mutation.target.classList.contains('open');
                
                // If cart opened but we didn't track it, close it
                if (hasOpenClass && !cartOpenState) {
                    console.log('🚫 Detected unwanted cart opening - closing...');
                    mutation.target.classList.remove('open');
                    
                    const cartOverlay = document.getElementById('cart-overlay');
                    if (cartOverlay) {
                        cartOverlay.classList.remove('active');
                    }
                    document.body.style.overflow = 'auto';
                }
                
                // If cart closed but we thought it was open, update state
                if (!hasOpenClass && cartOpenState) {
                    cartOpenState = false;
                    console.log('📊 Cart state synchronized');
                }
            }
        });
    });
    
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        observer.observe(cartSidebar, {
            attributes: true,
            attributeFilter: ['class']
        });
        
        console.log('👀 Cart state monitor active');
    }
}

// Initialize cart fix system
function initializeCartFix() {
    console.log('🔧 Initializing cart fix system...');
    
    // Wait for DOM to be ready
    setTimeout(() => {
        disableAutoCartOpen();
        strictCartControl();
        blockUnwantedCartTriggers();
        monitorCartState();
        
        // Override close cart handlers
        const closeCartBtn = document.getElementById('close-cart');
        const cartOverlay = document.getElementById('cart-overlay');
        
        if (closeCartBtn) {
            closeCartBtn.replaceWith(closeCartBtn.cloneNode(true));
            document.getElementById('close-cart').addEventListener('click', closeCartSafely);
        }
        
        if (cartOverlay) {
            cartOverlay.replaceWith(cartOverlay.cloneNode(true));
            document.getElementById('cart-overlay').addEventListener('click', closeCartSafely);
        }
        
        console.log('✅ Cart fix system initialized');
        console.log('🛒 Cart will ONLY open on button click');
        
    }, 1000);
}

// Utility functions for testing
window.testCartFix = function() {
    console.log('🧪 Testing cart fix system...');
    console.log('Current cart state:', cartOpenState);
    
    // Test opening
    setTimeout(() => {
        console.log('Testing cart open...');
        openCartSafely();
    }, 1000);
    
    // Test closing
    setTimeout(() => {
        console.log('Testing cart close...');
        closeCartSafely();
    }, 3000);
};

window.forceCloseCart = function() {
    closeCartSafely();
    console.log('🔒 Cart force closed');
};

window.getCartState = function() {
    console.log('📊 Cart State:', {
        tracked: cartOpenState,
        actual: document.getElementById('cart-sidebar')?.classList.contains('open'),
        lastAction: lastCartAction
    });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCartFix);
} else {
    initializeCartFix();
}

console.log('✅ Cart Fix System Loaded!');
console.log('🛒 Features: Click-only opening, Auto-open prevention, State monitoring');
console.log('🧪 Test commands: testCartFix(), forceCloseCart(), getCartState()');