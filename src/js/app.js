import { headerEventListeners, showErrorModal, initializeStarRating } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    headerEventListeners();
    initializeStarRating();
    MicroModal.init({ awaitCloseAnimation: true}); 
});