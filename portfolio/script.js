document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.opacity = '0';
        cards[i].style.transform = 'translateY(20px)';
        cards[i].style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;
        
        for (let i = 0; i < cards.length; i++) {
            const cardTop = cards[i].getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                cards[i].style.opacity = '1';
                cards[i].style.transform = 'translateY(0)';
            }
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
