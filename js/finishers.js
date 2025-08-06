// Finishers functionality

// Load Finishers
async function loadFinishers() {
    try {
        console.log('Loading finishers...');
        // Add cache-busting parameter to prevent caching
        const timestamp = new Date().getTime();
        const response = await fetch(`data/finisher.json?t=${timestamp}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Finisher data loaded:', data);
        
        displayFinishers(data.finishers);
        
    } catch (error) {
        console.error('Fehler beim Laden der Finisher:', error);
        
        // Show error message instead of fallback data
        const container = document.getElementById('finishers-container');
        if (container) {
            container.innerHTML = `
                <div style="color: var(--light-text); text-align: center; grid-column: 1 / -1; padding: 2rem;">
                    <p>Fehler beim Laden der Finisher-Daten.</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Fehler: ${error.message}</p>
                    <p style="font-size: 0.8rem; margin-top: 1rem;">Bitte überprüfe die finisher.json Datei.</p>
                </div>
            `;
        }
    }
}

function displayFinishers(finishers) {
    const container = document.getElementById('finishers-container');
    if (!container) {
        console.error('Finishers container not found');
        return;
    }
    
    if (!finishers || finishers.length === 0) {
        container.innerHTML = '<div class="no-finishers">Noch keine Finisher - sei der Erste!</div>';
        return;
    }
    
    // Store finishers globally for search/sort
    window.allFinishers = finishers;
    
    // Initial sort by date (newest first)
    const sortedFinishers = finishers.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderFinishersTable(sortedFinishers);
    
    // Add event listeners for search and sort
    setupSearchAndSort();
}

function renderFinishersTable(finishers) {
    const container = document.getElementById('finishers-container');
    
    container.innerHTML = finishers.map(finisher => {
        const date = new Date(finisher.date).toLocaleDateString('de-DE');
        const categoryText = finisher.category === 'gold' ? 'Gold' : finisher.category === 'silver' ? 'Silber' : 'Bronze';
        const platformText = finisher.platform === 'strava' ? 'Strava' : 'Komoot';
        const platformClass = finisher.platform === 'strava' ? 'strava' : 'komoot';
        
        // Use Komoot logo for Komoot links, Font Awesome icon for Strava
        const platformIcon = finisher.platform === 'strava' 
            ? '<i class="fab fa-strava"></i>'
            : '<img src="assets/komoot-logo.png" alt="Komoot" class="komoot-icon">';
        
        return `
            <div class="finisher-row">
                <div class="finisher-category">
                    <div class="finisher-medal-small ${finisher.category}">
                        ${finisher.category === 'gold' ? '🥇' : finisher.category === 'silver' ? '🥈' : '🥉'}
                    </div>
                    <span class="finisher-category-text">${categoryText}</span>
                </div>
                <div class="finisher-name">${finisher.name}</div>
                <div class="finisher-date">${date}</div>
                <div class="finisher-route">${finisher.route}</div>
                <div>
                    <a href="${finisher.activityLink}" target="_blank" class="finisher-link-compact ${platformClass}">
                        ${platformIcon}
                        <span class="link-text">${platformText}</span>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function setupSearchAndSort() {
    const searchInput = document.getElementById('finisher-search');
    const sortSelect = document.getElementById('finisher-sort');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Add category filter event listeners
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', handleCategoryFilter);
    });
}

function handleCategoryFilter() {
    const clickedFilter = this;
    const category = clickedFilter.dataset.category;
    
    // Update active filter button
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    clickedFilter.classList.add('active');
    
    // Apply filters
    applyFilters();
}

function applyFilters() {
    const searchTerm = document.getElementById('finisher-search').value.toLowerCase();
    const activeCategory = document.querySelector('.category-filter.active').dataset.category;
    const sortValue = document.getElementById('finisher-sort').value;
    
    let filteredFinishers = window.allFinishers;
    
    // Apply category filter
    if (activeCategory !== 'all') {
        filteredFinishers = filteredFinishers.filter(finisher => finisher.category === activeCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredFinishers = filteredFinishers.filter(finisher => 
            finisher.name.toLowerCase().includes(searchTerm) ||
            finisher.route.toLowerCase().includes(searchTerm) ||
            finisher.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply sorting
    const sortedFinishers = sortFinishers(filteredFinishers, sortValue);
    renderFinishersTable(sortedFinishers);
}

function handleSearch() {
    applyFilters();
}

function handleSort() {
    applyFilters();
}

function sortFinishers(finishers, sortValue) {
    switch (sortValue) {
        case 'date-desc':
            return finishers.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'date-asc':
            return finishers.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'name-asc':
            return finishers.sort((a, b) => a.name.localeCompare(b.name));
        case 'name-desc':
            return finishers.sort((a, b) => b.name.localeCompare(a.name));
        case 'category':
            return finishers.sort((a, b) => {
                const categoryOrder = { 'gold': 1, 'silver': 2, 'bronze': 3 };
                return categoryOrder[a.category] - categoryOrder[b.category];
            });
        case 'route':
            return finishers.sort((a, b) => a.route.localeCompare(b.route));
        default:
            return finishers;
    }
}

// Initialize finishers functionality
function initializeFinishers() {
    loadFinishers();
}

// Export function for use in other modules
window.initializeFinishers = initializeFinishers; 