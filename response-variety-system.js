// RESPONSE VARIETY SYSTEM - NO REPEATED RESPONSES
console.log('🎲 Loading Response Variety System...');

// Additional variety responses to mix with natural conversations
const VARIETY_RESPONSES = {
    // Extra English responses for more variety
    variety_en: [
        "Absolutely!",
        "For sure!",
        "Definitely!",
        "You bet!",
        "No doubt!",
        "Exactly!",
        "Right on!",
        "Totally!",
        "I hear you!",
        "Makes sense!",
        "Good point!",
        "I see what you mean!",
        "Fair enough!",
        "That's interesting!",
        "Cool!",
        "Nice!",
        "Sweet!",
        "Awesome!",
        "Perfect!",
        "Great!",
        "Fantastic!",
        "Amazing!",
        "Wonderful!",
        "Brilliant!",
        "Excellent!",
        "Outstanding!",
        "Superb!",
        "Marvelous!",
        "Incredible!",
        "Unbelievable!",
        "That's right!",
        "You got it!",
        "Spot on!",
        "Bingo!",
        "Bull's eye!",
        "Hit the nail on the head!",
        "You said it!",
        "Couldn't agree more!",
        "My thoughts exactly!",
        "You read my mind!",
        "That's the spirit!",
        "Way to go!",
        "Keep it up!",
        "You're on fire!",
        "You're killing it!",
        "That's what I'm talking about!",
        "Now we're talking!",
        "That's the way!",
        "Right you are!",
        "Couldn't have said it better!"
    ],
    
    // Extra Urdu responses for more variety
    variety_ur: [
        "Bilkul!",
        "Haan yaar!",
        "Sahi baat!",
        "Ekdum theek!",
        "Wah bhai!",
        "Zabardast!",
        "Kamaal hai!",
        "Bohat acha!",
        "Perfect!",
        "Excellent!",
        "Outstanding!",
        "Superb!",
        "Fantastic!",
        "Amazing!",
        "Wonderful!",
        "Brilliant!",
        "Incredible!",
        "Unbelievable!",
        "Sach kaha!",
        "Bilkul sahi!",
        "Yahi to!",
        "Exactly!",
        "Definitely!",
        "For sure!",
        "Absolutely!",
        "No doubt!",
        "Totally!",
        "Completely!",
        "Fully agree!",
        "Same here!",
        "Me too!",
        "Likewise!",
        "Ditto!",
        "Right on!",
        "You bet!",
        "Of course!",
        "Naturally!",
        "Obviously!",
        "Clearly!",
        "Certainly!",
        "Sure thing!",
        "No problem!",
        "Piece of cake!",
        "Easy peasy!",
        "Simple!",
        "Done deal!",
        "Consider it done!",
        "You got it!",
        "Roger that!",
        "Copy that!",
        "Understood!",
        "Got it!"
    ]
};

// Merge variety responses with natural conversations
function getMergedResponses(language) {
    const naturalKey = language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en';
    const varietyKey = language === 'ur' ? 'variety_ur' : 'variety_en';
    
    const naturalResponses = window.SMART_RESPONSES ? window.SMART_RESPONSES[naturalKey] || [] : [];
    const varietyResponses = VARIETY_RESPONSES[varietyKey] || [];
    
    // Combine both arrays for maximum variety
    return [...naturalResponses, ...varietyResponses];
}

// Enhanced response generator with maximum variety
function generateVariedResponse(userMessage) {
    const language = window.detectLanguage ? window.detectLanguage(userMessage) : 'en';
    const allResponses = getMergedResponses(language);
    
    if (allResponses.length === 0) {
        return language === 'ur' ? 'Haan bhai!' : 'Yeah!';
    }
    
    // Get response history
    let responseHistory = new Set(JSON.parse(localStorage.getItem('varietyResponseHistory') || '[]'));
    
    // Filter out recently used responses
    let availableResponses = allResponses.filter(response => !responseHistory.has(response));
    
    // If no available responses, reset history
    if (availableResponses.length === 0) {
        responseHistory.clear();
        availableResponses = [...allResponses];
        localStorage.removeItem('varietyResponseHistory');
    }
    
    // Select random response
    const randomIndex = Math.floor(Math.random() * availableResponses.length);
    const selectedResponse = availableResponses[randomIndex];
    
    // Add to history
    responseHistory.add(selectedResponse);
    
    // Keep history manageable (last 30 responses)
    const historyArray = Array.from(responseHistory);
    if (historyArray.length > 30) {
        responseHistory.clear();
        // Keep only last 20 to allow some variety
        historyArray.slice(-20).forEach(response => responseHistory.add(response));
    }
    
    // Save history
    localStorage.setItem('varietyResponseHistory', JSON.stringify(Array.from(responseHistory)));
    
    console.log(`🎲 Varied response selected: ${selectedResponse.substring(0, 40)}...`);
    console.log(`📊 Available responses: ${availableResponses.length}/${allResponses.length}`);
    
    return selectedResponse;
}

// Override the global generateSmartResponse function
if (window.generateSmartResponse) {
    const originalGenerateSmartResponse = window.generateSmartResponse;
    
    window.generateSmartResponse = function(userMessage) {
        // Use variety system for better responses
        return generateVariedResponse(userMessage);
    };
    
    console.log('✅ Smart response generator overridden with variety system');
}

// Add function to reset response history (for testing)
window.resetResponseHistory = function() {
    localStorage.removeItem('varietyResponseHistory');
    localStorage.removeItem('lastChatResponses');
    console.log('🔄 Response history cleared');
};

// Show variety stats (for debugging)
window.showVarietyStats = function() {
    const history = JSON.parse(localStorage.getItem('varietyResponseHistory') || '[]');
    const totalEn = getMergedResponses('en').length;
    const totalUr = getMergedResponses('ur').length;
    
    console.log('📊 Response Variety Stats:');
    console.log(`English responses: ${totalEn}`);
    console.log(`Urdu responses: ${totalUr}`);
    console.log(`Used in history: ${history.length}`);
    console.log(`History:`, history);
};

console.log('✅ Response Variety System Loaded!');
console.log(`🎲 Total English responses: ${getMergedResponses('en').length}`);
console.log(`🎲 Total Urdu responses: ${getMergedResponses('ur').length}`);
console.log('🔄 Anti-repeat system active');