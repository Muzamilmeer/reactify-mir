// ENHANCED MISBEHAVIOR SYSTEM WITH PROPER ALERTS
console.log('🚨 Loading Enhanced Misbehavior Alert System...');

// Enhanced alert system for warnings
function showEnhancedWarningAlert(violationCount, message) {
    // Create custom alert overlay
    const alertOverlay = document.createElement('div');
    alertOverlay.id = 'misbehavior-alert-overlay';
    alertOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        font-family: Arial, sans-serif;
    `;
    
    let alertContent = '';
    let alertColor = '';
    let alertIcon = '';
    
    if (violationCount === 1) {
        alertColor = '#ff9800';
        alertIcon = '⚠️';
        alertContent = `
            <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <div style="font-size: 60px; margin-bottom: 20px;">${alertIcon}</div>
                <h2 style="color: ${alertColor}; margin: 0 0 15px 0;">WARNING 1/3</h2>
                <p style="font-size: 16px; margin: 0 0 20px 0; color: #333;">
                    <strong>Inappropriate language detected!</strong><br>
                    Please use respectful communication.
                </p>
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <p style="margin: 0; color: #856404; font-size: 14px;">
                        <strong>2 more warnings</strong> will result in 5-minute chat suspension.
                    </p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: ${alertColor}; color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold;">
                    I Understand
                </button>
            </div>
        `;
    } else if (violationCount === 2) {
        alertColor = '#f44336';
        alertIcon = '🚫';
        alertContent = `
            <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <div style="font-size: 60px; margin-bottom: 20px;">${alertIcon}</div>
                <h2 style="color: ${alertColor}; margin: 0 0 15px 0;">FINAL WARNING 2/3</h2>
                <p style="font-size: 16px; margin: 0 0 20px 0; color: #333;">
                    <strong>This is your FINAL WARNING!</strong><br>
                    One more violation will suspend chat.
                </p>
                <div style="background: #ffebee; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f44336;">
                    <p style="margin: 0; color: #c62828; font-size: 14px;">
                        <strong>Next violation = 5-minute suspension</strong>
                    </p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: ${alertColor}; color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold;">
                    I Will Be Respectful
                </button>
            </div>
        `;
    } else if (violationCount >= 3) {
        alertColor = '#d32f2f';
        alertIcon = '🛑';
        alertContent = `
            <div style="background: white; padding: 30px; border-radius: 15px; text-align: center; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                <div style="font-size: 60px; margin-bottom: 20px;">${alertIcon}</div>
                <h2 style="color: ${alertColor}; margin: 0 0 15px 0;">CHAT SUSPENDED!</h2>
                <p style="font-size: 16px; margin: 0 0 20px 0; color: #333;">
                    <strong>Chat suspended for 5 minutes</strong><br>
                    Due to repeated inappropriate language.
                </p>
                <div style="background: #ffebee; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <p style="margin: 0 0 10px 0; color: #c62828; font-size: 14px;">
                        <strong>⏰ Suspension: 5 minutes</strong>
                    </p>
                    <p style="margin: 0; color: #666; font-size: 14px;">
                        📞 Contact: WhatsApp +91 9103594759
                    </p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: ${alertColor}; color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold;">
                    Understood
                </button>
            </div>
        `;
    }
    
    alertOverlay.innerHTML = alertContent;
    document.body.appendChild(alertOverlay);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (alertOverlay.parentElement) {
            alertOverlay.remove();
        }
    }, 10000);
    
    // Play alert sound
    if (typeof playSound === 'function') {
        playSound('wishlistRemove');
    }
    
    console.log(`🚨 Enhanced alert shown for violation ${violationCount}`);
}

// Override the original handleViolation function
if (window.handleViolation) {
    const originalHandleViolation = window.handleViolation;
    
    window.handleViolation = function(message) {
        const violationCount = parseInt(localStorage.getItem('chatViolationCount') || '0') + 1;
        localStorage.setItem('chatViolationCount', violationCount.toString());
        
        console.log(`🚨 Enhanced violation handler: ${violationCount}/3`);
        
        // Show enhanced alert
        showEnhancedWarningAlert(violationCount, message);
        
        // Call original function
        return originalHandleViolation.call(this, message);
    };
    
    console.log('✅ Enhanced violation handler activated');
}

// Test functions for misbehavior system
window.testMisbehavior = function() {
    console.log('🧪 Testing misbehavior system...');
    
    // Test words
    const testWords = ['stupid', 'pagal', 'fool', 'bewakoof'];
    
    testWords.forEach((word, index) => {
        setTimeout(() => {
            console.log(`Testing word: ${word}`);
            if (window.checkMessageContent && window.checkMessageContent(word)) {
                console.log(`✅ Word "${word}" detected as inappropriate`);
                if (window.handleViolation) {
                    window.handleViolation(word);
                }
            } else {
                console.log(`❌ Word "${word}" not detected`);
            }
        }, index * 2000);
    });
};

// Reset violation count (for testing)
window.resetViolations = function() {
    localStorage.removeItem('chatViolationCount');
    localStorage.removeItem('chatSuspended');
    localStorage.removeItem('suspensionEndTime');
    console.log('🔄 Violations reset');
    
    // Re-enable chat input
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
        sendBtn.style.cursor = '';
    }
};

// Show current violation status
window.checkViolationStatus = function() {
    const violationCount = parseInt(localStorage.getItem('chatViolationCount') || '0');
    const chatSuspended = localStorage.getItem('chatSuspended') === 'true';
    const suspensionEndTime = parseInt(localStorage.getItem('suspensionEndTime') || '0');
    
    console.log('📊 Violation Status:');
    console.log(`Warnings: ${violationCount}/3`);
    console.log(`Suspended: ${chatSuspended}`);
    
    if (chatSuspended) {
        const timeRemaining = Math.ceil((suspensionEndTime - Date.now()) / 1000 / 60);
        console.log(`Time remaining: ${timeRemaining} minutes`);
    }
};

console.log('✅ Enhanced Misbehavior Alert System Loaded!');
console.log('🧪 Test commands: testMisbehavior(), resetViolations(), checkViolationStatus()');