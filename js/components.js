// Component Loader
async function loadComponent(elementSelector, componentPath) {
    try {
        console.log(`Loading component: ${componentPath}`);
        const response = await fetch(componentPath);
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        if (element) {
            element.innerHTML = html;
            console.log(`Component loaded successfully: ${componentPath}`);
        } else {
            console.warn(`Element not found for component: ${elementSelector}`);
        }
    } catch (error) {
        console.error(`Failed to load component ${componentPath}:`, error);
    }
}

// Load shared components
async function loadSharedComponents() {
    console.log('Loading shared components...');
    await Promise.all([
        loadComponent('[data-component="nav"]', 'components/nav.html'),
        loadComponent('[data-component="footer"]', 'components/footer.html'),
        loadComponent('[data-component="sponsoren"]', 'components/sponsoren.html')
    ]);
    
    console.log('Shared components loaded successfully');
    // Re-initialize navigation after components are loaded
    initializeNavigation();
    initializeSponsors();
}

// Mobile Navigation Toggle
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Export functions for use in other modules
window.loadSharedComponents = loadSharedComponents;
window.initializeNavigation = initializeNavigation; 