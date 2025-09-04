export function handleTopBombsClick() {    
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    if (isDesktop.matches) {
        console.log("Top Bombs Button in desktop view has been clicked!");
    } else if (isMobilePortrait.matches) {
        console.log("Top Bombs Button in mobile portrait view has been clicked!");
    } else if (isMobileLandscape.matches) {
        console.log("Top Bombs Button in Mobile landscape view has been clicked!");
    }
}

export function handleRecentBombsClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    if (isDesktop.matches) {
        console.log("Recent Bombs Button for the desktop view has been clicked!");
    } else if (isMobilePortrait.matches) {
        console.log("Recent Bombs Button for the mobile portrait view has been clicked!");
    } else if (isMobileLandscape.matches) {
        console.log("Recent Bombs Button for the mobile landscape view has been clicked!");
    }
}

export function handleGenreBombsClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    if (isDesktop.matches) {
        console.log("Genre Bombs Button in desktop view has been clicked!");
    } else if (isMobilePortrait.matches) {
        console.log("Genre Bombs Button in mobile portrait view has been clicked!");
    } else if (isMobileLandscape.matches) {
        console.log("Genre bombs Button in mobile landscape view has been clicked!");
    }
}

export function handleMenuDropdownClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');
    
    const reviewBombNavigationMenuContainer = document.getElementById('reviewbomb-navigation-menu');
    const isContainerHidden = reviewBombNavigationMenuContainer.classList.contains('hidden');

    if (isDesktop.matches || isMobileLandscape.matches) {
        reviewBombNavigationMenuContainer.classList.toggle('hidden');
    } else if (isMobilePortrait.matches) {
        console.log("Mobile portrait view for menu dropdown is clicked");
    }
}

export function handleAllBombsClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    if (isDesktop.matches) {
        console.log("All Bombs Button in the desktop view has been clicked!");
    } else if (isMobilePortrait.matches) {
        console.log("All Bombs Button in mobile portrait view has been clicked!");
    } else if (isMobileLandscape.matches) {
        console.log("All Bombs Button in mobile landscape view has been clicked!");
    }
}

export function handleBombClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    if (isDesktop.matches) {
        console.log("Bombs review button in the desktop view has been clicked!");
    } else if (isMobilePortrait.matches) {
        console.log("Bombs review button in the mobile portrait view has been clicked!");
    } else if (isMobileLandscape.matches) {
        console.log("Bombs review button in the mobile landscape view has been clicked!");
    }
}