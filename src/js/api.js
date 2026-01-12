export function saveReview(review) {
    const reviews = getReviews();
    reviews.push(review);
    localStorage.setItem('reviewBombs', JSON.stringify(reviews));
}

export function getReviews() {
    // This gets the string from storage and turns it back into a Javascript array
    return JSON.parse(localStorage.getItem('reviewBombs')) || [];
}