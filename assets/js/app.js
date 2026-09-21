/* ==========================================================
   ZAPATCH TECHNOLOGIES — app.js
   SPA Router · Theme Toggle · Shared Utilities
   ========================================================== */
'use strict';

/* ── DOM refs ── */
const app         = document.getElementById('app');
const themeToggle = document.getElementById('themeToggle');
const navbar      = document.getElementById('navbar');
const hamburger   = document.getElementById('hamburger');
const navLinks    = document.getElementById('navLinks');
const cursorGlow  = document.getElementById('cursor-glow');
const pageLoader  = document.getElementById('page-loader');

/* ── Initial loading screen ── */
const loaderStart = performance.now();
let loaderRevealed = false;
const revealLoader = () => {
  if (loaderRevealed) return;
  loaderRevealed = true;
  document.body.classList.remove('is-loading');
  pageLoader?.classList.add('is-hidden');
  setTimeout(() => pageLoader?.remove(), 500);
};
window.addEventListener('load', () => {
  const remaining = Math.max(0, 2000 - (performance.now() - loaderStart));
  window.setTimeout(revealLoader, remaining);
});
window.setTimeout(revealLoader, 2000);

/* ── Restore saved theme ── */
const savedTheme = localStorage.getItem('zt-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

/* ── Cursor glow ── */
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

/* ── Theme toggle ── */
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('zt-theme', next);
});

/* ── Hamburger ── */
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.addEventListener('click', e => {
  if (!navbar.contains(e.target)) navLinks.classList.remove('open');
});

/* ── Navbar shadow on scroll ── */
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 40px rgba(0,0,0,0.22)' : 'none';
}, { passive: true });

/* ══════════════════════════════════════════
   ROUTER
══════════════════════════════════════════ */
/* Page names — resolve templates lazily so page scripts can load before or after app.js */
const PAGE_NAMES = ['home','about','services','solutions','contact','careers'];

window.navigate = function (page, pushState = true) {
  navLinks.classList.remove('open');
  /* resolve page renderer function dynamically (lazy) */
  const fn = (typeof window[`${page}Page`] === 'function') ? window[`${page}Page`] : ((typeof window['homePage'] === 'function') ? window['homePage'] : () => '<p>Loading…</p>');
  app.innerHTML = `<div class="page-enter">${fn()}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  /* update active nav link */
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  /* update location hash for direct linking */
  if (pushState) {
    if (location.hash !== `#${page}`) location.hash = `#${page}`;
  }

  /* run page-specific hooks */
  initScrollReveal();
  if (page === 'home')    initCounters();
  if (page === 'contact') initContactForm();
  if (page === 'careers' && typeof initCareers === 'function') initCareers();

  return false; /* prevent href navigation */
};

/* Handle hashchange and direct loads */
function routeFromHash() {
  const h = (location.hash || '#home').replace('#', '') || 'home';
  navigate(h, false);
}

window.addEventListener('hashchange', routeFromHash);

/* On initial load, if there's a hash use it, otherwise render home */
window.addEventListener('DOMContentLoaded', () => {
  /* If page scripts are loaded after app.js, they will register window.<page>Page; routeFromHash resolves lazily */
  routeFromHash();
});

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
function initScrollReveal() {
  const targets = app.querySelectorAll(
    '.card, .svc-card, .sol-row, .value-card, .team-card, .tl-item'
  );
  targets.forEach((el, i) => {
    Object.assign(el.style, {
      opacity:    '0',
      transform:  'translateY(22px)',
      transition: `opacity .5s ease ${i * 0.06}s, transform .5s ease ${i * 0.06}s`,
    });
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════
   NUMBER COUNTERS
══════════════════════════════════════════ */
function initCounters() {
  app.querySelectorAll('[data-counter]').forEach(el => {
    const target = +el.dataset.counter;
    const suffix = el.dataset.suffix || '';
    let current  = 0;
    const step   = Math.ceil(target / 60);
    const iv     = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(iv);
    }, 22);
  });
}

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
function initContactForm() {
  const form = document.getElementById('zForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
      showToast('✓ Message received! We\'ll be in touch within 24 hours.');
      form.reset();
      btn.textContent = 'Send Message →';
      btn.disabled = false;
    }, 1600);
  });
}

/* ══════════════════════════════════════════
   TOAST NOTIFICATION
══════════════════════════════════════════ */
window.showToast = function (msg) {
  const t = document.createElement('div');
  t.className   = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastIn 0.4s ease reverse';
    setTimeout(() => t.remove(), 420);
  }, 4200);
};

/* ══════════════════════════════════════════
   BOOT — render Home on load
══════════════════════════════════════════ */
window.navigate('home');
