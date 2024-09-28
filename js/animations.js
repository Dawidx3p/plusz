// animations.js

// Function to add the 'visible' class when an element scrolls into view
function scrollReveal() {
    const elements = document.querySelectorAll('.welcome-section, .featured-episode');
    
    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const viewHeight = window.innerHeight;

        if (elementPosition < viewHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', scrollReveal);

// Initially trigger the animation on page load
scrollReveal();