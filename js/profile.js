/* ============================================================
   PROFILE.JS — Profile sub-pages and all settings pages
   ============================================================ */

function goToPlans()         { showPage('plans'); }
function goToNotifications() { showPage('notifications'); }
function goToDataWipe()      { showPage('datawipe'); }
function goToAnalytics()     { showPage('analytics'); }
function goToOrgDetails()    { showPage('org-details'); }

function selectPlan(name) {
  showToast(`✅ ${name} plan selected! Redirecting to payment…`);
  setTimeout(() => showPage('profile'), 2200);
}

function requestDataWipe() {
  showToast("🛡️ Data wipe request submitted. We'll contact you within 24 hours.");
  setTimeout(() => showPage('home'), 2800);
}

function signOut() {
  showPage('onboarding');
}

function saveOrgDetails() {
  showPage('profile');
  showToast('✅ Organization details saved.');
}

// ── Privacy Settings toggles ─────────────────────────────
function togglePrivacy(el) {
  el.classList.toggle('active');
  const label = el.closest('.menu-item').querySelector('.menu-label').textContent;
  const state = el.classList.contains('active') ? 'enabled' : 'disabled';
  showToast(`${state === 'enabled' ? '✅' : '🔕'} ${label} ${state}`);
}

// ── Help Center FAQ accordion ─────────────────────────────
function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  // Close all others
  document.querySelectorAll('.faq-item.open').forEach(f => f.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// ── Report Issue — issue type chips ──────────────────────
function selectIssueType(el) {
  document.querySelectorAll('.issue-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function submitReport() {
  showPage('profile');
  showToast('🚨 Issue reported. We\'ll follow up within 24 hours.');
}
