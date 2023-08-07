let userRating = 0;

function selectedRating(ratedElement) {
    userRating = ratedElement.innerHTML;
    console.log(userRating);
    const ratingElements = document.querySelectorAll('.ratings > div');
    ratingElements.forEach(ratingElement => {
        ratingElement.classList.remove('active')
    });
    ratedElement.classList.add('active');
    updateSubmitButton();
}

function updateSubmitButton() {
    if (!userRating == 0) {
        const submitButton = document.querySelector('.thankYouButton')
        submitButton.removeAttribute('disabled')
    }
    localStorage.setItem('userRating', userRating);
}


