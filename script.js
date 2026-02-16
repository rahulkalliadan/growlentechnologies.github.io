// script.js
// Keep minimal JS; optional place for future interactions.
// (No forced animations; your hover glow is handled in CSS.)

// Example: prevent empty form submission if you later add an email form.
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form && form.matches("[data-email-form]")) {
    const email = form.querySelector('input[type="email"]');
    if (email && !email.checkValidity()) {
      e.preventDefault();
      email.focus();
    }
  }
});
