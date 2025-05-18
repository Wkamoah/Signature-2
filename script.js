// Our JavaScript heart. Keeping things interactive and dynamic.

document.addEventListener('DOMContentLoaded', () => {
    // Ensuring everything is loaded before we begin. A patient approach.

    // Theme Toggle Logic - Allowing users to choose their view.
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Initial theme setup based on local storage or system preference.
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }

    // The action of toggling the theme. A simple flip.
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            // Storing the user's preference for future visits. Remembering their choice.
            const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('theme', newTheme);
        });
    }

    // Scroll-Triggered Animations - Revealing content with grace.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);  // Animate only once. Focused and efficient.
            }
        });
    }, {
        threshold: 0.1  // Trigger when 10% of the element is visible. Subtle reveal.
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
    }
});
// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...

    // Back to Top Button Logic
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.textContent = '↑';
    document.body.appendChild(backToTopButton);

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});