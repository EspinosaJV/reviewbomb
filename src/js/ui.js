import * as utils from './utils.js';
import { getReviews, deleteReview } from './api.js';

let isAllExpanded = false;

export function showErrorModal(message) {
    const modalContent = document.querySelector('#modal-1 .modal__content');
    if (modalContent) {
        modalContent.innerHTML = '<p class="text-red-500">${message}</p>';
    }
    MicroModal.show('modal-1');
}

export function headerEventListeners() {
    const headerMenuDropdownBtn = document.querySelectorAll('.js-reviewbomb-menu-btn');
    const topBombsBtn = document.querySelectorAll('.js-top-bombs-btn');
    const recentBombsBtn = document.querySelectorAll('.js-recent-bombs-btn');
    const genreBombsBtn = document.querySelectorAll('.js-genre-bombs-btn');
    const allBombsBtn = document.querySelectorAll('.js-all-bombs-btn');
    const reviewBombBtn = document.querySelectorAll('.js-bomb-btn');
    const reviewBombHeaderMobileButton = document.getElementById('reviewbomb-header-banner-mobile-portrait');

    topBombsBtn.forEach(button => {
        button.addEventListener('click', utils.handleTopBombsClick);
    });

    recentBombsBtn.forEach(button => {
        button.addEventListener('click', utils.handleRecentBombsClick);
    })

    genreBombsBtn.forEach(button => {
        button.addEventListener('click', utils.handleGenreBombsClick);
    })

    allBombsBtn.forEach(button => {
        button.addEventListener('click', utils.handleAllBombsClick);
    })

    headerMenuDropdownBtn.forEach(button => {
        button.addEventListener('click', utils.handleMenuDropdownClick);
    })

    reviewBombBtn.forEach(button => {
        button.addEventListener('click', utils.handleBombClick);
    })

    reviewBombHeaderMobileButton.addEventListener('click', utils.closeMobileNavigationMenu);

    document.addEventListener('click', (e) => {
        const menu = document.getElementById('reviewbomb-navigation-menu');
        const btn = document.querySelector('.js-reviewbomb-menu-btn');

        if (menu && menu.classList.contains('visible') && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('visible', 'opacity-100', 'scale-100', 'translate-y-0');
            menu.classList.add('invisible', 'opacity-0', 'scale-95', '-translate-y-2');
        }
    });
}

export function initializeStarRating() {
    const starContainer = document.getElementById('star-rating-container');

    if (!starContainer) return;

    const stars = starContainer.querySelectorAll('.star-btn');
    const ratingInput = document.getElementById('rating-value');

    let currentRating = 0;

    const updateStars = (rating) => {
        stars.forEach(star => {
            const starValue = parseInt(star.dataset.value);
            if (starValue <= rating) {
                star.querySelector('svg').classList.remove('text-gray-400');
                star.querySelector('svg').classList.add('text-yellow-400');
            } else {
                star.querySelector('svg').classList.remove('text-yellow-400');
                star.querySelector('svg').classList.add('text-gray-400');
            }
        });
    };

    stars.forEach(star => {
        star.addEventListener('click', () => {
            console.log("The star has been clicked.");
            currentRating = parseInt(star.dataset.value);
            ratingInput.value = currentRating;
            updateStars(currentRating);
        });

        star.addEventListener('mouseover', () => {
            updateStars(parseInt(star.dataset.value));
        });
    });

    starContainer.addEventListener('mouseout', () => {
        updateStars(currentRating);
    });
}

