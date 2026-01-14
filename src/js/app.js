import { headerEventListeners, showErrorModal, initializeStarRating, renderTopBombs, renderRecentBombs, resetModalForm } from './ui.js';
import { saveReview } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    headerEventListeners();
    initializeStarRating();
    MicroModal.init({ awaitCloseAnimation: true}); 
    renderTopBombs();
    renderRecentBombs();

    const submitBtn = document.getElementById('submit-bomb-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const title = document.getElementById('movie-title-input').value;
            const rating = parseInt(document.getElementById('rating-value').value);
            const description = document.getElementById('reviewbomb-description-input').value;

            if (!title || rating === 0) {
                alert("Please enter a title and a star rating!");
                return;
            }

            // Create the object
            const newReview = {
                title: title,
                rating: rating,
                description: description,
                id: Date.now()
            };

            saveReview(newReview);
            renderTopBombs();
            renderRecentBombs();
            resetModalForm();
            MicroModal.close('modal-1');
        });
    }
});