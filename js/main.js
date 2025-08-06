// Main functionality initialization
function initializeMainFunctionality() {
    // Initialize UI functionality
    initializeUI();
    
    // Initialize finishers functionality
    initializeFinishers();
    
    // Initialize sponsors functionality
    initializeSponsors();
    
    console.log('Slateman Hunsrück Website loaded successfully!');
}

// Main initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Load shared components first
    await loadSharedComponents();
    
    // Initialize the rest of the functionality after components are loaded
    initializeMainFunctionality();
}); 