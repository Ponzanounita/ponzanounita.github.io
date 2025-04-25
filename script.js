document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente caricato');

    // Carousel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const inner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        
        let currentIndex = 0;
        const totalItems = items.length;
        
        function showSlide(index) {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            showSlide(currentIndex);
        }
        
        // Inizializza la prima slide
        items[0].classList.add('active');
        
        // Auto-scroll ogni 10 secondi
        setInterval(nextSlide, 10000);
    }

    // Animazione per il profilo
    const profileImage = document.querySelector('.profile-image');
    const profileContent = document.querySelector('.profile-content');
    if (profileImage && profileContent) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.1 });

        profileImage.style.opacity = '0';
        profileImage.style.transform = 'translateX(-50px)';
        profileImage.style.transition = 'opacity 1s ease, transform 1s ease';
        
        profileContent.style.opacity = '0';
        profileContent.style.transform = 'translateX(50px)';
        profileContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        observer.observe(profileImage);
        observer.observe(profileContent);
    }

    // Animazione per le vision cards
    const visionItems = document.querySelectorAll('.vision-item');
    if (visionItems.length > 0) {
        const visionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.1 });

        visionItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            visionObserver.observe(item);
        });
    }

    // Menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav links element:', navLinks);

    if (hamburger && navLinks) {
        console.log('Elementi del menu trovati, aggiungo event listener');
        
        // Gestione click sul hamburger
        hamburger.addEventListener('click', toggleMenu);
        
        // Chiudi il menu quando si clicca su un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Chiudi il menu quando si clicca fuori
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    } else {
        console.log('Attenzione: elementi del menu non trovati');
    }

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('nav-active');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('nav-active');
    }
}); 