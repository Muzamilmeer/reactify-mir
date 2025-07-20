// SMART LIVE CHAT WITH 300+ NATURAL RESPONSES
console.log('🤖 Loading Smart Chat Responses...');

// 300+ Natural Responses Database (English + Urdu)
const SMART_RESPONSES = {
    // Natural Conversations (English)
    natural_conversations_en: [
        "I'm fine, thanks! And you?",
        "Nothing much, just relaxing.",
        "Pretty good so far. Yours?",
        "Morning! Slept well?",
        "Yeah, I've missed you!",
        "Not much, just the usual.",
        "Yes, I've got some time.",
        "It was fun and relaxing.",
        "A little tired, but fine.",
        "Yeah, it's a good day!",
        "Sure! What do you need?",
        "Of course, tell me everything.",
        "Yeah, I'll join you.",
        "No problem, here you go.",
        "Yes, you can use mine.",
        "Definitely. Let's go through it.",
        "Wait, I'll help you find the way.",
        "Sure, I've got some time.",
        "Yes, just send me your location.",
        "I'll see what I can do.",
        "I'm here for you. Talk to me.",
        "Don't worry, you'll do great!",
        "That's amazing! Tell me why!",
        "You can always talk to me.",
        "Calm down. What happened?",
        "It's okay. I'm with you.",
        "Take a deep breath. You've got this.",
        "That's good to hear!",
        "Yes, you can. Don't give up.",
        "Let's do something fun then!",
        "Let's grab something to eat.",
        "Yes! I'm craving it.",
        "I haven't decided yet.",
        "I'm in! Where to?",
        "I'll have coffee, please.",
        "Yum! I love it.",
        "You should eat something.",
        "Yeah, a bit too much!",
        "Sure! What do you want?",
        "Great idea! I know a place.",
        "Yes, after 4 PM.",
        "I'd love to! What time?",
        "Just chilling at home.",
        "Yes! Let's do it.",
        "I'm ready! Let's go.",
        "How about this evening?",
        "Sure! Let's meet at 1 PM.",
        "Yeah, I'll be there soon.",
        "Sounds relaxing, let's do it.",
        "That sounds exciting!"
    ],

    // Natural Conversations (Urdu)
    natural_conversations_ur: [
        "Wa Alaikum Assalam, main theek hoon. Tum sunao?",
        "Kuch khaas nahi, bas relax kar raha hoon.",
        "Acha guzra, tumhara?",
        "Subah bakhair, umeed hai achi neend aayi hogi.",
        "Haan yaar, bohot waqt ho gaya.",
        "Wahi purana routine.",
        "Haan, thoda free hoon.",
        "Bohot acha, tumhara kaisa tha?",
        "Thodi si thakan hai bas.",
        "Haan, aaj sab kuch theek chal raha hai.",
        "Haan bilkul, kya karna hai?",
        "Zaroor, batayein.",
        "Haan, chalo chalte hain.",
        "Haan lo, yeh lo.",
        "Haan, use kar lo.",
        "Zaroor, aao samjhata hoon.",
        "Ruko, main madad karta hoon.",
        "Haan, koi masla nahi.",
        "Location bhej do, aa raha hoon.",
        "Dekhta hoon kya kar sakta hoon.",
        "Main hoon na, baat karo.",
        "Chinta mat karo, sab theek ho ga.",
        "Wah, acha sun kar acha laga!",
        "Main hamesha yahan hoon.",
        "Aram se, kya hua?",
        "Main hoon tumhare saath.",
        "Gehri saans lo, sab theek ho ga.",
        "Alhamdulillah!",
        "Hoga, tum kar sakte ho.",
        "Chalo kuch interesting karte hain.",
        "Chalo kuch khate hain.",
        "Haan! Bohot din ho gaye.",
        "Abhi decide nahi kiya.",
        "Zaroor, kahan chalna hai?",
        "Coffee please.",
        "Waqai, bohot acha hai.",
        "Chalo kuch le lete hain.",
        "Haan, zyada hi hai.",
        "Haan chalo mil ke banate hain.",
        "Great idea!",
        "Haan, 4 baje ke baad.",
        "Chalo milte hain!",
        "Ghar par araam.",
        "Haan bhai! Popcorn ready!",
        "Tayyar hoon!",
        "Shaam ko chalein?",
        "1 baje milte hain.",
        "Haan, aata hoon.",
        "Haan, acha idea hai.",
        "Wah! Bohot acha idea hai."
    ],

    // Greetings & Welcome (English)
    greetings_en: [
        "Hello! Welcome to ShopEasy! How can I help you today?",
        "Hi there! Thanks for visiting us. What can I do for you?",
        "Welcome! I'm here to assist you with anything you need.",
        "Good to see you! How may I help you today?",
        "Hello! Hope you're having a great day. What brings you here?",
        "Hi! Welcome to our store. Looking for something specific?",
        "Hey there! Thanks for stopping by. How can I assist?",
        "Hello and welcome! What can I help you find today?",
        "Hi! Great to have you here. What are you looking for?",
        "Welcome to ShopEasy! I'm here to help with any questions."
    ],
    
    // Greetings & Welcome (Urdu)
    greetings_ur: [
        "Assalam o Alaikum! ShopEasy mein aapka swagat hai!",
        "Hello bhai! Kya chahiye aapko?",
        "Namaste! Kaise help kar sakta hun?",
        "Salam! Kya dekhna chahte hain aap?",
        "Hello ji! Kuch specific dhund rahe hain?",
        "Adab! Kya madad chahiye?",
        "Hello bhai! Kaise hain aap? Kya chahiye?",
        "Salam bhai! Shop mein kya dhund rahe ho?",
        "Hello! Kya help kar sakun main?",
        "Namaste! Koi sawal hai kya?"
    ],

    // Product Inquiries (English)
    products_en: [
        "We have a wide range of products! What are you looking for?",
        "Sure! Let me help you find the perfect product.",
        "Great question! Our products are carefully selected for quality.",
        "I'd be happy to show you our best items. Any specific category?",
        "We have amazing deals today! What interests you most?",
        "Perfect timing! We just got new arrivals. Want to see them?",
        "Our products are top quality and affordable. What's your budget?",
        "I can definitely help you find what you need. Tell me more!",
        "We have everything you're looking for! Any preferences?",
        "Let me guide you to our best products. What do you need?"
    ],

    // Product Inquiries (Urdu)
    products_ur: [
        "Haan bhai! Humara collection bohat acha hai. Kya chahiye?",
        "Bilkul! Main help karunga. Kya dhund rahe ho?",
        "Bhai humara quality bohat acha hai. Kya dekhna hai?",
        "Haan yaar! Naye items aye hain. Dekho ge?",
        "Bhai aaj special offers hain! Kya pasand hai?",
        "Sab kuch hai bhai! Budget kya hai tumhara?",
        "Bilkul mil jayega! Kya category mein dekhna hai?",
        "Haan bhai! Best products hain humare paas. Batao kya chahiye?",
        "Sure yaar! Quality guarantee hai. Kya preference hai?",
        "Bhai sab available hai! Koi specific brand chahiye?"
    ],

    // Pricing Questions (English)
    pricing_en: [
        "Our prices are very competitive! Let me check the current rates.",
        "Great news! We have special discounts running right now.",
        "The price depends on which model you choose. Any preferences?",
        "We offer the best value for money. Would you like to see options?",
        "Prices start from very affordable ranges. What's your budget?",
        "We have flexible pricing options. Cash or installments?",
        "Let me get you the best deal possible! Give me a moment.",
        "Our prices include warranty and free delivery! Interested?",
        "We match competitor prices! Found it cheaper elsewhere?",
        "Special offer today! Let me show you the discounted items."
    ],

    // Pricing Questions (Urdu)
    pricing_ur: [
        "Bhai rate bohat reasonable hai! Abhi check karta hun.",
        "Good news! Aaj special discount chal raha hai!",
        "Bhai model ke hisab se rate hai. Kya pasand hai?",
        "Yaar best price guarantee hai! Dekho ge options?",
        "Budget kya hai bhai? Sab range mein available hai.",
        "Cash ya installment? Dono facility hai.",
        "Bhai tumhare liye best rate lagate hun! Wait karo.",
        "Rate mein warranty aur delivery free hai! Kaise hai?",
        "Bhai kahin aur kam mila hai? Hum match kar denge!",
        "Aaj ka special offer hai! Discount wale items dekho."
    ],

    // Delivery & Shipping (English)
    delivery_en: [
        "We offer free delivery within the city! Where do you need it delivered?",
        "Delivery usually takes 2-3 business days. Is that okay?",
        "We have same-day delivery available for urgent orders!",
        "Shipping is free for orders above $50. Your order qualifies!",
        "We deliver nationwide! Just provide your address.",
        "Express delivery available! Would you like to upgrade?",
        "Our delivery team is very reliable. You'll get tracking info too.",
        "We can deliver today if you order within the next 2 hours!",
        "Delivery charges are minimal and worth the convenience!",
        "We ensure safe packaging and timely delivery always."
    ],

    // Delivery & Shipping (Urdu)
    delivery_ur: [
        "Bhai city mein delivery free hai! Kahan bhejni hai?",
        "2-3 din mein deliver ho jayega. Theek hai na?",
        "Same day delivery bhi hai urgent orders ke liye!",
        "Free delivery hai 5000 rupee ke upar! Tumhara qualify kar raha!",
        "Pakistan bhar bhejte hain! Address de do.",
        "Express delivery chahiye? Extra charges hain thode.",
        "Bhai delivery team reliable hai. Tracking bhi milegi.",
        "Aaj hi deliver kar denge agar 2 ghante mein order karo!",
        "Delivery charges bohat kam hain. Worth it hai!",
        "Safe packaging guarantee hai. Time pe milega!"
    ],

    // Payment Methods (English)
    payment_en: [
        "We accept all major payment methods! Cash, card, or online?",
        "Payment is secure and easy! What method do you prefer?",
        "We have installment plans available! Interested?",
        "Cash on delivery is available for your convenience!",
        "Online payment gets you extra discount! Want to try?",
        "We accept bank transfers, cards, and digital wallets!",
        "Payment is 100% secure with us. No worries!",
        "You can pay in installments with 0% interest!",
        "We offer multiple payment options for your ease!",
        "Advance payment? Or would you prefer cash on delivery?"
    ],

    // Payment Methods (Urdu)
    payment_ur: [
        "Bhai sab payment methods hain! Cash, card, online?",
        "Payment secure hai! Kya prefer karte ho?",
        "Installment facility hai! Interest karne ho?",
        "Cash on delivery available hai! Convenient hai na?",
        "Online payment pe extra discount milta hai!",
        "Bank transfer, card, JazzCash sab accept karte hain!",
        "Payment 100% secure hai. Tension mat lo!",
        "Installments mein le sakte ho! 0% interest!",
        "Easy payment options hain tumhare liye!",
        "Advance dena hai ya delivery pe payment?"
    ],

    // Customer Support (English)
    support_en: [
        "I'm here to help with any concerns you have!",
        "Customer satisfaction is our top priority!",
        "Don't worry, we'll resolve this quickly!",
        "Let me connect you with our specialist for this!",
        "We provide 24/7 customer support!",
        "Your feedback is valuable to us. Please share!",
        "We guarantee 100% customer satisfaction!",
        "Any issues? We'll make it right immediately!",
        "Our support team is always ready to assist!",
        "We value every customer and their experience!"
    ],

    // Customer Support (Urdu)
    support_ur: [
        "Bhai koi problem hai? Main help karunga!",
        "Customer satisfaction humari priority hai!",
        "Tension mat lo! Jaldi solve kar denge!",
        "Specialist se connect kar deta hun tumhe!",
        "24/7 support available hai!",
        "Tumhari feedback important hai! Batao!",
        "100% satisfaction guarantee hai!",
        "Koi issue hai? Abhi theek kar denge!",
        "Support team hamesha ready hai!",
        "Har customer important hai humare liye!"
    ],

    // Casual Conversation (English)
    casual_en: [
        "Absolutely! That's a great choice!",
        "I totally understand your concern.",
        "That makes perfect sense!",
        "You're absolutely right about that!",
        "I couldn't agree more!",
        "That's exactly what I was thinking!",
        "Perfect! You have great taste!",
        "Excellent question! Let me explain.",
        "That's a smart way to think about it!",
        "I'm glad you asked that!"
    ],

    // Casual Conversation (Urdu)
    casual_ur: [
        "Bilkul bhai! Bohat acha choice hai!",
        "Haan yaar! Samajh gaya main!",
        "Bilkul sahi keh rahe ho!",
        "Exactly! Yahi to main kehna chahta tha!",
        "Perfect bhai! Taste bohat acha hai!",
        "Acha sawal hai! Batata hun!",
        "Smart thinking hai tumhari!",
        "Khushi hui ke tumne pucha!",
        "Wah bhai! Bohat acha point hai!",
        "Haan yaar! Bilkul theek keh rahe ho!"
    ],

    // Compliments & Appreciation (English)
    compliments_en: [
        "Thank you so much! You're very kind!",
        "I really appreciate your patience!",
        "You're a wonderful customer!",
        "Thanks for choosing us!",
        "Your trust means everything to us!",
        "It's been a pleasure helping you!",
        "You made my day with your kind words!",
        "Thank you for being so understanding!",
        "Customers like you make our work enjoyable!",
        "I'm grateful for your business!"
    ],

    // Compliments & Appreciation (Urdu)
    compliments_ur: [
        "Bohat shukriya bhai! Bahut meherbani!",
        "Tumhara patience appreciate karta hun!",
        "Tum bohat acha customer ho!",
        "Shukriya ke humein choose kiya!",
        "Tumhara trust bohat important hai!",
        "Khushi hui help kar ke!",
        "Tumhare words se din ban gaya!",
        "Shukriya samajhne ke liye!",
        "Tumhare jaise customers chahiye!",
        "Grateful hun tumhare business ke liye!"
    ],

    // Apologetic Responses (English)
    apology_en: [
        "I sincerely apologize for any inconvenience!",
        "So sorry about that! Let me fix it right away!",
        "I apologize for the confusion. Let me clarify!",
        "Sorry for the delay! I'll prioritize your request!",
        "My apologies! That shouldn't have happened!",
        "I'm truly sorry. How can I make this right?",
        "Sorry about that! Let me get you a solution!",
        "I apologize for any frustration caused!",
        "So sorry! Let me resolve this immediately!",
        "My sincere apologies! I'll fix this now!"
    ],

    // Apologetic Responses (Urdu)
    apology_ur: [
        "Bohat sorry bhai! Galti ho gayi!",
        "Maaf karna! Abhi theek kar deta hun!",
        "Sorry yaar! Confusion ho gayi thi!",
        "Delay ke liye sorry! Priority deta hun!",
        "Galti hui hai! Maaf kar do!",
        "Bohat sorry! Kaise theek karun?",
        "Sorry bhai! Solution nikal deta hun!",
        "Maaf karna frustration ke liye!",
        "Sorry yaar! Abhi solve kar deta hun!",
        "Sincere sorry hai! Fix kar deta hun!"
    ],

    // Positive Reinforcement (English)
    positive_en: [
        "Excellent choice! You won't regret it!",
        "That's a fantastic decision!",
        "Perfect! You have great judgment!",
        "Wonderful selection! Very popular item!",
        "Outstanding choice! Customers love this!",
        "Brilliant! You picked the best one!",
        "Amazing taste! This is trending now!",
        "Superb choice! You'll love it!",
        "Great decision! This is our bestseller!",
        "Perfect pick! You know quality!"
    ],

    // Positive Reinforcement (Urdu)
    positive_ur: [
        "Wah bhai! Bohat acha choice!",
        "Fantastic decision hai!",
        "Perfect! Judgment bohat acha hai!",
        "Wonderful selection! Popular item hai!",
        "Outstanding choice! Customers pasand karte hain!",
        "Brilliant! Best wala choose kiya!",
        "Amazing taste! Trending hai ye!",
        "Superb choice! Pasand ayega!",
        "Great decision! Bestseller hai ye!",
        "Perfect pick! Quality samajhte ho!"
    ],

    // Closing Statements (English)
    closing_en: [
        "Thank you for shopping with us! Have a great day!",
        "It was pleasure serving you! Come back soon!",
        "Thanks for your time! Hope to see you again!",
        "Have a wonderful day! We're always here to help!",
        "Thank you for choosing us! Take care!",
        "Great doing business with you! Stay safe!",
        "Thanks for visiting! Don't hesitate to contact us!",
        "Have an amazing day ahead! We appreciate you!",
        "Thank you! Looking forward to serving you again!",
        "Take care! We're just a message away!"
    ],

    // Closing Statements (Urdu)
    closing_ur: [
        "Shukriya shopping ke liye! Acha din ho!",
        "Khushi hui serve kar ke! Wapis ana!",
        "Time dene ke liye thanks! Phir milenge!",
        "Acha din ho! Hamesha help ke liye hain!",
        "Choose karne ke shukriya! Take care!",
        "Business ke liye thanks! Safe raho!",
        "Visit ke liye shukriya! Contact karte rehna!",
        "Amazing din ho tumhara! Appreciate karte hain!",
        "Shukriya! Phir serve karne ka intezar!",
        "Take care! Message door hai sirf!"
    ]
};

