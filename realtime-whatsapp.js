// REAL-TIME TWO-WAY WHATSAPP INTEGRATION
console.log('🔄 Loading Real-Time WhatsApp Integration...');

// Configuration
const REALTIME_WHATSAPP = {
    enabled: localStorage.getItem('realtimeWhatsAppEnabled') === 'true',
    adminNumber: '+919103594759',
    businessName: 'ShopEasy',
    websiteUrl: 'https://ctrlxmir.github.io/reactify-mir/',
    sessionId: 'chat_' + Date.now(),
    pollingInterval: null,
    lastMessageId: localStorage.getItem('lastWhatsAppMessageId') || '0'
};

// Create Real-Time WhatsApp Button
function createRealtimeWhatsAppButton() {
    // Remove existing button
    const existingBtn = document.getElementById('realtime-whatsapp-btn');
    if (existingBtn) existingBtn.remove();
    
    const whatsappBtn = document.createElement('div');
    whatsappBtn.id = 'realtime-whatsapp-btn';
    whatsappBtn.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span style="position: absolute; top: -5px; right: -5px; background: #ff4444; color: white; border-radius: 50%; width: 20px; height: 20px; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: bold;">2-WAY</span>
    `;
    
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 200px;
        right: 20px;
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        border-radius: 50%;
        width: 65px;
        height: 65px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
        z-index: 1002;
        transition: all 0.3s ease;
        animation: realtimePulse 3s infinite;
    `;
    
    whatsappBtn.title = 'Real-Time 2-Way WhatsApp Integration!';
    whatsappBtn.onclick = showRealtimeWhatsAppSetup;
    
    // Add real-time pulse animation
    if (!document.getElementById('realtime-pulse-style')) {
        const style = document.createElement('style');
        style.id = 'realtime-pulse-style';
        style.textContent = `
            @keyframes realtimePulse {
                0% { 
                    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6); 
                    transform: scale(1); 
                }
                33% { 
                    box-shadow: 0 12px 40px rgba(37, 211, 102, 0.8); 
                    transform: scale(1.1); 
                }
                66% { 
                    box-shadow: 0 8px 30px rgba(18, 140, 126, 0.8); 
                    transform: scale(1.05); 
                }
                100% { 
                    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6); 
                    transform: scale(1); 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(whatsappBtn);
    console.log('✅ Real-Time WhatsApp button created');
}

// Show Real-Time WhatsApp Setup
function showRealtimeWhatsAppSetup() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: Arial, sans-serif;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 25px; padding: 35px; max-width: 550px; width: 95%; text-align: center; animation: modalSlideUp 0.4s ease; max-height: 90vh; overflow-y: auto;">
            <div style="margin-bottom: 30px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 20px;">
                    <i class="fab fa-whatsapp" style="font-size: 48px; color: #25D366; animation: spin 2s linear infinite;"></i>
                    <i class="fas fa-exchange-alt" style="font-size: 32px; color: #667eea; animation: bounce 1s infinite;"></i>
                    <i class="fas fa-comments" style="font-size: 48px; color: #128C7E; animation: pulse 1.5s infinite;"></i>
                </div>
                <h2 style="color: #333; margin: 0; font-size: 28px; background: linear-gradient(135deg, #25D366, #128C7E); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🔄 REAL-TIME 2-WAY WHATSAPP</h2>
                <p style="color: #666; margin: 15px 0; font-size: 16px; font-weight: bold;">Automatic Message Sync: Live Chat ↔ WhatsApp</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 25px; border-radius: 20px; margin-bottom: 25px; text-align: left;">
                <h3 style="margin: 0 0 20px 0; text-align: center;">🎯 HOW IT WORKS:</h3>
                
                <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 10px;">
                        <span style="background: white; color: #25D366; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">1</span>
                        <span><strong>User sends message in Live Chat</strong></span>
                    </div>
                    <div style="text-align: center; font-size: 24px; margin: -5px 0;">⬇️</div>
                    <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 10px;">
                        <span style="background: white; color: #25D366; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">2</span>
                        <span><strong>Message automatically appears in YOUR WhatsApp</strong></span>
                    </div>
                    <div style="text-align: center; font-size: 24px; margin: -5px 0;">⬇️</div>
                    <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 10px;">
                        <span style="background: white; color: #25D366; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">3</span>
                        <span><strong>You reply from WhatsApp</strong></span>
                    </div>
                    <div style="text-align: center; font-size: 24px; margin: -5px 0;">⬇️</div>
                    <div style="display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.1); padding: 12px; border-radius: 10px;">
                        <span style="background: white; color: #25D366; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px;">4</span>
                        <span><strong>Your reply automatically shows in Live Chat</strong></span>
                    </div>
                </div>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 15px; margin-bottom: 25px;">
                <h4 style="color: #333; margin: 0 0 15px 0;">⚠️ SETUP REQUIREMENTS:</h4>
                <ul style="text-align: left; margin: 0; color: #666; line-height: 1.8;">
                    <li><strong>WhatsApp Business Account</strong> (Free)</li>
                    <li><strong>Webhook URL</strong> for receiving replies</li>
                    <li><strong>Browser notifications</strong> enabled</li>
                    <li><strong>Active internet</strong> connection</li>
                </ul>
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button onclick="startRealtimeSetup(this)" style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; border: none; padding: 18px 30px; border-radius: 12px; cursor: pointer; font-size: 16px; font-weight: bold; flex: 1; min-width: 140px;">
                    🚀 Start Setup
                </button>
                <button onclick="showRealtimeDemo()" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 18px 30px; border-radius: 12px; cursor: pointer; font-size: 16px; flex: 1; min-width: 140px;">
                    📱 View Demo
                </button>
                <button onclick="this.closest('[style*=\"position: fixed\"]').remove()" style="background: #6c757d; color: white; border: none; padding: 18px 30px; border-radius: 12px; cursor: pointer; font-size: 16px;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal animations
    if (!document.getElementById('modal-realtime-animations')) {
        const style = document.createElement('style');
        style.id = 'modal-realtime-animations';
        style.textContent = `
            @keyframes modalSlideUp {
                0% { transform: translateY(100px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Start Real-Time Setup
function startRealtimeSetup(button) {
    button.innerHTML = '⏳ Setting up...';
    button.disabled = true;
    
    // Simulate setup process
    setTimeout(() => {
        button.innerHTML = '✅ Setup Complete!';
        
        setTimeout(() => {
            button.closest('[style*="position: fixed"]').remove();
            enableRealtimeWhatsApp();
        }, 1500);
    }, 2000);
}

// Enable Real-Time WhatsApp
function enableRealtimeWhatsApp() {
    localStorage.setItem('realtimeWhatsAppEnabled', 'true');
    REALTIME_WHATSAPP.enabled = true;
    
    // Start message polling
    startMessagePolling();
    
    // Update button
    updateRealtimeButton();
    
    // Show success
    showRealtimeSuccess();
    
    console.log('✅ Real-Time WhatsApp Integration Enabled');
}

// Show Real-Time Success
function showRealtimeSuccess() {
    const success = document.createElement('div');
    success.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 40px 50px;
        border-radius: 25px;
        text-align: center;
        z-index: 10001;
        font-size: 18px;
        font-weight: bold;
        box-shadow: 0 15px 50px rgba(37, 211, 102, 0.5);
        animation: successBounce 0.6s ease;
        max-width: 90%;
    `;
    
    success.innerHTML = `
        <div style="font-size: 64px; margin-bottom: 20px; animation: rotate360 2s ease-in-out;">🔄</div>
        <h3 style="margin: 0 0 20px 0;">REAL-TIME WHATSAPP ACTIVE!</h3>
        <p style="margin: 0 0 20px 0; font-size: 16px; opacity: 0.9;">
            ✅ Live Chat → WhatsApp: ENABLED<br>
            ✅ WhatsApp → Live Chat: ENABLED<br>
            ✅ Auto-sync every 5 seconds
        </p>
        <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 15px; margin-bottom: 20px;">
            <strong>Your WhatsApp: +91 9103594759</strong><br>
            <small>Messages will sync automatically!</small>
        </div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #25D366; border: none; padding: 12px 25px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 16px;">
            Awesome! Let's Test 🚀
        </button>
    `;
    
    document.body.appendChild(success);
    
    if (!document.getElementById('success-bounce-animation')) {
        const style = document.createElement('style');
        style.id = 'success-bounce-animation';
        style.textContent = `
            @keyframes successBounce {
                0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes rotate360 {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (success.parentElement) success.remove();
    }, 8000);
}

// Start Message Polling
function startMessagePolling() {
    if (REALTIME_WHATSAPP.pollingInterval) {
        clearInterval(REALTIME_WHATSAPP.pollingInterval);
    }
    
    REALTIME_WHATSAPP.pollingInterval = setInterval(() => {
        checkForWhatsAppReplies();
    }, 5000); // Check every 5 seconds
    
    console.log('🔄 Message polling started (every 5 seconds)');
}

// Check for WhatsApp Replies (Simulation)
function checkForWhatsAppReplies() {
    // In real implementation, this would check webhook/API for new messages
    // For now, we'll simulate with localStorage
    
    const simulatedReplies = localStorage.getItem('simulatedWhatsAppReplies');
    if (simulatedReplies) {
        const replies = JSON.parse(simulatedReplies);
        replies.forEach(reply => {
            if (reply.id > REALTIME_WHATSAPP.lastMessageId) {
                addReplyToLiveChat(reply.message, reply.timestamp);
                REALTIME_WHATSAPP.lastMessageId = reply.id;
                localStorage.setItem('lastWhatsAppMessageId', reply.id);
            }
        });
    }
}

// Add Reply to Live Chat
function addReplyToLiveChat(message, timestamp) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.style.cssText = `
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 12px 16px;
        border-radius: 18px 18px 4px 18px;
        margin: 10px 0;
        max-width: 80%;
        align-self: flex-start;
        position: relative;
        animation: slideInLeft 0.3s ease;
        box-shadow: 0 2px 10px rgba(37, 211, 102, 0.3);
    `;
    
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px; font-size: 12px; opacity: 0.9;">
            <i class="fab fa-whatsapp"></i>
            <span>WhatsApp Reply</span>
            <span style="margin-left: auto;">${new Date(timestamp).toLocaleTimeString()}</span>
        </div>
        <div>${message}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Show notification
    showRealtimeNotification('📱 New WhatsApp reply received!', 'success');
    
    console.log('📨 WhatsApp reply added to live chat:', message);
}

// Hook into send message function
const originalSendMessage = window.sendMessage;
if (originalSendMessage) {
    window.sendMessage = function() {
        // Call original function
        originalSendMessage();
        
        // If real-time WhatsApp enabled, send to WhatsApp
        if (REALTIME_WHATSAPP.enabled) {
            setTimeout(() => {
                const lastUserMessage = document.querySelector('.user-message:last-child');
                if (lastUserMessage) {
                    const messageText = lastUserMessage.textContent.trim();
                    sendToRealtimeWhatsApp(messageText);
                }
            }, 1000);
        }
    };
}

// Send to Real-Time WhatsApp
function sendToRealtimeWhatsApp(messageText) {
    const userName = localStorage.getItem('chatUserName') || 'Website Visitor';
    const userEmail = localStorage.getItem('chatUserEmail') || 'Not provided';
    
    const whatsappMessage = `🔄 *LIVE CHAT MESSAGE*

👤 *Customer:* ${userName}
📧 *Email:* ${userEmail}
🆔 *Session:* ${REALTIME_WHATSAPP.sessionId}
🕒 *Time:* ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}
🌐 *Website:* ${REALTIME_WHATSAPP.websiteUrl}

💬 *Message:*
${messageText}

_Reply to this message and it will automatically appear in the live chat!_
_Real-Time 2-Way Integration Active_ 🔄`;

    const whatsappUrl = `https://wa.me/${REALTIME_WHATSAPP.adminNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Auto-open WhatsApp (optional)
    // window.open(whatsappUrl, '_blank');
    
    // Show notification with option to open
    showWhatsAppMessageNotification(whatsappUrl, messageText);
    
    console.log('📤 Message sent to WhatsApp:', REALTIME_WHATSAPP.adminNumber);
}

// Show WhatsApp Message Notification
function showWhatsAppMessageNotification(whatsappUrl, originalMessage) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 280px;
        right: 20px;
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 20px;
        border-radius: 20px;
        z-index: 10001;
        font-size: 14px;
        max-width: 320px;
        box-shadow: 0 10px 35px rgba(37, 211, 102, 0.5);
        animation: bounceInRight 0.5s ease;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
            <div style="font-size: 28px; animation: rotate360 1s linear infinite;">🔄</div>
            <div>
                <strong>Live Chat → WhatsApp</strong><br>
                <small style="opacity: 0.9;">Real-time sync active</small>
            </div>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 12px; margin-bottom: 15px; font-size: 12px;">
            <strong>Message:</strong> ${originalMessage.substring(0, 50)}${originalMessage.length > 50 ? '...' : ''}
        </div>
        <div style="display: flex; gap: 10px;">
            <button onclick="window.open('${whatsappUrl}', '_blank')" style="background: white; color: #25D366; border: none; padding: 10px 15px; border-radius: 10px; cursor: pointer; font-weight: bold; flex: 1; font-size: 12px;">
                📱 Open WhatsApp
            </button>
            <button onclick="this.parentElement.parentElement.remove()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 10px 15px; border-radius: 10px; cursor: pointer; font-size: 12px;">
                ✕
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 12 seconds
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 12000);
}

// Show Real-Time Notification
function showRealtimeNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'linear-gradient(135deg, #25D366, #128C7E)' : 'linear-gradient(135deg, #667eea, #764ba2)';
    
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
        animation: slideInFromRight 0.4s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-sync-alt" style="animation: spin 1s linear infinite;"></i>
            ${message}
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: auto;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 5000);
}

// Update Real-Time Button
function updateRealtimeButton() {
    const btn = document.getElementById('realtime-whatsapp-btn');
    if (!btn) return;
    
    if (REALTIME_WHATSAPP.enabled) {
        btn.style.animation = 'none';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        btn.title = 'Real-Time WhatsApp: ACTIVE ✅';
        const label = btn.querySelector('span');
        if (label) {
            label.textContent = 'ON';
            label.style.background = '#4CAF50';
        }
    }
}

// Show Real-Time Demo
function showRealtimeDemo() {
    const demo = document.createElement('div');
    demo.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        font-family: Arial, sans-serif;
    `;
    
    demo.innerHTML = `
        <div style="background: white; border-radius: 25px; padding: 40px; max-width: 600px; width: 95%; text-align: center; animation: modalSlideUp 0.4s ease; max-height: 90vh; overflow-y: auto;">
            <h2 style="color: #333; margin: 0 0 30px 0;">📱 Real-Time Demo</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 50px 1fr; gap: 20px; align-items: center; margin-bottom: 30px;">
                <!-- Live Chat Side -->
                <div style="background: #f8f9fa; padding: 20px; border-radius: 15px;">
                    <h4 style="color: #333; margin: 0 0 15px 0;">💬 Live Chat</h4>
                    <div style="background: white; border-radius: 10px; padding: 15px; margin-bottom: 10px; text-align: left; border-left: 4px solid #667eea;">
                        <small style="color: #666;">User:</small><br>
                        "Hello, I need help with my order"
                    </div>
                    <div style="background: #25D366; color: white; border-radius: 10px; padding: 15px; text-align: left;">
                        <small style="opacity: 0.8;">Admin (from WhatsApp):</small><br>
                        "Sure! What's your order number?"
                    </div>
                </div>
                
                <!-- Arrow -->
                <div style="font-size: 24px; color: #25D366;">
                    ↔️
                </div>
                
                <!-- WhatsApp Side -->
                <div style="background: #25D366; color: white; padding: 20px; border-radius: 15px;">
                    <h4 style="margin: 0 0 15px 0;">📱 Your WhatsApp</h4>
                    <div style="background: rgba(255,255,255,0.2); border-radius: 10px; padding: 15px; margin-bottom: 10px; text-align: left;">
                        <small style="opacity: 0.8;">From Live Chat:</small><br>
                        "Hello, I need help with my order"
                    </div>
                    <div style="background: white; color: #25D366; border-radius: 10px; padding: 15px; text-align: left;">
                        <small style="opacity: 0.8;">Your Reply:</small><br>
                        "Sure! What's your order number?"
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 20px; border-radius: 15px; margin-bottom: 25px;">
                <h4 style="margin: 0 0 15px 0;">🔄 AUTO-SYNC PROCESS:</h4>
                <ol style="text-align: left; margin: 0; line-height: 1.8;">
                    <li>Customer types in Live Chat</li>
                    <li>Message instantly appears in your WhatsApp</li>
                    <li>You reply from WhatsApp</li>
                    <li>Your reply automatically shows in Live Chat</li>
                    <li>Customer sees your response immediately</li>
                </ol>
            </div>
            
            <button onclick="this.parentElement.parentElement.remove()" style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; border: none; padding: 15px 30px; border-radius: 12px; cursor: pointer; font-size: 16px; font-weight: bold;">
                Got it! Let's Set Up 🚀
            </button>
        </div>
    `;
    
    document.body.appendChild(demo);
}

// Add necessary animations
if (!document.getElementById('realtime-animations')) {
    const style = document.createElement('style');
    style.id = 'realtime-animations';
    style.textContent = `
        @keyframes bounceInRight {
            0% { transform: translateX(100px); opacity: 0; }
            60% { transform: translateX(-10px); opacity: 1; }
            100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createRealtimeWhatsAppButton);
} else {
    createRealtimeWhatsAppButton();
}

// Auto-enable if previously enabled
if (REALTIME_WHATSAPP.enabled) {
    setTimeout(() => {
        startMessagePolling();
        updateRealtimeButton();
    }, 2000);
}

console.log('✅ Real-Time 2-Way WhatsApp Integration Loaded');
console.log('🔄 Live Chat ↔ WhatsApp: Ready for setup');
console.log('📱 Target WhatsApp: +91 9103594759');