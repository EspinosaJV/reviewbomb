import {
    headerEventListeners,
    showErrorModal,
    initializeStarRating,
    renderTopBombs,
    renderRecentBombs,
    renderGenreBombs,
    initializeGenreFilter,
    renderAllBombs,
    initializeAllBombs,
    initializeModalGenreDropdown,
    resetModalForm,
    setupGlobalDeleteListener
} from './ui.js';

import { saveReview } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    headerEventListeners();
    initializeStarRating();
    MicroModal.init({ awaitCloseAnimation: true });

    initializeGenreFilter();
    initializeAllBombs();
    initializeModalGenreDropdown();

    setupGlobalDeleteListener();

    renderTopBombs();
    renderRecentBombs();
    renderGenreBombs('All');
    renderAllBombs();

    const submitBtn = document.getElementById('submit-bomb-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const title = document.getElementById('movie-title-input').value;
            const genre = document.getElementById('movie-genre-input').value;
            const rating = parseInt(document.getElementById('rating-value').value);
            const description = document.getElementById('reviewbomb-description-input').value;

            if (!title || !genre || rating === 0) {
                alert("Please enter a title, select a genre, and a star rating!");
                return;
            }

            const newReview = {
                title: title,
                genre: genre,
                rating: rating,
                description: description,
                id: Date.now()
            };

            saveReview(newReview);

            renderTopBombs();
            renderRecentBombs();
            renderGenreBombs('All');
            renderAllBombs();

            resetModalForm();
            MicroModal.close('modal-1');
        });
    }
});