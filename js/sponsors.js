// Sponsors functionality

// Sponsoren laden
async function loadSponsoren(basePath = '.') {
    try {
        console.log('Loading sponsors...');
        const response = await fetch(`${basePath}/data/sponsoren.json`);
        const data = await response.json();
        console.log('Sponsor data:', data);
        
        // Sponsoren laden
        const sponsorenGrid = document.getElementById('sponsoren-grid');
        console.log('Sponsoren grid element:', sponsorenGrid);
        if (sponsorenGrid && data.sponsoren) {
            const sponsorHTML = data.sponsoren.map(sponsor => `
                <a href="${sponsor.website}" target="_blank" title="${sponsor.name}">
                    <img src="${basePath}/${sponsor.logo}" alt="${sponsor.name} Logo" class="sponsor-logo" loading="lazy">
                </a>
            `).join('');
            console.log('Sponsor HTML:', sponsorHTML);
            sponsorenGrid.innerHTML = sponsorHTML;
        }
        
        // Unterstützer laden
        const unterstuetzerGrid = document.getElementById('unterstuetzer-grid');
        console.log('Unterstuetzer grid element:', unterstuetzerGrid);
        if (unterstuetzerGrid && data.unterstuetzer) {
            const unterstuetzerHTML = data.unterstuetzer.map(unterstuetzer => `
                <a href="${unterstuetzer.website}" target="_blank" title="${unterstuetzer.name}">
                    <img src="${basePath}/${unterstuetzer.logo}" alt="${unterstuetzer.name} Logo" class="sponsor-logo" loading="lazy">
                </a>
            `).join('');
            console.log('Unterstuetzer HTML:', unterstuetzerHTML);
            unterstuetzerGrid.innerHTML = unterstuetzerHTML;
        }
    } catch (error) {
        console.error('Fehler beim Laden der Sponsoren:', error);
    }
}

// Initialize sponsors functionality
function initializeSponsors(basePath = '.') {
    loadSponsoren(basePath);
}

// Export function for use in other modules
window.initializeSponsors = initializeSponsors; 