export function handleTopBombsClick() {    
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    const topBombsMobilePortrait = document.getElementById('topBombsMobilePortrait');
    const recentBombsMobilePortrait = document.getElementById('recentBombsMobilePortrait');
    const genreBombsMobilePortrait = document.getElementById('genreBombsMobilePortrait');
    const allBombsMobilePortrait = document.getElementById('allBombsMobilePortrait');

    const topBombsMobileLandscape = document.getElementById('topBombsMobileLandscape');
    const recentBombsMobileLandscape = document.getElementById('recentBombsMobileLandscape');
    const genreBombsMobileLandscape = document.getElementById('genreBombsMobileLandscape');
    const allBombsMobileLandscape = document.getElementById('allBombsMobileLandscape');

    if (isDesktop.matches) {
        document.querySelector('#topBombsDesktop').scrollIntoView({ behavior: 'smooth' });
    } else if (isMobilePortrait.matches) {
        topBombsMobilePortrait.classList.add('portrait-display-flex');
        topBombsMobilePortrait.classList.remove('hidden');
        recentBombsMobilePortrait.classList.remove('portrait-display-flex');
        recentBombsMobilePortrait.classList.add('hidden');
        genreBombsMobilePortrait.classList.remove('portrait-display-flex');
        genreBombsMobilePortrait.classList.add('hidden');
        allBombsMobilePortrait.classList.remove('portrait-display-flex');
        allBombsMobilePortrait.classList.add('hidden');
    } else if (isMobileLandscape.matches) {
        topBombsMobileLandscape.classList.add('landscape-display-flex');
        topBombsMobileLandscape.classList.remove('hidden');
        recentBombsMobileLandscape.classList.remove('landscape-display-flex');
        recentBombsMobileLandscape.classList.add('hidden');
        genreBombsMobileLandscape.classList.remove('landscape-display-flex');
        genreBombsMobileLandscape.classList.add('hidden');
        allBombsMobileLandscape.classList.remove('landscape-display-flex');
        allBombsMobileLandscape.classList.add('hidden');
    }
}

export function handleRecentBombsClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    const topBombsMobilePortrait = document.getElementById('topBombsMobilePortrait');
    const recentBombsMobilePortrait = document.getElementById('recentBombsMobilePortrait');
    const genreBombsMobilePortrait = document.getElementById('genreBombsMobilePortrait');
    const allBombsMobilePortrait = document.getElementById('allBombsMobilePortrait');

    const topBombsMobileLandscape = document.getElementById('topBombsMobileLandscape');
    const recentBombsMobileLandscape = document.getElementById('recentBombsMobileLandscape');
    const genreBombsMobileLandscape = document.getElementById('genreBombsMobileLandscape');
    const allBombsMobileLandscape = document.getElementById('allBombsMobileLandscape');

    if (isDesktop.matches) {
        document.querySelector('#recentBombsDesktop').scrollIntoView({ behavior: 'smooth' });
    } else if (isMobilePortrait.matches) {
        recentBombsMobilePortrait.classList.add('portrait-display-flex');
        recentBombsMobilePortrait.classList.remove('hidden');
        topBombsMobilePortrait.classList.remove('portrait-display-flex');
        topBombsMobilePortrait.classList.add('hidden');
        genreBombsMobilePortrait.classList.remove('portrait-display-flex');
        genreBombsMobilePortrait.classList.add('hidden');
        allBombsMobilePortrait.classList.remove('portrait-display-flex');
        allBombsMobilePortrait.classList.add('hidden');

    } else if (isMobileLandscape.matches) {
        recentBombsMobileLandscape.classList.add('landscape-display-flex');
        recentBombsMobileLandscape.classList.remove('hidden');
        topBombsMobileLandscape.classList.remove('landscape-display-flex');
        topBombsMobileLandscape.classList.add('hidden');
        genreBombsMobileLandscape.classList.remove('landscape-display-flex');
        genreBombsMobileLandscape.classList.add('hidden');
        allBombsMobileLandscape.classList.remove('landscape-display-flex');
        allBombsMobileLandscape.classList.add('hidden');
    }
}

export function handleGenreBombsClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    const topBombsMobilePortrait = document.getElementById('topBombsMobilePortrait');
    const recentBombsMobilePortrait = document.getElementById('recentBombsMobilePortrait');
    const genreBombsMobilePortrait = document.getElementById('genreBombsMobilePortrait');
    const allBombsMobilePortrait = document.getElementById('allBombsMobilePortrait');

    const topBombsMobileLandscape = document.getElementById('topBombsMobileLandscape');
    const recentBombsMobileLandscape = document.getElementById('recentBombsMobileLandscape');
    const genreBombsMobileLandscape = document.getElementById('genreBombsMobileLandscape');
    const allBombsMobileLandscape = document.getElementById('allBombsMobileLandscape');

    if (isDesktop.matches) {
        document.querySelector('#genreBombsDesktop').scrollIntoView({ behavior: 'smooth' });
    } else if (isMobilePortrait.matches) {
        genreBombsMobilePortrait.classList.add('portrait-display-flex');
        genreBombsMobilePortrait.classList.remove('hidden');
        recentBombsMobilePortrait.classList.remove('portrait-display-flex');
        recentBombsMobilePortrait.classList.add('hidden');
        topBombsMobilePortrait.classList.remove('portrait-display-flex');
        topBombsMobilePortrait.classList.add('hidden');
        allBombsMobilePortrait.classList.remove('portrait-display-flex');
        allBombsMobilePortrait.classList.add('hidden');
    } else if (isMobileLandscape.matches) {
        genreBombsMobileLandscape.classList.add('landscape-display-flex');
        genreBombsMobileLandscape.classList.remove('hidden');
        recentBombsMobileLandscape.classList.remove('landscape-display-flex');
        recentBombsMobileLandscape.classList.add('hidden');
        topBombsMobileLandscape.classList.remove('landscape-display-flex');
        topBombsMobileLandscape.classList.add('hidden');
        allBombsMobileLandscape.classList.remove('landscape-display-flex');
        allBombsMobileLandscape.classList.add('hidden');
    }
}

