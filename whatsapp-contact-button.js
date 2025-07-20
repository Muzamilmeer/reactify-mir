// WHATSAPP CONTACT BUTTON SYSTEM
console.log('📞 Loading WhatsApp Contact Button System...');

// Keywords that trigger WhatsApp contact button
const CONTACT_KEYWORDS = [
    // English
    'call you', 'call me', 'phone call', 'talk to you', 'speak with you', 'contact you',
    'i want to talk', 'need to talk', 'can we talk', 'lets talk', 'talk with me',
    'i call you', 'call karna', 'baat karna', 'conversation', 'discuss', 'chat with you',
    'voice call', 'phone number', 'your number', 'contact number', 'reach you',
    
    // Urdu
    'baat krni ha', 'baat karna hai', 'baat karne ka', 'call karna hai', 'call krna',
    'tumse baat', 'aap se baat', 'phone karna', 'contact karna', 'rabta karna',
    'baat chahiye', 'call chahiye', 'phone chahiye', 'number chahiye', 'contact chahiye',
    'tumhara number', 'aapka number', 'phone number', 'whatsapp number', 'contact detail',
    'milna hai', 'baat krni', 'conversation karna', 'discuss karna', 'chat karna'
];

// Check if message contains contact request
function containsContactRequest(message) {
    const lowerMessage = message.toLowerCase();
    return CONTACT_KEYWORDS.some(keyword => lowerMessage.includes(keyword.toLowerCase()));
}

// Create WhatsApp contact button
function createWhatsAppContactButton() {
    // Remove existing button if any
    const existingBtn = document.getElementById('whatsapp-contact-btn');
    if (existingBtn) existingBtn.remove();
    
    const contactBtn = document.createElement('div');
    contactBtn.id = 'whatsapp-contact-btn';
    contactBtn.style.cssText = `
        background: linear-gradient(135deg, #25D366, #128C7E);
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        margin: 15px 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        transition: all 0.3s ease;
        animation: contactButtonPulse 2s infinite;
        border: 2px solid rgba(255,255,255,0.2);
        position: relative;
        overflow: hidden;
    `;
    
    contactBtn.innerHTML = `
        <div style="background: rgba(255,255,255,0.2); border-radius: 50%; width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
            📞
        </div>
        <div style="flex: 1;">
            <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">
                Contact Muzamil Directly
            </div>
            <div style="font-size: 13px; opacity: 0.9;">
                Click here to WhatsApp: +91 9103594759
            </div>
        </div>
        <div style="font-size: 24px; animation: bounce 1s infinite;">
            →
        </div>
        <div style="position: absolute; top: -2px; right: -2px; background: #ff4444; color: white; border-radius: 50%; width: 20px; height: 20px; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: bold; animation: newBadgePulse 1.5s infinite;">
            NEW
        </div>
    `;
    
    // Add hover effects
    contactBtn.onmouseenter = function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 6px 25px rgba(37, 211, 102, 0.5)';
    };
    
    contactBtn.onmouseleave = function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
    };
    
    // Add click handler
    contactBtn.onclick = function() {
        openWhatsAppContact();
    };
    
    // Add animations
    if (!document.getElementById('contact-button-animations')) {
        const style = document.createElement('style');
        style.id = 'contact-button-animations';
        style.textContent = `
            @keyframes contactButtonPulse {
                0% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); }
                50% { box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6); }
                100% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); }
            }
            @keyframes newBadgePulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateX(0); }
                40% { transform: translateX(5px); }
                60% { transform: translateX(3px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    return contactBtn;
}

// Open WhatsApp contact
function openWhatsAppContact() {
    const message = `🛍️ *Hello Muzamil!*

I was chatting on your ShopEasy website and would like to talk with you directly.

🌐 *Website:* https://ctrlxmir.github.io/reactify-mir/
🕒 *Time:* ${new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}

Looking forward to speaking with you!`;

    const whatsappUrl = `https://wa.me/919103594759?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Success notification removed - no more popup spam
    
    // Add confirmation message to chat
    if (typeof addMessageToChat === 'function') {
        setTimeout(() => {
            addMessageToChat("Perfect! I've opened WhatsApp for you to contact me directly at +91 9103594759. Looking forward to talking with you! 📞", 'bot');
        }, 1000);
    }
    
    console.log('📞 WhatsApp contact opened');
}

