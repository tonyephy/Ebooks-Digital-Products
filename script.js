// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menuItems = document.getElementById('menu-items');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuItems.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80, // Account for header height
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission (in a real app, you'd send to a server)
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation when elements come into view
const fadeInElements = document.querySelectorAll('.feature-card, .about-content, .contact-container');

const fadeInOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

const fadeInObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, fadeInOptions);

fadeInElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    element.style.transform = "translateY(20px)";
    fadeInObserver.observe(element);
});

// Define the fade-in effect using JavaScript since we're not using a separate CSS file
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);
