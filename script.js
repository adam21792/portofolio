// Animate skill bars on scroll
        document.addEventListener('DOMContentLoaded', function() {
            // Animate skill bars
            const skillBars = document.querySelectorAll('.skill-progress');
            
            // Scroll animation for elements
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // If it's a skill bar, animate the width
                        if (entry.target.classList.contains('skill-progress')) {
                            const width = entry.target.getAttribute('data-width');
                            entry.target.style.width = width;
                        }
                    }
                });
            }, {
                threshold: 0.2
            });
            
            // Observe all fade-in elements and skill bars
            fadeElements.forEach(element => {
                observer.observe(element);
            });
            
            skillBars.forEach(bar => {
                observer.observe(bar);
            });
            
            // Floating icons animation
            const floatingIcons = document.querySelectorAll('.floating-icon');
            floatingIcons.forEach(icon => {
                icon.style.animationDelay = `${Math.random() * 2}s`;
            });
        });
              const toggle = document.querySelector(".menu-toggle");
              const navLinks = document.querySelector(".nav-links");

              toggle.addEventListener("click", () => {
              navLinks.classList.toggle("active");
    });