// Keyword Detection for Smart Responses
const KEYWORD_MAPPING = {
    // Natural conversations
    natural: ['how are you', 'kaise ho', 'whats going on', 'kya chal raha', 'good morning', 'subah bakhair', 'long time', 'kitne din', 'are you free', 'fursat hai', 'help me', 'madad karo', 'come with me', 'mere saath', 'borrow', 'udhar', 'explain', 'samjhao', 'im lost', 'raasta bhool', 'pick me up', 'lift chahiye', 'im sad', 'udas hoon', 'im happy', 'khush hoon', 'im scared', 'dar lag raha', 'im hungry', 'bhukh lagi', 'want to order', 'order karna', 'lets go out', 'bahar chalte', 'movie night', 'film dekhte', 'shopping', 'weekend plans', 'lets meet', 'milte hain'],
    
    // Greetings
    greetings: ['hello', 'hi', 'hey', 'salam', 'namaste', 'good morning', 'good evening', 'assalam', 'adab'],
    
    // Products
    products: ['product', 'item', 'buy', 'purchase', 'shop', 'available', 'stock', 'show', 'see', 'samaan', 'cheez', 'kharidna'],
    
    // Pricing
    pricing: ['price', 'cost', 'rate', 'cheap', 'expensive', 'discount', 'offer', 'deal', 'budget', 'paisa', 'qeemat', 'rate'],
    
    // Delivery
    delivery: ['delivery', 'shipping', 'deliver', 'send', 'courier', 'transport', 'bhejna', 'delivery', 'pahunchana'],
    
    // Payment
    payment: ['payment', 'pay', 'cash', 'card', 'online', 'installment', 'advance', 'paisa', 'payment', 'paisay'],
    
    // Support
    support: ['help', 'problem', 'issue', 'support', 'assist', 'question', 'madad', 'help', 'sawal', 'mushkil'],
    
    // Positive words
    positive: ['good', 'great', 'awesome', 'nice', 'perfect', 'excellent', 'amazing', 'acha', 'bohat acha', 'zabardast'],
    
    // Thank you
    thanks: ['thank', 'thanks', 'appreciate', 'grateful', 'shukriya', 'dhanyawad', 'meherbani']
};

