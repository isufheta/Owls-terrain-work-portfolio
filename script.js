// LOADING SCREEN
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 800);
});

// FADE-IN SECTIONS
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
sections.forEach(sec => observer.observe(sec));

// MODAL
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

function openModal(src) {
  modalImg.src = src;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modal.addEventListener('click', e => {
  if (e.target === modal || e.target.classList.contains('close-btn')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
