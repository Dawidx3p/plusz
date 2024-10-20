const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoId = thumbnail.getAttribute('data-video');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    iframe.src = '';
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        iframe.src = '';
        modal.style.display = 'none';
    }
});