// Add contact button to chat
function addContactButtonToChat() {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'contact-button-container';
    buttonContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin: 15px 0;
        animation: slideInUp 0.5s ease;
    `;
    
    const contactBtn = createWhatsAppContactButton();
    contactBtn.style.maxWidth = '90%';
    buttonContainer.appendChild(contactBtn);
    
    chatMessages.appendChild(buttonContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    console.log('📞 WhatsApp contact button added to chat');
}

// Show contact notification
function showContactNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#25D366' : '#2196F3';
    
    notification.style.cssText = `
        position: fixed;
        bottom: 160px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        z-index: 10001;
        font-size: 14px;
        font-weight: bold;
        box-shadow: 0 6px 25px rgba(37, 211, 102, 0.4);
        animation: contactNotificationSlide 0.5s ease;
        max-width: 300px;
        line-height: 1.4;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 10px;">
            <i class="fab fa-whatsapp" style="font-size: 16px; margin-top: 2px;"></i>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; margin-left: 10px;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add animation
    if (!document.getElementById('contact-notification-style')) {
        const style = document.createElement('style');
        style.id = 'contact-notification-style';
        style.textContent = `
            @keyframes contactNotificationSlide {
                from { transform: translateY(100px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes slideInUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 5000);
}

// Enhanced response for contact requests
function getContactResponse(message, language) {
    const contactBtn = createWhatsAppContactButton();
    
    const responses = {
        en: [
            "I'd love to talk with you directly! Click the button below to contact me on WhatsApp:",
            "Sure! Let's have a conversation. Click below to reach me on WhatsApp:",
            "Absolutely! I'm available for a chat. Click the WhatsApp button below:",
            "Of course! I'd be happy to talk with you. Contact me directly:",
            "Great idea! Let's connect on WhatsApp. Click below to start:"
        ],
        ur: [
            "Bilkul! Mujhse baat karne ke liye neeche WhatsApp button click karo:",
            "Haan bhai! Direct baat karte hain. WhatsApp pe contact karo:",
            "Zaroor! Main available hun. Neeche se WhatsApp pe message karo:",
            "Bilkul bhai! Baat karne ke liye WhatsApp button click karo:",
            "Perfect! Chalo WhatsApp pe baat karte hain. Click karo:"
        ]
    };
    
    const responseArray = responses[language] || responses.en;
    const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
    
    return randomResponse;
}

// Override smart response generation to handle contact requests
const originalGenerateSmartResponse = window.generateSmartResponse;
if (originalGenerateSmartResponse) {
    window.generateSmartResponse = function(userMessage) {
        // Check if user wants to make contact
        if (containsContactRequest(userMessage)) {
            console.log('📞 Contact request detected');
            
            // Add contact button to chat
            setTimeout(() => {
                addContactButtonToChat();
            }, 1000);
            
            // Detect language
            const language = detectLanguage ? detectLanguage(userMessage) : 'en';
            const response = getContactResponse(userMessage, language);
            
            return response;
        }
        
        // Otherwise, use original function
        return originalGenerateSmartResponse(userMessage);
    };
}

// Add slide-in animation style
if (!document.getElementById('contact-system-animations')) {
    const style = document.createElement('style');
    style.id = 'contact-system-animations';
    style.textContent = `
        .contact-button-container {
            animation: slideInUp 0.5s ease;
        }
    `;
    document.head.appendChild(style);
}

console.log('✅ WhatsApp Contact Button System Loaded!');
console.log('📞 Keywords: call, talk, baat karna, contact, etc.');
console.log('🎯 Target: +91 9103594759');