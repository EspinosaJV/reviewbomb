import * as utils from './utils.js';

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