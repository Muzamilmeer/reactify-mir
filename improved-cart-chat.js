// IMPROVED CART AND CHAT FUNCTIONALITY
console.log('🛒💬 Loading Improved Cart & Chat...');

// Cart State Management
let isCartOpen = false;
let isChatMinimized = false;

// Override Cart Functions for Click-Only Opening
function improvedOpenCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (!isCartOpen) {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        isCartOpen = true;
        
        console.log('🛒 Cart opened via click');
        
        // Play sound if available
        if (typeof playSound === 'function') {
            playSound('themeChange');
        }
    }
}

function improvedCloseCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (isCartOpen) {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        isCartOpen = false;
        
        console.log('🛒 Cart closed');
        
        // Play sound if available
        if (typeof playSound === 'function') {
            playSound('themeChange');
        }
    }
}

// Enhanced Chat Functions with Minimize/Maximize
function improvedOpenChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatFloatBtn = document.getElementById('chat-float-btn');
    const chatBody = document.getElementById('chat-body');
    const chatToggleIcon = document.getElementById('chat-toggle-icon');
    
    // Show chat widget
    if (chatWidget) {
        chatWidget.style.display = 'block';
        chatWidget.classList.add('open');
        chatWidget.classList.remove('minimized');
    }
    
    // Hide floating button
    if (chatFloatBtn) {
        chatFloatBtn.style.display = 'none';
    }
    
    // Show chat body
    if (chatBody) {
        chatBody.style.display = 'flex';
    }
    
    // Update toggle icon
    if (chatToggleIcon) {
        chatToggleIcon.className = 'fas fa-chevron-down';
    }
    
    isChatMinimized = false;
    
    // Clear notifications
    clearChatNotifications();
    
    console.log('💬 Chat opened');
    
    // Play sound if available
    if (typeof playSound === 'function') {
        playSound('themeChange');
    }
}

function improvedToggleChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatBody = document.getElementById('chat-body');
    const chatToggleIcon = document.getElementById('chat-toggle-icon');
    const chatFloatBtn = document.getElementById('chat-float-btn');
    
    if (!chatWidget) return;
    
    if (isChatMinimized) {
        // MAXIMIZE: Show chat body
        chatWidget.classList.remove('minimized');
        if (chatBody) {
            chatBody.style.display = 'flex';
        }
        if (chatToggleIcon) {
            chatToggleIcon.className = 'fas fa-chevron-down';
        }
        isChatMinimized = false;
        
        console.log('💬 Chat maximized');
    } else {
        // MINIMIZE: Hide chat body, show only header
        chatWidget.classList.add('minimized');
        if (chatBody) {
            chatBody.style.display = 'none';
        }
        if (chatToggleIcon) {
            chatToggleIcon.className = 'fas fa-chevron-up';
        }
        isChatMinimized = true;
        
        console.log('💬 Chat minimized');
    }
    
    // Play sound if available
    if (typeof playSound === 'function') {
        playSound('themeChange');
    }
}

function improvedCloseChat() {
    const chatWidget = document.getElementById('chat-widget');
    const chatFloatBtn = document.getElementById('chat-float-btn');
    
    // Hide chat widget completely
    if (chatWidget) {
        chatWidget.style.display = 'none';
        chatWidget.classList.remove('open', 'minimized');
    }
    
    // Show floating button
    if (chatFloatBtn) {
        chatFloatBtn.style.display = 'flex';
    }
    
    isChatMinimized = false;
    
    console.log('💬 Chat closed completely');
    
    // Play sound if available
    if (typeof playSound === 'function') {
        playSound('themeChange');
    }
}

// Clear chat notifications
function clearChatNotifications() {
    const notification = document.getElementById('chat-notification');
    const heroNotification = document.getElementById('chat-notification-hero');
    
    if (notification) {
        notification.style.display = 'none';
    }
    if (heroNotification) {
        heroNotification.style.display = 'none';
    }
}

// Add close button to chat header
function addChatCloseButton() {
    const chatHeader = document.querySelector('.chat-header');
    if (!chatHeader || document.getElementById('chat-close-btn')) return;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.id = 'chat-close-btn';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 50px;
        background: rgba(255,255,255,0.1);
        border: none;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    closeBtn.onmouseover = function() {
        this.style.background = 'rgba(255,255,255,0.2)';
        this.style.transform = 'scale(1.1)';
    };
    
    closeBtn.onmouseout = function() {
        this.style.background = 'rgba(255,255,255,0.1)';
        this.style.transform = 'scale(1)';
    };
    
    closeBtn.onclick = function(e) {
        e.stopPropagation(); // Prevent triggering toggle
        improvedCloseChat();
    };
    
    chatHeader.appendChild(closeBtn);
    console.log('❌ Chat close button added');
}

// Prevent cart from opening on hover or accidental events
function preventUnwantedCartOpen() {
    const cartBtn = document.getElementById('cart-btn');
    if (!cartBtn) return;
    
    // Remove any existing event listeners
    cartBtn.replaceWith(cartBtn.cloneNode(true));
    
    // Add only click event listener
    const newCartBtn = document.getElementById('cart-btn');
    if (newCartBtn) {
        newCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            improvedOpenCart();
        });
        
        // Prevent other events
        newCartBtn.addEventListener('mouseenter', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        
        newCartBtn.addEventListener('mouseover', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
        
        console.log('🛒 Cart button secured - click only');
    }
}

