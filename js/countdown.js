// ── COUNTDOWN & MOTIVATIONAL MESSAGES ────────────────────────────────────

const MSGS = [
  "Every mock you skip is a rank someone else is gaining. The question isn't whether you can crack CAT — it's whether you will.",
  "The IIM seat doesn't go to the most gifted. It goes to the most relentless. Show up today.",
  "Right now, thousands are solving their 10th mock of the week. What are you doing?",
  "CAT is a test of discipline as much as intelligence. Build the habit. Today.",
  "Your future self is watching. Don't let them down. One concept at a time.",
  "Consistency compounds. 3 hours today, tomorrow, every day — that's your edge.",
  "The gap between where you are and where you want to be is filled with practice tests.",
  "Hard work in silence. Let the percentile make the noise. Lock in.",
  "Comfort is the enemy of percentile. Push past what feels easy today.",
  "Every VARC passage mastered, every DI set cracked — it adds up. Trust the process.",
  "Time is the only non-renewable resource you have. Spend it well.",
  "99+ percentile candidates didn't have more hours. They used theirs better.",
  "Start the mock. Analyse the mock. Repeat. That's the entire formula.",
  "You're not tired. You're just not obsessed enough yet.",
  "The difference between 90 and 99 percentile is what you do when you don't feel like studying.",
  "No one remembers how motivated you felt. They remember your percentile.",
  "You don't need more time. You need fewer excuses.",
  "Every day you delay, someone else gets sharper.",
  "Mocks expose you. Analysis builds you. Don't skip either.",
  "Stop preparing to prepare. Sit down and solve.",
  "You won't feel ready. Start anyway.",
  "Your competition isn't sleeping. Why are you?",
  "Small improvements daily beat one 'perfect' study day.",
  "You can either scroll or solve. Both have consequences.",
  "Accuracy under pressure is built, not wished for.",
  "Your weakest section is your biggest opportunity.",
  "Momentum comes after starting, not before.",
  "Nobody accidentally scores 99 percentile.",
  "One more set. One more passage. That's how ranks shift.",
  "You're always one disciplined month away from a different trajectory.",
  "Excuses feel valid now. They look stupid on result day.",
  "You don't rise to goals. You fall to your habits.",
  "If it's easy, it's not enough.",
  "Track your mocks like your future depends on it. Because it does.",
  "Every careless mistake is a rank lost. Fix them.",
  "Discomfort is the entry fee to 99+.",
  "You're building speed or losing it. There's no neutral.",
  "Cut distractions or cut your percentile. Your choice.",
  "Consistency beats intensity. Show up again tomorrow.",
  "Top percentilers aren't special. They're just more disciplined.",
  "You either control your time or regret how you spent it.",
  "The syllabus isn't the problem. Your execution is.",
  "Finish what you start. Especially when it's hard.",
];

function pad(n) { return String(n).padStart(2, "0"); }

function fmtDate(d) {
  const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
}

function dayOfYear(d) {
  return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 864e5);
}

function savedDate() { try { return localStorage.getItem("cat_date"); } catch(e) { return null; } }
function saveDate(v)  { try { localStorage.setItem("cat_date", v); }    catch(e) {} }

function getDefaultDate() {
  const def = new Date(new Date().getFullYear(), 10, 23); // Nov 23
  if (def < new Date()) def.setFullYear(def.getFullYear() + 1);
  return def.toISOString().split("T")[0];
}

function getTarget(dateVal) {
  if (!dateVal) return null;
  const [y, mo, d] = dateVal.split("-").map(Number);
  return new Date(y, mo - 1, d, 9, 0, 0);
}

function setDailyMsg(elId) {
  const el = document.getElementById(elId);
  if (el) el.textContent = MSGS[dayOfYear(new Date()) % MSGS.length];
}

function flash(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("flashing");
  void el.offsetWidth;
  el.classList.add("flashing");
}

