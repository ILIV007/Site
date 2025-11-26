'use strict';

// Smooth scrolling for anchor links
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 150) {
            el.classList.add('visible');
        }
    });
};

// Mobile menu toggle
const mobileMenuToggle = () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.mobile-menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
};

// Initializing functions
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    window.addEventListener('scroll', animateOnScroll);
    mobileMenuToggle();
});
