// CHAT MESSAGE FIX - ENSURE MESSAGES WORK
console.log('💬🔧 Loading Chat Message Fix...');

// Fix sendMessage function to work with correct IDs
function fixChatMessaging() {
    // Override the sendMessage function completely
    window.sendMessage = function() {
        console.log('📤 SendMessage called');
        
        // Get the correct input element
        const chatInput = document.getElementById('chat-input');
        if (!chatInput) {
            console.log('❌ Chat input not found');
            return;
        }
        
        const message = chatInput.value.trim();
        if (message === '') {
            console.log('❌ Empty message');
            return;
        }
        
        console.log('📝 User message:', message);
        
        // Add user message to chat
        addMessageToChat(message, 'user');
        
        // Clear input
        chatInput.value = '';
        
        // Play send sound if available
        if (typeof playSound === 'function') {
            playSound('themeChange');
        }
        
        // Generate smart response
        setTimeout(() => {
            const smartResponse = generateSmartResponse(message);
            addMessageToChat(smartResponse, 'bot');
            
            // Play receive sound
            if (typeof playSound === 'function') {
                playSound('addToCart');
            }
        }, 1500 + Math.random() * 1000);
    };
    
    console.log('✅ SendMessage function fixed');
}

// Add message to chat function
function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) {
        console.log('❌ Chat messages container not found');
        return;
    }
    
    const messageDiv = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    if (sender === 'user') {
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
        messageDiv.style.cssText = `
            display: flex;
            justify-content: flex-end;
            margin: 10px 0;
            animation: slideInRight 0.3s ease;
        `;
    } else {
        messageDiv.className = 'message support-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <img src="https://res.cloudinary.com/dxjkbpmgm/image/upload/v1744384921/IMG_20250411_202120_wx6x6n.png" alt="Support">
            </div>
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
        messageDiv.style.cssText = `
            display: flex;
            align-items: flex-start;
            margin: 10px 0;
            animation: slideInLeft 0.3s ease;
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    console.log(`✅ ${sender} message added:`, message);
}

// Fix Enter key functionality
function fixEnterKey() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
        console.log('✅ Enter key functionality fixed');
    }
}

// Fix send button functionality
function fixSendButton() {
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
        // Remove existing onclick
        sendBtn.removeAttribute('onclick');
        
        // Add new click event
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
        
        console.log('✅ Send button functionality fixed');
    }
}

// Add welcome message if chat is empty
function addWelcomeMessage() {
    setTimeout(() => {
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages && chatMessages.children.length <= 1) {
            const welcomeMessages = [
                "Hello! Welcome to ShopEasy! 🛍️ How can I help you today?",
                "Assalam o Alaikum! ShopEasy mein aapka swagat hai! 🛍️ Kya madad kar sakta hun?"
            ];
            const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
            addMessageToChat(randomWelcome, 'bot');
        }
    }, 2000);
}

// Initialize chat message fix
function initializeChatMessageFix() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(setupChatMessageFix, 1500);
        });
    } else {
        setTimeout(setupChatMessageFix, 1500);
    }
}

function setupChatMessageFix() {
    console.log('🔧 Setting up chat message fix...');
    
    // Fix messaging functions
    fixChatMessaging();
    fixEnterKey();
    fixSendButton();
    
    // Add welcome message
    addWelcomeMessage();
    
    // Show success notification
    setTimeout(() => {
        showChatFixNotification('✅ Live Chat Messages Fixed! Type and press Enter or click Send.', 'success');
    }, 3000);
    
    console.log('✅ Chat message fix setup complete!');
}

// Show notification
function showChatFixNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#25D366' : '#2196F3';
    
    notification.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        z-index: 10001;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
        animation: bounceInUp 0.5s ease;
        max-width: 300px;
        line-height: 1.4;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px;">
            <i class="fas fa-comments" style="font-size: 16px; margin-top: 2px;"></i>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add animation style if not exists
    if (!document.getElementById('chat-fix-notification-style')) {
        const style = document.createElement('style');
        style.id = 'chat-fix-notification-style';
        style.textContent = `
            @keyframes bounceInUp {
                0% { transform: translateY(100px); opacity: 0; }
                60% { transform: translateY(-10px); opacity: 1; }
                100% { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 5000);
}

// Initialize
initializeChatMessageFix();

console.log('✅ Chat Message Fix Loaded!');
console.log('💬 Messages will now work properly');
console.log('⌨️ Enter key and Send button fixed');