document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('active');
        
        // Animate links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
            navLinksItems.forEach(link => {
                link.style.animation = '';
            });
        });
    });
    
    // Typing animation
    const typed = new Typed('.typing', {
        strings: ['Web Developer', 'Software Engineer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Animate progress bars on scroll
    const skillsSection = document.querySelector('.skills');
    const progressBars = document.querySelectorAll('.progress');
    
    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = value;
            }, 100);
        });
    }
    
    function hideProgress() {
        progressBars.forEach(progressBar => {
            progressBar.style.width = '0';
        });
    }
    
    // Intersection Observer for skills animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showProgress();
            } else {
                hideProgress();
            }
        });
    }, {threshold: 0.5});
    
    observer.observe(skillsSection);
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
});