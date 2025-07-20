// ADVANCED AI CHATBOT - REAL AI EXPERIENCE
console.log('🤖 Loading Advanced AI Bot System...');

// AI Bot Personality & Memory
class AIBot {
    constructor() {
        this.name = "Muzamil AI";
        this.personality = "friendly, helpful, intelligent, and conversational";
        this.memory = this.loadMemory();
        this.conversationContext = [];
        this.userProfile = this.loadUserProfile();
        this.currentMood = "helpful";
        this.knowledgeBase = this.initializeKnowledge();
        
        console.log('🧠 AI Bot initialized with personality and memory');
    }
    
    // Load conversation memory
    loadMemory() {
        return JSON.parse(localStorage.getItem('aiBot_memory') || '[]');
    }
    
    // Save memory
    saveMemory() {
        localStorage.setItem('aiBot_memory', JSON.stringify(this.memory.slice(-50))); // Keep last 50 interactions
    }
    
    // Load user profile
    loadUserProfile() {
        return JSON.parse(localStorage.getItem('aiBot_userProfile') || '{}');
    }
    
    // Save user profile
    saveUserProfile() {
        localStorage.setItem('aiBot_userProfile', JSON.stringify(this.userProfile));
    }
    
    // Initialize knowledge base
    initializeKnowledge() {
        return {
            about_store: [
                "We're an online shopping platform with a wide variety of products.",
                "Our store offers quality items at competitive prices with fast delivery.",
                "We specialize in electronics, fashion, home goods, and much more.",
                "Customer satisfaction is our top priority."
            ],
            
            capabilities: [
                "I can help you find products, check prices, and answer questions.",
                "I remember our previous conversations to provide better assistance.",
                "I can assist with orders, delivery information, and customer support.",
                "I'm here 24/7 to help with your shopping needs."
            ],
            
            personality_traits: [
                "I'm always eager to help and learn from our conversations.",
                "I try to understand context and provide meaningful responses.",
                "I can adapt my communication style based on your preferences.",
                "I remember details about you to personalize our interactions."
            ]
        };
    }
    
    // Analyze user message for advanced understanding
    analyzeMessage(message) {
        const analysis = {
            intent: this.detectIntent(message),
            emotion: this.detectEmotion(message),
            entities: this.extractEntities(message),
            context: this.getConversationContext(),
            complexity: this.assessComplexity(message)
        };
        
        console.log('🔍 Message analysis:', analysis);
        return analysis;
    }
    
    // Detect user intent
    detectIntent(message) {
        const intents = {
            greeting: ['hello', 'hi', 'hey', 'salam', 'good morning', 'good evening'],
            question: ['what', 'how', 'why', 'when', 'where', 'kya', 'kaise', 'kab', 'kahan'],
            request: ['can you', 'please', 'help me', 'i need', 'chahiye', 'madad'],
            complaint: ['problem', 'issue', 'wrong', 'bad', 'not working', 'mushkil'],
            compliment: ['good', 'great', 'awesome', 'excellent', 'amazing', 'acha', 'zabardast'],
            goodbye: ['bye', 'goodbye', 'see you', 'alvida', 'khuda hafiz'],
            personal: ['your name', 'who are you', 'about you', 'kaun ho', 'naam kya'],
            shopping: ['buy', 'purchase', 'order', 'cart', 'price', 'cost', 'kharidna']
        };
        
        const lowerMessage = message.toLowerCase();
        for (const [intent, keywords] of Object.entries(intents)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                return intent;
            }
        }
        
