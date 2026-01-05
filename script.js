/* script.js – navigation toggle for the hamburger menu */
document.addEventListener('DOMContentLoaded', function () {
    // Grab the button and the <ul> that holds the links
    const toggleBtn = document.querySelector('.nav-toggle');
    const navLinks  = document.querySelector('.nav-links');

    // Guard against the elements not being present (helps during development)
    if (!toggleBtn || !navLinks) {
        console.warn('Navigation elements not found – check your HTML markup.');
        return;
    }

    // -----------------------------------------------------------------
    //  Click on the hamburger → open / close the menu
    // -----------------------------------------------------------------
    toggleBtn.addEventListener('click', function () {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';

        // Flip the ARIA state (accessibility)
        toggleBtn.setAttribute('aria-expanded', !expanded);

        // Animate the three bars → “X”
        toggleBtn.classList.toggle('active');

        // Show / hide the list
        navLinks.classList.toggle('open');
    });

    // -----------------------------------------------------------------
    // close the drawer when a link is clicked (mobile UX)
    // -----------------------------------------------------------------
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                toggleBtn.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

