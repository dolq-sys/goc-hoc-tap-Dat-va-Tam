/* Góc học tập — điều hướng, học bài, làm bài tập, lưu tiến độ. */
(function () {
  'use strict';
  const H = window.HOCTAP || { students: [] };
  const STUDENTS = H.students;
  const ILL = window.ILL;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const app = $('#app');

  /* ---------- lưu trữ tiến độ (trong trình duyệt của máy đang dùng) ---------- */
  const KEY = 'goc-hoc-tap-v1';
  let P = {};
  try { P = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { P = {}; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) { } scheduleSync(); };
  const rec = (sid, key) => { P[sid] = P[sid] || {}; return (P[sid][key] = P[sid][key] || {}); };
  const get = (sid, key) => (P[sid] || {})[key];
  let soundOn = true;
  try { soundOn = localStorage.getItem(KEY + '-sound') !== '0'; } catch (e) { }

  /* ---------- âm thanh & pháo giấy ---------- */
  const Sound = (() => {
    let ctx, master;
    function ac() { if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); master = ctx.createGain(); master.gain.value = .5; master.connect(ctx.destination); } if (ctx.state === 'suspended') ctx.resume(); return ctx; }
    function tone(f, t0, dur, type = 'sine', vol = .3, f2) {
      if (!soundOn) return; let c; try { c = ac(); } catch (e) { return; } if (!c) return;
      const t = c.currentTime + t0, o = c.createOscillator(), g = c.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .05);
    }
    return {
      click: () => tone(1100, 0, .025, 'triangle', .08),
      correct: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, i * .075, .32, 'triangle', .2)),
      wrong: () => { tone(220, 0, .18, 'sawtooth', .09, 180); tone(150, .17, .34, 'sawtooth', .1, 100); },
      fanfare: () => { [392, 523, 659].forEach((f, i) => tone(f, i * .13, .22, 'triangle', .2)); [523, 659, 784, 1047].forEach(f => tone(f, .42, 1.1, 'triangle', .12)); },
    };
  })();
  const cv = $('#confetti'), cx = cv.getContext('2d'); let parts = [], raf = null;
  function confetti(n = 120) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    cv.width = innerWidth; cv.height = innerHeight; const cols = ['#4E9A6B', '#EE7D45', '#F6BE4A', '#4A93D6', '#EA7486'];
    for (let i = 0; i < n; i++) parts.push({ x: innerWidth / 2 + (Math.random() - .5) * innerWidth * .5, y: innerHeight * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 13 - 4, r: Math.random() * 3, vr: (Math.random() - .5) * .3, w: 7 + Math.random() * 7, h: 4 + Math.random() * 4, c: cols[i % cols.length], life: 0 });
    if (!raf) loop();
  }
  function loop() {
    cx.clearRect(0, 0, cv.width, cv.height);
    parts.forEach(p => { p.vy += .32; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life++; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.globalAlpha = Math.max(0, 1 - p.life / 160); cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore(); });
    parts = parts.filter(p => p.y < cv.height + 40 && p.life < 160);
    raf = parts.length ? requestAnimationFrame(loop) : (cx.clearRect(0, 0, cv.width, cv.height), null);
  }
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200); }
  const sb = $('#soundBtn');
  const paintSound = () => { sb.innerHTML = ILL.sound(soundOn); sb.title = soundOn ? 'Tắt âm thanh' : 'Bật âm thanh'; };
  sb.onclick = () => { soundOn = !soundOn; try { localStorage.setItem(KEY + '-sound', soundOn ? '1' : '0'); } catch (e) { } paintSound(); if (soundOn) Sound.click(); };
  paintSound();

  /* đọc to tiếng Anh */
  let curAudio = null;
  function say(text) {
    const real = (window.PRON || {})[String(text).toLowerCase()];
    if (real) { try { if (curAudio) curAudio.pause(); curAudio = new Audio(real.f); curAudio.play().catch(() => sayTTS(text)); return; } catch (e) { } }
    sayTTS(text);
  }
  function sayTTS(text) {
    try {
      const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = .85;
      const v = speechSynthesis.getVoices().find(v => /^en(-|_)(US|GB)/i.test(v.lang)); if (v) u.voice = v;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) { toast('Máy này chưa đọc được tiếng Anh'); }
  }
  document.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) { e.preventDefault(); say(b.dataset.say); } });

  /* ---------- tiện ích ---------- */
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = s => String(s == null ? '' : s).replace(/\[\[([^\]\/]+)\/([^\]]+)\]\]/g, '<span class="frac"><span>$1</span><span>$2</span></span>');
  const num = x => String(Math.round(x * 10) / 10).replace('.', ',');
  const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const neg = n => n < 0 ? `(−${-n})` : String(n);
  const nv = n => n < 0 ? `−${-n}` : String(n);
  const starsFor = s => s >= 9 ? 3 : s >= 7 ? 2 : s >= 5 ? 1 : 0;
  const starsHTML = (n, size) => `<span class="stars" aria-label="${n} sao">${[0, 1, 2].map(i => ILL.star(i < n)).join('')}</span>`;
  const today = () => { const d = new Date(), p = n => String(n).padStart(2, '0'); return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`; };
  const dateVN = d => d ? d.split('-').reverse().join('/') : '';

  /* ---------- dữ liệu ---------- */
  const student = id => STUDENTS.find(s => s.id === id);
  const subject = (s, id) => s && s.subjects.find(x => x.id === id);
  const allLessons = sub => sub.chapters.flatMap(c => c.lessons);
  const hasContent = l => !!(l.theory || l.en || (l.quiz && l.quiz.length) || l.gen || l.tl);
  const keyOf = (sub, l) => sub.id + '/' + l.id;

  /* ---------- đồng bộ tiến độ với Google Sheet (địa chỉ trong cau-hinh.js) ---------- */
  var SHEET = String(window.SHEET_URL || '').trim(), sent = {}, logQ = [], syncT = 0, syncBusy = false, syncMsg = '';
  try { logQ = JSON.parse(localStorage.getItem(KEY + '-log')) || []; } catch (e) { }
  const plain = t => String(t || '').replace(/<[^>]+>/g, '').replace(/\[\[([^\]]*)\]\]/g, '$1').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  function keepLog() { try { localStorage.setItem(KEY + '-log', JSON.stringify(logQ.slice(-300))); } catch (e) { } }
  function logEvent(s, sub, l, loai, kq) { if (!SHEET) return; logQ.push({ t: new Date().toISOString(), sid: s.id, mon: sub.name, bai: plain(l.title), loai, kq: String(kq) }); keepLog(); scheduleSync(); }
  function scheduleSync(ms) { if (!SHEET) return; clearTimeout(syncT); syncT = setTimeout(pushSync, ms || 1200); }
  function bangOf(s) {
    const rows = [];
    s.subjects.forEach(sub => allLessons(sub).forEach(l => {
      const r = get(s.id, keyOf(sub, l)); if (!r) return;
      const tlOk = r.tl ? Object.values(r.tl).filter(v => v === 'ok').length : 0;
      if (r.best == null && !tlOk) return;
      rows.push([sub.name, plain(l.title), r.best == null ? null : r.best, r.lastScore == null ? null : r.lastScore, r.tries || 0, l.tl ? `${tlOk} trên ${l.tl.length} bài` : '', r.last || '']);
    }));
    return rows;
  }
  function pushSync(beacon) {
    if (!SHEET) return;
    if (syncBusy) return beacon === true ? undefined : scheduleSync(3000);
    const state = {}, bang = {}, snap = {};
    new Set(Object.keys(P).concat(Object.keys(sent))).forEach(id => { const s = student(id); if (!s) return; const j = JSON.stringify(P[id] || {}); if (j !== sent[id]) { state[id] = JSON.parse(j); snap[id] = j; bang[id] = bangOf(s); } });
    const nlog = logQ.length;
    if (!Object.keys(state).length && !nlog) return;
    const body = JSON.stringify({ state, bang, log: logQ.slice(0, nlog) });
    const done = () => { Object.assign(sent, snap); logQ = logQ.slice(nlog); keepLog(); syncMsg = 'Đã lưu lên Google Sheet lúc ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + '.'; paintSync(); };
    if (beacon === true) { try { if (navigator.sendBeacon(SHEET, new Blob([body], { type: 'text/plain;charset=utf-8' }))) done(); } catch (e) { } return; }
    syncBusy = true;
    fetch(SHEET, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body })
      .then(done)
      .catch(() => { syncMsg = 'Chưa gửi được lên Google Sheet (mất mạng?). Website sẽ tự gửi lại.'; paintSync(); scheduleSync(30000); })
      .finally(() => { syncBusy = false; });
  }
  function mergeRec(a, b) {
    const newer = (a.last || '') >= (b.last || '') ? a : b, m = Object.assign({}, b, a);
    if (a.best != null || b.best != null) m.best = Math.max(a.best == null ? -1 : a.best, b.best == null ? -1 : b.best);
    if (newer.lastScore != null) m.lastScore = newer.lastScore;
    const t = Math.max(a.tries || 0, b.tries || 0); if (t) m.tries = t;
    if (a.read || b.read) m.read = true;
    if (a.last || b.last) m.last = newer.last || a.last || b.last;
    if (a.tl || b.tl) { m.tl = Object.assign({}, b.tl, a.tl); Object.keys(b.tl || {}).forEach(k => { if (b.tl[k] === 'ok') m.tl[k] = 'ok'; }); }
    return m;
  }
  function mergeStu(L, R) {
    L = L || {}; R = R || {};
    const lr = L._rs || 0, rr = R._rs || 0;
    if (rr > lr) L = {}; else if (lr > rr) R = {};
    const out = {};
    new Set(Object.keys(L).concat(Object.keys(R))).forEach(k => { if (k === '_rs') return; const a = L[k], b = R[k]; out[k] = a && b ? mergeRec(a, b) : (a || b); });
    if (lr || rr) out._rs = Math.max(lr, rr);
    return out;
  }
  function pullSync() {
    if (!SHEET) return;
    syncMsg = 'Đang tải tiến độ từ Google Sheet…';
    fetch(SHEET + (SHEET.indexOf('?') < 0 ? '?' : '&') + 'a=get', { cache: 'no-store' }).then(r => r.json()).then(remote => {
      Object.keys(remote || {}).forEach(id => { if (!student(id)) return; sent[id] = JSON.stringify(remote[id] || {}); P[id] = mergeStu(P[id], remote[id]); });
      syncMsg = 'Đã đồng bộ với Google Sheet.';
      save();
      if (decodeURIComponent(location.hash.slice(1)).split('--').length < 3) route();
    }).catch(() => { syncMsg = 'Không tải được tiến độ từ Google Sheet, đang dùng dữ liệu trên máy này.'; paintSync(); scheduleSync(); });
  }
  function paintSync() { const el = document.getElementById('syncMsg'); if (el) el.textContent = syncMsg; }
  addEventListener('pagehide', () => pushSync(true));
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') pushSync(true); });
  function subjStats(s, sub) {
    const ls = allLessons(sub).filter(hasContent);
    const done = ls.filter(l => (get(s.id, keyOf(sub, l)) || {}).best != null);
    return { total: ls.length, all: allLessons(sub).length, done: done.length, stars: done.reduce((a, l) => a + starsFor(get(s.id, keyOf(sub, l)).best), 0) };
  }
  function studentStats(s) {
    let done = 0, stars = 0, total = 0, sum = 0;
    s.subjects.forEach(sub => allLessons(sub).forEach(l => {
      if (!hasContent(l)) return; total++;
      const r = get(s.id, keyOf(sub, l)); if (r && r.best != null) { done++; sum += r.best; stars += starsFor(r.best); }
    }));
    return { done, stars, total, avg: done ? sum / done : null };
  }

  /* ---------- bài tập sinh tự động ---------- */
  const GEN = {
    bangnhan() {
      const a = rand(2, 9), b = rand(1, 10), p = a * b, t = rand(0, 3);
      if (t === 0) return { q: `${a} × ${b} = ?`, a: [p], e: `${a} × ${b} = ${p}.` };
      if (t === 1) return { q: `${p} : ${a} = ?`, a: [b], e: `Vì ${a} × ${b} = ${p} nên ${p} : ${a} = ${b}.` };
      if (t === 2) return { q: `${a} × ? = ${p}`, a: [b], e: `Thừa số chưa biết = tích : thừa số đã biết = ${p} : ${a} = ${b}.` };
      return { q: `? : ${a} = ${b}`, a: [p], e: `Số bị chia = thương × số chia = ${b} × ${a} = ${p}.` };
    },
    congtru1000() {
      if (Math.random() < .5) { const a = rand(100, 700), b = rand(20, 999 - a); return { q: `${a} + ${b} = ?`, a: [a + b], e: `Đặt tính rồi cộng từ phải sang trái: ${a} + ${b} = ${a + b}.` }; }
      const a = rand(200, 999), b = rand(15, a - 50); return { q: `${a} − ${b} = ?`, a: [a - b], e: `Đặt tính rồi trừ từ phải sang trái: ${a} − ${b} = ${a - b}.` };
    },
    nhanchia1000() {
      if (Math.random() < .5) { const a = rand(12, 240), b = rand(2, 4); return { q: `${a} × ${b} = ?`, a: [a * b], e: `Nhân lần lượt từ hàng đơn vị: ${a} × ${b} = ${a * b}.` }; }
      const b = rand(2, 9), q = rand(12, 110), r = Math.random() < .5 ? 0 : rand(1, b - 1), a = b * q + r;
      return r === 0 ? { q: `${a} : ${b} = ?`, a: [q], e: `${a} : ${b} = ${q} (vì ${q} × ${b} = ${a}).` }
        : { q: `${a} : ${b} được thương bằng mấy? (phép chia có dư)`, a: [q], e: `${a} : ${b} = ${q} (dư ${r}), vì ${q} × ${b} + ${r} = ${a}.` };
    },
    congtru10000() {
      if (Math.random() < .5) { const a = rand(1000, 6000), b = rand(100, 9999 - a); return { q: `${a} + ${b} = ?`, a: [a + b], e: `${a} + ${b} = ${a + b}.` }; }
      const a = rand(2000, 9999), b = rand(100, a - 500); return { q: `${a} − ${b} = ?`, a: [a - b], e: `${a} − ${b} = ${a - b}.` };
    },
    songuyen() {
      const a = rand(-25, 25), b = rand(-25, 25), t = rand(0, 2);
      if (t === 0) return { q: `${neg(a)} + ${neg(b)} = ?`, a: [a + b], e: `${neg(a)} + ${neg(b)} = ${nv(a + b)}. ${Math.sign(a) === Math.sign(b) ? 'Hai số cùng dấu: cộng hai phần số tự nhiên, giữ nguyên dấu.' : 'Hai số khác dấu: lấy phần số tự nhiên lớn trừ nhỏ, đặt dấu của số có phần số tự nhiên lớn hơn.'}` };
      if (t === 1) return { q: `${neg(a)} − ${neg(b)} = ?`, a: [a - b], e: `Trừ đi một số là cộng với số đối của nó: ${neg(a)} + ${neg(-b)} = ${nv(a - b)}.` };
      const c = rand(-12, 12), d = rand(-9, 9);
      return { q: `${neg(c)} · ${neg(d)} = ?`, a: [c * d], e: `${neg(c)} · ${neg(d)} = ${nv(c * d)}. Cùng dấu thì tích dương, khác dấu thì tích âm.` };
    },
    luythua() {
      const t = rand(0, 2);
      if (t === 0) { const a = pick([2, 3, 4, 5, 10]), n = a === 2 ? rand(2, 8) : a === 10 ? rand(2, 6) : rand(2, 4); return { q: `Tính ${a}<sup>${n}</sup> = ?`, a: [Math.pow(a, n)], e: `${a}<sup>${n}</sup> là tích của ${n} thừa số ${a}: ${Array(n).fill(a).join(' · ')} = ${Math.pow(a, n)}.` }; }
      if (t === 1) { const a = pick([2, 3, 5, 7]), m = rand(2, 6), n = rand(2, 5); return { q: `Viết gọn: ${a}<sup>${m}</sup> · ${a}<sup>${n}</sup> = ${a}<sup>?</sup>`, a: [m + n], e: `Nhân hai luỹ thừa cùng cơ số: giữ cơ số, cộng số mũ. ${m} + ${n} = ${m + n}.` }; }
      const a = pick([2, 3, 5, 7]), n = rand(2, 5), m = n + rand(1, 5); return { q: `Viết gọn: ${a}<sup>${m}</sup> : ${a}<sup>${n}</sup> = ${a}<sup>?</sup>`, a: [m - n], e: `Chia hai luỹ thừa cùng cơ số: giữ cơ số, trừ số mũ. ${m} − ${n} = ${m - n}.` };
    },
    rutgon() {
      let x, y; do { x = rand(1, 9); y = rand(2, 12); } while (gcd(x, y) !== 1 || x === y);
      const k = rand(2, 9), sgn = Math.random() < .25 ? -1 : 1;
      return { q: `Rút gọn phân số [[${sgn < 0 ? '−' : ''}${x * k}/${y * k}]] về phân số tối giản (viết dạng a/b)`, a: [`${sgn < 0 ? '-' : ''}${x}/${y}`], e: `Chia cả tử và mẫu cho ƯCLN(${x * k}, ${y * k}) = ${gcd(x * k, y * k)}, được [[${sgn < 0 ? '−' : ''}${x}/${y}]].` };
    },
    phanso() {
      const b = pick([2, 3, 4, 5, 6, 8, 10, 12]), d = pick([2, 3, 4, 5, 6, 8, 10, 12]), a = rand(1, b + 2), c = rand(1, d + 2);
      const plus = Math.random() < .6, n = plus ? a * d + c * b : a * d - c * b, m = b * d, g = gcd(n, m) || 1;
      const ans = n === 0 ? '0' : (m / g === 1 ? String(n / g) : `${n / g}/${m / g}`);
      return { q: `Tính rồi rút gọn: [[${a}/${b}]] ${plus ? '+' : '−'} [[${c}/${d}]] = ? (viết dạng a/b)`, a: [ans], e: `Quy đồng mẫu: [[${a * d}/${m}]] ${plus ? '+' : '−'} [[${c * b}/${m}]] = [[${nv(n)}/${m}]]${g > 1 ? ` = [[${nv(n / g)}/${m / g}]]` : ''}.` };
    },
    dauhieu() {
      const n = rand(100, 9999), d = pick([2, 3, 5, 9]), yes = n % d === 0;
      const why = { 2: `chữ số tận cùng là ${n % 10}`, 5: `chữ số tận cùng là ${n % 10}`, 3: `tổng các chữ số là ${String(n).split('').reduce((a, c) => a + +c, 0)}`, 9: `tổng các chữ số là ${String(n).split('').reduce((a, c) => a + +c, 0)}` }[d];
      return { q: `Số ${n} có chia hết cho ${d} không?`, opts: ['Có', 'Không'], a: yes ? 0 : 1, e: `${n} ${yes ? 'chia hết' : 'không chia hết'} cho ${d} vì ${why}.` };
    },
  };

  window.__goc = { GEN: () => GEN, matches: (a, b) => matches(a, b) }; // dùng để kiểm tra

  /* ---------- so khớp đáp án gõ vào ---------- */
  const norm = s => String(s).normalize('NFC').toLowerCase().replace(/[−–]/g, '-').replace(/\s+/g, '').replace(/[.!?]+$/, '');
  function matches(input, answers) {
    const x = norm(input); if (!x) return false;
    return answers.some(a => {
      const y = norm(a); if (x === y) return true;
      if (/^-?\d+$/.test(y) && x.replace(/\./g, '') === y) return true;
      if (/^-?\d+([.,]\d+)?$/.test(y) && x.replace(',', '.') === y.replace(',', '.')) return true;
      return false;
    });
  }

  /* ảnh đại diện: dùng ảnh thật (anh/<id>.jpg) nếu có, không thì dùng hình vẽ */
  const avatar = s => s.photo ? `<img class="ava" src="${s.photo}" alt="${esc(s.name)}" data-fb="${s.avatar}">` : ILL[s.avatar]();
  document.addEventListener('error', e => { const im = e.target; if (im && im.classList && im.classList.contains('ava')) { const t = document.createElement('span'); t.className = 'ava-fb'; t.innerHTML = ILL[im.dataset.fb](); im.replaceWith(t); } }, true);

  /* ---------- điều hướng ---------- */
  const go = h => { location.hash = h; };
  window.addEventListener('hashchange', route);
  let view = {};
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    const [sid, subid, lid] = h.split('--');
    window.scrollTo(0, 0);
    if (h === 'phuhuynh') return renderParent();
    const s = student(sid);
    if (!s) return renderHome();
    const sub = subject(s, subid);
    if (!sub) return renderStudent(s);
    const l = lid && allLessons(sub).find(x => x.id === lid);
    if (!l) return renderSubject(s, sub);
    renderLesson(s, sub, l);
  }

  const crumbs = (s, sub, l) => `<div class="top rv"><nav class="crumbs" aria-label="Đường dẫn">
      <a href="#">Trang chủ</a>${s ? `<span class="sep">›</span><a href="#${s.id}">${esc(s.short)}</a>` : ''}
      ${sub ? `<span class="sep">›</span><a href="#${s.id}--${sub.id}">${esc(sub.name)}</a>` : ''}</nav>
      ${s ? `<span class="who">${avatar(s)}${esc(s.name)} · Lớp ${s.grade}</span>` : ''}</div>`;

  /* ---------- trang chủ ---------- */
  function renderHome() {
    document.title = 'Góc học của Tâm và Đạt';
    app.innerHTML = `
      <section class="hero">
        <div>
          <div class="kicker rv"><span class="pill">Góc học tập</span> Sách Kết nối tri thức</div>
          <h1 class="rv mt24" style="--i:1">Hôm nay<br>mình học gì nhỉ?</h1>
          <p class="lead rv" style="--i:2">Chọn tên của con, chọn môn học, đọc bài rồi làm bài tập để nhận sao.</p>
        </div>
        <div class="heroart" aria-hidden="true">
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:230px">${ILL.heroBooks()}</div>
          <div style="position:absolute;left:10px;top:10px;width:110px">${ILL.heroPencil()}</div>
          <div style="position:absolute;right:16px;top:30px;width:90px">${ILL.heroBulb()}</div>
        </div>
      </section>
      <div class="kids">${STUDENTS.map((s, i) => {
        const st = studentStats(s);
        return `<a class="kid box c-${s.color} rv" style="--i:${i + 3};background:var(--ct)" href="#${s.id}">
          <div class="av">${avatar(s)}</div>
          <div><div class="grade">Lớp ${s.grade}</div><h2>${esc(s.name)}</h2>
            <div class="stats"><span>${s.subjects.length} môn</span><span>${st.done}/${st.total} bài đã làm</span><span><span class="stars">${ILL.star(true)}</span> ${st.stars} sao</span></div>
            <div class="go"><span class="btn dark sm">Vào học →</span></div></div></a>`;
      }).join('')}</div>
      <div class="parentlink rv" style="--i:6"><a class="btn ghost" href="#phuhuynh">Dành cho bố mẹ: xem tiến độ học</a></div>`;
  }

  /* ---------- trang học sinh ---------- */
  function renderStudent(s) {
    document.title = `${s.short} – Góc học tập`;
    const st = studentStats(s);
    app.innerHTML = crumbs(s) + `
      <div class="kicker rv">Lớp ${s.grade} · ${st.stars} sao</div>
      <h2 class="rv mt16" style="--i:1">Chào ${esc(s.short)}! Hôm nay con học môn gì?</h2>
      <div class="subjects">${s.subjects.map((sub, i) => {
        const ss = subjStats(s, sub), pct = ss.total ? Math.round(ss.done / ss.total * 100) : 0;
        return `<a class="subj c-${sub.color} rv" style="--i:${i + 2}" href="#${s.id}--${sub.id}">
          <div class="sh"><span class="tt">${esc(sub.tt)}</span>${ILL[sub.ill]()}</div>
          <h3>${esc(sub.name)}</h3><div class="book">${esc(sub.book)}</div>
          <div><div class="bm"><span>${ss.done}/${ss.total} bài</span><span>${ss.stars ? ss.stars + ' sao' : ''}</span></div><div class="bar"><i style="width:${pct}%"></i></div></div></a>`;
      }).join('')}</div>`;
  }

  /* ---------- trang môn học ---------- */
  function lessonChip(s, sub, l) {
    if (!hasContent(l)) return `<span class="chip">Sắp có</span>`;
    const r = get(s.id, keyOf(sub, l));
    if (r && r.best != null) { const c = r.best >= 8 ? 'ok' : r.best >= 5 ? 'mid' : 'low'; return `<span class="chip ${c}">${starsHTML(starsFor(r.best))} ${num(r.best)} điểm</span>`; }
    if (r && r.read) return `<span class="chip mid">Đã đọc bài</span>`;
    return `<span class="chip">Chưa học</span>`;
  }
  function renderSubject(s, sub) {
    document.title = `${sub.name} – ${s.short}`;
    const ss = subjStats(s, sub);
    let n = 0;
    app.innerHTML = crumbs(s, null) + `
      <div class="shead c-${sub.color} rv"><div><div class="kicker">${esc(sub.book)}</div><h2>${esc(sub.name)}</h2>
        <p class="lead mt8">${ss.done} / ${ss.total} bài đã làm${ss.stars ? ` · ${ss.stars} sao` : ''}</p></div>${ILL[sub.ill]()}</div>
      ${sub.chapters.map((c, ci) => `<section class="chap c-${sub.color} rv" style="--i:${ci + 1}"><h4>${esc(c.title)}</h4><div class="lessons">
        ${c.lessons.map(l => {
          n++; const r = get(s.id, keyOf(sub, l)); const done = r && r.best != null;
          return `<a class="les ${hasContent(l) ? '' : 'soon'} ${done ? 'done' : ''}" href="#${s.id}--${sub.id}--${l.id}">
            <span class="n">${n}</span><span class="lt">${fmt(l.title)}${l.sum ? `<span class="ls"><br>${fmt(l.sum)}</span>` : ''}</span><span class="st">${lessonChip(s, sub, l)}</span></a>`;
        }).join('')}</div></section>`).join('')}`;
  }

  /* ---------- trang bài học ---------- */
  const EN_TABS = [['tuvung', 'Từ vựng'], ['nguphap', 'Ngữ pháp'], ['phatam', 'Phát âm'], ['doc', 'Đọc hiểu'], ['nghe', 'Nghe'], ['noi', 'Trò chơi nối'], ['lam', 'Bài tập']];
  function renderLesson(s, sub, l, tab) {
    document.title = `${l.title} – ${s.short}`;
    stopSpeech();
    const list = allLessons(sub), idx = list.indexOf(l), next = list.slice(idx + 1).find(hasContent);
    const hasQuiz = !!(l.gen || (l.quiz && l.quiz.length));
    const tabs = l.en ? EN_TABS : [l.theory && ['hoc', 'Học bài'], hasQuiz && ['lam', 'Trắc nghiệm'], l.tl && ['tuluan', 'Tự luận']].filter(Boolean);
    if (!tab) tab = tabs.length ? tabs[0][0] : 'hoc';
    view = { s, sub, l, next };
    if (!hasContent(l)) {
      app.innerHTML = crumbs(s, sub) + `<div class="lhead c-${sub.color}"><div class="kicker rv">${esc(sub.name)}</div><h2 class="rv">${fmt(l.title)}</h2></div>
        <div class="box y mt24 rv" style="--i:2;max-width:680px"><h3>Bài này đang được soạn</h3><p class="mt8">Bố mẹ có thể thêm nội dung cho bài này. Xem hướng dẫn ở trang <a href="#phuhuynh">Dành cho bố mẹ</a>.</p>
        <div class="actions mt16"><a class="btn dark" href="#${s.id}--${sub.id}">Về danh sách bài</a>${next ? `<a class="btn" href="#${s.id}--${sub.id}--${next.id}">Bài có nội dung tiếp theo →</a>` : ''}</div></div>`;
      return;
    }
    app.innerHTML = crumbs(s, sub) + `
      <div class="lhead c-${sub.color}"><div class="kicker rv">${esc(sub.name)} · Lớp ${s.grade}</div><h2 class="rv" style="--i:1">${fmt(l.title)}</h2>
      <div class="seg rv" style="--i:2" role="tablist">${tabs.map(([k, label]) => `<button role="tab" data-tab="${k}" class="${tab === k ? 'on' : ''}" aria-selected="${tab === k}">${label}</button>`).join('')}</div></div><div id="pane"></div>`;
    $$('.seg [data-tab]').forEach(b => b.onclick = () => { Sound.click(); renderLesson(s, sub, l, b.dataset.tab); });
    const ti = tabs.findIndex(x => x[0] === tab), nextTab = tabs[ti + 1];
    const goNext = (label) => nextTab ? `<button class="btn y" id="toNext">${label || nextTab[1]} →</button>` : '';
    const bindNext = () => { const b = $('#toNext'); if (b) b.onclick = () => { Sound.click(); renderLesson(s, sub, l, nextTab[0]); window.scrollTo(0, 0); }; };
    const markRead = () => { const r = rec(s.id, keyOf(sub, l)); if (!r.read) { r.read = true; r.last = today(); save(); } };
    const pane = $('#pane'), E = l.en;
    if (tab === 'hoc') {
      markRead();
      const fm = (window.FIG_MAP || {})[`${s.id}/${sub.id}/${l.id}`], fig = fm && window.FIG && window.FIG[fm[0]] ? `<figure class="fig">${window.FIG[fm[0]]}<figcaption>${esc(fm[1])}</figcaption></figure>` : '';
      const ph = (window.PHOTO_MAP || {})[`${s.id}/${sub.id}/${l.id}`] || [], photos = ph.length ? `<div class="photos">${ph.map(x => `<figure class="photo"><img src="${x.f}" alt="${esc(x.cap)}" loading="lazy"><figcaption>${esc(x.cap)}<small>Ảnh: ${esc(x.by)} · ${esc(x.lic)} · <a href="${x.src}" target="_blank" rel="noopener">Wikimedia Commons</a></small></figcaption></figure>`).join('')}</div>` : '';
      pane.innerHTML = `<article class="theory rv" style="--i:3">${fig}${photos}${fmt(l.theory)}</article>
        <div class="actions nextcta">${hasQuiz ? `<button class="btn y" id="toNext">Làm bài tập →</button>` : ''}${next ? `<a class="btn ghost" href="#${s.id}--${sub.id}--${next.id}">Bài tiếp theo</a>` : ''}</div>`;
      bindNext();
    } else if (tab === 'tuvung') {
      markRead();
      pane.innerHTML = `<div class="theory"><p class="muted">Bấm vào từng thẻ để nghe và đọc theo.</p></div>${window.VGRID(E.v)}<div class="actions nextcta">${goNext()}</div>`;
      bindNext();
    } else if (tab === 'nguphap') {
      pane.innerHTML = `<article class="theory">${fmt(E.g)}</article><div class="actions nextcta">${goNext()}</div>`; bindNext();
    } else if (tab === 'phatam') {
      const pr = E.pr;
      pane.innerHTML = `<div class="theory"><p>Bấm vào từng từ để nghe. Chú ý âm được tô đậm, rồi đọc to theo.</p></div>
        <div class="sgrid">${pr.sounds.map(([sym, ws], i) => `<div class="scol c-${['b', 'o', 'g'][i % 3]}"><div class="sym">${esc(sym)}</div><div class="words">${ws.map(w => `<button class="say" data-say="${esc(w)}">${esc(w)}</button>`).join('')}</div></div>`).join('')}</div>
        <h3 class="mt32">Luyện tai: nghe và chọn âm</h3><div id="mini"></div><div class="actions nextcta">${goNext()}</div>`;
      const pool = pr.sounds.flatMap(([sym, ws], gi) => ws.map(w => ({ w, gi })));
      const qs = shuffle(pool).slice(0, Math.min(6, pool.length)).map(x => ({ q: `Từ em nghe có âm nào? <button class="say" data-say="${esc(x.w)}">Nghe</button>`, opts: pr.sounds.map(z => z[0]), a: x.gi, keep: true, e: `Từ đó là <b>${esc(x.w)}</b>, có âm ${esc(pr.sounds[x.gi][0])}.` }));
      miniQuiz($('#mini'), qs); bindNext();
    } else if (tab === 'doc') {
      pane.innerHTML = `<article class="theory"><div class="passage">${E.rd.t}</div><p class="small">Mẹo: bôi đen một câu khó, rồi bấm “Nghe cả bài” để nghe máy đọc.</p>
        <div class="actions"><button class="btn sm" id="readAll">Nghe cả bài</button><button class="btn sm ghost" id="stopAll">Dừng</button></div></article>
        <h3 class="mt32">Trả lời câu hỏi</h3><div id="mini"></div><div class="actions nextcta">${goNext()}</div>`;
      $('#readAll').onclick = () => speakLines([['', $('.passage').textContent]]); $('#stopAll').onclick = stopSpeech;
      miniQuiz($('#mini'), E.rd.q); bindNext();
    } else if (tab === 'nghe') {
      pane.innerHTML = `<div class="listen box b"><div id="player"><div class="actions"><button class="btn dark" id="lsPlay">Nghe hội thoại</button><button class="btn" id="lsSlow">Nghe chậm</button><button class="btn ghost" id="lsStop">Dừng</button></div>
        <p class="small mt8" id="lsNote">Đang dùng giọng đọc của máy. Khi bố mẹ thêm file âm thanh, website sẽ tự dùng file đó.</p></div>
        <details class="mt16"><summary>Xem lời hội thoại</summary><div class="lines">${E.ls.s.map(([who, line], i) => `<p data-line="${i}"><b>${esc(who)}:</b> ${esc(line)}</p>`).join('')}</div></details></div>
        <h3 class="mt32">Nghe và trả lời</h3><div id="mini"></div><div class="actions nextcta">${goNext()}</div>`;
      $('#lsPlay').onclick = () => speakLines(E.ls.s, 1);
      $('#lsSlow').onclick = () => speakLines(E.ls.s, .7);
      $('#lsStop').onclick = stopSpeech;
      if (E.audio) {
        const a = new Audio(); a.preload = 'metadata';
        a.onloadedmetadata = () => { if (!$('#player')) return; $('#player').innerHTML = `<audio controls preload="metadata" src="${esc(E.audio)}" style="width:100%"></audio><p class="small mt8">Giọng đọc thu sẵn.</p>`; };
        a.src = E.audio;
      }
      miniQuiz($('#mini'), E.ls.q); bindNext();
    } else if (tab === 'tuluan') {
      const r = rec(s.id, keyOf(sub, l)); r.tl = r.tl || {};
      const done = () => Object.values(r.tl).filter(v => v === 'ok').length;
      pane.innerHTML = `<div class="theory"><p class="muted">Con làm từng bài ra giấy. Có đáp số thì gõ vào để kiểm tra. Bí quá thì xem <b>Gợi ý</b>, làm xong thì xem <b>Lời giải</b> và tự chấm.</p></div>
        <p class="tlscore small" id="tlScore"></p>
        <div class="tl">${l.tl.map((p, i) => `<section class="tlcard" data-i="${i}">
          <div class="tlde"><span class="tln">Bài ${i + 1}</span>${p.diem ? `<span class="tld">${p.diem} điểm</span>` : ''}<div>${fmt(p.de)}</div></div>
          ${p.dapso ? `<form class="qin tlcheck" autocomplete="off"><input aria-label="Đáp số bài ${i + 1}" placeholder="Đáp số cuối cùng"><button class="btn sm dark" type="submit">Kiểm tra</button></form><div class="tlfb"></div>` : ''}
          <div class="actions mt8">${p.goiy ? '<button class="btn sm" data-act="hint">Gợi ý</button>' : ''}<button class="btn sm" data-act="sol">Xem lời giải</button></div>
          ${p.goiy ? `<div class="explain ok tlhint" hidden><strong>Gợi ý:</strong> ${fmt(p.goiy)}</div>` : ''}
          <div class="tlsol" hidden><h4>Lời giải</h4><ol>${p.giai.map(x => `<li>${fmt(x)}</li>`).join('')}</ol>
            <div class="actions mt8"><span class="small">Con tự chấm:</span><button class="btn sm" data-act="ok">Em làm đúng</button><button class="btn sm ghost" data-act="no">Em làm chưa đúng</button></div></div>
        </section>`).join('')}</div>`;
      const paint = () => { $('#tlScore').textContent = `Đã làm đúng ${done()}/${l.tl.length} bài tự luận`; $$('.tlcard', pane).forEach(c => { const v = r.tl[c.dataset.i]; c.classList.toggle('ok', v === 'ok'); c.classList.toggle('no', v === 'no'); }); };
      $$('.tlcard', pane).forEach(card => {
        const i = +card.dataset.i, p = l.tl[i];
        $$('[data-act]', card).forEach(b => b.onclick = () => {
          const act = b.dataset.act; Sound.click();
          if (act === 'hint') $('.tlhint', card).hidden = false;
          if (act === 'sol') $('.tlsol', card).hidden = false;
          if (act === 'ok' || act === 'no') { r.tl[i] = act; r.last = today(); save(); paint(); logEvent(s, sub, l, `Tự luận bài ${i + 1}`, act === 'ok' ? 'Tự chấm: làm đúng' : 'Tự chấm: chưa đúng'); if (act === 'ok') { Sound.correct(); if (done() === l.tl.length) confetti(120); } }
        });
        const f = $('.tlcheck', card);
        if (f) f.onsubmit = e => { e.preventDefault(); const v = $('input', f).value; if (!v.trim()) return; const ok = matches(v, p.dapso.map(String)); $('.tlfb', card).innerHTML = `<div class="explain ${ok ? 'ok' : 'bad'}"><strong>${ok ? 'Đáp số đúng!' : 'Đáp số chưa đúng.'}</strong> ${ok ? 'Xem lời giải để so cách trình bày nhé.' : 'Kiểm tra lại từng bước hoặc xem gợi ý.'}</div>`; ok ? Sound.correct() : Sound.wrong(); if (ok && !r.tl[i]) { r.tl[i] = 'ok'; r.last = today(); save(); paint(); logEvent(s, sub, l, `Tự luận bài ${i + 1}`, 'Gõ đúng đáp số'); } };
      });
      paint();
    } else if (tab === 'noi') {
      matchGame(pane, s, sub, l); 
    } else startQuiz(s, sub, l, next);
  }

  /* ---------- đọc tiếng Anh nhiều câu (phần Nghe khi chưa có file âm thanh) ---------- */
  function stopSpeech() { try { speechSynthesis.cancel(); } catch (e) { } $$('.lines .now').forEach(x => x.classList.remove('now')); }
  function speakLines(lines, rate = 1) {
    stopSpeech();
    let voices = [];
    try { voices = speechSynthesis.getVoices().filter(v => /^en(-|_)/i.test(v.lang)); } catch (e) { toast('Máy này chưa đọc được tiếng Anh'); return; }
    const pref = voices.filter(v => /US|GB/i.test(v.lang));
    const pool = pref.length ? pref : voices, who = [...new Set(lines.map(x => x[0]))];
    lines.forEach(([name, text], i) => {
      const u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = .9 * rate;
      const k = who.indexOf(name);
      if (pool.length > 1) u.voice = pool[k % pool.length]; else if (pool[0]) u.voice = pool[0];
      u.pitch = pool.length > 1 ? 1 : (k % 2 ? 1.35 : .95);
      u.onstart = () => { $$('.lines .now').forEach(x => x.classList.remove('now')); const el = $(`.lines [data-line="${i}"]`); if (el) el.classList.add('now'); };
      speechSynthesis.speak(u);
    });
  }

  /* ---------- câu hỏi nhanh (đọc hiểu, nghe, phát âm) ---------- */
  function miniQuiz(el, qs) {
    let done = 0, right = 0;
    el.innerHTML = `<div class="mini">${qs.map((q, i) => {
      const order = q.keep ? q.opts.map((t, k) => ({ t, k })) : shuffle(q.opts.map((t, k) => ({ t, k })));
      return `<div class="mq" data-i="${i}"><div class="mqt"><span class="qn">${i + 1}.</span> ${fmt(q.q)}</div><div class="mopts">${order.map(o => `<button class="mo" data-k="${o.k}">${fmt(o.t)}</button>`).join('')}</div><div class="mfb"></div></div>`;
    }).join('')}</div><p class="mscore small" aria-live="polite"></p>`;
    $$('.mq', el).forEach(card => {
      const q = qs[+card.dataset.i];
      $$('.mo', card).forEach(b => b.onclick = () => {
        const ok = +b.dataset.k === q.a; done++; if (ok) right++;
        $$('.mo', card).forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('ok'); });
        if (!ok) b.classList.add('bad');
        ok ? Sound.correct() : Sound.wrong();
        $('.mfb', card).innerHTML = `<div class="explain ${ok ? 'ok' : 'bad'}"><strong>${ok ? 'Đúng rồi!' : 'Chưa đúng.'}</strong>${q.e ? ' ' + fmt(q.e) : ''}</div>`;
        $('.mscore', el).textContent = `Đúng ${right}/${qs.length} câu${done === qs.length ? (right === qs.length ? ' · Xuất sắc!' : ' · Xem lại các câu sai nhé.') : ''}`;
        if (done === qs.length && right === qs.length) confetti(80);
      });
    });
  }

  /* ---------- trò chơi nối thẻ ---------- */
  function matchGame(pane, s, sub, l, mode, size) {
    const V = l.en.v, LIB = window.PIC_LIB || {};
    const keyOfV = v => (v[2] || v[0]).toLowerCase();
    const withPic = V.filter(v => LIB[keyOfV(v)]);
    const canPic = withPic.length >= 4;
    mode = mode || 'nghia'; if (mode === 'hinh' && !canPic) mode = 'nghia';
    const src = mode === 'hinh' ? withPic : V;
    const sizes = [12, 16].filter(n => n / 2 <= src.length);
    if (!size || !sizes.includes(size)) size = sizes.length ? sizes[0] : src.length * 2;
    const pairs = shuffle(src).slice(0, size / 2);
    const cards = shuffle(pairs.flatMap((v, i) => [{ p: i, k: 'w', v }, { p: i, k: 'm', v }]));
    pane.innerHTML = `<div class="mtop"><div class="seg sm">${['nghia', 'hinh'].map(m => `<button data-mode="${m}" class="${m === mode ? 'on' : ''}" ${m === 'hinh' && !canPic ? 'disabled' : ''}>${m === 'nghia' ? 'Từ ↔ Nghĩa' : 'Từ ↔ Hình'}</button>`).join('')}</div>
        <div class="seg sm">${(sizes.length ? sizes : [size]).map(n => `<button data-size="${n}" class="${n === size ? 'on' : ''}">${n} thẻ</button>`).join('')}</div></div>
      <p class="small mt16">Chọn một thẻ, rồi chọn thẻ khớp với nó. Đúng thì cặp thẻ biến mất. Thẻ màu xanh là từ tiếng Anh (bấm vào sẽ nghe đọc).</p>
      <div class="mstat"><span id="mMoves">0 lượt</span><span id="mLeft">Còn ${pairs.length} cặp</span></div>
      <div class="mgrid ${size > 12 ? 'g16' : ''}">${cards.map((c, i) => `<button class="mcard ${c.k}" data-i="${i}">${c.k === 'w' ? `<b>${esc(c.v[0])}</b>` : mode === 'hinh' ? LIB[keyOfV(c.v)] : `<span>${esc(c.v[1])}</span>`}</button>`).join('')}</div>
      <div id="mDone"></div>`;
    $$('[data-mode]', pane).forEach(b => b.onclick = () => { Sound.click(); matchGame(pane, s, sub, l, b.dataset.mode, size); });
    $$('[data-size]', pane).forEach(b => b.onclick = () => { Sound.click(); matchGame(pane, s, sub, l, mode, +b.dataset.size); });
    let sel = null, moves = 0, left = pairs.length, busy = false; const t0 = Date.now();
    $$('.mcard', pane).forEach(btn => btn.onclick = () => {
      if (busy || btn.classList.contains('gone')) return;
      const c = cards[+btn.dataset.i];
      if (c.k === 'w') say(c.v[0]); else Sound.click();
      if (!sel) { sel = btn; btn.classList.add('sel'); return; }
      if (sel === btn) { btn.classList.remove('sel'); sel = null; return; }
      const a = cards[+sel.dataset.i]; moves++; $('#mMoves').textContent = moves + ' lượt';
      const first = sel; sel = null;
      if (a.p === c.p && a.k !== c.k) {
        first.classList.remove('sel'); first.classList.add('ok'); btn.classList.add('ok'); Sound.correct();
        setTimeout(() => { first.classList.add('gone'); btn.classList.add('gone'); }, 380);
        left--; $('#mLeft').textContent = left ? `Còn ${left} cặp` : 'Xong!';
        if (!left) {
          const sec = Math.round((Date.now() - t0) / 1000);
          setTimeout(() => { Sound.fanfare(); confetti(160); $('#mDone').innerHTML = `<div class="result rv" style="margin-top:16px"><div class="mark"><div><b>${moves}</b><span>lượt</span></div></div><div><p class="loiphe"><small>Hoàn thành</small>Con đã nối đúng ${pairs.length} cặp trong ${sec} giây!</p><p class="small mt8">${moves <= pairs.length + 2 ? 'Gần như không sai lượt nào. Giỏi quá!' : 'Chơi lại để nối ít lượt hơn nhé.'}</p><div class="actions mt16"><button class="btn dark" id="mAgain">Chơi lại</button><button class="btn y" id="mQuiz">Làm bài tập →</button></div></div></div>`;
            $('#mAgain').onclick = () => matchGame(pane, s, sub, l, mode, size); $('#mQuiz').onclick = () => renderLesson(s, sub, l, 'lam'); }, 500);
        }
      } else {
        busy = true; first.classList.remove('sel'); first.classList.add('bad'); btn.classList.add('bad'); Sound.wrong();
        setTimeout(() => { first.classList.remove('bad'); btn.classList.remove('bad'); busy = false; }, 550);
      }
    });
  }

  /* ---------- làm bài tập ---------- */
  function buildQuestions(l) {
    if (l.gen) {
      Object.assign(GEN, window.GEN_MORE || {});
      const one = () => {
        if (l.gen === 'mix') { const [k, a] = pick(l.mix).split(':'); return GEN[k](a == null ? undefined : (isNaN(a) ? a : +a)); }
        return GEN[l.gen](l.arg);
      };
      const out = (l.quiz || []).map(q => Object.assign({}, q)), seen = new Set(out.map(q => q.q)), total = out.length + (l.n || 10);
      let guard = 0;
      while (out.length < total && guard++ < 300) { const q = one(); if (seen.has(q.q)) continue; seen.add(q.q); out.push(q); }
      return out;
    }
    const base = l.quiz.map(q => Object.assign({}, q));
    if (!l.en) return base;
    /* tiếng Anh: thêm câu hỏi từ vựng sinh tự động (nhìn hình, nghe, nghĩa) */
    const V = l.en.v, LIB = window.PIC_LIB || {}, kv = v => (v[2] || v[0]).toLowerCase();
    const choices = (v, field) => { const others = shuffle(V.filter(x => x !== v)).slice(0, 3).map(x => x[field]); return [v[field], ...others]; };
    const extra = [], picked = shuffle(V).slice(0, 4);
    picked.forEach((v, i) => {
      if (V.length < 3) return;
      const kind = i % 3;
      if (kind === 0 && LIB[kv(v)]) extra.push({ q: `Đây là gì?${window.PIC(kv(v))}`, opts: choices(v, 0), a: 0, e: `${v[0]} – ${v[1]}.` });
      else if (kind === 1) extra.push({ q: `Nghe rồi chọn nghĩa đúng: <button class="say" data-say="${esc(v[0])}">Bấm để nghe</button>`, opts: choices(v, 1), a: 0, e: `${v[0]} – ${v[1]}.` });
      else extra.push({ q: `“${v[1]}” trong tiếng Anh là:`, opts: choices(v, 0), a: 0, e: `${v[1]} – ${v[0]}.` });
    });
    return [...extra, ...base];
  }
  function startQuiz(s, sub, l, next) {
    const Q = buildQuestions(l).map(q => {
      if (q.opts) { const order = shuffle(q.opts.map((t, i) => ({ t, i }))); if (q.keep) order.sort((a, b) => a.i - b.i); return Object.assign(q, { order }); }
      return Object.assign(q, { a: Array.isArray(q.a) ? q.a.map(String) : [String(q.a)] });
    });
    const st = { i: 0, right: 0, log: [] };
    const pane = $('#pane');
    function show() {
      const q = Q[st.i];
      pane.innerHTML = `<div class="qwrap">
        <div class="qprog"><i style="width:${st.i / Q.length * 100}%"></i></div>
        <div class="qtop"><span class="qn">Câu ${st.i + 1}/${Q.length}</span><span class="qscore">Đúng ${st.right} câu</span></div>
        <div class="qt rv">${fmt(q.q)}</div>
        ${q.opts ? `<div class="qopts">${q.order.map((o, k) => `<button class="qo rv" style="--i:${k + 1}" data-i="${o.i}"><b>${'ABCD'[k]}</b><span>${fmt(o.t)}</span></button>`).join('')}</div>`
          : `<form class="qin rv" style="--i:1" id="qform" autocomplete="off"><input id="qinput" aria-label="Câu trả lời" placeholder="${esc(q.ph || 'Gõ câu trả lời')}" ${q.a.every(a => /^-?\d+$/.test(a)) ? 'inputmode="numeric"' : ''}><button class="btn dark" type="submit">Kiểm tra</button></form>`}
        <div id="fb"></div><div class="qnav actions" id="qnav"></div></div>`;
      if (q.opts) $$('.qo', pane).forEach(b => b.onclick = () => answer(+b.dataset.i === q.a, b));
      else { const inp = $('#qinput'); inp.focus({ preventScroll: true }); $('#qform').onsubmit = e => { e.preventDefault(); if (!inp.value.trim()) { toast('Con gõ câu trả lời trước nhé'); return; } answer(matches(inp.value, q.a), inp); }; }
    }
    function answer(ok, el) {
      const q = Q[st.i];
      if (q.opts) { $$('.qo', pane).forEach(b => { b.disabled = true; if (+b.dataset.i === q.a) b.classList.add('ok'); }); if (!ok) el.classList.add('bad'); }
      else { el.readOnly = true; el.classList.add(ok ? 'ok' : 'bad'); $('#qform button').disabled = true; }
      if (ok) { st.right++; Sound.correct(); if (st.right % 3 === 0) confetti(30); } else Sound.wrong();
      $('.qscore', pane).textContent = `Đúng ${st.right} câu`;
      const right = q.opts ? q.opts[q.a] : esc(q.a[0]);
      st.log.push({ q: q.q, ok, right, given: q.opts ? q.opts[+el.dataset.i] : esc(el.value) });
      $('#fb').innerHTML = `<div class="explain ${ok ? 'ok' : 'bad'}"><strong>${ok ? pick(['Đúng rồi!', 'Giỏi quá!', 'Chính xác!', 'Tuyệt vời!']) : `Chưa đúng. Đáp án: ${fmt(right)}`}</strong>${q.e ? `<br>${fmt(q.e)}` : ''}</div>`;
      $('#qnav').innerHTML = `<button class="btn y" id="qnext">${st.i + 1 < Q.length ? 'Câu tiếp theo →' : 'Xem kết quả'}</button>`;
      $('#qnext').onclick = () => { Sound.click(); st.i++; st.i < Q.length ? show() : finish(); };
      $('#qnext').focus({ preventScroll: true });
    }
    function finish() {
      const score = Math.round(st.right / Q.length * 20) / 2, stars = starsFor(score);
      const r = rec(s.id, keyOf(sub, l)); const prevBest = r.best;
      r.best = Math.max(r.best == null ? -1 : r.best, score); r.lastScore = score; r.tries = (r.tries || 0) + 1; r.last = today(); save(); logEvent(s, sub, l, 'Trắc nghiệm', `${num(score)} điểm (đúng ${st.right}/${Q.length} câu)`);
      const name = s.short;
      const loi = score >= 9 ? `Giỏi lắm, ${name}! Con nắm bài rất chắc.` : score >= 7 ? `Khá lắm, ${name}! Xem lại mấy câu sai rồi làm lại để được 3 sao nhé.` : score >= 5 ? `Con đã làm được hơn nửa bài. Đọc lại phần Học bài rồi thử lại nhé.` : `Cố gắng lên ${name}! Con đọc kĩ phần Học bài trước, rồi làm lại.`;
      pane.innerHTML = `<div class="result rv">
          <div class="mark"><div><b>${num(score)}</b><span>điểm</span></div></div>
          <div><div>${starsHTML(stars)}</div><p class="loiphe"><small>Lời phê</small>${loi}</p>
            <p class="small mt8">Đúng ${st.right}/${Q.length} câu${prevBest != null && score > prevBest ? ' · Cao hơn lần trước!' : ''}${prevBest != null && score <= prevBest ? ` · Điểm cao nhất: ${num(r.best)}` : ''}</p>
            <div class="actions mt16"><button class="btn dark" id="again">${l.gen ? 'Làm đề mới' : 'Làm lại'}</button>
            ${next ? `<a class="btn y" href="#${s.id}--${sub.id}--${next.id}">Bài tiếp theo →</a>` : ''}<a class="btn ghost" href="#${s.id}--${sub.id}">Về môn ${esc(sub.name)}</a></div></div></div>
        <div class="review">${st.log.map((x, i) => `<div class="rq"><i style="background:${x.ok ? 'var(--g)' : 'var(--p)'}">${i + 1}</i><div>${fmt(x.q)}<br><span class="muted">${x.ok ? 'Đúng' : `Con chọn: ${fmt(x.given)} · Đáp án: <b>${fmt(x.right)}</b>`}</span></div></div>`).join('')}</div>`;
      $('#again').onclick = () => { Sound.click(); startQuiz(s, sub, l, next); };
      if (score >= 8) { Sound.fanfare(); confetti(score === 10 ? 220 : 120); } else Sound.click();
    }
    show();
  }

  /* ---------- trang bố mẹ ---------- */
  function renderParent() {
    document.title = 'Tiến độ học – Bố mẹ';
    app.innerHTML = crumbs() + `
      <div class="kicker rv">Dành cho bố mẹ</div><h2 class="rv mt16" style="--i:1">Tiến độ học của các con</h2>
      <p class="lead rv mt16" style="--i:2">${SHEET ? `Tiến độ được lưu lên Google Sheet nên xem được trên mọi máy. <span id="syncMsg">${esc(syncMsg)}</span>${window.SHEET_LINK ? ` <a href="${esc(window.SHEET_LINK)}" target="_blank" rel="noopener">Mở bảng điểm</a>` : ''}` : 'Tiến độ được lưu trong trình duyệt của máy này. Nếu các con học trên máy khác, số liệu ở đó sẽ riêng.'}</p>
      <div class="ptabs">${STUDENTS.map((s, i) => {
        const st = studentStats(s);
        const rows = [];
        s.subjects.forEach(sub => allLessons(sub).forEach(l => { const r = get(s.id, keyOf(sub, l)); if (r && r.best != null) rows.push({ sub, l, r }); }));
        const weak = rows.filter(x => x.r.best < 7).sort((a, b) => a.r.best - b.r.best).slice(0, 6);
        const recent = rows.slice().sort((a, b) => (b.r.last || '').localeCompare(a.r.last || '')).slice(0, 6);
        const item = x => `<a href="#${s.id}--${x.sub.id}--${x.l.id}"><span>${fmt(x.l.title)}<small>${esc(x.sub.name)} · ${dateVN(x.r.last)} · ${x.r.tries || 1} lần làm</small></span>${lessonChip(s, x.sub, x.l)}</a>`;
        return `<section class="pcard c-${s.color} rv" style="--i:${i + 3}">
          <div class="ph">${avatar(s)}<div><h3>${esc(s.full)}</h3><span class="small">Lớp ${s.grade}</span></div></div>
          <div class="kpis"><div class="kpi"><b>${st.done}<small style="font-size:15px;color:var(--muted)">/${st.total}</small></b><span>bài đã làm</span></div>
            <div class="kpi"><b>${st.avg == null ? '–' : num(st.avg)}</b><span>điểm trung bình</span></div><div class="kpi"><b>${st.stars}</b><span>sao</span></div></div>
          <div class="psub">Cần ôn lại (dưới 7 điểm)</div><div class="plist">${weak.length ? weak.map(item).join('') : '<div class="empty">Chưa có bài nào dưới 7 điểm.</div>'}</div>
          <div class="psub">Làm gần đây</div><div class="plist">${recent.length ? recent.map(item).join('') : '<div class="empty">Con chưa làm bài tập nào.</div>'}</div>
          <div class="psub">Theo môn</div><div class="plist">${s.subjects.map(sub => { const ss = subjStats(s, sub); return `<a href="#${s.id}--${sub.id}"><span>${esc(sub.name)}<small>${ss.total} bài có nội dung / ${ss.all} bài</small></span><span class="chip">${ss.done}/${ss.total}</span></a>`; }).join('')}</div>
          <div class="mt16" id="reset-${s.id}"><button class="btn ghost sm" data-reset="${s.id}">Xoá tiến độ của ${esc(s.short)}</button></div>
        </section>`;
      }).join('')}</div>
      <section class="box howto rv" style="--i:7"><h3>Nguồn ảnh và âm thanh</h3>
        <p class="mt8">Ảnh chụp thật và phát âm giọng Anh (UK) lấy từ Wikimedia Commons, dùng theo giấy phép tự do của từng tác giả. Hình vẽ minh hoạ do website tự vẽ. Hội thoại phần Nghe tạo bằng Google AI Studio.</p>
        <details class="mt16"><summary>Danh sách ảnh (${Object.values(window.PHOTO_MAP || {}).flat().length})</summary><ul class="credits">${Object.values(window.PHOTO_MAP || {}).flat().map(x => `<li>${esc(x.cap)} — ${esc(x.by)}, ${esc(x.lic)} · <a href="${x.src}" target="_blank" rel="noopener">nguồn</a></li>`).join('')}</ul></details>
        <details class="mt8"><summary>Danh sách phát âm (${Object.keys(window.PRON || {}).length} từ)</summary><ul class="credits">${Object.entries(window.PRON || {}).map(([w, x]) => `<li>${esc(w)} — ${esc(x.by)}, ${esc(x.lic)} · <a href="${x.src}" target="_blank" rel="noopener">nguồn</a></li>`).join('')}</ul></details>
      </section>
      <section class="box howto rv" style="--i:6"><h3>Cách thêm bài học mới</h3>
        <ol><li>Mở file <code>data-lop3.js</code> (Tâm) hoặc <code>data-lop6.js</code> (Đạt) bằng một trình soạn thảo văn bản.</li>
        <li>Tìm bài có nhãn “Sắp có”, thêm phần <code>theory</code> (nội dung bài học) và <code>quiz</code> (câu hỏi) theo mẫu các bài đã có.</li>
        <li>Câu trắc nghiệm: <code>{ q: 'Câu hỏi', opts: ['A', 'B', 'C'], a: 0, e: 'Giải thích' }</code>, trong đó <code>a</code> là số thứ tự đáp án đúng (đếm từ 0).</li>
        <li>Câu điền đáp án: <code>{ q: 'Câu hỏi', a: ['12'], e: 'Giải thích' }</code>. Có thể ghi nhiều đáp án được chấp nhận.</li>
        <li>Lưu file rồi tải lại trang.</li></ol></section>`;
    $$('[data-reset]').forEach(b => b.onclick = () => {
      const id = b.dataset.reset, box = $('#reset-' + id), s = student(id);
      box.innerHTML = `<div class="confirm">Xoá toàn bộ điểm và sao của ${esc(s.short)}${SHEET ? ' trên mọi máy (trang Nhật ký trong Google Sheet vẫn giữ)' : ' trên máy này'}? Không khôi phục được.<button class="btn sm dark" id="yes-${id}">Xoá</button><button class="btn sm" id="no-${id}">Thôi</button></div>`;
      $('#yes-' + id).onclick = () => { P[id] = { _rs: Date.now() }; save(); toast('Đã xoá tiến độ của ' + s.short); renderParent(); };
      $('#no-' + id).onclick = () => renderParent();
    });
  }

  pullSync();
  route();
})();
