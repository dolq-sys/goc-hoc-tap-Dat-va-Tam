/* =====================================================================
   BỘ SINH ĐỀ TOÁN — mỗi lần gọi trả về một câu hỏi mới.
   Trong file dữ liệu:  { gen: 'tên', arg: tham số, n: số câu }
                        { gen: 'mix', mix: ['tên:tham số', 'tên', ...] }  → trộn nhiều dạng
   Câu điền: { q, a: [đáp án], e }   ·   Câu chọn: { q, opts, a: số thứ tự, e }
   ===================================================================== */
(function () {
  const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;
  const N = n => (n < 0 ? '−' : '') + String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const Z = n => n < 0 ? `(−${-n})` : String(n);
  const D = (n, k = 2) => { const s = (Math.round(n * 1000) / 1000).toFixed(k).replace(/\.?0+$/, ''); return s.replace('.', ','); };
  const F = (a, b) => `[[${a < 0 ? '−' + -a : a}/${b}]]`;
  const ans = (n, d) => { const g = gcd(n, d) || 1; n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : `${n}/${d}`; };
  const cmp = (a, b) => a > b ? 0 : a < b ? 1 : 2;
  const CMP = ['&gt;', '&lt;', '='];
  const digits = d => rand(Math.pow(10, d - 1), Math.pow(10, d) - 1);
  const roman = n => { const m = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]; let s = ''; for (const [v, r] of m) while (n >= v) { s += r; n -= v; } return s; };
  const primeFactors = n => { const f = {}; let d = 2; while (n > 1) { while (n % d === 0) { f[d] = (f[d] || 0) + 1; n /= d; } d++; } return f; };
  const pfStr = f => Object.entries(f).map(([p, e]) => e > 1 ? `${p}<sup>${e}</sup>` : p).join(' · ');
  const opts4 = (right, wrongs) => { const set = [right]; for (const w of wrongs) if (!set.includes(w) && set.length < 4) set.push(w); return { opts: set, a: 0 }; };

  const G = {
    /* ========================= LỚP 3 ========================= */
    bang(arg) {
      const a = Array.isArray(arg) ? pick(arg) : (arg || rand(2, 9)), b = rand(1, 10), p = a * b, t = rand(0, 3);
      if (t === 0) return { q: `${a} × ${b} = ?`, a: [p], e: `${a} × ${b} = ${p}.` };
      if (t === 1) return { q: `${p} : ${a} = ?`, a: [b], e: `Vì ${a} × ${b} = ${p} nên ${p} : ${a} = ${b}.` };
      if (t === 2) return { q: `${b} × ${a} = ?`, a: [p], e: `Đổi chỗ các thừa số, tích không đổi: ${b} × ${a} = ${a} × ${b} = ${p}.` };
      return { q: `${p} : ${b} = ?`, a: [a], e: `Vì ${a} × ${b} = ${p} nên ${p} : ${b} = ${a}.` };
    },
    timx() {
      const c = rand(200, 1000), b = rand(50, c - 50), t = rand(0, 3);
      if (t === 0) return { q: `? + ${b} = ${c}`, a: [c - b], e: `Số hạng = tổng − số hạng kia = ${c} − ${b} = ${c - b}.` };
      if (t === 1) return { q: `${b} + ? = ${c}`, a: [c - b], e: `Số hạng = ${c} − ${b} = ${c - b}.` };
      if (t === 2) { const h = rand(20, 400), s = rand(20, 500); return { q: `? − ${s} = ${h}`, a: [h + s], e: `Số bị trừ = hiệu + số trừ = ${h} + ${s} = ${h + s}.` }; }
      return { q: `${c} − ? = ${b}`, a: [c - b], e: `Số trừ = số bị trừ − hiệu = ${c} − ${b} = ${c - b}.` };
    },
    timxnc() {
      const a = rand(2, 9), b = rand(2, 10), p = a * b, t = rand(0, 3);
      if (t === 0) return { q: `? × ${a} = ${p}`, a: [b], e: `Thừa số = tích : thừa số kia = ${p} : ${a} = ${b}.` };
      if (t === 1) return { q: `${a} × ? = ${p}`, a: [b], e: `Thừa số = ${p} : ${a} = ${b}.` };
      if (t === 2) return { q: `? : ${a} = ${b}`, a: [p], e: `Số bị chia = thương × số chia = ${b} × ${a} = ${p}.` };
      return { q: `${p} : ? = ${b}`, a: [a], e: `Số chia = số bị chia : thương = ${p} : ${b} = ${a}.` };
    },
    motphan(arg) {
      const n = arg || rand(2, 9), x = n * rand(2, 10), u = pick(['', ' kg', ' m', ' quả cam', ' cái kẹo', ' l']);
      return { q: `[[1/${n}]] của ${x}${u} là bao nhiêu?`, a: [x / n], e: `${x} : ${n} = ${x / n}${u}.` };
    },
    gapgiam() {
      const a = rand(2, 12), k = rand(2, 9);
      if (Math.random() < .5) return { q: `${a} gấp lên ${k} lần được bao nhiêu?`, a: [a * k], e: `Gấp lên ${k} lần là nhân ${k}: ${a} × ${k} = ${a * k}.` };
      return { q: `${a * k} giảm đi ${k} lần được bao nhiêu?`, a: [a], e: `Giảm đi ${k} lần là chia ${k}: ${a * k} : ${k} = ${a}.` };
    },
    nhan(arg = '2c1') {
      const lim = { '2c1': 100, '3c1': 1000, '4c1': 10000, '5c1': 100000 }[arg], d = +arg[0];
      let a, b; do { a = digits(d); b = rand(2, 9); } while (a * b >= lim || (d === 2 && a < 11));
      return { q: `${N(a)} × ${b} = ?`, a: [a * b], e: `Đặt tính, nhân từ phải sang trái (từ hàng đơn vị): ${N(a)} × ${b} = ${N(a * b)}.` };
    },
    chia(arg = '2c1') {
      const d = +arg[0]; let a, b, q; do { b = rand(2, 9); q = rand(Math.ceil(Math.pow(10, d - 1) / b), Math.floor((Math.pow(10, d) - 1) / b)); a = b * q; } while (a < Math.pow(10, d - 1));
      return { q: `${N(a)} : ${b} = ?`, a: [q], e: `Đặt tính, chia từ trái sang phải (từ hàng cao nhất): ${N(a)} : ${b} = ${N(q)}. Thử lại: ${N(q)} × ${b} = ${N(a)}.` };
    },
    chiadu() {
      const b = rand(2, 9), q = rand(2, 12), r = rand(1, b - 1), a = b * q + r;
      return Math.random() < .5 ? { q: `${a} : ${b} được thương là bao nhiêu? (phép chia có dư)`, a: [q], e: `${a} : ${b} = ${q} (dư ${r}).` }
        : { q: `${a} : ${b} có số dư là bao nhiêu?`, a: [r], e: `${a} = ${b} × ${q} + ${r}. Số dư ${r} bé hơn số chia ${b}.` };
    },
    doidv() {
      const t = pick([
        () => { const x = rand(2, 9); return { q: `${x} cm = ? mm`, a: [x * 10], e: `1 cm = 10 mm.` }; },
        () => { const x = rand(1, 9); return { q: `${x} m = ? cm`, a: [x * 100], e: `1 m = 100 cm.` }; },
        () => { const x = rand(1, 5); return { q: `${x} m = ? mm`, a: [x * 1000], e: `1 m = 1 000 mm.` }; },
        () => { const x = rand(1, 9); return { q: `${x} kg = ? g`, a: [x * 1000], e: `1 kg = 1 000 g.` }; },
        () => { const x = rand(1, 9); return { q: `${x} l = ? ml`, a: [x * 1000], e: `1 l = 1 000 ml.` }; },
        () => { const a = rand(1, 9) * 50, b = rand(1, 9) * 50; return { q: `${a} g + ${b} g = ? g`, a: [a + b], e: `${a} + ${b} = ${a + b} (g).` }; },
        () => { const a = rand(3, 9) * 100, b = rand(1, a / 100 - 1) * 100; return { q: `${a} ml − ${b} ml = ? ml`, a: [a - b], e: `${a} − ${b} = ${a - b} (ml).` }; },
      ]); return t();
    },
    bieuthuc() {
      const t = rand(0, 4), a = rand(10, 99), b = rand(2, 9), c = rand(2, 9);
      if (t === 0) { const x = rand(100, 500), y = rand(10, 200), z = rand(10, 100); return { q: `${x} + ${y} − ${z} = ?`, a: [x + y - z], e: `Chỉ có cộng, trừ: tính từ trái sang phải. ${x} + ${y} = ${x + y}; ${x + y} − ${z} = ${x + y - z}.` }; }
      if (t === 1) return { q: `${a} + ${b} × ${c} = ?`, a: [a + b * c], e: `Nhân trước, cộng sau: ${b} × ${c} = ${b * c}; ${a} + ${b * c} = ${a + b * c}.` };
      if (t === 2) return { q: `(${b} + ${c}) × ${b} = ?`, a: [(b + c) * b], e: `Trong ngoặc trước: ${b} + ${c} = ${b + c}; ${b + c} × ${b} = ${(b + c) * b}.` };
      if (t === 3) { const p = b * c * rand(1, 3); return { q: `${p} : ${b} × ${c} = ?`, a: [p / b * c], e: `Chỉ có nhân, chia: tính từ trái sang phải. ${p} : ${b} = ${p / b}; ${p / b} × ${c} = ${p / b * c}.` }; }
      return { q: `${a} − ${b * c} : ${c} = ?`, a: [a - b], e: `Chia trước, trừ sau: ${b * c} : ${c} = ${b}; ${a} − ${b} = ${a - b}.` };
    },
    gapmaylan() {
      const s = rand(2, 9), k = rand(2, 9);
      return Math.random() < .5 ? { q: `Số lớn là ${s * k}, số bé là ${s}. Số lớn gấp mấy lần số bé?`, a: [k], e: `${s * k} : ${s} = ${k} (lần).` }
        : { q: `Mẹ ${s * k} tuổi, con ${s} tuổi. Tuổi mẹ gấp mấy lần tuổi con?`, a: [k], e: `${s * k} : ${s} = ${k} (lần).` };
    },
    cauto(arg = 4) {
      const d = arg, n = digits(d), parts = String(n).split('').map(Number), names = ['đơn vị', 'chục', 'trăm', 'nghìn', 'chục nghìn'];
      const t = rand(0, 2);
      if (t === 0) return { q: `Số gồm ${parts.map((p, i) => `${p} ${names[d - 1 - i]}`).join(', ')} là số nào?`, a: [n], e: `Viết lần lượt các chữ số từ hàng cao đến hàng thấp: ${N(n)}.` };
      if (t === 1) return { q: `Số liền sau của ${N(n)} là số nào?`, a: [n + 1], e: `${N(n)} + 1 = ${N(n + 1)}.` };
      return { q: `Số liền trước của ${N(n)} là số nào?`, a: [n - 1], e: `${N(n)} − 1 = ${N(n - 1)}.` };
    },
    sosanh(arg = 4) {
      const a = digits(arg); let b = Math.random() < .15 ? a : a + pick([-1, 1]) * pick([1, 10, 100, Math.pow(10, arg - 1)]);
      if (b < Math.pow(10, arg - 1)) b = a;
      return { q: `Chọn dấu đúng: ${N(a)} … ${N(b)}`, opts: CMP, a: cmp(a, b), keep: true, e: `So sánh lần lượt từ hàng cao nhất. ${N(a)} ${CMP[cmp(a, b)]} ${N(b)}.` };
    },
    lama() {
      const n = rand(1, 20), r = roman(n);
      return Math.random() < .5 ? { q: `Số La Mã ${r} là số mấy?`, a: [n], e: `${r} = ${n}.` }
        : Object.assign({ q: `Số ${n} viết bằng chữ số La Mã là:`, e: `${n} = ${r}.`, keep: false }, opts4(r, [roman(n + 1), roman(Math.max(1, n - 1)), n % 5 === 4 ? 'I'.repeat(4) + 'V'.repeat(n > 5 ? 1 : 0) : roman(n + 5)]));
    },
    lamtron(arg = 'chuc') {
      const cfg = { chuc: [10, 'hàng chục', 3], tram: [100, 'hàng trăm', 4], nghin: [1000, 'hàng nghìn', 5], chucnghin: [10000, 'hàng chục nghìn', 5] }[arg];
      const n = digits(cfg[2]), r = Math.round(n / cfg[0]) * cfg[0], dig = Math.floor(n / (cfg[0] / 10)) % 10;
      return { q: `Làm tròn ${N(n)} đến ${cfg[1]}:`, a: [r], e: `Chữ số ngay sau ${cfg[1]} là ${dig} ${dig >= 5 ? '≥ 5 nên làm tròn lên' : '< 5 nên làm tròn xuống'}: ${N(r)}.` };
    },
    chuvi() {
      const t = rand(0, 3), a = rand(3, 20), b = rand(2, a);
      if (t === 0) return { q: `Hình chữ nhật dài ${a} cm, rộng ${b} cm. Chu vi là bao nhiêu xăng-ti-mét?`, a: [(a + b) * 2], e: `(${a} + ${b}) × 2 = ${(a + b) * 2} (cm).` };
      if (t === 1) return { q: `Hình vuông cạnh ${a} cm. Chu vi là bao nhiêu xăng-ti-mét?`, a: [a * 4], e: `${a} × 4 = ${a * 4} (cm).` };
      if (t === 2) { const c = rand(3, 15), d = rand(3, 15), e = rand(Math.abs(c - d) + 1, c + d - 1); return { q: `Hình tam giác có ba cạnh ${c} cm, ${d} cm, ${e} cm. Chu vi là bao nhiêu xăng-ti-mét?`, a: [c + d + e], e: `${c} + ${d} + ${e} = ${c + d + e} (cm).` }; }
      return { q: `Hình vuông có chu vi ${a * 4} cm. Cạnh dài bao nhiêu xăng-ti-mét?`, a: [a], e: `${a * 4} : 4 = ${a} (cm).` };
    },
    dientich() {
      const a = rand(2, 12), b = rand(2, 9);
      return Math.random() < .6 ? { q: `Hình chữ nhật dài ${a} cm, rộng ${b} cm. Diện tích là bao nhiêu xăng-ti-mét vuông?`, a: [a * b], e: `${a} × ${b} = ${a * b} (cm²).` }
        : { q: `Hình vuông cạnh ${a} cm. Diện tích là bao nhiêu xăng-ti-mét vuông?`, a: [a * a], e: `${a} × ${a} = ${a * a} (cm²).` };
    },
    congtru(arg = 1000) {
      const sign = String(arg).slice(-1); arg = parseInt(arg, 10);
      if (sign === '+' || (sign !== '-' && Math.random() < .5)) { const a = rand(arg / 10, arg * .6), b = rand(arg / 20, arg - 1 - a); return { q: `${N(a)} + ${N(b)} = ?`, a: [a + b], e: `Đặt tính thẳng cột, cộng từ phải sang trái: ${N(a + b)}.` }; }
      const a = rand(arg / 5, arg - 1), b = rand(arg / 50, a - 1); return { q: `${N(a)} − ${N(b)} = ?`, a: [a - b], e: `Đặt tính thẳng cột, trừ từ phải sang trái: ${N(a - b)}.` };
    },
    thoigian() {
      const t = pick([
        () => { const m = rand(1, 12), d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]; return m === 2 ? { q: 'Tháng 2 có bao nhiêu ngày?', opts: ['28 hoặc 29 ngày', '30 ngày', '31 ngày'], a: 0, e: 'Tháng 2 có 28 ngày (năm nhuận có 29 ngày).' } : { q: `Tháng ${m} có bao nhiêu ngày?`, a: [d], e: `Tháng ${m} có ${d} ngày.` }; },
        () => { const h = rand(1, 4); return { q: `${h} giờ = ? phút`, a: [h * 60], e: `1 giờ = 60 phút; ${h} × 60 = ${h * 60}.` }; },
        () => { const h = rand(1, 11), m = pick([40, 45, 50, 55]); return Object.assign({ q: `${h} giờ ${m} phút còn gọi là:`, e: `Còn ${60 - m} phút nữa là ${h + 1} giờ.` }, opts4(`${h + 1} giờ kém ${60 - m} phút`, [`${h} giờ kém ${60 - m} phút`, `${h + 1} giờ kém ${m} phút`, `${h} giờ kém ${m} phút`])); },
        () => { const d = rand(1, 20); return { q: `Thứ Hai tuần này là ngày ${d}. Thứ Hai tuần sau là ngày bao nhiêu?`, a: [d + 7], e: `Một tuần có 7 ngày: ${d} + 7 = ${d + 7}.` }; },
      ]); return t();
    },
    tien() {
      const t = rand(0, 2);
      if (t === 0) { const gia = rand(1, 9) * 1000, dua = pick([10000, 20000].filter(x => x > gia)); return { q: `Mua một quyển vở giá ${N(gia)} đồng, đưa cô bán hàng ${N(dua)} đồng. Được trả lại bao nhiêu đồng?`, a: [dua - gia], e: `${N(dua)} − ${N(gia)} = ${N(dua - gia)} (đồng).` }; }
      if (t === 1) { const a = pick([1000, 2000, 5000, 10000, 20000]), b = pick([1000, 2000, 5000, 10000, 50000]); return { q: `Một tờ ${N(a)} đồng và một tờ ${N(b)} đồng. Tất cả là bao nhiêu đồng?`, a: [a + b], e: `${N(a)} + ${N(b)} = ${N(a + b)} (đồng).` }; }
      const g = rand(2, 9) * 1000, k = rand(2, 5); return { q: `Mỗi chiếc bút giá ${N(g)} đồng. Mua ${k} chiếc bút hết bao nhiêu đồng?`, a: [g * k], e: `${N(g)} × ${k} = ${N(g * k)} (đồng).` };
    },
    /* ========================= LỚP 6 ========================= */
    n6thutu() {
      const t = rand(0, 2), a = rand(10, 500);
      if (t === 0) { const b = a + rand(3, 12); return { q: `Có bao nhiêu số tự nhiên x thoả mãn ${a} &lt; x &lt; ${b}?`, a: [b - a - 1], e: `Các số từ ${a + 1} đến ${b - 1}: có ${b - a - 1} số.` }; }
      if (t === 1) { const b = a + rand(3, 12); return { q: `Có bao nhiêu số tự nhiên x thoả mãn ${a} ≤ x ≤ ${b}?`, a: [b - a + 1], e: `Các số từ ${a} đến ${b}: có ${b - a + 1} số.` }; }
      return { q: `Số tự nhiên liền trước của ${a} là số nào?`, a: [a - 1], e: `${a} − 1 = ${a - 1}.` };
    },
    n6tinhnhanh() {
      const t = rand(0, 3);
      if (t === 0) { const a = rand(11, 89), b = 100 - a, c = rand(10, 300); return { q: `Tính nhanh: ${a} + ${c} + ${b} = ?`, a: [a + b + c], e: `(${a} + ${b}) + ${c} = 100 + ${c} = ${100 + c}.` }; }
      if (t === 1) { const k = rand(11, 99), a = rand(11, 89); return { q: `Tính nhanh: ${k} · ${a} + ${k} · ${100 - a} = ?`, a: [k * 100], e: `${k} · (${a} + ${100 - a}) = ${k} · 100 = ${k * 100}.` }; }
      if (t === 2) { const x = rand(10, 500), b = rand(10, 500); return { q: `Tìm x biết: x + ${b} = ${x + b}`, a: [x], e: `x = ${x + b} − ${b} = ${x}.` }; }
      const k = rand(2, 9), x = rand(5, 60); return { q: `Tìm x biết: ${k} · x = ${k * x}`, a: [x], e: `x = ${k * x} : ${k} = ${x}.` };
    },
    chiahet() {
      const t = rand(0, 1);
      if (t === 0) { const k = pick([3, 4, 5, 6, 7]), a = k * rand(3, 30), b = rand(10, 99), yes = b % k === 0; return { q: `Biết ${a} chia hết cho ${k}. Tổng ${a} + ${b} có chia hết cho ${k} không?`, opts: ['Có', 'Không'], a: yes ? 0 : 1, keep: true, e: yes ? `${b} cũng chia hết cho ${k} nên tổng chia hết cho ${k}.` : `${b} không chia hết cho ${k} nên tổng không chia hết cho ${k}.` }; }
      const n = rand(12, 60), divs = []; for (let i = 1; i <= n; i++) if (n % i === 0) divs.push(i);
      return { q: `Số ${n} có bao nhiêu ước?`, a: [divs.length], e: `Ư(${n}) = {${divs.join('; ')}}: có ${divs.length} ước.` };
    },
    phantich() {
      const n = pick([12, 18, 20, 24, 28, 30, 36, 40, 42, 45, 48, 50, 54, 56, 60, 63, 72, 75, 80, 84, 90, 96, 100, 108, 120]);
      const f = primeFactors(n), right = pfStr(f), keys = Object.keys(f);
      const w1 = `${keys[0]} · ${n / keys[0]}`, w2 = pfStr(Object.assign({}, f, { [keys[0]]: f[keys[0]] + 1 })), w3 = `${keys.join(' · ')}`;
      return Object.assign({ q: `Phân tích ${n} ra thừa số nguyên tố:`, e: `${n} = ${right}.` }, opts4(right, [w1, w2, w3, `${n / 2} · 2`]));
    },
    ucln() { const k = rand(2, 12); let x, y; do { x = rand(1, 9); y = rand(2, 12); } while (gcd(x, y) !== 1 || x === y); const a = k * x, b = k * y; return { q: `ƯCLN(${a}, ${b}) = ?`, a: [k], e: `Phân tích ra thừa số nguyên tố, lấy thừa số chung với số mũ nhỏ nhất: ƯCLN(${a}, ${b}) = ${k}.` }; },
    bcnn() { const a = rand(2, 15), b = rand(2, 18); return a === b ? G.bcnn() : { q: `BCNN(${a}, ${b}) = ?`, a: [lcm(a, b)], e: `Lấy thừa số chung và riêng với số mũ lớn nhất: BCNN(${a}, ${b}) = ${lcm(a, b)}.` }; },
    sosanhZ() { const a = rand(-30, 30), b = rand(-30, 30); return { q: `Chọn dấu đúng: ${N(a)} … ${N(b)}`, opts: CMP, a: cmp(a, b), keep: true, e: `Trên trục số, số nằm bên trái nhỏ hơn. ${N(a)} ${CMP[cmp(a, b)]} ${N(b)}.` }; },
    soDoi() { const a = rand(-50, 50) || 7; return { q: `Số đối của ${N(a)} là:`, a: [-a], e: `Số đối của ${N(a)} là ${N(-a)} (tổng của chúng bằng 0).` }; },
    dauNgoac() {
      const a = rand(10, 99), b = rand(5, 60), c = rand(5, 60), t = rand(0, 2);
      if (t === 0) return { q: `${a} − (${b} − ${c}) = ?`, a: [a - b + c], e: `Bỏ ngoặc có dấu “−” đằng trước, đổi dấu các số hạng trong ngoặc: ${a} − ${b} + ${c} = ${N(a - b + c)}.` };
      if (t === 1) return { q: `${a} − (${b} + ${c}) = ?`, a: [a - b - c], e: `${a} − ${b} − ${c} = ${N(a - b - c)}.` };
      return { q: `(${a} + ${b}) − (${a} − ${c}) = ?`, a: [b + c], e: `${a} + ${b} − ${a} + ${c} = ${b} + ${c} = ${b + c}.` };
    },
    chiaZ() { const b = pick([-9, -8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9]), q = rand(-12, 12) || 3, a = b * q; return { q: `${Z(a)} : ${Z(b)} = ?`, a: [q], e: `${N(a)} : ${N(b)} = ${N(q)}. Cùng dấu thì thương dương, khác dấu thì thương âm.` }; },
    hinhDX() {
      const list = [['Hình vuông', 4, 'Có'], ['Hình chữ nhật', 2, 'Có'], ['Hình thoi', 2, 'Có'], ['Tam giác đều', 3, 'Không'], ['Lục giác đều', 6, 'Có'], ['Hình thang cân', 1, 'Không'], ['Hình bình hành', 0, 'Có']];
      const [h, k, tam] = pick(list);
      return Math.random() < .6 ? { q: `${h} có bao nhiêu trục đối xứng?`, a: [k], e: `${h} có ${k} trục đối xứng.` } : { q: `${h} có tâm đối xứng không?`, opts: ['Có', 'Không'], a: tam === 'Có' ? 0 : 1, keep: true, e: `${h} ${tam === 'Có' ? 'có' : 'không có'} tâm đối xứng.` };
    },
    sosanhPS() {
      let a, b, c, d; do { b = rand(2, 12); d = rand(2, 12); a = rand(1, b + 3); c = rand(1, d + 3); } while (a * d === c * b && Math.random() < .7);
      return { q: `Chọn dấu đúng: ${F(a, b)} … ${F(c, d)}`, opts: CMP, a: cmp(a * d, c * b), keep: true, e: `Quy đồng mẫu: ${F(a * d, b * d)} và ${F(c * b, b * d)}. Vậy ${F(a, b)} ${CMP[cmp(a * d, c * b)]} ${F(c, d)}.` };
    },
    honSo() {
      const b = rand(2, 9), q = rand(1, 5), r = rand(1, b - 1), a = q * b + r;
      return Math.random() < .5 ? Object.assign({ q: `Viết ${F(a, b)} dưới dạng hỗn số:`, e: `${a} : ${b} = ${q} dư ${r}, nên ${F(a, b)} = ${q}${F(r, b)}.` }, opts4(`${q}${F(r, b)}`, [`${r}${F(q, b)}`, `${q + 1}${F(r, b)}`, `${q}${F(b, r)}`]))
        : { q: `Viết hỗn số ${q}${F(r, b)} dưới dạng phân số (dạng a/b):`, a: [`${a}/${b}`], e: `${q} · ${b} + ${r} = ${a}, nên ${q}${F(r, b)} = ${F(a, b)}.` };
    },
    nhanchiaPS() {
      const a = rand(1, 9), b = rand(2, 9), c = rand(1, 9), d = rand(2, 9);
      return Math.random() < .5 ? { q: `Tính rồi rút gọn: ${F(a, b)} · ${F(c, d)} = ? (dạng a/b)`, a: [ans(a * c, b * d)], e: `Nhân tử với tử, mẫu với mẫu: ${F(a * c, b * d)}, rút gọn được ${ans(a * c, b * d)}.` }
        : { q: `Tính rồi rút gọn: ${F(a, b)} : ${F(c, d)} = ? (dạng a/b)`, a: [ans(a * d, b * c)], e: `Nhân với phân số nghịch đảo: ${F(a, b)} · ${F(d, c)} = ${F(a * d, b * c)}, rút gọn được ${ans(a * d, b * c)}.` };
    },
    gtps() {
      const b = rand(2, 9), a = rand(1, b - 1), x = b * rand(2, 12);
      return Math.random() < .5 ? { q: `${F(a, b)} của ${x} là bao nhiêu?`, a: [x / b * a], e: `${x} · ${F(a, b)} = ${x / b * a}.` }
        : { q: `${F(a, b)} của một số là ${x / b * a}. Số đó là bao nhiêu?`, a: [x], e: `${x / b * a} : ${F(a, b)} = ${x}.` };
    },
    thapphan() {
      const t = rand(0, 3), a = rand(10, 999) / 10, b = rand(10, 999) / 100;
      if (t === 0) return { q: `${D(a)} + ${D(b)} = ?`, a: [D(a + b)], e: `Đặt dấu phẩy thẳng cột rồi cộng: ${D(a + b)}.` };
      if (t === 1) { const x = Math.max(a, b), y = Math.min(a, b); return { q: `${D(x)} − ${D(y)} = ?`, a: [D(x - y)], e: `Đặt dấu phẩy thẳng cột rồi trừ: ${D(x - y)}.` }; }
      if (t === 2) { const k = rand(2, 9), c = rand(11, 99) / 10; return { q: `${D(c)} · ${k} = ?`, a: [D(c * k)], e: `${D(c)} · ${k} = ${D(c * k)}.` }; }
      const k = pick([10, 100, 1000]), c = rand(11, 999) / 100; return { q: `${D(c)} · ${k} = ?`, a: [D(c * k)], e: `Nhân với ${k}: dời dấu phẩy sang phải ${String(k).length - 1} chữ số: ${D(c * k)}.` };
    },
    lamtronTP() {
      const n = rand(1000, 99999) / 1000, h = pick([[1, 'hàng phần mười'], [2, 'hàng phần trăm']]), r = Math.round(n * Math.pow(10, h[0])) / Math.pow(10, h[0]);
      return { q: `Làm tròn ${D(n, 3)} đến ${h[1]}:`, a: [r.toFixed(h[0]).replace('.', ','), D(r, h[0])], e: `Nhìn chữ số ngay bên phải ${h[1]}: được ${r.toFixed(h[0]).replace('.', ',')}.` };
    },
    phantram() {
      const t = rand(0, 2);
      if (t === 0) { const p = pick([10, 20, 25, 30, 40, 50, 75]), x = pick([20, 40, 60, 80, 100, 200, 120, 400]); return { q: `${p}% của ${x} là bao nhiêu?`, a: [D(x * p / 100)], e: `${x} · ${p} : 100 = ${D(x * p / 100)}.` }; }
      if (t === 1) { const b = pick([20, 25, 40, 50]), a = rand(1, b - 1); return { q: `Lớp có ${b} học sinh, ${a} bạn nữ. Bạn nữ chiếm bao nhiêu phần trăm? (chỉ gõ số)`, a: [D(a / b * 100)], e: `${a} : ${b} · 100 = ${D(a / b * 100)} (%).` }; }
      const p = pick([10, 20, 25, 50]), x = pick([40, 80, 120, 200]); return { q: `${p}% của một số là ${x * p / 100}. Số đó là bao nhiêu?`, a: [x], e: `${x * p / 100} : ${p} · 100 = ${x}.` };
    },
    doanthang() {
      const t = rand(0, 2), a = rand(2, 12), b = rand(2, 12);
      if (t === 0) return { q: `Điểm M nằm giữa A và B. AM = ${a} cm, MB = ${b} cm. AB = ? (cm)`, a: [a + b], e: `AB = AM + MB = ${a} + ${b} = ${a + b} (cm).` };
      if (t === 1) return { q: `Điểm M nằm giữa A và B. AB = ${a + b} cm, AM = ${a} cm. MB = ? (cm)`, a: [b], e: `MB = AB − AM = ${a + b} − ${a} = ${b} (cm).` };
      return { q: `I là trung điểm của AB, AB = ${2 * a} cm. IA = ? (cm)`, a: [a], e: `IA = AB : 2 = ${a} (cm).` };
    },
    goc() {
      const g = pick([30, 45, 60, 89, 90, 100, 120, 135, 150, 180]), k = g < 90 ? 0 : g === 90 ? 1 : g < 180 ? 2 : 3;
      return { q: `Góc có số đo ${g}° là góc gì?`, opts: ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt'], a: k, keep: true, e: 'Nhọn < 90° · Vuông = 90° · 90° < Tù < 180° · Bẹt = 180°.' };
    },
    xstn() {
      const n = pick([20, 25, 40, 50, 100]), k = rand(1, n - 1), what = pick(['mặt sấp khi tung đồng xu', 'bóng đỏ khi lấy bóng từ hộp', 'mặt 6 chấm khi gieo xúc xắc']);
      return { q: `Thực hiện ${n} lần, sự kiện “${what}” xảy ra ${k} lần. Xác suất thực nghiệm là? (viết dạng a/b, tối giản)`, a: [ans(k, n)], e: `${k} : ${n} = ${ans(k, n)}.` };
    },
    dienTichTG() {
      const t = rand(0, 2), a = rand(2, 12), b = rand(2, 12), h = rand(2, 10);
      if (t === 0) return { q: `Hình thoi có hai đường chéo ${2 * a} cm và ${b} cm. Diện tích là bao nhiêu cm²?`, a: [a * b], e: `(${2 * a} · ${b}) : 2 = ${a * b} (cm²).` };
      if (t === 1) return { q: `Hình bình hành có cạnh đáy ${a} cm, chiều cao ${h} cm. Diện tích là bao nhiêu cm²?`, a: [a * h], e: `${a} · ${h} = ${a * h} (cm²).` };
      const c = a + 2 * rand(1, 3); return { q: `Hình thang cân có hai đáy ${a} cm và ${c} cm, chiều cao ${2 * h} cm. Diện tích là bao nhiêu cm²?`, a: [(a + c) * h], e: `(${a} + ${c}) · ${2 * h} : 2 = ${(a + c) * h} (cm²).` };
    },
    /* ============ DẠNG BÀI THI TOÁN 6 ============ */
    daySo() {
      const d = pick([1, 2, 3, 4, 5]), a = rand(1, 20), n = rand(8, 40), b = a + d * (n - 1), t = rand(0, 1);
      return t === 0 ? { q: `Dãy số ${a}; ${a + d}; ${a + 2 * d}; …; ${b} có bao nhiêu số hạng?`, a: [n], e: `Số số hạng = (số cuối − số đầu) : khoảng cách + 1 = (${b} − ${a}) : ${d} + 1 = ${n}.` }
        : { q: `Tính tổng: ${a} + ${a + d} + ${a + 2 * d} + … + ${b}`, a: [(a + b) * n / 2], e: `Có ${n} số hạng. Tổng = (số đầu + số cuối) × số số hạng : 2 = (${a} + ${b}) × ${n} : 2 = ${(a + b) * n / 2}.` };
    },
    timXLT() {
      const t = rand(0, 2);
      if (t === 0) { const a = pick([2, 3, 5]), x = a === 2 ? rand(2, 9) : rand(2, 4); return { q: `Tìm số tự nhiên x biết: ${a}<sup>x</sup> = ${Math.pow(a, x)}`, a: [x], e: `${Math.pow(a, x)} = ${a}<sup>${x}</sup> nên x = ${x}.` }; }
      if (t === 1) { const a = pick([2, 3]), k = rand(1, 3), e = a === 2 ? rand(4, 7) : rand(3, 4); return { q: `Tìm x biết: ${a}<sup>x + ${k}</sup> = ${Math.pow(a, e)}`, a: [e - k], e: `${Math.pow(a, e)} = ${a}<sup>${e}</sup> nên x + ${k} = ${e}, x = ${e - k}.` }; }
      const x = rand(2, 12); return { q: `Tìm số tự nhiên x biết: x<sup>2</sup> = ${x * x}`, a: [x], e: `${x * x} = ${x}<sup>2</sup> nên x = ${x}.` };
    },
    soSanhLT() {
      const t = rand(0, 1);
      if (t === 0) { const a = pick([2, 3, 5, 7]), m = rand(5, 30), n = rand(5, 30); return { q: `Chọn dấu đúng: ${a}<sup>${m}</sup> … ${a}<sup>${n}</sup>`, opts: CMP, a: cmp(m, n), keep: true, e: `Cùng cơ số lớn hơn 1: số mũ lớn hơn thì luỹ thừa lớn hơn.` }; }
      const n = rand(5, 30), a = rand(2, 9), b = rand(2, 9); return { q: `Chọn dấu đúng: ${a}<sup>${n}</sup> … ${b}<sup>${n}</sup>`, opts: CMP, a: cmp(a, b), keep: true, e: `Cùng số mũ: cơ số lớn hơn thì luỹ thừa lớn hơn.` };
    },
    timX6() {
      const t = rand(0, 3), x = rand(2, 40), a = rand(2, 9), b = rand(2, 30);
      if (t === 0) return { q: `Tìm x biết: ${a} · x + ${b} = ${a * x + b}`, a: [x], e: `${a} · x = ${a * x + b} − ${b} = ${a * x}; x = ${a * x} : ${a} = ${x}.` };
      if (t === 1) return { q: `Tìm x biết: ${a} · (x − ${b}) = ${a * (x + b - b)}`.replace(`${a * (x + b - b)}`, `${a * x}`).replace('(x − ' + b + ')', `(x − ${b})`), a: [x + b], e: `x − ${b} = ${a * x} : ${a} = ${x}; x = ${x} + ${b} = ${x + b}.` };
      if (t === 2) return { q: `Tìm x biết: (x + ${b}) : ${a} = ${x}`, a: [a * x - b], e: `x + ${b} = ${x} · ${a} = ${a * x}; x = ${a * x} − ${b} = ${a * x - b}.` };
      const c = a * x + rand(5, 50); return { q: `Tìm x biết: ${c} − ${a} · x = ${c - a * x}`, a: [x], e: `${a} · x = ${c} − ${c - a * x} = ${a * x}; x = ${x}.` };
    },
    chuSo() {
      const t = rand(0, 1);
      if (t === 0) { let a, c, star; do { a = rand(1, 9); c = rand(0, 9); star = (18 - (a + c) % 9) % 9; } while (star === 0); return { q: `Tìm chữ số * để số ${a}*${c} chia hết cho 9.`, a: [star], e: `Tổng các chữ số ${a} + * + ${c} phải chia hết cho 9 ⇒ * = ${star}.` }; }
      const a = rand(1, 9), b = rand(0, 9); return { q: `Tìm chữ số * để số ${a}${b}* chia hết cho cả 2 và 5.`, a: [0], e: 'Chia hết cho cả 2 và 5 thì chữ số tận cùng là 0 ⇒ * = 0.' };
    },
    xepHang() {
      const sets = [[2, 3, 4], [3, 4, 5], [4, 5, 6], [2, 3, 5], [3, 4, 6], [4, 6, 8], [5, 6, 8]];
      const set = pick(sets), L = set.reduce(lcm), k = rand(2, 5), lo = L * k - rand(1, L - 1), hi = lo + L - 1, ans = L * k, t = rand(0, 1);
      return t === 0 ? { q: `Số học sinh của một trường trong khoảng từ ${lo} đến ${hi}. Khi xếp hàng ${set.join(', ')} đều vừa đủ. Tính số học sinh.`, a: [ans], e: `Số học sinh là bội chung của ${set.join(', ')}. BCNN = ${L}. Bội của ${L} trong khoảng ${lo} – ${hi} là ${ans}.` }
        : { q: `Số học sinh khối 6 trong khoảng từ ${lo + 1} đến ${hi + 1}. Khi xếp hàng ${set.join(', ')} đều thừa 1 em. Tính số học sinh.`, a: [ans + 1], e: `Số học sinh bớt 1 là bội chung của ${set.join(', ')}. BCNN = ${L}, bội phù hợp là ${ans}, nên số học sinh là ${ans + 1}.` };
    },
    chiaNhom() {
      const g = rand(4, 15); let x, y; do { x = rand(2, 9); y = rand(2, 9); } while (gcd(x, y) !== 1 || x === y);
      const a = g * x, b = g * y, t = rand(0, 1);
      return t === 0 ? { q: `Có ${a} quyển vở và ${b} chiếc bút. Chia đều số vở và số bút vào các phần quà. Có thể chia được nhiều nhất bao nhiêu phần quà?`, a: [g], e: `Số phần quà lớn nhất = ƯCLN(${a}, ${b}) = ${g}.` }
        : { q: `Có ${a} quyển vở và ${b} chiếc bút chia đều vào nhiều phần quà nhất có thể. Mỗi phần có bao nhiêu quyển vở?`, a: [x], e: `ƯCLN(${a}, ${b}) = ${g} phần quà; mỗi phần có ${a} : ${g} = ${x} quyển vở.` };
    },
    tinhNhanhZ() {
      const a = rand(11, 89), b = rand(11, 89), t = rand(0, 2);
      if (t === 0) return { q: `Tính nhanh: (−${a}) + ${b} + (−${100 - a}) + ${100 - b}`, a: [0], e: `[(−${a}) + (−${100 - a})] + (${b} + ${100 - b}) = (−100) + 100 = 0.` };
      if (t === 1) { const c = rand(2, 9) * 10; return { q: `Tính nhanh: ${a} · ${c + 1} − ${a}`, a: [a * c], e: `${a} · (${c + 1} − 1) = ${a} · ${c} = ${a * c}.` }; }
      return { q: `Tính nhanh: (−${a}) · ${b} + ${a} · (−${100 - b})`, a: [-a * 100], e: `(−${a}) · (${b} + ${100 - b}) = (−${a}) · 100 = −${a * 100}.` };
    },
    timXZ() {
      const x = rand(-20, 20) || 5, a = rand(-15, 15) || 3, t = rand(0, 2);
      if (t === 0) return { q: `Tìm số nguyên x biết: x + ${Z(a)} = ${Z(x + a)}`, a: [x], e: `x = ${Z(x + a)} − ${Z(a)} = ${N(x)}.` };
      if (t === 1) return { q: `Tìm số nguyên x biết: ${Z(a)} − x = ${Z(a - x)}`, a: [x], e: `x = ${Z(a)} − ${Z(a - x)} = ${N(x)}.` };
      const k = pick([-5, -4, -3, -2, 2, 3, 4, 5]); return { q: `Tìm số nguyên x biết: ${Z(k)} · x = ${Z(k * x)}`, a: [x], e: `x = ${Z(k * x)} : ${Z(k)} = ${N(x)}.` };
    },
    timXPS() {
      const b = pick([2, 3, 4, 5, 6]), d = pick([2, 3, 4, 6, 8]), a = rand(1, b - 1), c = rand(1, d + 2), t = rand(0, 1);
      if (t === 0) return { q: `Tìm x biết: x + ${F(a, b)} = ${F(c, d)} (viết dạng a/b)`, a: [ans(c * b - a * d, b * d)], e: `x = ${F(c, d)} − ${F(a, b)} = ${F(c * b, b * d)} − ${F(a * d, b * d)} = ${ans(c * b - a * d, b * d)}.` };
      return { q: `Tìm x biết: ${F(a, b)} · x = ${F(c, d)} (viết dạng a/b)`, a: [ans(c * b, d * a)], e: `x = ${F(c, d)} : ${F(a, b)} = ${F(c, d)} · ${F(b, a)} = ${ans(c * b, d * a)}.` };
    },
    psThucTe() {
      const n = pick([30, 32, 36, 40, 42, 45, 48]), divs = [2, 3, 4, 5, 6, 8, 9, 10].filter(d => n % d === 0), b = pick(divs), a = rand(1, b - 1), gioi = n / b * a, t = rand(0, 1);
      if (t === 0) return { q: `Lớp 6A có ${n} học sinh, số học sinh giỏi bằng ${F(a, b)} số học sinh cả lớp. Tính số học sinh giỏi.`, a: [gioi], e: `${n} · ${F(a, b)} = ${gioi} (học sinh).` };
      return { q: `Một cuốn truyện, ngày đầu Lan đọc được ${F(a, b)} số trang, tức là ${gioi} trang. Cuốn truyện có bao nhiêu trang?`, a: [n], e: `${gioi} : ${F(a, b)} = ${n} (trang).` };
    },
    giamGia() {
      const p = pick([10, 15, 20, 25, 30, 40, 50]), g = pick([80, 100, 120, 150, 200, 250, 300, 400]) * 1000, m = g * (100 - p) / 100, t = rand(0, 1);
      return t === 0 ? { q: `Một chiếc áo giá ${N(g)} đồng, được giảm ${p}%. Giá sau khi giảm là bao nhiêu đồng?`, a: [m], e: `Số tiền giảm: ${N(g)} · ${p}% = ${N(g * p / 100)}; giá mới: ${N(g)} − ${N(g * p / 100)} = ${N(m)} đồng.` }
        : { q: `Sau khi giảm ${p}%, một đôi giày có giá ${N(m)} đồng. Giá ban đầu là bao nhiêu đồng?`, a: [g], e: `Giá sau giảm bằng ${100 - p}% giá ban đầu: ${N(m)} : ${100 - p}% = ${N(g)} đồng.` };
    },
  };
  window.GEN_MORE = G;
})();
