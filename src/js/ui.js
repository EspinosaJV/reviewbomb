import { showContentSections } from './utils.js';

export function headerEventListeners() {
    const reviewBombHeaderBtn = document.getElementById("reviewbomb-header-menubtn");

    if (reviewBombHeaderBtn) {
        reviewBombHeaderBtn.addEventListener('click', showContentSections);
    } else {
        console.error("ReviewBomb header button was not found!");
    }
}