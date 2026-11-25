(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!menuButton || !nav) return;

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  };

  const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  nav.querySelectorAll('a[href]').forEach((link) => {
    const target = link.getAttribute('href').split('#')[0].toLowerCase();
    if (target === currentFile || (currentFile === '' && target === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
    link.addEventListener('click', closeMenu);
  });

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
})();
