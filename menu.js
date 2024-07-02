// menu.js
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuClose.style.display = 'block';
    });

    menuClose.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuClose.style.display = 'none';
    });
});
