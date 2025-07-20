// MISBEHAVIOR DETECTION & WARNING SYSTEM
console.log('⚠️ Loading Misbehavior Detection System...');

// Violation tracking
let violationCount = parseInt(localStorage.getItem('chatViolationCount') || '0');
let chatSuspended = localStorage.getItem('chatSuspended') === 'true';
let suspensionEndTime = parseInt(localStorage.getItem('suspensionEndTime') || '0');

// Inappropriate/Violent Words Database
const INAPPROPRIATE_WORDS = [
    // English inappropriate words
    'stupid', 'idiot', 'fool', 'damn', 'hell', 'shit', 'fuck', 'bitch', 'bastard',
    'asshole', 'moron', 'loser', 'hate', 'kill', 'die', 'murder', 'violence',
    'fight', 'beat', 'punch', 'slap', 'kick', 'hurt', 'pain', 'blood',
    'ugly', 'fat', 'disgusting', 'pathetic', 'worthless', 'useless',
    
    // Urdu inappropriate words
    'pagal', 'bewakoof', 'gadha', 'ullu', 'kamina', 'badtameez', 'ghatiya',
    'kutta', 'saala', 'harami', 'randi', 'madarchod', 'bhenchod', 'chutiya',
    'gaandu', 'bhosdike', 'laude', 'teri maa', 'bhosdi', 'kutiya', 'kutti',
    'badmash', 'zaleel', 'neech', 'ganda', 'gandagi', 'napak', 'haram',
    
    // Violence related words
    'mar', 'maar', 'marna', 'marunga', 'qatal', 'jaan', 'maut', 'khoon',
    'ladai', 'jhagra', 'dhamki', 'threat', 'warning', 'revenge', 'badla'
];

// Check if chat is currently suspended
function isChatSuspended() {
    const currentTime = Date.now();
    if (chatSuspended && currentTime < suspensionEndTime) {
        return true;
    } else if (chatSuspended && currentTime >= suspensionEndTime) {
        // Suspension period ended
        chatSuspended = false;
        violationCount = 0;
        localStorage.removeItem('chatSuspended');
        localStorage.removeItem('suspensionEndTime');
        localStorage.setItem('chatViolationCount', '0');
        console.log('✅ Chat suspension lifted');
        return false;
    }
    return false;
}

// Check message for inappropriate content
function checkMessageContent(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check if message contains inappropriate content
    const containsInappropriate = INAPPROPRIATE_WORDS.some(word => 
        lowerMessage.includes(word.toLowerCase())
    );
    
    return containsInappropriate;
}

// Handle violation
function handleViolation(message) {
    violationCount++;
    localStorage.setItem('chatViolationCount', violationCount.toString());
    
    console.log(`⚠️ Violation #${violationCount} detected`);
    
    // Play warning sound if available
    if (typeof playSound === 'function') {
        playSound('wishlistRemove');
    }
    
    let warningMessage = '';
    
    if (violationCount === 1) {
        // First warning
        showViolationNotification('⚠️ First Warning - Please use respectful language', 'warning');
        warningMessage = "⚠️ **FIRST WARNING** ⚠️\n\nPlease maintain respectful language. I'm here to help you professionally. Let's keep our conversation positive and productive.\n\n*This is warning 1 of 3. After 3 warnings, chat will be suspended for 5 minutes.*";
        
    } else if (violationCount === 2) {
        // Second warning
        showViolationNotification('🚫 Second Warning - Be respectful!', 'warning');
        warningMessage = "🚫 **SECOND WARNING** 🚫\n\nThis is your second warning. I understand you might be frustrated, but please use appropriate language. I'm here to assist you with your shopping needs respectfully.\n\n*This is warning 2 of 3. One more violation will result in 5-minute chat suspension.*";
        
    } else if (violationCount >= 3) {
        // Third warning - Suspend chat for 5 minutes
        suspendChat();
        return "🛑 **CHAT SUSPENDED FOR 5 MINUTES** 🛑\n\nDue to repeated inappropriate language, this chat is suspended for 5 minutes. Please use respectful communication.\n\n⏰ **Suspension Time:** 5 minutes\n📞 **Alternative Contact:** WhatsApp +91 9103594759\n\n*Chat will automatically resume after 5 minutes.*";
    }
    
    return warningMessage;
}

// Suspend chat for 5 minutes
function suspendChat() {
    chatSuspended = true;
    const currentTime = Date.now();
    suspensionEndTime = currentTime + (5 * 60 * 1000); // 5 minutes in milliseconds
    
    localStorage.setItem('chatSuspended', 'true');
    localStorage.setItem('suspensionEndTime', suspensionEndTime.toString());
    
    // Disable chat input
    disableChatInput();
    
    // Show suspension notification
    showViolationNotification('🛑 Chat suspended for 5 minutes due to inappropriate language', 'error');
    
    // Set timer to re-enable chat
    const timeRemaining = suspensionEndTime - currentTime;
    setTimeout(() => {
        enableChatInput();
        showViolationNotification('✅ Chat suspension lifted. Please use respectful language.', 'success');
    }, timeRemaining);
    
    console.log('🛑 Chat suspended for 5 minutes');
}

