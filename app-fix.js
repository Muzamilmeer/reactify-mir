// Simple App Fix - Ensure app opens
console.log('🔧 App Fix Loading...');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📱 DOM Ready - Checking app elements...');
    
    // Find elements
    const splashScreen = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');
    const openBtn = document.getElementById('open-app-btn');
    
    if (!splashScreen || !mainApp || !openBtn) {
        console.error('❌ App elements not found');
        return;
    }
    
    console.log('✅ All elements found');
    
    // Ensure splash screen is visible
    splashScreen.style.display = 'flex';
    splashScreen.style.opacity = '1';
    
    // Ensure main app is hidden
    mainApp.classList.add('hidden');
    
    // Add click handler
    openBtn.onclick = function() {
        console.log('🎯 Open button clicked');
        
        // Disable button
        openBtn.disabled = true;
        openBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening...';
        
        // Hide splash and show app
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainApp.classList.remove('hidden');
                mainApp.style.opacity = '1';
                
                console.log('✅ App opened successfully');
                
                // Load products if function exists
                if (typeof loadProducts === 'function') {
                    loadProducts();
                }
            }, 500);
        }, 1000);
    };
    
    // Auto-open after 8 seconds if user doesn't click
    setTimeout(() => {
        if (!openBtn.disabled) {
            console.log('⏰ Auto-opening app');
            openBtn.click();
        }
    }, 8000);
    
    console.log('✅ App fix applied');
});

console.log('✅ App Fix Loaded');