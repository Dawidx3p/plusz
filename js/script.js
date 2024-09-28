const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Ensure the hero image is visible once loaded
document.addEventListener("DOMContentLoaded", function () {
    const heroImage = document.querySelector('.hero-image');

    // Add an event listener to load the image and add the 'loaded' class
    heroImage.addEventListener('load', function () {
        heroImage.classList.add('loaded');
    });

    // For browsers that cache the image and don't trigger 'load'
    if (heroImage.complete) {
        heroImage.classList.add('loaded');
    }
});