// Disable chat input
function disableChatInput() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    
    if (chatInput) {
        chatInput.disabled = true;
        chatInput.placeholder = "Chat suspended for 5 minutes due to inappropriate language...";
        chatInput.style.background = '#ffebee';
        chatInput.style.color = '#c62828';
    }
    
    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.style.background = '#ccc';
        sendBtn.style.cursor = 'not-allowed';
    }
    
    // Show countdown timer
    showSuspensionCountdown();
}

// Enable chat input
function enableChatInput() {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    
    if (chatInput) {
        chatInput.disabled = false;
        chatInput.placeholder = "Type your message...";
        chatInput.style.background = '';
        chatInput.style.color = '';
    }
    
    if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.style.background = '';
        sendBtn.style.cursor = 'pointer';
    }
    
    // Remove countdown timer
    const countdown = document.getElementById('suspension-countdown');
    if (countdown) countdown.remove();
    
    // Reset violation count
    violationCount = 0;
    chatSuspended = false;
    localStorage.setItem('chatViolationCount', '0');
    localStorage.removeItem('chatSuspended');
    localStorage.removeItem('suspensionEndTime');
}

// Show suspension countdown
function showSuspensionCountdown() {
    // Remove existing countdown
    const existingCountdown = document.getElementById('suspension-countdown');
    if (existingCountdown) existingCountdown.remove();
    
    const countdown = document.createElement('div');
    countdown.id = 'suspension-countdown';
    countdown.style.cssText = `
        position: fixed;
        bottom: 200px;
        right: 20px;
        background: #c62828;
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        z-index: 10001;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 6px 25px rgba(198, 40, 40, 0.4);
        animation: suspensionPulse 2s infinite;
        min-width: 200px;
        text-align: center;
    `;
    
    // Add pulse animation
    if (!document.getElementById('suspension-pulse-style')) {
        const style = document.createElement('style');
        style.id = 'suspension-pulse-style';
        style.textContent = `
            @keyframes suspensionPulse {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(countdown);
    
    // Update countdown every second
    const updateCountdown = () => {
        const currentTime = Date.now();
        const timeRemaining = suspensionEndTime - currentTime;
        
        if (timeRemaining <= 0) {
            countdown.remove();
            return;
        }
        
        const minutes = Math.floor(timeRemaining / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        countdown.innerHTML = `
            🛑 Chat Suspended<br>
            <div style="font-size: 18px; margin: 10px 0;">
                ${minutes}:${seconds.toString().padStart(2, '0')}
            </div>
            <div style="font-size: 12px; opacity: 0.9;">
                Use respectful language
            </div>
        `;
        
        setTimeout(updateCountdown, 1000);
    };
    
    updateCountdown();
}

// Show violation notification
function showViolationNotification(message, type = 'warning') {
    const notification = document.createElement('div');
    let bgColor = '#ff9800'; // warning
    
    if (type === 'error') bgColor = '#c62828';
    if (type === 'success') bgColor = '#4CAF50';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        z-index: 10001;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 6px 25px rgba(0,0,0,0.3);
        animation: violationShake 0.5s ease;
        max-width: 350px;
        line-height: 1.4;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 16px; margin-top: 2px;"></i>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add shake animation
    if (!document.getElementById('violation-shake-style')) {
        const style = document.createElement('style');
        style.id = 'violation-shake-style';
        style.textContent = `
            @keyframes violationShake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 6000);
}

// Override the sendMessage function to check for violations
const originalChatSendMessage = window.sendMessage;
window.sendMessage = function() {
    console.log('🔍 Checking message for violations...');
    
    // Check if chat is suspended
    if (isChatSuspended()) {
        const timeRemaining = Math.ceil((suspensionEndTime - Date.now()) / 1000 / 60);
        showViolationNotification(`🛑 Chat is suspended for ${timeRemaining} more minutes`, 'error');
        return;
    }
    
    // Get the message
    const chatInput = document.getElementById('chat-input');
    if (!chatInput || !chatInput.value.trim()) return;
    
    const message = chatInput.value.trim();
    
    // Check for inappropriate content
    if (checkMessageContent(message)) {
        console.log('⚠️ Inappropriate content detected');
        
        // Add violation message to chat
        const violationResponse = handleViolation(message);
        
        // Clear input
        chatInput.value = '';
        
        // Add violation message to chat
        if (typeof addMessageToChat === 'function') {
            addMessageToChat(violationResponse, 'bot');
        }
        
        return; // Don't process the message further
    }
    
    // If no violation, proceed with normal message handling
    if (originalChatSendMessage) {
        originalChatSendMessage();
    }
};

// Initialize suspension check on page load
function initializeMisbehaviorSystem() {
    if (isChatSuspended()) {
        disableChatInput();
        console.log('🛑 Chat is currently suspended');
    }
    
    console.log(`📊 Current violations: ${violationCount}/3`);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeMisbehaviorSystem, 2000);
    });
} else {
    setTimeout(initializeMisbehaviorSystem, 2000);
}

console.log('✅ Misbehavior Detection System Loaded');
console.log('⚠️ 3 warnings → 5 minute suspension');
console.log('🛑 Inappropriate language will be detected and warned');