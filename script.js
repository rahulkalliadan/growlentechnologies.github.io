// Smooth-scroll offset for sticky header
(function () {
  const header = document.querySelector(".site-header");
  const headerH = () => (header ? header.getBoundingClientRect().height : 0);

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      const y = window.scrollY + el.getBoundingClientRect().top - headerH() - 10;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
})();
