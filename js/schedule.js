/* ============================================================
   SCHEDULE.JS — Pickup form, date/time slots, track pickup
   ============================================================ */

function toggleChip(el) {
  el.classList.toggle('selected');
}

function schedulePickup() {
  showPage('home');
  showToast('✅ Pickup scheduled! Collector will confirm shortly.');
}

// ── Slot selection ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Single-select date slots
  document.querySelectorAll('.date-slot').forEach(slot => {
    slot.addEventListener('click', function () {
      this.closest('.date-row')
          .querySelectorAll('.date-slot')
          .forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Single-select time slots
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', function () {
      this.closest('.time-row')
          .querySelectorAll('.time-slot')
          .forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

});
