

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
