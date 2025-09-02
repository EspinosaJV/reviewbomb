import * as utils from './utils.js';

export function headerEventListeners() {
    const topBombsBtn = document.querySelectorAll('.js-top-bombs-btn');
    const recentBombsBtn = document.querySelectorAll('.js-recent-bombs-btn');
    const genreBombsBtn = document.querySelectorAll('.js-genre-bombs-btn');
    const allBombsBtn = document.querySelectorAll('.js-all-bombs-btn');

    function handleTopBombsClick() {

        const isDesktop = window.matchMedia('(min-width: 1024px)');
        const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
        const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

        if (isDesktop.matches) {
            utils.topBombsBtnDesktop();
        } else if (isMobilePortrait.matches) {
            utils.topBombsBtnMobilePortrait();
        } else if (isMobileLandscape.matches) {
            utils.topBombsBtnMobileLandscape();
        }
    }

    function handleRecentBombsClick() {
        const isDesktop = window.matchMedia('(min-width: 1024px)');
        const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
        const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

        if (isDesktop.matches) {
            utils.recentBombsBtnDesktop();
        } else if (isMobilePortrait.matches) {
            utils.recentBombsBtnMobilePortrait();
        } else if (isMobileLandscape.matches) {
            utils.recentBombsBtnMobileLandscape();
        }
    }

    function handleGenreBombsClick() {
        const isDesktop = window.matchMedia('(min-width: 1024px)');
        const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
        const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

        if (isDesktop.matches) {
            utils.genreBombsBtnDesktop();
        } else if (isMobilePortrait.matches) {
            utils.genreBombsBtnMobilePortrait();
        } else if (isMobileLandscape.matches) {
            utils.genreBombsBtnMobileLandscape();
        }
    }

    function handleAllBombsClick() {
        const isDesktop = window.matchMedia('(min-width: 1024px)');
        const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
        const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

        if (isDesktop.matches) {
            utils.allBombsBtnDesktop();
        } else if (isMobilePortrait.matches) {
            utils.allBombsBtnMobilePortrait();
        } else if (isMobileLandscape.matches) {
            utils.allBombsBtnMobileLandscape();
        }
    }

    topBombsBtn.forEach(button => {
        button.addEventListener('click', handleTopBombsClick);
    });

    recentBombsBtn.forEach(button => {
        button.addEventListener('click', handleRecentBombsClick);
    })

    genreBombsBtn.forEach(button => {
        button.addEventListener('click', handleGenreBombsClick);
    })

    allBombsBtn.forEach(button => {
        button.addEventListener('click', handleAllBombsClick);
    })
}