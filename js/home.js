/* ============================================================
   HOME.JS — Onboarding, Login, Register, Home interactions
   ============================================================ */

function goToRegister()   { showPage('register'); }
function goToLogin()      { showPage('login'); }
function goToHome()       { showPage('home'); }

function submitLogin() {
  showPage('home');
  setTimeout(() => showToast('👋 Welcome back, De La Salle Univ.!'), 300);
}

function submitRegister() {
  showPage('home');
  setTimeout(() => showToast('✅ Account created! Welcome to E-Basuramo.'), 300);
}

// Org type chip selection on register page
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.org-type-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.org-type-chip').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});
