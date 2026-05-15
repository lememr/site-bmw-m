document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(0,0,0,0.85)';
    } else {
      nav.style.background = 'rgba(0,0,0,0.7)';
    }
  });
});
