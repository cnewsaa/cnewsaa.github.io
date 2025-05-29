function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
