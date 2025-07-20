// Instant WhatsApp Integration - NO API KEY NEEDED!
console.log('🚀 Loading Instant WhatsApp Integration...');

// Configuration
const INSTANT_WHATSAPP = {
    enabled: localStorage.getItem('instantWhatsAppEnabled') === 'true',
    adminNumber: '+919103594759', // Your WhatsApp number
    businessName: 'ShopEasy',
    websiteUrl: 'https://ctrlxmir.github.io/reactify-mir/'
};

// Create WhatsApp button
function createInstantWhatsAppButton() {
    // Remove any existing button
    const existingBtn = document.getElementById('instant-whatsapp-btn');
    if (existingBtn) existingBtn.remove();
    
    const whatsappBtn = document.createElement('div');
    whatsappBtn.id = 'instant-whatsapp-btn';
    whatsappBtn.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span style="position: absolute; top: -8px; right: -8px; background: #ff4444; color: white; border-radius: 50%; width: 24px; height: 24px; font-size: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold;">NEW</span>
    `;
    
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 120px;
        right: 20px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
        z-index: 1001;
        transition: all 0.3s ease;
        animation: whatsappPulse 2s infinite;
    `;
    
    whatsappBtn.title = 'Instant WhatsApp - No Setup Required!';
    whatsappBtn.onclick = showInstantWhatsAppOptions;
    
    // Add pulse animation
    if (!document.getElementById('whatsapp-pulse-style')) {
        const style = document.createElement('style');
        style.id = 'whatsapp-pulse-style';
        style.textContent = `
            @keyframes whatsappPulse {
                0% { box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6); transform: scale(1); }
                50% { box-shadow: 0 8px 35px rgba(37, 211, 102, 0.8); transform: scale(1.05); }
                100% { box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6); transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(whatsappBtn);
    console.log('✅ Instant WhatsApp button created');
}

// Show WhatsApp options
function showInstantWhatsAppOptions() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: Arial, sans-serif;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 20px; padding: 30px; max-width: 500px; width: 90%; text-align: center; animation: modalPop 0.3s ease;">
            <div style="margin-bottom: 25px;">
                <i class="fab fa-whatsapp" style="font-size: 64px; color: #25D366; margin-bottom: 15px; animation: bounce 1s infinite;"></i>
                <h2 style="color: #333; margin: 0; font-size: 24px;">🚀 Instant WhatsApp Integration</h2>
                <p style="color: #666; margin: 10px 0; font-size: 16px;">Direct to your WhatsApp: <strong>+91 9103594759</strong></p>
            </div>
            
            <div style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 20px; border-radius: 15px; margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0;">✨ NO API KEY NEEDED!</h3>
                <ul style="text-align: left; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li><strong>Instant Setup</strong> - Works immediately</li>
                    <li><strong>Direct WhatsApp</strong> - Opens your WhatsApp</li>
                    <li><strong>Professional Messages</strong> - Formatted perfectly</li>
                    <li><strong>Customer Details</strong> - Name, time, message</li>
                    <li><strong>Mobile Friendly</strong> - Works on all devices</li>
                </ul>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button onclick="enableInstantWhatsApp(this)" style="background: #25D366; color: white; border: none; padding: 15px 25px; border-radius: 10px; cursor: pointer; font-size: 16px; font-weight: bold; flex: 1; min-width: 120px;">
                    🚀 Enable Now
                </button>
                <button onclick="testInstantWhatsApp()" style="background: #128C7E; color: white; border: none; padding: 15px 25px; border-radius: 10px; cursor: pointer; font-size: 16px; flex: 1; min-width: 120px;">
                    📱 Test Message
                </button>
                <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="background: #666; color: white; border: none; padding: 15px 25px; border-radius: 10px; cursor: pointer; font-size: 16px;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animations
    if (!document.getElementById('modal-animations')) {
        const style = document.createElement('style');
        style.id = 'modal-animations';
        style.textContent = `
            @keyframes modalPop {
                0% { transform: scale(0.5); opacity: 0; }
                50% { transform: scale(1.05); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
            }
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Enable instant WhatsApp
function enableInstantWhatsApp(button) {
    localStorage.setItem('instantWhatsAppEnabled', 'true');
    INSTANT_WHATSAPP.enabled = true;
    
    button.innerHTML = '✅ Enabled!';
    button.disabled = true;
    
    setTimeout(() => {
        button.closest('[style*="position: fixed"]').remove();
        showSuccessMessage();
        updateWhatsAppButton();
    }, 1000);
}

// Test instant WhatsApp
function testInstantWhatsApp() {
    const testMessage = `🎉 *WhatsApp Integration Test*

✅ Your ShopEasy live chat is ready!

📱 Phone: +91 9103594759
🕒 Time: ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}
🌐 Website: ${INSTANT_WHATSAPP.websiteUrl}

This is a test message to confirm everything is working perfectly.

_Future customer messages will be formatted like this!_
_Reply from WhatsApp anytime!_ 💬`;

    const whatsappUrl = `https://wa.me/${INSTANT_WHATSAPP.adminNumber.replace('+', '')}?text=${encodeURIComponent(testMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show confirmation
    showNotification('📱 Test message sent to WhatsApp!', 'success');
}

// Show success message
function showSuccessMessage() {
    const success = document.createElement('div');
    success.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #25D366;
        color: white;
        padding: 30px 40px;
        border-radius: 20px;
        text-align: center;
        z-index: 10001;
        font-size: 18px;
        font-weight: bold;
        box-shadow: 0 10px 40px rgba(37, 211, 102, 0.5);
        animation: successPop 0.5s ease;
    `;
    
    success.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>
        🎉 WhatsApp Integration Active!
        <br><br>
        Customer messages will now open WhatsApp automatically
        <br><br>
        <button onclick="this.parentElement.remove()" style="background: white; color: #25D366; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-weight: bold; margin-top: 10px;">
            Awesome! 🚀
        </button>
    `;
    
    document.body.appendChild(success);
    
    if (!document.getElementById('success-animation')) {
        const style = document.createElement('style');
        style.id = 'success-animation';
        style.textContent = `
            @keyframes successPop {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (success.parentElement) success.remove();
    }, 5000);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#25D366' : '#667eea';
    
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
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        ${message}
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; float: right; margin-left: 10px;">×</button>
    `;
    
    document.body.appendChild(notification);
    
    if (!document.getElementById('slide-animation')) {
        const style = document.createElement('style');
        style.id = 'slide-animation';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 4000);
}

// Update button appearance
function updateWhatsAppButton() {
    const btn = document.getElementById('instant-whatsapp-btn');
    if (!btn) return;
    
    if (INSTANT_WHATSAPP.enabled) {
        btn.style.animation = 'none';
        btn.title = 'WhatsApp Integration: ACTIVE ✅';
        const newLabel = btn.querySelector('span');
        if (newLabel) newLabel.textContent = 'ON';
        if (newLabel) newLabel.style.background = '#4CAF50';
    }
}

// Hook into existing sendMessage function
const originalSendMessage = window.sendMessage;
if (originalSendMessage) {
    window.sendMessage = function() {
        // Call original function
        originalSendMessage();
        
        // If WhatsApp enabled, format and send
        if (INSTANT_WHATSAPP.enabled) {
            setTimeout(() => {
                const lastUserMessage = document.querySelector('.user-message:last-child');
                if (lastUserMessage) {
                    const messageText = lastUserMessage.textContent.trim();
                    sendToInstantWhatsApp(messageText);
                }
            }, 1000);
        }
    };
}

// Send to WhatsApp instantly
function sendToInstantWhatsApp(messageText) {
    const userName = localStorage.getItem('chatUserName') || 'Website Visitor';
    const userEmail = localStorage.getItem('chatUserEmail') || 'Not provided';
    const sessionId = 'chat_' + Date.now();
    
    const whatsappMessage = `🛍️ *${INSTANT_WHATSAPP.businessName} Customer Message*

👤 *Customer:* ${userName}
📧 *Email:* ${userEmail}
🆔 *Session:* ${sessionId}
🕒 *Time:* ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}
🌐 *Website:* ${INSTANT_WHATSAPP.websiteUrl}

💬 *Message:*
${messageText}

_Reply from WhatsApp to respond to customer_
_Instant WhatsApp Integration - No API needed!_ 🚀`;

    const whatsappUrl = `https://wa.me/${INSTANT_WHATSAPP.adminNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show notification with WhatsApp link
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 200px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 20px;
        border-radius: 15px;
        z-index: 10001;
        font-size: 14px;
        max-width: 300px;
        box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
        animation: bounceIn 0.5s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
            <i class="fab fa-whatsapp" style="font-size: 24px;"></i>
            <strong>Message Ready for WhatsApp!</strong>
        </div>
        <p style="margin: 0 0 15px 0; font-size: 12px; opacity: 0.9;">Click below to send to +91 9103594759</p>
        <div style="display: flex; gap: 10px;">
            <button onclick="window.open('${whatsappUrl}', '_blank')" style="background: white; color: #25D366; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; flex: 1;">
                📱 Send WhatsApp
            </button>
            <button onclick="this.parentElement.parentElement.remove()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer;">
                ✕
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    if (!document.getElementById('bounce-animation')) {
        const style = document.createElement('style');
        style.id = 'bounce-animation';
        style.textContent = `
            @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.05); opacity: 1; }
                70% { transform: scale(0.9); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Auto-remove after 15 seconds
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 15000);
    
    console.log('📱 WhatsApp message prepared for:', INSTANT_WHATSAPP.adminNumber);
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createInstantWhatsAppButton);
} else {
    createInstantWhatsAppButton();
}

console.log('✅ Instant WhatsApp Integration Loaded - NO API KEY NEEDED!');
console.log('📱 Target WhatsApp: +91 9103594759');
console.log('🚀 Ready for instant messaging!');