// Smooth Animation System
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page transition
    document.body.classList.add('page-transition', 'loaded');

    // Initialize intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '50px'
    });

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-animation > *'
    );
    animatedElements.forEach(el => observer.observe(el));

    // Get current year
    const currentYear = new Date().getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;

    // Initialize owl carousel
    $(".client_owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 2 }
        }
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery Js

function startInfiniteScroll(rowId, contentId, direction = 'right', speed = 0.1) {
    const row = document.getElementById(rowId);
    const content = document.getElementById(contentId);
    
    if (!row || !content) return;

    // Clean up existing clone if any
    const existingClone = row.querySelector('.clone');
    if (existingClone) existingClone.remove();

    // Duplicate content for seamless loop
    const clone = content.cloneNode(true);
    clone.classList.add('clone');
    row.appendChild(clone);

    let scroll = 0;
    let animationFrame;
    let isVisible = true;

    // Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(row);

    function loop() {
        if (isVisible) {
            if (direction === 'right') {
                scroll += speed;
                if (scroll >= content.scrollWidth) scroll = 0;
            } else {
                scroll -= speed;
                if (scroll <= 0) scroll = content.scrollWidth;
            }
            row.scrollLeft = scroll;
        }
        animationFrame = requestAnimationFrame(loop);
    }

    loop();

    // Cleanup function
    return () => {
        cancelAnimationFrame(animationFrame);
        observer.disconnect();
        if (existingClone) existingClone.remove();
    };
}

// Gallery Js

function startInfiniteScroll(rowId, contentId, direction = 'right', speed = 0.1) {
    const row = document.getElementById(rowId);
    const content = document.getElementById(contentId);
    
    if (!row || !content) return;

    // Clean up existing clone if any
    const existingClone = row.querySelector('.clone');
    if (existingClone) existingClone.remove();

    // Duplicate content for seamless loop
    const clone = content.cloneNode(true);
    clone.classList.add('clone');
    row.appendChild(clone);

    let scroll = 0;
    let animationFrame;
    let isVisible = true;

    // Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(row);

    function loop() {
        if (isVisible) {
            if (direction === 'right') {
                scroll += speed;
                if (scroll >= content.scrollWidth) scroll = 0;
            } else {
                scroll -= speed;
                if (scroll <= 0) scroll = content.scrollWidth;
            }
            row.scrollLeft = scroll;
        }
        animationFrame = requestAnimationFrame(loop);
    }

    loop();

    // Cleanup function
    return () => {
        cancelAnimationFrame(animationFrame);
        observer.disconnect();
        if (existingClone) existingClone.remove();
    };
}

    // Start scrolling
    startInfiniteScroll('row1', 'content1', 'right', 0.2);
    startInfiniteScroll('row2', 'content2', 'left', 0.2);