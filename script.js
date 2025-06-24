// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
  } else {
    navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
  }
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  
  // Show success message (you can replace this with actual form submission logic)
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .testimonial-card, .timeline-item, .skill-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Skill circle animation
const skillCircles = document.querySelectorAll('.skill-circle');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const percentage = circle.querySelector('span').textContent;
      const numericValue = parseInt(percentage);
      const degrees = (numericValue / 100) * 360;
      
      circle.style.background = `conic-gradient(#00ff88 0deg ${degrees}deg, #333333 ${degrees}deg 360deg)`;
    }
  });
}, observerOptions);

skillCircles.forEach(circle => {
  skillObserver.observe(circle);
});

// Add hover effects to buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .service-btn, .contact-btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Social media icons click handlers (you can replace with actual links)
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    // Replace with actual social media links
    console.log('Social media link clicked');
  });
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-title');
const titleText = heroTitle.innerHTML;
heroTitle.innerHTML = '';

let i = 0;
function typeWriter() {
  if (i < titleText.length) {
    heroTitle.innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  const heroContent = document.querySelector('.hero-content');
  
  if (heroImage && heroContent) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
  .nav-menu a.active {
    color: #212121 !important;
  }
`;
document.head.appendChild(style);
