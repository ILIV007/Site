'use strict';

/**
 * Smooth scrolling utility for anchor links
 * @param {string} target - CSS selector of the target element
 */
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  
  if (!element) {
    console.warn(`Element not found: ${target}`);
    return;
  }
  
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

/**
 * Handles animation on scroll by adding visible class to elements
 */
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate');
  const windowHeight = window.innerHeight;
  const threshold = 150;

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    
    if (position < windowHeight - threshold) {
      el.classList.add('visible');
    }
  });
};

/**
 * Initializes mobile menu toggle functionality
 */
const initMobileMenu = () => {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.mobile-menu');

  if (!menuButton || !menu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
};

/**
 * Initializes smooth scrolling for all anchor links
 */
const initSmoothScroll = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      smoothScroll(targetId);
    });
  });
};

/**
 * Application initialization
 */
const initApp = () => {
  initSmoothScroll();
  window.addEventListener('scroll', animateOnScroll);
  initMobileMenu();
  
  // Trigger initial animation check
  animateOnScroll();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
