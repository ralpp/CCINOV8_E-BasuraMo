/* ============================================================
   NAVIGATION.JS
   Page routing · Bottom nav · Toast · Status bar theming
   ============================================================ */

// Pages that use a dark/transparent status bar
const DARK_STATUS_PAGES = new Set(['onboarding', 'login', 'register']);

// Pages that hide the bottom nav
const NO_NAV_PAGES = new Set([
  'onboarding', 'login', 'register',
  'collector-detail', 'collectors-map',
  'plans', 'notifications',
  'datawipe', 'analytics', 'org-details',
  'pickup-detail', 'track',
  'payment-methods', 'privacy-settings',
  'help-center', 'report-issue'
]);

/**
 * Navigate to a named page.
 * Handles: visibility, nav highlight, status-bar theme,
 * nav show/hide, scroll-to-top.
 */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  const nav = document.querySelector('.bottom-nav');
  if (nav) nav.classList.toggle('hidden', NO_NAV_PAGES.has(name));

  const bar = document.querySelector('.status-bar');
  if (bar) bar.classList.toggle('dark', DARK_STATUS_PAGES.has(name));

  if (page) {
    page.querySelectorAll(
      '.scroll-full,.scroll-nav,.scroll-inner,.scroll-sub,.scroll-cta,.scroll-sub-cta'
    ).forEach(s => (s.scrollTop = 0));
  }
}

/**
 * Show a toast notification.
 */
function showToast(msg, ms = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), ms);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  showPage('onboarding');
});
