document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('rating-text');
    let currentRating = 0;

    const messages = {
        0: "How was your experience?",
        1: "It was terrible",
        2: "It was bad",
        3: "It was okay",
        4: "It was good",
        5: "It was excellent"
    };

    stars.forEach((star, index) => {
        // Hover effect
        star.addEventListener('mouseover', () => {
            highlightStars(index + 1);
            updateText(index + 1);
        });

        // Click to set rating
        star.addEventListener('click', () => {
            currentRating = index + 1;
            highlightStars(currentRating);
            updateText(currentRating);

            // Add a small pulse animation to the clicked star
            star.style.transform = 'scale(1.4)';
            setTimeout(() => {
                star.style.transform = 'scale(1.2)';
            }, 200);
        });


    });

    const container = document.getElementById('stars-container');
    container.addEventListener('mouseleave', () => {
        highlightStars(currentRating);
        updateText(currentRating);
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function updateText(rating) {
        ratingText.style.opacity = '0';
        setTimeout(() => {
            ratingText.textContent = messages[rating];
            ratingText.style.opacity = '1';
        }, 200);
    }
});