function createCardHtml(review) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        const color = i <= review.rating ? 'text-yellow-400' : 'text-gray-400';
        starsHtml += `
            <svg class="w-8 h-8 ${color}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>`;
    }
    return `
        <div class="mt-12 border border-background w-full flex flex-col items-center relative group">
            <button class="js-delete-bomb-btn absolute top-5 right-5 text-primary hover:text-black transition-colors duration-200" data-id="${review.id}" aria-label="Delete review">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div>
                <h1 class="mt-5 uppercase font-header font-bold text-background text-3xl">${review.title}</h1>
                <p class="text-center font-header font-bold text-primary uppercase text-sm">${review.genre}</p>
            </div>
            <div class="mt-5 flex flex-row gap-4">${starsHtml}</div>
            <div class="pb-4">
                <p class=px-4 mt-5 font-body text-background text-justify">${review.description}</p>
            </div>
        </div>`;
}
export function renderTopBombs(){
    const container = document.getElementById('desktop-top-bombs-container');
    if (!container) return;

    const reviews = getReviews();
    const top3 = reviews.sort((a, b) => b.rating - a.rating).slice(0, 3);

    container.innerHTML = '';

    top3.forEach(review => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            const color = i <= review.rating ? 'text-yellow-400' : 'text-gray-400';
            starsHtml += `
                <svg class="w-8 h-8 ${color}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>`;
        }

        const cardHtml = `
            <div class="mt-12 border border-background w-full flex flex-col items-center relative group">
                <button class="js-delete-bomb-btn absolute top-5 right-5 text-primary hover:text-black transition-colors duration-200" data-id="${review.id}" aria-label="Delete review">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div>
                    <h1 class="mt-5 uppercase font-header font-bold text-background text-3xl">${review.title}</h1>
                    <p class="text-center font-header font-bold text-primary uppercase text-sm">${review.genre}</p>
                </div>
                <div class="mt-5 flex flex-row gap-4">${starsHtml}</div>
                <div class="pb-4">
                    <p class="px-4 mt-5 font-body text-background text-justify">${review.description}</p>
                </div>
            </div>`;
        
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

export function renderRecentBombs() {
    const container = document.getElementById('desktop-recent-bombs-container');
    if (!container) return;
    const reviews = getReviews();

    // Sort reviews by ID as we used Date.now as the values for ID

    const recent3 = reviews.sort((a, b) => b.id - a.id).slice(0, 3);

    container.innerHTML = '';
    recent3.forEach(review => {
        container.insertAdjacentHTML('beforeend', createCardHtml(review));
    });
}

// Helper to clear modal after submission of reviewbomb
export function resetModalForm(){
    document.getElementById('movie-title-input').value = '';
    document.getElementById('movie-genre-input').value = '';
    document.getElementById('modal-genre-text').textContent = 'Select Genre';
    document.getElementById('modal-genre-list').classList.add('hidden');
    document.getElementById('reviewbomb-description-input').value = '';
    document.getElementById('rating-value').value = '0';

    const stars = document.querySelectorAll('#star-rating-container .star-btn svg');
    stars.forEach(s => {
        s.classList.remove('text-yellow-400');
        s.classList.add('text-gray-400');
    });
}

export function initializeGenreFilter() {
    const filterBtn = document.getElementById('genre-filter-btn');
    const dropdown = document.getElementById('genre-filter-dropdown');
    const options = document.querySelectorAll('.js-genre-option');

    if (filterBtn && dropdown) {
        filterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!filterBtn.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    }

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedGenre = e.target.getAttribute('data-genre');
            renderGenreBombs(selectedGenre);
            dropdown.classList.add('hidden');
        });
    });
}

export function renderGenreBombs(filterGenre = 'All') {
    const container = document.getElementById('desktop-genre-bombs-container');
    if (!container) return;

    const reviews = getReviews();

    let filteredReviews = filterGenre === 'All'
        ? reviews
        : reviews.filter(review => review.genre === filterGenre);

    filteredReviews.sort((a, b) => b.rating - a.rating);

    const top3 = filteredReviews.slice(0, 3);

    container.innerHTML = '';

    if (top3.length === 0) {
        container.innerHTML = `<p class="font-header text-2xl text-background ml-12">No bombs found for ${filterGenre}.</p>`;
        return;
    }

    top3.forEach(review => {
        container.insertAdjacentHTML('beforeend', createGenreCardHtml(review));
    });
}

