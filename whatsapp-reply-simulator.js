// WHATSAPP REPLY SIMULATOR FOR TESTING
console.log('🧪 Loading WhatsApp Reply Simulator...');

// Simulate WhatsApp Reply Function (for testing)
function simulateWhatsAppReply(replyMessage, delaySeconds = 5) {
    setTimeout(() => {
        const replies = JSON.parse(localStorage.getItem('simulatedWhatsAppReplies') || '[]');
        const newReply = {
            id: String(Date.now()),
            message: replyMessage,
            timestamp: new Date().toISOString(),
            from: '+919103594759'
        };
        
        replies.push(newReply);
        localStorage.setItem('simulatedWhatsAppReplies', JSON.stringify(replies));
        
        console.log('🤖 Simulated WhatsApp reply:', replyMessage);
        
        // Show notification that reply was simulated
        showSimulationNotification(`Simulated WhatsApp reply: "${replyMessage}"`);
        
    }, delaySeconds * 1000);
}

// Show simulation notification
function showSimulationNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        z-index: 10001;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 6px 25px rgba(255, 107, 107, 0.4);
        animation: slideInFromRight 0.4s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-robot" style="font-size: 16px;"></i>
            <span style="font-size: 12px;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: auto;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 4000);
}

// Create Test Panel (for admin testing)
function createTestPanel() {
    // Only show for admin (you can remove this in production)
    if (window.location.search.includes('admin=true') || localStorage.getItem('showTestPanel') === 'true') {
        
        const testPanel = document.createElement('div');
        testPanel.id = 'whatsapp-test-panel';
        testPanel.style.cssText = `
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 15px;
            border-radius: 10px;
            z-index: 10002;
            font-size: 12px;
            max-width: 300px;
            font-family: monospace;
        `;
        
        testPanel.innerHTML = `
            <div style="margin-bottom: 10px; font-weight: bold; color: #ff6b6b;">🧪 WhatsApp Test Panel</div>
            <div style="margin-bottom: 10px;">
                <input type="text" id="test-reply-input" placeholder="Enter WhatsApp reply..." style="width: 100%; padding: 5px; border: none; border-radius: 5px; margin-bottom: 5px;">
                <div style="display: flex; gap: 5px;">
                    <button onclick="simulateQuickReply()" style="background: #25D366; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 11px; flex: 1;">Send Reply</button>
                    <button onclick="clearReplies()" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 11px;">Clear</button>
                </div>
            </div>
            <div style="margin-bottom: 10px;">
                <button onclick="simulateWhatsAppReply('Hello! How can I help you?', 2)" style="background: #667eea; color: white; border: none; padding: 5px 8px; border-radius: 3px; cursor: pointer; font-size: 10px; margin: 2px;">Quick: Hello</button>
                <button onclick="simulateWhatsAppReply('Thanks for your message! I will get back to you soon.', 3)" style="background: #667eea; color: white; border: none; padding: 5px 8px; border-radius: 3px; cursor: pointer; font-size: 10px; margin: 2px;">Quick: Thanks</button>
                <button onclick="simulateWhatsAppReply('What is your order number?', 2)" style="background: #667eea; color: white; border: none; padding: 5px 8px; border-radius: 3px; cursor: pointer; font-size: 10px; margin: 2px;">Quick: Order</button>
            </div>
            <div style="font-size: 10px; opacity: 0.7;">
                Replies appear after 2-5 seconds delay<br>
                <span onclick="toggleTestPanel()" style="cursor: pointer; color: #ff6b6b;">❌ Close Panel</span>
            </div>
        `;
        
        document.body.appendChild(testPanel);
    }
}

// Simulate quick reply from input
function simulateQuickReply() {
    const input = document.getElementById('test-reply-input');
    if (input && input.value.trim()) {
        simulateWhatsAppReply(input.value.trim(), 1);
        input.value = '';
    }
}

// Clear all simulated replies
function clearReplies() {
    localStorage.removeItem('simulatedWhatsAppReplies');
    localStorage.removeItem('lastWhatsAppMessageId');
    console.log('🗑️ Cleared all simulated replies');
    showSimulationNotification('All simulated replies cleared!');
}

// Toggle test panel
function toggleTestPanel() {
    const panel = document.getElementById('whatsapp-test-panel');
    if (panel) {
        panel.remove();
        localStorage.removeItem('showTestPanel');
    } else {
        localStorage.setItem('showTestPanel', 'true');
        createTestPanel();
    }
}

// Auto-create test panel if admin
setTimeout(() => {
    createTestPanel();
}, 3000);

// Add keyboard shortcut for test panel (Ctrl+Shift+T)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTestPanel();
    }
});

console.log('✅ WhatsApp Reply Simulator Loaded');
console.log('🔑 Press Ctrl+Shift+T to toggle test panel');
console.log('🌐 Or add ?admin=true to URL for permanent test panel');