// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Modal
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    }
  });
});

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});

// Contact form
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formFeedback.textContent = 'Please fill in all fields.';
      formFeedback.className = 'form-feedback error';
      return;
    }

    formFeedback.textContent = `Thank you, ${name}! Your message has been received.`;
    formFeedback.className = 'form-feedback success';
    contactForm.reset();

    setTimeout(() => {
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';
    }, 5000);
  });
}
