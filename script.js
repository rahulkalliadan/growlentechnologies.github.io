// Keep it minimal (you can expand later).
// Optional: highlight active nav link on scroll (basic)
(() => {
  const links = Array.from(document.querySelectorAll('.header-nav a'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const setActive = (id) => {
    links.forEach(a => {
      const isActive = a.getAttribute('href') === `#${id}`;
      a.style.color = isActive ? 'rgba(17,17,17,.92)' : 'rgba(17,17,17,.55)';
    });
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  }, { rootMargin: '-30% 0px -60% 0px', threshold: [0.1, 0.2, 0.35] });

  sections.forEach(s => io.observe(s));
})();
