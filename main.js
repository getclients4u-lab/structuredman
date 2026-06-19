// ===== SCROLL ANIMATIONS =====
const fadeEls = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => obs.observe(el));

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
}

// ===== NAV SCROLL EFFECT =====
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(201,134,42,0.18)'
    : 'rgba(255,255,255,0.06)';
});

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ===== MOBILE MENU =====
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-close');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ===== BACK TO TOP (draggable floating button) =====
(function() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  document.body.appendChild(btn);

  // Restore saved position
  const saved = localStorage.getItem('sm-btt-pos');
  if (saved) {
    try {
      const pos = JSON.parse(saved);
      btn.style.left = pos.left;
      btn.style.top = pos.top;
      btn.style.right = 'auto';
      btn.style.bottom = 'auto';
    } catch(e) {}
  }

  // Show/hide on scroll
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  // Drag logic
  let dragging = false, moved = false, startX, startY, startLeft, startTop;

  function getPos(e) {
    return e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };
  }

  function onStart(e) {
    dragging = true;
    moved = false;
    const p = getPos(e);
    startX = p.x;
    startY = p.y;
    const rect = btn.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    btn.classList.add('dragging');
    e.preventDefault();
  }

  function onMove(e) {
    if (!dragging) return;
    const p = getPos(e);
    const dx = p.x - startX;
    const dy = p.y - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
    btn.style.left = (startLeft + dx) + 'px';
    btn.style.top = (startTop + dy) + 'px';
    btn.style.right = 'auto';
    btn.style.bottom = 'auto';
    e.preventDefault();
  }

  function onEnd() {
    if (!dragging) return;
    dragging = false;
    btn.classList.remove('dragging');
    // Save position
    localStorage.setItem('sm-btt-pos', JSON.stringify({ left: btn.style.left, top: btn.style.top }));
    // If not moved much, treat as click
    if (!moved) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  btn.addEventListener('mousedown', onStart);
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onEnd);

  btn.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('touchend', onEnd);
})();
