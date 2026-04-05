/* ============================================================
   HOME.JS — Onboarding, Login, Register, Home interactions
   ============================================================ */

function goToRegister() { showPage('register'); }
function goToLogin()    { showPage('login'); }

function submitLogin() {
  showPage('home');
  setTimeout(() => showToast('👋 Welcome back, De La Salle Univ.!'), 300);
}

function submitRegister() {
  showPage('home');
  setTimeout(() => showToast('✅ Account created! Welcome to E-Basuramo.'), 300);
}

// ── Address bottom sheet ──────────────────────────────────
function openAddressSheet() {
  document.getElementById('address-sheet').classList.add('open');
}

function closeAddressSheet() {
  document.getElementById('address-sheet').classList.remove('open');
}

function selectAddress(address) {
  // Update the displayed address
  document.getElementById('active-address').textContent = address;

  // Update selected state on all addr-items
  document.querySelectorAll('.addr-item').forEach(item => {
    const isMatch = item.querySelector('.addr-detail')?.textContent.includes(address) ||
                    item.querySelector('.addr-name')?.textContent === address;
    item.classList.toggle('selected', isMatch);
    const check = item.querySelector('.addr-check');
    if (check) check.style.opacity = isMatch ? '1' : '0';
  });

  closeAddressSheet();
  showToast('📍 Location updated');
}

function addNewAddress() {
  closeAddressSheet();
  showToast('➕ Address form coming soon');
}

// ── Org type chips (Register page) ───────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.org-type-chip').forEach(chip => {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.org-type-chip').forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
});
