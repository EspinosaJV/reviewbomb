import * as utils from './utils.js';

export function headerEventListeners() {
    const headerMenuDropdownBtn = document.querySelectorAll('.js-reviewbomb-menu-btn');
    const topBombsBtn = document.querySelectorAll('.js-top-bombs-btn');
    const recentBombsBtn = document.querySelectorAll('.js-recent-bombs-btn');
    const genreBombsBtn = document.querySelectorAll('.js-genre-bombs-btn');
    const allBombsBtn = document.querySelectorAll('.js-all-bombs-btn');

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
}