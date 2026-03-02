const modal = document.querySelector('[data-modal]');

// Mobile menu open
document.querySelector('[data-menu-open]')?.addEventListener('click', () => {
  document.body.classList.add('menu--open');
  modal?.setAttribute('aria-hidden', 'false');
});

// Mobile menu close
document.querySelector('[data-menu-close]')?.addEventListener('click', () => {
  document.body.classList.remove('menu--open');
  modal?.setAttribute('aria-hidden', 'true');
});

// Close menu on link click
document.querySelectorAll('[data-modal-link]').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu--open');
    modal?.setAttribute('aria-hidden', 'true');
  });
});

// FAQ Accordion
const accordion = document.querySelector("[data-accordion]");
if (accordion) {
  const items = accordion.querySelectorAll(".faq__item");

  items.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = btn.nextElementSibling;

      // close all (video-style: one open at a time)
      items.forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        const p = b.nextElementSibling;
        if (p && p.classList.contains("faq__panel")) p.hidden = true;
      });

      // toggle clicked
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel && panel.classList.contains("faq__panel")) {
        panel.hidden = expanded;
      }
    });
  });
}

