/* ============================================================
   Amore Forever — Consolidated JavaScript
   All inline scripts from every page merged into one file.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Nav Scroll Effect ----
    const nav = document.getElementById('mainNav');
    const isTransparentNav = document.body.hasAttribute('data-nav-transparent');

    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
                nav.classList.remove('py-6');
                nav.classList.add('py-2');
            } else {
                nav.classList.remove('nav-scrolled');
                nav.classList.add('py-6');
                nav.classList.remove('py-2');
            }
        });
    }

    // ---- Mobile Menu Toggle ----
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            const isMenuOpen = !mobileMenu.classList.contains('hidden');
            
            // Force the button to be purple when the menu is open so it's visible on the white overlay
            if (isMenuOpen) {
                mobileBtn.style.setProperty('color', '#6a3987', 'important');
            } else {
                mobileBtn.style.removeProperty('color');
            }

            const icon = mobileBtn.querySelector('span');
            if (icon) {
                icon.textContent = isMenuOpen ? 'close' : 'menu';
            }
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileBtn.style.removeProperty('color');
                const icon = mobileBtn.querySelector('span');
                if (icon) icon.textContent = 'menu';
            });
        });
    }

    // ---- Intersection Observer: Fade-In-Up & Reveal Animations ----
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Support both animation class types
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.classList.add('visible');
                }
                if (entry.target.classList.contains('reveal')) {
                    entry.target.classList.add('active');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.fade-in-up, .reveal').forEach(el => {
        animationObserver.observe(el);
    });
});
