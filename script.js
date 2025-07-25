document.addEventListener('DOMContentLoaded', () => {

    // --- HERO TEXT TYPING ANIMATION ---
    const titleOptions = {
        strings: [
            "Designing delicious experiences <br> with a sprinkle of stardust.",
            "Crafting vibrant visuals.",
            "Building stellar brand solutions."
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        smartBackspace: true
    };
    const typed = new Typed('#typed-text', titleOptions);

    // --- SUBTITLE TEXT TYPING ANIMATION ---
    const subtitleOptions = {
        strings: [
            "A creative graphic designer crafting vibrant visuals and stellar brand solutions."
        ],
        typeSpeed: 25,
        startDelay: 2000,
        loop: false,
        showCursor: false,
    };
    const subtitleTyped = new Typed('#typed-subtitle', subtitleOptions);


    // --- INTERACTIVE CURSOR TRAIL ---
    const cursorTrail = document.querySelector('.cursor-trail');
    document.addEventListener('mousemove', e => {
        requestAnimationFrame(() => {
            cursorTrail.style.left = `${e.clientX}px`;
            cursorTrail.style.top = `${e.clientY}px`;
        });
    });

    // --- ENHANCED INTERACTIVITY ON HOVER ---
    const interactiveElements = document.querySelectorAll('a, .cta-button, .skill-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(3)';
            cursorTrail.style.backgroundColor = 'var(--magenta)';
        });
        el.addEventListener('mouseout', () => {
            cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorTrail.style.backgroundColor = 'var(--neon-yellow)';
        });
    });

    // --- SCROLL-TRIGGERED FADE-IN ANIMATIONS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});