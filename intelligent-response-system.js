// INTELLIGENT RESPONSE SYSTEM - CONTEXTUAL REPLIES
console.log('🧠 Loading Intelligent Response System...');

// Enhanced keyword detection with context
const INTELLIGENT_KEYWORDS = {
    // Greetings & Basic
    greetings: {
        keywords: ['hello', 'hi', 'hey', 'salam', 'assalam', 'namaste', 'adaab', 'good morning', 'good evening'],
        responses_en: [
            "Hello! How can I help you today?",
            "Hi there! What can I do for you?",
            "Hey! Great to see you here!",
            "Hello! Welcome to our store!"
        ],
        responses_ur: [
            "Assalam Alaikum! Kya madad kar sakta hun?",
            "Salam bhai! Kya chahiye?",
            "Adaab! Kaise madad kar sakun?",
            "Hello! Kya dekh rahe ho?"
        ]
    },
    
    // Questions about products
    products: {
        keywords: ['product', 'item', 'saman', 'cheez', 'kya hai', 'what is', 'show me', 'dikhao', 'available', 'mil sakta'],
        responses_en: [
            "We have a wide range of products! What specific item are you looking for?",
            "Sure! I can help you find products. What category interests you?",
            "We have many items available. Any particular product in mind?",
            "Let me help you find what you're looking for!"
        ],
        responses_ur: [
            "Hamare pass bohot saman hai! Kya dhund rahe ho?",
            "Bilkul! Kaunsa product chahiye tumhe?",
            "Bohot cheezein hain. Koi khaas cheez chahiye?",
            "Batao kya chahiye, madad karta hun!"
        ]
    },
    
    // Price inquiries
    pricing: {
        keywords: ['price', 'cost', 'kitna', 'qeemat', 'rate', 'paisa', 'money', 'expensive', 'cheap', 'discount'],
        responses_en: [
            "Prices vary by product. Which item's price would you like to know?",
            "I can help with pricing! What product are you interested in?",
            "Sure! Tell me which item and I'll check the price for you.",
            "Pricing depends on the product. What are you looking to buy?"
        ],
        responses_ur: [
            "Qeemat product ke hisab se hai. Kaunse item ka rate chahiye?",
            "Bilkul! Kaunsi cheez ka price puchna hai?",
            "Batao kya lena hai, rate bata deta hun!",
            "Qeemat alag alag hai. Kya kharidna hai?"
        ]
    },
    
    // Help & Support
    help: {
        keywords: ['help', 'support', 'madad', 'problem', 'issue', 'sawal', 'question', 'how to', 'kaise', 'guide'],
        responses_en: [
            "I'm here to help! What do you need assistance with?",
            "Sure! Tell me what problem you're facing.",
            "Happy to help! What's your question?",
            "I'll do my best to assist you. What's the issue?"
        ],
        responses_ur: [
            "Main hun madad ke liye! Kya problem hai?",
            "Zaroor! Batao kya mushkil aa rahi hai?",
            "Bilkul madad karunga! Kya sawal hai?",
            "Koi baat nahi, batao kya chahiye!"
        ]
    },
    
    // Shopping related
    shopping: {
        keywords: ['buy', 'purchase', 'order', 'cart', 'checkout', 'kharidna', 'lena', 'order karna', 'mangana'],
        responses_en: [
            "Great! Ready to shop? Add items to your cart and checkout.",
            "Perfect! Browse our products and add what you like to cart.",
            "Awesome! You can add items to cart and place your order.",
            "Nice! Check out our products and start shopping!"
        ],
        responses_ur: [
            "Zabardast! Cart mein add karo aur order kar do!",
            "Bohot acha! Jo pasand aye cart mein daal do.",
            "Perfect! Saman dekho aur order kar do!",
            "Wah! Shopping karo, cart mein add karte jao!"
        ]
    },
    
    // Delivery inquiries
    delivery: {
        keywords: ['delivery', 'shipping', 'pahunchega', 'kab milega', 'when', 'time', 'fast', 'jaldi'],
        responses_en: [
            "We offer fast delivery! Usually takes 2-3 business days.",
            "Delivery is quick! Most orders arrive within 2-3 days.",
            "We ship fast! Your order will reach you soon.",
            "Quick delivery available! 2-3 days for most areas."
        ],
        responses_ur: [
            "Jaldi delivery karte hain! 2-3 din mein pahunch jata hai.",
            "Delivery fast hai! 2-3 din mein mil jata hai saman.",
            "Jaldi bhejte hain! Jaldi pahunch jayega.",
            "Fast delivery hai! 2-3 din mein aa jata hai."
        ]
    },
    
    // Compliments & Positive
    positive: {
        keywords: ['good', 'great', 'awesome', 'nice', 'excellent', 'acha', 'zabardast', 'bohot acha', 'kamaal'],
        responses_en: [
            "Thank you so much! That means a lot!",
            "Glad you like it! We try our best!",
            "Thanks! We're happy to serve you!",
            "Appreciate the kind words!"
        ],
        responses_ur: [
            "Bohot shukriya! Dil khush kar diya!",
            "Thank you bhai! Khushi hui!",
            "Shukriya! Hamari mehnat rang layi!",
            "Bohot acha laga sunkar!"
        ]
    },
    
    // Problems & Complaints
    problems: {
        keywords: ['problem', 'issue', 'wrong', 'bad', 'not working', 'mushkil', 'kharab', 'galat', 'theek nahi'],
        responses_en: [
            "I'm sorry to hear that! Let me help you resolve this issue.",
            "Oh no! Tell me what's wrong and I'll fix it right away.",
            "Sorry about that! What problem are you facing?",
            "I apologize! Let me help you solve this problem."
        ],
        responses_ur: [
            "Maaf karna! Batao kya problem hai, hal kar deta hun.",
            "Oho! Kya mushkil hai? Abhi theek kar deta hun.",
            "Sorry bhai! Kya galat hai? Batao fix kar deta hun.",
            "Maafi chahta hun! Problem kya hai?"
        ]
    },
    
    // Contact & Communication
    contact: {
        keywords: ['call', 'phone', 'contact', 'talk', 'speak', 'baat', 'call karna', 'rabta', 'sampark'],
        responses_en: [
            "Sure! You can contact us on WhatsApp: +91 9103594759",
            "Of course! Here's our WhatsApp contact for direct communication.",
            "Absolutely! Contact us directly via WhatsApp for quick response.",
            "Yes! WhatsApp us for immediate assistance."
        ],
        responses_ur: [
            "Bilkul! WhatsApp kar sakte ho: +91 9103594759",
            "Haan! WhatsApp pe baat kar sakte hain directly.",
            "Zaroor! WhatsApp pe contact karo jaldi reply milega.",
            "Haan bhai! WhatsApp karo turant jawab milega."
        ]
    }
};

