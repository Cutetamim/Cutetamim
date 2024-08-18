// Highlight active section in the navigation bar
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  setActiveLink();
  window.addEventListener('scroll', setActiveLink);
});

// Project card hover effect
document.querySelectorAll('.project').forEach((project) => {
  project.addEventListener('mouseover', () => {
    project.style.transform = 'scale(1.05)';
    project.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
  });

  project.addEventListener('mouseout', () => {
    project.style.transform = 'scale(1)';
    project.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  });
});