// Update cart close events
function updateCartCloseEvents() {
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (closeCartBtn) {
        closeCartBtn.replaceWith(closeCartBtn.cloneNode(true));
        document.getElementById('close-cart').addEventListener('click', improvedCloseCart);
    }
    
    if (cartOverlay) {
        cartOverlay.replaceWith(cartOverlay.cloneNode(true));
        document.getElementById('cart-overlay').addEventListener('click', improvedCloseCart);
    }
    
    console.log('🛒 Cart close events updated');
}

// Update chat events
function updateChatEvents() {
    const chatHeader = document.querySelector('.chat-header');
    const chatFloatBtn = document.getElementById('chat-float-btn');
    
    if (chatHeader) {
        // Remove existing onclick
        chatHeader.removeAttribute('onclick');
        
        // Add new click event
        chatHeader.addEventListener('click', function(e) {
            // Don't toggle if clicking close button
            if (e.target.closest('#chat-close-btn')) return;
            improvedToggleChat();
        });
    }
    
    if (chatFloatBtn) {
        chatFloatBtn.removeAttribute('onclick');
        chatFloatBtn.addEventListener('click', improvedOpenChat);
    }
    
    console.log('💬 Chat events updated');
}

// Add visual indicators
function addVisualIndicators() {
    // Add cart click indicator
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.title = 'Click to open cart';
        
        // Add subtle animation on hover
        cartBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        cartBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add chat indicators
    const chatWidget = document.querySelector('.chat-widget');
    if (chatWidget) {
        chatWidget.title = 'Click header to minimize/maximize, X to close';
    }
    
    const chatFloatBtn = document.getElementById('chat-float-btn');
    if (chatFloatBtn) {
        chatFloatBtn.title = 'Click to open live chat';
    }
    
    console.log('👁️ Visual indicators added');
}

// Override global functions
function overrideGlobalFunctions() {
    // Override cart functions
    if (window.openCart) {
        window.openCart = improvedOpenCart;
    }
    if (window.closeCart) {
        window.closeCart = improvedCloseCart;
    }
    
    // Override chat functions  
    if (window.openChat) {
        window.openChat = improvedOpenChat;
    }
    if (window.toggleChat) {
        window.toggleChat = improvedToggleChat;
    }
    
    console.log('🔄 Global functions overridden');
}

// Add keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Escape to close cart or minimize chat
        if (e.key === 'Escape') {
            if (isCartOpen) {
                improvedCloseCart();
            } else if (!isChatMinimized && document.getElementById('chat-widget').style.display !== 'none') {
                improvedToggleChat();
            }
        }
        
        // Ctrl+Shift+C to toggle chat
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            const chatWidget = document.getElementById('chat-widget');
            if (chatWidget.style.display === 'none') {
                improvedOpenChat();
            } else {
                improvedToggleChat();
            }
        }
        
        // Ctrl+Shift+B to toggle cart
        if (e.ctrlKey && e.shiftKey && e.key === 'B') {
            e.preventDefault();
            if (isCartOpen) {
                improvedCloseCart();
            } else {
                improvedOpenCart();
            }
        }
    });
    
    console.log('⌨️ Keyboard shortcuts added');
}

// Initialize improved functionality
function initializeImprovedCartChat() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(setupImprovedCartChat, 1000);
        });
    } else {
        setTimeout(setupImprovedCartChat, 1000);
    }
}

function setupImprovedCartChat() {
    console.log('🚀 Setting up improved cart & chat...');
    
    // Setup cart
    preventUnwantedCartOpen();
    updateCartCloseEvents();
    
    // Setup chat
    addChatCloseButton();
    updateChatEvents();
    
    // Add enhancements
    addVisualIndicators();
    overrideGlobalFunctions();
    addKeyboardShortcuts();
    
    // Show success notification
    setTimeout(() => {
        showImprovedNotification('✅ Cart & Chat improved! Cart: Click-only | Chat: Minimize/Maximize/Close', 'success');
    }, 2000);
    
    console.log('✅ Improved Cart & Chat setup complete!');
}

// Show notification
function showImprovedNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#4CAF50' : '#2196F3';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10001;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        animation: slideInFromRight 0.4s ease;
        max-width: 350px;
        line-height: 1.4;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px;">
            <i class="fas fa-check-circle" style="font-size: 16px; margin-top: 2px;"></i>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add animation style if not exists
    if (!document.getElementById('improved-notification-style')) {
        const style = document.createElement('style');
        style.id = 'improved-notification-style';
        style.textContent = `
            @keyframes slideInFromRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 5000);
}

// Initialize
initializeImprovedCartChat();

console.log('✅ Improved Cart & Chat System Loaded!');
console.log('🛒 Cart: Click-only opening');
console.log('💬 Chat: Minimize/Maximize/Close functionality');
console.log('⌨️ Shortcuts: Esc, Ctrl+Shift+C (chat), Ctrl+Shift+B (cart)');