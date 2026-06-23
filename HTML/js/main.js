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
        
    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
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
        
    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
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
            
    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
    }

});
        
    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
    }

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
        
    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
    }

});
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.fade-in-up, .reveal').forEach(el => {
        animationObserver.observe(el);
    
    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
    }

});

    // ---- Custom Video Player ----
    const videoContainer = document.getElementById('custom-video-container');
    const video = document.getElementById('promo-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    if (videoContainer && video && videoOverlay && playPauseBtn && playIcon) {
        let isPlaying = false;

        const togglePlayPause = () => {
            if (isPlaying) {
                video.pause();
                isPlaying = false;
                playIcon.textContent = 'play_arrow';
                playIcon.classList.add('ml-2');
                videoOverlay.classList.remove('opacity-0');
            } else {
                video.play();
                isPlaying = true;
                playIcon.textContent = 'pause';
                playIcon.classList.remove('ml-2');
                videoOverlay.classList.add('opacity-0');
            }
        };

        // Click anywhere on container toggles play/pause
        videoContainer.addEventListener('click', togglePlayPause);

        // Hover handling
        videoContainer.addEventListener('mouseenter', () => {
            if (isPlaying) {
                // Show pause button on hover if playing
                videoOverlay.classList.remove('opacity-0');
            }
        });

        videoContainer.addEventListener('mouseleave', () => {
            if (isPlaying) {
                // Hide button when mouse leaves and video is playing
                videoOverlay.classList.add('opacity-0');
            }
        });
        
        // Ensure video ends correctly
        video.addEventListener('ended', () => {
            isPlaying = false;
            playIcon.textContent = 'play_arrow';
            playIcon.classList.add('ml-2');
            videoOverlay.classList.remove('opacity-0');
            // reset to beginning
            video.currentTime = 0;
            video.load();
        });
    }

});
