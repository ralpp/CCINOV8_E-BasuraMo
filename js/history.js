/* ============================================================
   HISTORY.JS — Filters, Pickup Detail, Rate & Review modal
   ============================================================ */

function filterTab(el) {
  el.closest('.filter-tabs')
    .querySelectorAll('.filter-tab')
    .forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function downloadCert() {
  showToast('📜 Certificate downloaded as PDF');
}

// ── Pickup Detail navigation ──────────────────────────────
function openPickupDetail(status) {
  // status: 'completed' | 'pending' | 'cancelled'
  const banner = document.getElementById('pd-status-banner');
  if (banner) {
    banner.className = 'pd-status-banner ' + status;
    const iconMap = { completed: '✅', pending: '🚚', cancelled: '❌' };
    const titleMap = { completed: 'Pickup Completed', pending: 'En Route to You', cancelled: 'Pickup Cancelled' };
    const subMap   = {
      completed: 'Your e-waste was successfully collected and disposed.',
      pending:   'Juan Reyes Recycling Co. is on the way. ETA ~25 min.',
      cancelled: 'No collector was available. You can reschedule anytime.'
    };
    document.getElementById('pd-icon').textContent  = iconMap[status];
    document.getElementById('pd-title').textContent = titleMap[status];
    document.getElementById('pd-sub').textContent   = subMap[status];
  }
  showPage('pickup-detail');
}

// ── Rate & Review modal ───────────────────────────────────
let currentRating = 0;

function openReviewModal() {
  document.querySelector('.modal-overlay').classList.add('open');
  currentRating = 0;
  updateStars(0);
  document.querySelectorAll('.rate-tag').forEach(t => t.classList.remove('selected'));
}

function closeReviewModal() {
  document.querySelector('.modal-overlay').classList.remove('open');
}

function updateStars(n) {
  document.querySelectorAll('.star-btn').forEach((s, i) => {
    s.classList.toggle('lit', i < n);
  });
}

function submitReview() {
  if (currentRating === 0) { showToast('⭐ Please select a star rating first'); return; }
  closeReviewModal();
  showToast('🙏 Thanks for your review!');
}

// ── DOM ready ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Star buttons
  document.querySelectorAll('.star-btn').forEach((btn, i) => {
    btn.addEventListener('mouseenter', () => updateStars(i + 1));
    btn.addEventListener('mouseleave', () => updateStars(currentRating));
    btn.addEventListener('click', () => {
      currentRating = i + 1;
      updateStars(currentRating);
    });
  });

  // Rate tags toggle (multi-select)
  document.querySelectorAll('.rate-tag').forEach(tag => {
    tag.addEventListener('click', function () {
      this.classList.toggle('selected');
    });
  });

  // Close modal on overlay backdrop tap
  document.querySelector('.modal-overlay')?.addEventListener('click', function (e) {
    if (e.target === this) closeReviewModal();
  });

});
