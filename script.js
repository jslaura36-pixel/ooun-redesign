document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      nav.classList.toggle('open');
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('تم إرسال رسالتك بنجاح. سنعاود التواصل معك قريباً.');
      form.reset();
    });
  }
});
