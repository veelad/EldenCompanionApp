// Initialize Lucide Icons
lucide.createIcons();

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the fade-in-up class
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Add visible class immediately to elements in viewport on load
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.fade-in-up');
        heroElements.forEach(el => el.classList.add('visible'));
    }, 100);

    // Gallery Navigation Logic
    const galleryContainer = document.getElementById('gallery-container');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    if (galleryContainer && scrollLeftBtn && scrollRightBtn) {
        
        scrollLeftBtn.addEventListener('click', () => {
            // Scroll by roughly one card width
            const cardWidth = document.querySelector('.stage-card').offsetWidth;
            galleryContainer.scrollBy({
                left: -(cardWidth + 60), // width + gap
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            const cardWidth = document.querySelector('.stage-card').offsetWidth;
            galleryContainer.scrollBy({
                left: (cardWidth + 60),
                behavior: 'smooth'
            });
        });
    }
});