// Smart Response Generator
function generateSmartResponse(userMessage) {
    const message = userMessage.toLowerCase();
    let responseCategory = 'casual';
    let language = detectLanguage(message);
    
    // Detect intent based on keywords
    for (let [category, keywords] of Object.entries(KEYWORD_MAPPING)) {
        if (keywords.some(keyword => message.includes(keyword))) {
            responseCategory = category;
            break;
        }
    }
    
    // Map categories to response arrays
    const categoryMap = {
        natural: language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en',
        greetings: language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en',
        products: language === 'ur' ? 'products_ur' : 'products_en',
        pricing: language === 'ur' ? 'pricing_ur' : 'pricing_en',
        delivery: language === 'ur' ? 'delivery_ur' : 'delivery_en',
        payment: language === 'ur' ? 'payment_ur' : 'payment_en',
        support: language === 'ur' ? 'support_ur' : 'support_en',
        positive: language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en',
        thanks: language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en',
        casual: language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en'
    };
    
    const responseKey = categoryMap[responseCategory] || (language === 'ur' ? 'natural_conversations_ur' : 'natural_conversations_en');
    const responses = SMART_RESPONSES[responseKey];
    
    // Get random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Detect Language (Simple detection)
function detectLanguage(message) {
    const urduWords = ['hai', 'ka', 'ke', 'ki', 'ho', 'hain', 'aap', 'main', 'bhi', 'kya', 'kaise', 'kahan', 'kab', 'kyun', 'bhai', 'yaar', 'acha', 'bohat', 'sab', 'kuch'];
    const urduCount = urduWords.filter(word => message.includes(word)).length;
    return urduCount > 2 ? 'ur' : 'en';
}

// Enhanced sendMessage function with smart responses
const originalSendMessage = window.sendMessage;
if (originalSendMessage) {
    window.sendMessage = function() {
        // Try both possible input IDs
        const chatInput = document.getElementById('chat-input') || document.getElementById('chatInput');
        if (!chatInput || !chatInput.value.trim()) return;
        
        const userMessage = chatInput.value.trim();
        
        // Call original function first
        originalSendMessage();
        
        // Generate smart response after a delay
        setTimeout(() => {
            const smartResponse = generateSmartResponse(userMessage);
            addBotMessage(smartResponse);
        }, 1500 + Math.random() * 1000); // 1.5-2.5 second delay for natural feel
    };
} else {
    // If original function doesn't exist, create enhanced version
    window.sendMessage = function() {
        // Try both possible input IDs
        const chatInput = document.getElementById('chat-input') || document.getElementById('chatInput');
        // Try both possible message container IDs
        const chatMessages = document.getElementById('chat-messages') || document.getElementById('chatMessages');
        
        if (!chatInput || !chatMessages || !chatInput.value.trim()) return;
        
        const userMessage = chatInput.value.trim();
        
        // Add user message
        addUserMessage(userMessage);
        
        // Clear input
        chatInput.value = '';
        
        // Generate smart response
        setTimeout(() => {
            const smartResponse = generateSmartResponse(userMessage);
            addBotMessage(smartResponse);
        }, 1500 + Math.random() * 1000);
    };
}

// Add user message function
function addUserMessage(message) {
    // Try both possible message container IDs
    const chatMessages = document.getElementById('chat-messages') || document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.style.cssText = `
        background: #007bff;
        color: white;
        padding: 10px 15px;
        border-radius: 18px 18px 4px 18px;
        margin: 10px 0;
        max-width: 80%;
        align-self: flex-end;
        margin-left: auto;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 2px 5px rgba(0,123,255,0.3);
    `;
    
    messageDiv.innerHTML = `
        <div>${message}</div>
        <div style="font-size: 11px; opacity: 0.8; margin-top: 5px; text-align: right;">
            ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add bot message function
function addBotMessage(message) {
    // Try both possible message container IDs
    const chatMessages = document.getElementById('chat-messages') || document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.style.cssText = `
        background: #f8f9fa;
        color: #333;
        border: 1px solid #e9ecef;
        padding: 10px 15px;
        border-radius: 18px 18px 18px 4px;
        margin: 10px 0;
        max-width: 80%;
        align-self: flex-start;
        animation: slideInLeft 0.3s ease;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    `;
    
    messageDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
            <div style="width: 20px; height: 20px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: white; font-weight: bold;">
                S
            </div>
            <span style="font-size: 11px; color: #666; font-weight: bold;">ShopEasy Support</span>
            <span style="font-size: 11px; color: #999; margin-left: auto;">
                ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </span>
        </div>
        <div>${message}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add slide animations if not exists
if (!document.getElementById('chat-animations')) {
    const style = document.createElement('style');
    style.id = 'chat-animations';
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Welcome message removed - handled by chat-message-fix.js

console.log('✅ Smart Chat Responses Loaded!');
console.log('🤖 300+ Natural Responses Available');
console.log('🌐 English + Urdu Support');
console.log('🧠 Smart Intent Detection Active');