// Analyze message and find best matching category
function analyzeMessage(message) {
    const lowerMessage = message.toLowerCase();
    let bestMatch = null;
    let maxMatches = 0;
    
    // Check each category for keyword matches
    for (const [category, data] of Object.entries(INTELLIGENT_KEYWORDS)) {
        const matches = data.keywords.filter(keyword => 
            lowerMessage.includes(keyword.toLowerCase())
        ).length;
        
        if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = category;
        }
    }
    
    return bestMatch;
}

// Generate intelligent contextual response
function generateIntelligentResponse(userMessage) {
    console.log(`🧠 Analyzing message: "${userMessage}"`);
    
    // Analyze the message
    const category = analyzeMessage(userMessage);
    const language = window.detectLanguage ? window.detectLanguage(userMessage) : 'en';
    
    console.log(`🎯 Detected category: ${category || 'none'}`);
    console.log(`🌍 Detected language: ${language}`);
    
    if (category && INTELLIGENT_KEYWORDS[category]) {
        const responseKey = language === 'ur' ? 'responses_ur' : 'responses_en';
        const responses = INTELLIGENT_KEYWORDS[category][responseKey];
        
        if (responses && responses.length > 0) {
            // Get response history to avoid repetition
            const historyKey = `intelligentHistory_${category}_${language}`;
            let usedResponses = JSON.parse(localStorage.getItem(historyKey) || '[]');
            
            // Filter unused responses
            let availableResponses = responses.filter(response => !usedResponses.includes(response));
            
            // Reset if all used
            if (availableResponses.length === 0) {
                availableResponses = [...responses];
                usedResponses = [];
            }
            
            // Select random response
            const randomIndex = Math.floor(Math.random() * availableResponses.length);
            const selectedResponse = availableResponses[randomIndex];
            
            // Update history
            usedResponses.push(selectedResponse);
            if (usedResponses.length > responses.length / 2) {
                usedResponses = usedResponses.slice(-Math.floor(responses.length / 3));
            }
            localStorage.setItem(historyKey, JSON.stringify(usedResponses));
            
            console.log(`✅ Intelligent response: ${selectedResponse}`);
            return selectedResponse;
        }
    }
    
    // Fallback to natural conversations if no specific match
    console.log('🔄 Falling back to natural conversation');
    if (window.generateVariedResponse) {
        return window.generateVariedResponse(userMessage);
    }
    
    // Final fallback
    return language === 'ur' ? 'Haan bhai, kya baat hai?' : 'Yeah, what\'s up?';
}

// Override the response generation system
function initializeIntelligentSystem() {
    // Override generateSmartResponse if it exists
    if (window.generateSmartResponse) {
        const originalGenerateSmartResponse = window.generateSmartResponse;
        
        window.generateSmartResponse = function(userMessage) {
            return generateIntelligentResponse(userMessage);
        };
        
        console.log('✅ Intelligent response system activated');
    }
    
    // Override generateVariedResponse if it exists
    if (window.generateVariedResponse) {
        const originalGenerateVariedResponse = window.generateVariedResponse;
        
        window.generateVariedResponse = function(userMessage) {
            // First try intelligent response
            const intelligentResponse = generateIntelligentResponse(userMessage);
            
            // If it's a fallback, use original varied response
            if (intelligentResponse === 'Haan bhai, kya baat hai?' || intelligentResponse === 'Yeah, what\'s up?') {
                return originalGenerateVariedResponse(userMessage);
            }
            
            return intelligentResponse;
        };
        
        console.log('✅ Varied response system enhanced with intelligence');
    }
}

// Test function for intelligent responses
window.testIntelligentResponses = function() {
    const testMessages = [
        'Hello how are you?',
        'What products do you have?',
        'How much does this cost?',
        'I need help',
        'Can I call you?',
        'This is great!',
        'There is a problem',
        'Salam kaise ho?',
        'Kya saman hai?',
        'Qeemat kya hai?'
    ];
    
    testMessages.forEach((message, index) => {
        setTimeout(() => {
            console.log(`\n🧪 Testing: "${message}"`);
            const response = generateIntelligentResponse(message);
            console.log(`🤖 Response: "${response}"`);
        }, index * 1000);
    });
};

// Initialize when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeIntelligentSystem, 3000);
    });
} else {
    setTimeout(initializeIntelligentSystem, 3000);
}

console.log('✅ Intelligent Response System Loaded!');
console.log('🧪 Test with: testIntelligentResponses()');
console.log('🧠 System will analyze user messages and provide contextual responses');