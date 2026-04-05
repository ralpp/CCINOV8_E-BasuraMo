/* ============================================================
   COLLECTORS.JS — Filter chips, Collector Detail navigation
   ============================================================ */

function filterCollectors(el) {
  el.closest('.chip-row')
    .querySelectorAll('.chip')
    .forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

const COLLECTOR_DATA = {
  'GreenCycle Solutions': { emoji:'🏭', loc:'Tondo, Manila · 1.2 km', hours:'Mon–Sat · 8:00 AM – 5:00 PM', accred:'EMB-NCR-2022-0041', pays:'GCash · Maya · Cash', pickups:'312', rating:'4.9', completion:'98%', tags:['✓ EMB Accredited','✓ RA 9003','✓ Data Wipe','✓ ISO Certified'] },
  'EcoTech Manila':       { emoji:'♻️', loc:'Sampaloc, Manila · 2.8 km', hours:'Mon–Fri · 9:00 AM – 6:00 PM', accred:'EMB-NCR-2021-0029', pays:'GCash · Bank Transfer', pickups:'248', rating:'4.7', completion:'96%', tags:['✓ EMB Accredited','✓ RA 9003','✓ Data Wipe'] },
  'Recharge PH Inc.':     { emoji:'🔋', loc:'Quezon City · 3.5 km', hours:'Mon–Sat · 8:00 AM – 4:00 PM', accred:'EMB-NCR-2020-0015', pays:'Cash · GCash', pickups:'179', rating:'4.6', completion:'94%', tags:['✓ EMB Accredited','✓ RA 6969'] },
  'Juan Reyes Recycling Co.': { emoji:'🔄', loc:'Caloocan City · 4.1 km', hours:'Mon–Sat · 7:00 AM – 4:00 PM', accred:'EMB-NCR-2023-0057', pays:'GCash · Maya · Cash', pickups:'201', rating:'4.8', completion:'97%', tags:['✓ EMB Accredited','✓ RA 9003'] },
  'Metro E-Cycle Hub':    { emoji:'🌿', loc:'Pasig City · 5.0 km', hours:'Tue–Sat · 9:00 AM – 5:00 PM', accred:'EMB-NCR-2022-0066', pays:'GCash · Credit Card', pickups:'134', rating:'4.5', completion:'93%', tags:['✓ EMB Accredited','✓ RA 9003'] },
};

function viewCollector(name) {
  const d = COLLECTOR_DATA[name] || COLLECTOR_DATA['GreenCycle Solutions'];

  // Populate the detail page dynamically
  document.getElementById('cd-avatar').textContent  = d.emoji;
  document.getElementById('cd-name').textContent    = name;
  document.getElementById('cd-sub').textContent     = d.loc;
  document.getElementById('cd-pickups').textContent = d.pickups;
  document.getElementById('cd-rating').textContent  = d.rating;
  document.getElementById('cd-completion').textContent = d.completion + '%';
  document.getElementById('cd-loc').textContent     = d.loc;
  document.getElementById('cd-hours').textContent   = d.hours;
  document.getElementById('cd-accred').textContent  = d.accred;
  document.getElementById('cd-pays').textContent    = d.pays;

  // Tags
  const tagWrap = document.getElementById('cd-tags');
  tagWrap.innerHTML = d.tags.map(t => `<div class="cd-tag">${t}</div>`).join('');

  showPage('collector-detail');
}

function scheduleWithCollector() {
  showPage('schedule');
  showToast('✅ Collector pre-selected for your pickup');
}

function contactCollector() {
  showToast('📞 Opening contact options…');
}