// Internal helper for card HTML structure
function createGenreCardHtml(review) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        const color = i <= review.rating ? 'text-yellow-400' : 'text-gray-400';
        starsHtml += `
            <svg class="w-8 h-8 ${color}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>`;
    }

    return `
        <div class="mt-12 border border-background w-full flex flex-col items-center relative group">
            <button class="js-delete-bomb-btn absolute top-5 right-5 text-primary hover:text-black transition-colors duration-200" data-id="${review.id}" aria-label="Delete review">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div>
                <h1 class="mt-5 uppercase font-header font-bold text-background text-3xl">${review.title}</h1>
                <p class="text-center font-header font-bold text-primary uppercase text-sm">${review.genre}</p>
            </div>
            <div class="mt-5 flex flex-row gap-4">${starsHtml}</div>
            <div class="pb-4">
                <p class="px-4 mt-5 font-body text-background text-justify">${review.description}</p>
            </div>
        </div>`;
}

export function initializeAllBombs() {
    const expandBtn = document.getElementById('expand-all-bombs-btn');

    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            isAllExpanded = !isAllExpanded;

            if (isAllExpanded) {
                expandBtn.style.transform = 'rotate(180deg)';
            } else {
                expandBtn.style.transform = 'rotate(0deg)';
            }

            renderAllBombs();
        });
    }
}

export function renderAllBombs() {
    const container = document.getElementById('desktop-all-bombs-container');
    if (!container) return;

    const reviews = getReviews();
    const sortedReviews = reviews.slice().sort((a, b) => b.id - a.id);
    const reviewsToShow = isAllExpanded ? sortedReviews : sortedReviews.slice(0, 3);

    container.innerHTML = '';

    if (reviewsToShow.length === 0) {
        container.innerHTML = `<p class="font-header text-2xl text-background col-span-3 ml-12">No bombs recorded yet.</p>`;
        return;
    }

    reviewsToShow.forEach(review => {
        const cardHtml = createAllBombsCardHtml(review);
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

function createAllBombsCardHtml(review) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            const color = i <= review.rating ? 'text-yellow-400' : 'text-gray-400';
            starsHtml += `
                <svg class="w-8 h-8 ${color}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>`;
        }

        return `
            <div class="mt-12 border border-background w-full flex flex-col items-center relative group">
                <button class="js-delete-bomb-btn absolute top-5 right-5 text-primary hover:text-black transition-colors duration-200" data-id="${review.id}" aria-label="Delete review">
                    <svg xmlns="http://wwww.w3.org/2000/svg" class="h-8 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div>
                    <h1 class="mt-5 uppercase font-header font-bold text-background text-3xl">${review.title}</h1>
                    <p class="text-center font-header font-bold text-primary uppercase text-sm">${review.genre}</p>
                </div>
                <div class="mt-5 flex flex-row gap-4">${starsHtml}</div>
                <div class="pb-4">
                    <p class="px-4 mt-5 font-body text-background text-justify">${review.description}</p>
                </div>
            </div>`;
    }
}

// FUNCTION TO HANDLE DELETION
export function setupGlobalDeleteListener() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.js-delete-bomb-btn');

        if (btn) {
            const id = parseInt(btn.dataset.id);

            deleteReview(id);

            renderTopBombs();
            renderRecentBombs();
            renderGenreBombs('All');
            renderAllBombs();
        }
    });
}

export function initializeModalGenreDropdown() {
    const btn = document.getElementById('modal-genre-btn');
    const list = document.getElementById('modal-genre-list');
    const textSpan = document.getElementById('modal-genre-text');
    const hiddenInput = document.getElementById('movie-genre-input');
    const options = document.querySelectorAll('.js-modal-genre-option');

    if (btn && list) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            list.classList.toggle('hidden');
        });

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const value = e.target.getAttribute('data-value');
                const text = e.target.textContent;

                textSpan.textContent = text;
                hiddenInput.value = value;
                list.classList.add('hidden');
            });
        });

        document.addEventListener('click', (e) => {
            if (!btn.contains(e.target) && !list.contains(e.target)) {
                list.classList.add('hidden');
            }
        });
    }
}