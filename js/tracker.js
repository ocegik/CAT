// ── CAT QUANT TRACKER LOGIC ───────────────────────────────────────────────
// Depends on: PHASES (data.js)

const TRACKER_KEY = 'cat_quant_v3';

function parseMins(d) {
  if (!d) return 0;
  const hm = d.match(/(\d+)h(\d+)m/); if (hm) return parseInt(hm[1])*60+parseInt(hm[2]);
  const h  = d.match(/(\d+)h/);        if (h)  return parseInt(h[1])*60;
  const m  = d.match(/(\d+)m/);        if (m)  return parseInt(m[1]);
  return 0;
}

function fmtTime(mins) {
  const h = Math.floor(mins/60), m = mins%60;
  if (h === 0) return m+'m';
  return h+'h'+(m > 0 ? ' '+m+'m' : '');
}

function getId(pid, si, vi) { return pid+'_'+si+'_'+vi; }

const TOTAL_VIDS = PHASES.reduce((a,p) => a+p.sections.reduce((b,s) => b+s.videos.length, 0), 0);
const TOTAL_MINS = PHASES.reduce((a,p) => a+p.sections.reduce((b,s) => b+s.videos.reduce((c,v) => c+parseMins(v.d), 0), 0), 0);

let checked = {};
let activeFilter = 'all';

function loadChecked()  { try { checked = JSON.parse(localStorage.getItem(TRACKER_KEY)||'{}'); } catch(e) { checked = {}; } }
function saveChecked()  { try { localStorage.setItem(TRACKER_KEY, JSON.stringify(checked)); } catch(e) {} }

function doneVids() { return Object.values(checked).filter(Boolean).length; }
function doneMins() {
  let t = 0;
  PHASES.forEach(p => p.sections.forEach((s,si) => s.videos.forEach((v,vi) => {
    if (checked[getId(p.id, si, vi)]) t += parseMins(v.d);
  })));
  return t;
}
function phaseDoneVids(p) {
  let n = 0;
  p.sections.forEach((s,si) => s.videos.forEach((_,vi) => { if (checked[getId(p.id,si,vi)]) n++; }));
  return n;
}
function phaseTotalVids(p)  { return p.sections.reduce((a,s) => a+s.videos.length, 0); }
function phaseDoneMins(p) {
  let t = 0;
  p.sections.forEach((s,si) => s.videos.forEach((v,vi) => { if (checked[getId(p.id,si,vi)]) t += parseMins(v.d); }));
  return t;
}
function phaseTotalMins(p)  { return p.sections.reduce((a,s) => a+s.videos.reduce((b,v) => b+parseMins(v.d), 0), 0); }

function updateTrackerStats() {
  const dv = doneVids(), dm = doneMins();
  const vpct = Math.round(dv/TOTAL_VIDS*100);
  const tpct = TOTAL_MINS > 0 ? Math.round(dm/TOTAL_MINS*100) : 0;

  document.getElementById('vid-done').textContent  = dv;
  document.getElementById('vid-total').textContent = TOTAL_VIDS;
  document.getElementById('vid-pct').textContent   = vpct+'%';
  document.getElementById('vid-left').textContent  = (TOTAL_VIDS-dv);
  document.getElementById('vid-bar').style.width   = vpct+'%';

  const th = Math.floor(dm/60), tm2 = dm%60;
  document.getElementById('time-done').textContent = th+'h'+(tm2>0?' '+tm2+'m':'');
  const totH = Math.floor(TOTAL_MINS/60), totM = TOTAL_MINS%60;
  document.getElementById('time-total').textContent = totH+'h'+(totM>0?' '+totM+'m':'');
  document.getElementById('time-pct').textContent   = tpct+'%';
  const leftMins = TOTAL_MINS-dm;
  const lh = Math.floor(leftMins/60), lm = leftMins%60;
  document.getElementById('time-left').textContent = lh+'h'+(lm>0?' '+lm+'m':'');
  document.getElementById('time-bar').style.width  = tpct+'%';
}

function updatePhaseUI(pid) {
  const p = PHASES.find(x => x.id === pid);
  if (!p) return;
  const tv = phaseTotalVids(p), dv = phaseDoneVids(p);
  const tm = phaseTotalMins(p), dm = phaseDoneMins(p);
  const el  = document.getElementById('pp-v-'+pid); if (el)  el.textContent  = dv+'/'+tv+' videos';
  const el2 = document.getElementById('pp-t-'+pid); if (el2) el2.textContent = fmtTime(dm)+' / '+fmtTime(tm);
  const ba  = document.getElementById('pb-va-'+pid); if (ba)  ba.style.width  = (tv>0?Math.round(dv/tv*100):0)+'%';
  const bt  = document.getElementById('pb-vt-'+pid); if (bt)  bt.style.width  = (tm>0?Math.round(dm/tm*100):0)+'%';
}

