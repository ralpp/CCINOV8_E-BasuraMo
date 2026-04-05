/* ============================================================
   NAVIGATION.JS
   Page routing · Bottom nav · Toast · Status bar theming
   ============================================================ */

// Pages that use a dark status bar (overlaid on gradient hero)
const DARK_STATUS_PAGES = new Set(['onboarding', 'login', 'register']);

// Pages that should hide the bottom nav
const NO_NAV_PAGES = new Set([
  'onboarding', 'login', 'register',
  'collector-detail', 'plans', 'notifications',
  'datawipe', 'analytics', 'org-details',
  'pickup-detail', 'track'
]);

// Nav tab IDs for bottom-nav highlight
const NAV_TABS = ['home', 'schedule', 'history', 'profile'];

/**
 * Navigate to a page by name.
 * Handles: page visibility, bottom-nav highlight, status-bar theme,
 * nav show/hide, and scroll-to-top.
 */
function showPage(name) {
  // Deactivate all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Activate target page
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');

  // Update bottom nav highlight
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  // Show / hide bottom nav
  const nav = document.querySelector('.bottom-nav');
  if (nav) {
    nav.classList.toggle('hidden', NO_NAV_PAGES.has(name));
  }

  // Status bar colour
  const bar = document.querySelector('.status-bar');
  if (bar) {
    bar.classList.toggle('dark', DARK_STATUS_PAGES.has(name));
  }

  // Scroll all scroll containers inside the newly active page to top
  if (page) {
    page.querySelectorAll(
      '.scroll-full, .scroll-nav, .scroll-inner, .scroll-sub, .scroll-cta, .scroll-sub-cta'
    ).forEach(s => (s.scrollTop = 0));
  }
}

/**
 * Show a toast message.
 * @param {string} msg
 * @param {number} [ms=3000]
 */
function showToast(msg, ms = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), ms);
}

// ── Init ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  showPage('onboarding');
});
