(function () {
  // Email validation + friendly messaging
  const form = document.getElementById("updatesForm");
  const msg = document.getElementById("formMsg");
  const emailInput = document.getElementById("email");

  if (!form || !msg || !emailInput) return;

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg.textContent = "";

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      msg.style.color = "rgba(180, 40, 40, 0.92)";
      msg.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return;
    }

    // No backend wired yet — success state
    msg.style.color = "rgba(26,77,46,0.92)";
    msg.textContent = "Thanks — we’ll share pilot updates soon.";
    form.reset();
  });
})();
