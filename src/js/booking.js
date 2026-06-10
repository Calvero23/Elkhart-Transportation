document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.js-contact-form');

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const status = form.querySelector('.form-status');
      const originalText = btn ? btn.textContent : 'Submit Request';

      if (btn) {
        form.dataset.submitLabel = btn.textContent;
        btn.textContent = 'Request Received';
      }

      if (status) {
        status.textContent = 'Thanks. This demo form is ready for Formspree or another intake tool before launch.';
      }

      window.setTimeout(() => {
        if (btn) btn.textContent = originalText;
      }, 3000);
    });
  });
});
