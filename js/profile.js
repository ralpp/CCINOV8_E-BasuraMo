/* ============================================================
   PROFILE.JS — Profile sub-pages: Plans, Notifications,
                Data Wipe, Analytics, Org Details
   ============================================================ */

function goToPlans()        { showPage('plans'); }
function goToNotifications(){ showPage('notifications'); }
function goToDataWipe()     { showPage('datawipe'); }
function goToAnalytics()    { showPage('analytics'); }
function goToOrgDetails()   { showPage('org-details'); }

function selectPlan(name) {
  showToast(`✅ ${name} plan selected! Redirecting to payment…`);
  setTimeout(() => showPage('profile'), 2200);
}

function requestDataWipe() {
  showToast('🛡️ Data wipe request submitted. We\'ll contact you within 24 hours.');
  setTimeout(() => showPage('home'), 2800);
}

function signOut() {
  showPage('onboarding');
}

function saveOrgDetails() {
  showPage('profile');
  showToast('✅ Organization details saved.');
}
