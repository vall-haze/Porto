// Add smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animation on scroll
  const skillBars = document.querySelectorAll('.skill-bar .skill-percentage');
  
  window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
      const barPos = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (barPos < windowHeight - 50) {
        bar.style.width = bar.getAttribute('style').split(':')[1];
      }
    });
  });
  