let _prevSecs = -1;
function countdownTick(dateVal) {
  const now = new Date();
  const target = getTarget(dateVal);

  const clockStr = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  document.querySelectorAll(".js-clock").forEach(el => el.textContent = clockStr);

  if (!target) return;

  const diff      = Math.max(0, target - now);
  const totalSec  = Math.floor(diff / 1000);
  const days      = Math.floor(totalSec / 86400);
  const hours     = Math.floor((totalSec % 86400) / 3600);
  const mins      = Math.floor((totalSec % 3600) / 60);
  const secs      = totalSec % 60;
  const totalHours= Math.floor(diff / 3600000);
  const totalMins = Math.floor(diff / 60000);
  const weeks     = Math.ceil(days / 7);

  function set(id, val, doFlash) {
    const el = document.getElementById(id);
    if (el && el.textContent !== String(val)) {
      el.textContent = val;
      if (doFlash) flash(id);
    }
  }

  const dispDate = document.getElementById("display-date");
  if (dispDate) dispDate.textContent = fmtDate(target).toUpperCase();

  set("n-days",  days,          false);
  set("n-hours", pad(hours),    false);
  set("n-mins",  pad(mins),     false);
  if (secs !== _prevSecs) { set("n-secs", pad(secs), true); _prevSecs = secs; }

  set("s-weeks", weeks);
  set("s-hours",
    totalHours > 9999 ? Math.floor(totalHours/1000)+"k" : totalHours.toLocaleString()
  );
  set("s-mins-total",
    totalMins > 999999 ? Math.floor(totalMins/1000000)+"M" :
    totalMins > 9999   ? Math.floor(totalMins/1000)+"k" :
    totalMins.toLocaleString()
  );

  const dow         = now.getDay();
  const daysToSat   = dow === 0 ? 6 : 6 - dow;
  const weekendDays = Math.floor(days/7)*2 + (days%7 > daysToSat ? 2 : days%7 >= daysToSat-1 ? 1 : 0);
  set("s-weekends", weekendDays);

  const yearStart = new Date(now.getFullYear(), 0, 1);
  const yearEnd   = new Date(now.getFullYear()+1, 0, 1);
  const yearPct   = Math.round(((now - yearStart)/(yearEnd - yearStart))*100);
  const doy       = dayOfYear(now);
  const doyPct    = Math.round((doy/365)*100);
  const examRefStart = new Date(now.getFullYear(), 0, 1);
  const examPct   = Math.max(0, Math.min(100, Math.round(((now-examRefStart)/(target-examRefStart))*100)));

  function setBar(valId, barId, val, text) {
    const ve = document.getElementById(valId); if (ve) ve.textContent = text || val+"%";
    const be = document.getElementById(barId); if (be) be.style.width = Math.min(100, val)+"%";
  }
  setBar("p-year",  "pf-year",  yearPct);
  setBar("p-days",  "pf-days",  Math.min(100,doyPct), doy+"/365");
  setBar("p-exam",  "pf-exam",  examPct);

  const studyDays = Math.round(days * 0.85);
  set("m-study-days", studyDays);
  set("m-mocks",      Math.floor(studyDays/3));
  set("m-today",      doy);

  const urgencyRaw = Math.max(0, Math.min(1, 1 - days/365));
  const urgencyPct = Math.round(urgencyRaw * 100);
  const urgFill    = document.getElementById("urgency-fill");
  const urgText    = document.getElementById("urgency-text");

  if (urgFill) {
    urgFill.style.width = urgencyPct + "%";
    let color;
    if (urgencyPct <= 50) {
      const t = urgencyPct/50;
      color = `rgb(${Math.round(76+(212-76)*t)},${Math.round(175+(170-175)*t)},${Math.round(110+(48-110)*t)})`;
    } else {
      const t = (urgencyPct-50)/50;
      color = `rgb(${Math.round(212+(224-212)*t)},${Math.round(170+(85-170)*t)},${Math.round(48+(85-48)*t)})`;
    }
    urgFill.style.background = color;
    if (urgText) { urgText.style.color = color; urgText.textContent =
      days < 30 ? "Critical — final stretch" :
      days < 60 ? "High — danger zone" :
      days < 90 ? "Elevated" : "Steady — keep building";
    }
  }
}
