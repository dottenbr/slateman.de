// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

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

    // Navbar background on scroll
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 15, 35, 0.8)';
                navbar.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.1)';
            } else {
                navbar.style.background = 'rgba(15, 15, 35, 0.7)';
                navbar.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.1)';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.route-card, .finisher-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Add hover effects for cards
    document.querySelectorAll('.route-card, .finisher-card, .contact-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add mobile menu styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 70px;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 2rem;
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            
            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
            }
            
            .nav-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(mobileStyles);

    // Add lazy loading for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Add focus management for accessibility
    document.querySelectorAll('.btn, .social-link, .info-link').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });

    // Add reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('*').forEach(element => {
            element.style.animationDuration = '0.01ms';
            element.style.animationDelay = '0.01ms';
            element.style.transitionDuration = '0.01ms';
        });
    }
    
    // Load Finishers
    async function loadFinishers() {
        try {
            console.log('Loading finishers...');
            const response = await fetch('finisher.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('Finisher data loaded:', data);
            
            displayFinishers(data.finishers);
            
        } catch (error) {
            console.error('Fehler beim Laden der Finisher:', error);
            
            // Fallback: Verwende eingebettete Daten für Tests
            console.log('Using fallback finisher data...');
            const fallbackData = {
                "finishers": [
                    {
                        "date": "2025-01-15",
                        "category": "gold",
                        "name": "Max Mustermann",
                        "route": "Slateman Hunsrück-Soonwald",
                        "activityLink": "https://www.strava.com/activities/123456789",
                        "platform": "strava"
                    },
                    {
                        "date": "2025-01-20",
                        "category": "silver", 
                        "name": "Anna Schmidt",
                        "route": "Slateman Hunsrück-Hochwald",
                        "activityLink": "https://www.komoot.com/de-de/tour/123456789",
                        "platform": "komoot"
                    }
                ]
            };
            
            displayFinishers(fallbackData.finishers);
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
                            ${platformText}
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
    
    // Load finishers on page load
    loadFinishers();
    
    console.log('Slateman Hunsrück Website loaded successfully!');
}); 