function toggleVideo(id, val, pid) {
  checked[id] = val;
  saveChecked();
  const lbl = document.querySelector(`label[for="c${id}"]`);
  if (lbl) lbl.className = 'video-label'+(val?' done':'');
  updateTrackerStats();
  updatePhaseUI(pid);
}

function togglePhase(pid) {
  const b  = document.getElementById('pb-'+pid);
  const ch = document.getElementById('chv-'+pid);
  if (!b) return;
  const open = b.style.display !== 'none';
  b.style.display = open ? 'none' : 'block';
  if (ch) ch.classList.toggle('open', !open);
}

function setFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTracker();
}

function resetAll() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    checked = {};
    saveChecked();
    renderTracker();
    updateTrackerStats();
  }
}

function renderTracker() {
  const c = document.getElementById('tracker');
  if (!c) return;
  c.innerHTML = '';

  PHASES.forEach(phase => {
    if (activeFilter !== 'all' && activeFilter !== phase.id) return;
    const tv = phaseTotalVids(phase), dv = phaseDoneVids(phase);
    const tm = phaseTotalMins(phase), dm = phaseDoneMins(phase);
    const vpct = tv > 0 ? Math.round(dv/tv*100) : 0;
    const tpct = tm > 0 ? Math.round(dm/tm*100) : 0;

    const block = document.createElement('div');
    block.className = 'phase-block';
    block.id = 'blk-'+phase.id;

    const hdr = document.createElement('div');
    hdr.className = 'phase-hdr';
    hdr.innerHTML = `
      <span class="ph-badge" style="background:${phase.color};color:${phase.tc};border:1px solid ${phase.bc}">${phase.label}</span>
      <span class="ph-title">${phase.title}</span>
      <span class="ph-meta">
        <span class="ph-vid-prog" id="pp-v-${phase.id}">${dv}/${tv} videos</span>
        <span class="ph-time-prog" id="pp-t-${phase.id}">${fmtTime(dm)} / ${fmtTime(tm)}</span>
      </span>
      <span class="ph-chev" id="chv-${phase.id}">›</span>`;
    hdr.onclick = () => togglePhase(phase.id);
    block.appendChild(hdr);

    const bars = document.createElement('div');
    bars.className = 'phase-bars';
    bars.id = 'pbars-'+phase.id;
    bars.innerHTML = `
      <div class="phase-bar-wrap">
        <div class="phase-bar-lbl">Videos</div>
        <div class="phase-bar-track"><div class="phase-bar-fill-a" id="pb-va-${phase.id}" style="width:${vpct}%"></div></div>
      </div>
      <div class="phase-bar-wrap">
        <div class="phase-bar-lbl">Time</div>
        <div class="phase-bar-track"><div class="phase-bar-fill-t" id="pb-vt-${phase.id}" style="width:${tpct}%"></div></div>
      </div>`;
    block.appendChild(bars);

    const body = document.createElement('div');
    body.className = 'section-body';
    body.id = 'pb-'+phase.id;
    body.style.display = 'none';

    phase.sections.forEach((sec, si) => {
      const st = document.createElement('div');
      st.className = 'section-title';
      st.textContent = sec.name;
      body.appendChild(st);

      sec.videos.forEach((vid, vi) => {
        const id = getId(phase.id, si, vi);
        const isDone = !!checked[id];
        const row = document.createElement('div');
        row.className = 'video-row';
        row.innerHTML = `
          <input type="checkbox" id="c${id}"${isDone?' checked':''}>
          <label for="c${id}" class="video-label${isDone?' done':''}">${vid.t}${vid.here ? '<span class="here-badge">▶ You are here</span>' : ''}</label>
          ${vid.d ? `<span class="vid-dur">${vid.d}</span>` : '<span class="vid-dur no-dur">—</span>'}`;
        row.querySelector('input').onchange = e => toggleVideo(id, e.target.checked, phase.id);
        body.appendChild(row);
      });
    });

    block.appendChild(body);
    c.appendChild(block);
  });
}

function initTracker() {
  loadChecked();
  renderTracker();
  updateTrackerStats();
}
