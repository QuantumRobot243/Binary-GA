document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

   
    const serviceCards = document.querySelectorAll('.service-card');
    
    const animateOnScroll = function() {
        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    

    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
    
 
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach((logo, index) => {
        logo.style.transition = 'transform 0.3s ease';
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'scale(1.1)';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'scale(1)';
        });
    });

  
    document.querySelectorAll('.btn-outline, .read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const feature = this.closest('.service-card') ? 
                this.closest('.service-card').querySelector('h4').textContent.trim() : 
                'Learn How It Works';
            navigateToFeaturePage(feature);
        });
    });

    function navigateToFeaturePage(feature) {
        let pageName;
        switch(feature) {
            case 'Instant Emergency Alerts':
                pageName = 'emergency-alerts';
                break;
            case 'Real-Time Evidence':
                pageName = 'real-time-evidence';
                break;
            case 'Offline Functionality':
                pageName = 'offline-functionality';
                break;
            default:
                pageName = 'how-it-works';
        }
        window.location.href = `${pageName}.html`;
    }
});