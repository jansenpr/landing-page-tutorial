// === LITTLE LEAF CAFE — MAIN JS ===

// --- Scroll fade-in animation ---
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// --- Sticky nav shadow on scroll ---
const navHeader = document.querySelector('.nav-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navHeader.style.boxShadow = '0 4px 20px rgba(92,61,46,0.12)';
    } else {
        navHeader.style.boxShadow = '0 1px 4px rgba(92,61,46,0.06)';
    }
}, { passive: true });

// --- Smooth scroll for hash links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();

        if (targetId === '#top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                const navOffset = 68; // height of sticky nav
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