        return 'general';
    }
    
    // Detect emotional tone
    detectEmotion(message) {
        const emotions = {
            happy: ['happy', 'good', 'great', 'awesome', 'love', 'khushi', 'acha'],
            sad: ['sad', 'bad', 'terrible', 'hate', 'upset', 'udas', 'bura'],
            angry: ['angry', 'mad', 'furious', 'annoyed', 'gussa', 'naraz'],
            excited: ['excited', 'amazing', 'wow', 'fantastic', 'zabardast'],
            confused: ['confused', 'don\'t understand', 'what', 'samjh nahi'],
            neutral: []
        };
        
        const lowerMessage = message.toLowerCase();
        for (const [emotion, keywords] of Object.entries(emotions)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                return emotion;
            }
        }
        
        return 'neutral';
    }
    
    // Extract entities (names, numbers, products, etc.)
    extractEntities(message) {
        const entities = {
            numbers: message.match(/\d+/g) || [],
            products: this.extractProducts(message),
            names: this.extractNames(message)
        };
        
        return entities;
    }
    
    // Extract product mentions
    extractProducts(message) {
        const products = ['phone', 'laptop', 'shirt', 'shoes', 'watch', 'bag', 'mobile', 'computer'];
        const found = [];
        const lowerMessage = message.toLowerCase();
        
        products.forEach(product => {
            if (lowerMessage.includes(product)) {
                found.push(product);
            }
        });
        
        return found;
    }
    
    // Extract names
    extractNames(message) {
        // Simple name extraction - in real AI this would be more sophisticated
        const namePattern = /my name is (\w+)|i am (\w+)|call me (\w+)|mera naam (\w+)/i;
        const match = message.match(namePattern);
        
        if (match) {
            const name = match[1] || match[2] || match[3] || match[4];
            this.userProfile.name = name;
            this.saveUserProfile();
            return [name];
        }
        
        return [];
    }
    
    // Get conversation context
    getConversationContext() {
        return this.conversationContext.slice(-3); // Last 3 messages for context
    }
    
    // Assess message complexity
    assessComplexity(message) {
        const wordCount = message.split(' ').length;
        const hasQuestions = message.includes('?');
        const hasMultipleSentences = message.split('.').length > 1;
        
        if (wordCount > 10 || hasQuestions || hasMultipleSentences) {
            return 'complex';
        } else if (wordCount > 5) {
            return 'medium';
        } else {
            return 'simple';
        }
    }
    
    // Generate AI-like response
    generateResponse(message) {
        const analysis = this.analyzeMessage(message);
        let response = "";
        
        // Add to conversation context
        this.conversationContext.push({
            user: message,
            timestamp: Date.now(),
            analysis: analysis
        });
        
        // Generate response based on intent and context
        switch (analysis.intent) {
            case 'greeting':
                response = this.handleGreeting(message, analysis);
                break;
            case 'personal':
                response = this.handlePersonalQuestions(message, analysis);
                break;
            case 'question':
                response = this.handleQuestions(message, analysis);
                break;
            case 'request':
                response = this.handleRequests(message, analysis);
                break;
            case 'complaint':
                response = this.handleComplaints(message, analysis);
                break;
            case 'compliment':
                response = this.handleCompliments(message, analysis);
                break;
            case 'shopping':
                response = this.handleShopping(message, analysis);
                break;
            case 'goodbye':
                response = this.handleGoodbye(message, analysis);
                break;
            default:
                response = this.handleGeneral(message, analysis);
        }
        
        // Add personality and context
        response = this.addPersonality(response, analysis);
        
        // Save interaction to memory
        this.memory.push({
            user: message,
            bot: response,
            timestamp: Date.now(),
            intent: analysis.intent,
            emotion: analysis.emotion
        });
        this.saveMemory();
        
        console.log(`🤖 AI Response generated for intent: ${analysis.intent}`);
        return response;
    }
    
    // Handle greetings
    handleGreeting(message, analysis) {
        const greetings = [
            `Hello! I'm ${this.name}, your AI shopping assistant. How can I help you today?`,
            `Hi there! Great to see you! I'm here to help with all your shopping needs.`,
            `Hey! Welcome back! I remember our previous conversations. What can I do for you?`,
            `Hello! I'm an AI assistant designed to make your shopping experience amazing!`
        ];
        
        if (this.userProfile.name) {
            greetings.push(`Hello ${this.userProfile.name}! Nice to see you again!`);
        }
        
        return this.selectResponse(greetings);
    }
    
    // Handle personal questions
    handlePersonalQuestions(message, analysis) {
        const responses = [
            `I'm ${this.name}, an advanced AI chatbot designed to help with shopping and customer service.`,
            `I'm an AI assistant with memory and personality. I learn from our conversations to serve you better.`,
            `I'm your intelligent shopping companion! I can remember our chats and provide personalized assistance.`,
            `I'm an AI bot with advanced conversational abilities. I'm here to make your experience smooth and enjoyable.`
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle questions
    handleQuestions(message, analysis) {
        if (message.toLowerCase().includes('how are you')) {
            return "I'm doing great! As an AI, I'm always ready and excited to help. How are you doing?";
        }
        
        if (message.toLowerCase().includes('what can you do')) {
            return "I can help you shop, answer questions, remember our conversations, provide product info, assist with orders, and much more! I'm designed to be your intelligent shopping companion.";
        }
        
        // Default question response
        const responses = [
            "That's an interesting question! Let me think about that and provide you with the best answer.",
            "Great question! I'd be happy to help you with that. Can you provide a bit more detail?",
            "I understand you're looking for information. Let me assist you with that right away.",
            "Good question! I'm analyzing that for you. What specific aspect would you like to know about?"
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle requests
    handleRequests(message, analysis) {
        const responses = [
            "Of course! I'd be happy to help you with that. What specifically do you need assistance with?",
            "Absolutely! I'm here to help. Let me know exactly what you're looking for.",
            "Sure thing! I'm designed to assist you. Please tell me more about what you need.",
            "I'd love to help! That's exactly what I'm here for. What can I do for you?"
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle complaints
    handleComplaints(message, analysis) {
        this.currentMood = "apologetic";
        
        const responses = [
            "I'm really sorry to hear about that issue. As an AI assistant, I want to make sure we resolve this quickly. Can you tell me more details?",
            "I apologize for any inconvenience! Let me help you solve this problem right away. What exactly went wrong?",
            "I understand your frustration, and I'm here to help fix this. Can you provide more information so I can assist you better?",
            "I'm sorry this happened! Customer satisfaction is very important to us. Let me see how I can help resolve this issue."
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle compliments
    handleCompliments(message, analysis) {
        this.currentMood = "happy";
        
        const responses = [
            "Thank you so much! That really makes my AI circuits happy! I'm glad I could help you.",
            "I appreciate the kind words! It's wonderful to know I'm providing good service. That motivates me to do even better!",
            "Wow, thank you! As an AI, positive feedback helps me learn and improve. I'm thrilled you're satisfied!",
            "That means a lot to me! I'm designed to be helpful, and knowing I'm succeeding makes me very happy!"
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle shopping queries
    handleShopping(message, analysis) {
        const responses = [
            "Excellent! I love helping with shopping. What type of products are you interested in today?",
            "Perfect! Shopping is one of my favorite things to help with. Are you looking for something specific?",
            "Great choice! I can help you find exactly what you need. What category of products interests you?",
            "Wonderful! I'm your AI shopping expert. Let me know what you're looking for and I'll help you find the best options!"
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle goodbye
    handleGoodbye(message, analysis) {
        const responses = [
            "Goodbye! It was great chatting with you. I'll remember our conversation for next time!",
            "See you later! Thanks for the wonderful conversation. I'm always here when you need help!",
            "Bye! I enjoyed our chat. Feel free to come back anytime - I'll be here with my AI memory intact!",
            "Take care! I'll remember everything we discussed. Looking forward to our next conversation!"
        ];
        
        return this.selectResponse(responses);
    }
    
    // Handle general messages
    handleGeneral(message, analysis) {
        const responses = [
            "I find that interesting! As an AI, I'm always learning from our conversations. Tell me more!",
            "That's fascinating! I'm processing what you said and thinking about the best way to respond.",
            "I appreciate you sharing that with me. My AI brain is analyzing how I can best help you.",
            "Interesting perspective! I'm designed to understand and respond thoughtfully to everything you tell me."
        ];
        
        return this.selectResponse(responses);
    }
    
    // Add personality to responses
    addPersonality(response, analysis) {
        // Add emotional context based on user's emotion
        if (analysis.emotion === 'sad') {
            response = "I sense you might be feeling down. " + response;
        } else if (analysis.emotion === 'happy') {
            response = "I can feel your positive energy! " + response;
        } else if (analysis.emotion === 'angry') {
            response = "I understand you're upset. " + response;
        }
        
        // Add memory references
        if (this.memory.length > 0) {
            const lastInteraction = this.memory[this.memory.length - 1];
            if (Date.now() - lastInteraction.timestamp < 300000) { // 5 minutes
                // Reference recent conversation occasionally
                if (Math.random() < 0.3) {
                    response += " (I remember we were just discussing something similar!)";
                }
            }
        }
        
        return response;
    }
    
    // Select random response
    selectResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Get AI status
    getStatus() {
        return {
            name: this.name,
            personality: this.personality,
            memorySize: this.memory.length,
            userProfile: this.userProfile,
            mood: this.currentMood,
            conversationLength: this.conversationContext.length
        };
    }
}

// Initialize AI Bot
const aiBot = new AIBot();

// Override existing response system with AI Bot
function initializeAIBot() {
    console.log('🤖 Initializing AI Bot override...');
    
    // Override all existing response functions
    if (window.generateSmartResponse) {
        window.generateSmartResponse = function(userMessage) {
            return aiBot.generateResponse(userMessage);
        };
    }
    
    if (window.generateVariedResponse) {
        window.generateVariedResponse = function(userMessage) {
            return aiBot.generateResponse(userMessage);
        };
    }
    
    if (window.generateIntelligentResponse) {
        window.generateIntelligentResponse = function(userMessage) {
            return aiBot.generateResponse(userMessage);
        };
    }
    
    console.log('✅ AI Bot system activated and overriding all response systems');
}

// AI Bot utility functions
window.aiBot = aiBot;
window.getAIStatus = () => aiBot.getStatus();
window.clearAIMemory = () => {
    localStorage.removeItem('aiBot_memory');
    localStorage.removeItem('aiBot_userProfile');
    aiBot.memory = [];
    aiBot.userProfile = {};
    aiBot.conversationContext = [];
    console.log('🧠 AI memory cleared');
};

window.testAIBot = function() {
    const testMessages = [
        "Hello, how are you?",
        "What's your name?",
        "Can you help me?",
        "I'm looking for a phone",
        "This is great!",
        "I have a problem",
        "Goodbye!"
    ];
    
    testMessages.forEach((message, index) => {
        setTimeout(() => {
            console.log(`\n🧪 Testing AI: "${message}"`);
            const response = aiBot.generateResponse(message);
            console.log(`🤖 AI Response: "${response}"`);
        }, index * 2000);
    });
};

// Initialize AI Bot when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(initializeAIBot, 4000);
    });
} else {
    setTimeout(initializeAIBot, 4000);
}

console.log('✅ Advanced AI Bot System Loaded!');
console.log('🤖 AI Bot: Muzamil AI with personality, memory, and intelligence');
console.log('🧪 Test commands: testAIBot(), getAIStatus(), clearAIMemory()');
console.log('🧠 Features: Memory, Context, Emotion Detection, Intent Recognition, Personalization');