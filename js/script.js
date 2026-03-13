document.addEventListener("DOMContentLoaded", () => {
    // 1. Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 3. Navbar scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Hero Reveal
    gsap.from(".hero-text-content > *", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power4.out",
        delay: 0.3
    });

    // 5. Scroll Reveals
    document.querySelectorAll('.reveal-up').forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 88%" },
            y: 35,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out"
        });
    });

    // 6. Ticker
    gsap.to(".ticker-content", {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "none"
    });

    // 7. Smooth Nav Scroll
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, { offset: -80 });
            }
        });
    });
});
