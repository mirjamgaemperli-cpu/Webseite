// Sticky nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links  = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-label', open ? 'Menu schließen' : 'Menu öffnen');
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll('.card, .about-card, .about-text').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  observer.observe(el);
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
// Apply visible styles via class
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
document.head.appendChild(style);