export function handleMenuDropdownClick(event) {
    if (event) event.stopPropagation();

    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation:portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation:landscape)');

    const reviewBombNavigationMenuContainer = document.getElementById('reviewbomb-navigation-menu');
    const reviewBombNavigationMenuContainerMobilePortrait = document.getElementById('reviewbomb-navigation-menu-mobile-portrait');
    const reviewBombHeroSection = document.getElementById('reviewbomb-hero-section-mobile-portrait');
    const reviewBombCallToActionSection = document.getElementById('reviewbomb-call-to-action-section-mobile-portrait');

    if (isDesktop.matches || isMobileLandscape.matches) {
        reviewBombNavigationMenuContainer.classList.toggle('invisible');
        reviewBombNavigationMenuContainer.classList.toggle('visible');
        reviewBombNavigationMenuContainer.classList.toggle('opacity-0');
        reviewBombNavigationMenuContainer.classList.toggle('opacity-100');

        reviewBombNavigationMenuContainer.classList.toggle('scale-95');
        reviewBombNavigationMenuContainer.classList.toggle('scale-100');
        reviewBombNavigationMenuContainer.classList.toggle('-translate-y-2');
        reviewBombNavigationMenuContainer.classList.toggle('translate-y-0');
    } else if (isMobilePortrait.matches) {
        reviewBombNavigationMenuContainerMobilePortrait.classList.toggle('hidden');
        reviewBombHeroSection.classList.toggle('hidden');
        reviewBombCallToActionSection.classList.toggle('hidden');

        convertMobileHeaderBannerToButton();
    }
}

export function convertMobileHeaderBannerToButton() {
    const reviewBombHeaderBanner = document.getElementById('reviewbomb-header-banner-mobile-portrait');

    reviewBombHeaderBanner.setAttribute('role', 'button');
    reviewBombHeaderBanner.setAttribute('tabindex', '0');
    reviewBombHeaderBanner.setAttribute('aria-expanded', 'true');
    reviewBombHeaderBanner.setAttribute('aria-label', 'Close navigation menu');
}

export function closeMobileNavigationMenu() {   
    const reviewBombNavigationMenuContainerMobilePortrait = document.getElementById('reviewbomb-navigation-menu-mobile-portrait');
    const reviewBombHeroSection = document.getElementById('reviewbomb-hero-section-mobile-portrait');
    const reviewBombCallToActionSection = document.getElementById('reviewbomb-call-to-action-section-mobile-portrait');
    const reviewBombHeaderBanner = document.getElementById('reviewbomb-header-mobile-portrait');

    reviewBombNavigationMenuContainerMobilePortrait.classList.toggle('hidden');
    reviewBombHeroSection.classList.toggle('hidden');
    reviewBombCallToActionSection.classList.toggle('hidden');

    reviewBombHeaderBanner.removeAttribute('role');
    reviewBombHeaderBanner.removeAttribute('tabindex');
    reviewBombHeaderBanner.removeAttribute('aria-expanded');
    reviewBombHeaderBanner.removeAttribute('aria-label');
}

export function handleAllBombsClick() {
    const isDesktop = window.matchMedia('(min-width: 1024px)');
    const isMobilePortrait = window.matchMedia('(max-width: 1023px) and (orientation: portrait)');
    const isMobileLandscape = window.matchMedia('(max-width: 1023px) and (orientation: landscape)');

    const topBombsMobilePortrait = document.getElementById('topBombsMobilePortrait');
    const recentBombsMobilePortrait = document.getElementById('recentBombsMobilePortrait');
    const genreBombsMobilePortrait = document.getElementById('genreBombsMobilePortrait');
    const allBombsMobilePortrait = document.getElementById('allBombsMobilePortrait');

    const topBombsMobileLandscape = document.getElementById('topBombsMobileLandscape');
    const recentBombsMobileLandscape = document.getElementById('recentBombsMobileLandscape');
    const genreBombsMobileLandscape = document.getElementById('genreBombsMobileLandscape');
    const allBombsMobileLandscape = document.getElementById('allBombsMobileLandscape');

    if (isDesktop.matches) {
        document.querySelector('#allBombsDesktop').scrollIntoView({ behavior: 'smooth' });
    } else if (isMobilePortrait.matches) {
        allBombsMobilePortrait.classList.add('portrait-display-flex');
        allBombsMobilePortrait.classList.remove('hidden');
        topBombsMobilePortrait.classList.remove('portrait-display-flex');
        topBombsMobilePortrait.classList.add('hidden');
        recentBombsMobilePortrait.classList.remove('portrait-display-flex');
        recentBombsMobilePortrait.classList.add('hidden');
        genreBombsMobilePortrait.classList.remove('portrait-display-flex');
        genreBombsMobilePortrait.classList.add('hidden');
    } else if (isMobileLandscape.matches) {
        allBombsMobileLandscape.classList.add('landscape-display-flex');
        allBombsMobileLandscape.classList.remove('hidden');
        topBombsMobileLandscape.classList.remove('landscape-display-flex');
        topBombsMobileLandscape.classList.add('hidden');
        recentBombsMobileLandscape.classList.remove('landscape-display-flex');
        recentBombsMobileLandscape.classList.add('hidden');
        genreBombsMobileLandscape.classList.remove('landscape-display-flex');
        genreBombsMobileLandscape.classList.add('hidden');
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