/* =====================================================================
   HÌNH MINH HOẠ TỪ VỰNG TIẾNG ANH (SVG 64×64, vẽ phẳng)
   Dùng trong file dữ liệu:  V('cat', 'con mèo')  → thẻ có hình, chữ, bấm để nghe
                             PIC('cat')          → chỉ hình (dùng trong câu hỏi)
   Thêm hình mới: thêm một dòng  'tu-moi': s(`...`),  vào bảng K bên dưới.
   ===================================================================== */
(function () {
  const D = '#2B3A33', G = '#4E9A6B', GD = '#3A7A52', GL = '#A8D5B5', O = '#EE7D45', OD = '#C9612F', Y = '#F6BE4A', YD = '#DC9E22',
    B = '#4A93D6', BD = '#3576B4', BL = '#BFD9F2', P = '#EA7486', PD = '#C85567', W = '#FFFFFF', L = '#DDE3E0', LD = '#AEB8B3',
    S = '#F5C49A', BR = '#8A5A3B', BRL = '#C08A5B', R = '#E5483A', GR = '#9AA3A0', K = '#222222';
  const s = b => `<svg viewBox="0 0 64 64" aria-hidden="true">${b}</svg>`;
  const r = (x, y, w, h, f, rx = 0, ex = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" ${ex}/>`;
  const c = (x, y, rr, f, ex = '') => `<circle cx="${x}" cy="${y}" r="${rr}" fill="${f}" ${ex}/>`;
  const e = (x, y, rx, ry, f, ex = '') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${ex}/>`;
  const p = (d, f, ex = '') => `<path d="${d}" fill="${f}" ${ex}/>`;
  const l = (d, col = D, w = 3) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const t = (x, y, txt, size, f = D, w = 800) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="League Spartan,Arial,sans-serif" font-weight="${w}" font-size="${size}" fill="${f}">${txt}</text>`;

  /* người: kiểu tóc short / long / bun / bald / pig; áo; phụ kiện */
  function person(o = {}) {
    const x = o.x ?? 32, y = o.y ?? 0, sc = o.sc ?? 1, hair = o.hair ?? D, st = o.style ?? 'short', skin = o.skin ?? S, shirt = o.shirt ?? B;
    let g = '';
    if (st === 'long') g += r(-11, -3, 22, 20, hair, 8);
    if (st === 'pig') g += c(-11, 0, 4, hair) + c(11, 0, 4, hair);
    g += r(-12, 12, 24, 26, shirt, 9);
    g += c(0, 0, 9.5, skin);
    if (st === 'bald') g += c(-8.5, -1, 3, hair) + c(8.5, -1, 3, hair);
    else g += p('M-9.6 -1 a9.6 9.6 0 0 1 19.2 0 c-3 -4 -7 -5 -9.6 -4 c-3 -1 -6.6 0 -9.6 4z', hair);
    if (st === 'bun') g += c(0, -11, 4.2, hair);
    g += c(-3.5, 0.5, 1.3, D) + c(3.5, 0.5, 1.3, D) + l('M-3 4.5 q3 2.6 6 0', D, 1.4);
    if (o.glasses) g += `<circle cx="-3.5" cy="0.5" r="2.8" fill="none" stroke="${D}" stroke-width="1.2"/><circle cx="3.5" cy="0.5" r="2.8" fill="none" stroke="${D}" stroke-width="1.2"/>`;
    if (o.acc) g += o.acc;
    return `<g transform="translate(${x} ${y + 22}) scale(${sc})">${g}</g>`;
  }
  const kid = o => person(Object.assign({ sc: .95 }, o));
  const tv = inner => r(8, 12, 48, 34, D, 5) + r(12, 16, 40, 26, B, 2) + inner + r(26, 46, 12, 4, LD) + r(20, 50, 24, 3, LD, 1.5);
  const glass = (fill) => p('M20 12 h24 l-3 44 h-18z', '#E8F1F6') + p('M21.5 28 h21 l-2 28 h-17z', fill);
  const wave = (y, col = B) => l(`M4 ${y} q6 -5 12 0 t12 0 t12 0 t12 0 t12 0`, col, 3);
  const hand = (rot = 0, x = 32, y = 34) => `<g transform="translate(${x} ${y}) rotate(${rot})">${r(-9, -4, 18, 20, S, 6)}${[-8, -3, 2].map(dx => r(dx, -18, 5, 16, S, 2.5)).join('')}${r(7, -6, 5, 12, S, 2.5, 'transform="rotate(35 9 0)"')}</g>`;
  const room = inner => r(4, 6, 56, 52, '#F3EFE6', 6) + r(4, 46, 56, 12, '#D9C7A8', 0) + inner;
  const book = (col = B) => r(14, 12, 36, 42, col, 4) + r(18, 16, 28, 34, W, 2) + r(22, 22, 20, 3, LD, 1.5) + r(22, 29, 16, 3, LD, 1.5) + r(22, 36, 18, 3, LD, 1.5);
  const ball = (col, line = W) => c(32, 34, 18, col) + l('M14 34 q18 -10 36 0 M32 16 q-10 18 0 36', line, 2.2);
  const flower = (x, y, col, rr = 5) => [0, 72, 144, 216, 288].map(a => c(x + rr * Math.cos(a * Math.PI / 180), y + rr * Math.sin(a * Math.PI / 180), rr * .8, col)).join('') + c(x, y, rr * .6, Y);
  const tree = (x, y, sc = 1) => `<g transform="translate(${x} ${y}) scale(${sc})">${r(-2.5, 0, 5, 14, BR)}${c(0, -6, 10, G)}${c(-6, -1, 6, GD)}${c(6, -1, 6, GD)}</g>`;
  const arrow = (d, col = R) => l(d, col, 4);
  const box = r(18, 30, 28, 24, BRL, 2) + r(18, 30, 28, 6, BR, 2);

  const LIBR = {
    /* ---- chào hỏi ---- */
    hello: s(hand(-12) + l('M12 14 q-4 6 0 12 M7 11 q-6 9 0 18', O, 2.5) + l('M52 14 q4 6 0 12 M57 11 q6 9 0 18', O, 2.5)),
    hi: s(person({ shirt: O, acc: '' }) + `<g transform="translate(14 -4) scale(.6)">${hand(-20)}</g>`),
    goodbye: s(r(36, 8, 22, 48, BR, 3) + c(40, 34, 2, Y) + kid({ x: 20, shirt: G }) + arrow('M8 52 h-4 M6 49 l-3 3 l3 3', R)),
    bye: s(hand(15) + l('M50 12 l6 -4 M52 22 l8 -1 M48 4 l2 -3', O, 2.5)),
    'nice to meet you': s(kid({ x: 18, shirt: O, style: 'pig', hair: BR }) + kid({ x: 46, shirt: B }) + c(32, 46, 6, S)),
    fine: s(c(32, 32, 24, Y) + c(24, 26, 3, D) + c(40, 26, 3, D) + l('M20 38 q12 12 24 0', D, 3.5)),
    'thank you': s(c(32, 32, 24, GL) + p('M32 46 C18 36 16 28 20 23 C24 18 30 20 32 25 C34 20 40 18 44 23 C48 28 46 36 32 46Z', P)),
    /* ---- số đếm ---- */
    ...Object.fromEntries(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'].map((w, i) => [w, s(r(6, 6, 52, 52, BL, 12) + t(32, 44, i + 1, 34, BD))])),
    /* ---- bạn bè, người ---- */
    friend: s(kid({ x: 20, shirt: O, style: 'long', hair: BR }) + kid({ x: 44, shirt: G })),
    friends: s(kid({ x: 20, shirt: O, style: 'long', hair: BR }) + kid({ x: 44, shirt: G })),
    boy: s(kid({ shirt: B })),
    girl: s(kid({ shirt: P, style: 'pig', hair: BR })),
    teacher: s(r(4, 6, 30, 22, GD, 3) + t(19, 22, 'ABC', 9, W) + person({ x: 44, shirt: PD, style: 'bun', glasses: true }) + l('M30 30 l-6 -8', BR, 2)),
    /* ---- gia đình ---- */
    father: s(person({ shirt: BD })),
    mother: s(person({ shirt: P, style: 'long', hair: K })),
    brother: s(kid({ shirt: G, y: 4 })),
    sister: s(kid({ shirt: Y, style: 'pig', hair: BR, y: 4 })),
    grandfather: s(person({ shirt: BR, style: 'bald', hair: GR, glasses: true })),
    grandmother: s(person({ shirt: PD, style: 'bun', hair: GR, glasses: true })),
    family: s(person({ x: 16, shirt: BD, sc: .8, y: 2 }) + person({ x: 48, shirt: P, style: 'long', hair: K, sc: .8, y: 2 }) + kid({ x: 32, shirt: Y, sc: .6, y: 18, style: 'pig', hair: BR })),
    /* ---- cơ thể ---- */
    face: s(c(32, 32, 24, S) + p('M8 30 a24 24 0 0 1 48 0 c-8 -10 -18 -12 -24 -10 c-8 -2 -18 0 -24 10z', D) + c(24, 32, 3, D) + c(40, 32, 3, D) + l('M24 44 q8 6 16 0', D, 2.5)),
    eye: s(e(32, 32, 26, 15, W, `stroke="${D}" stroke-width="3"`) + c(32, 32, 10, BR) + c(32, 32, 5, K) + c(35, 29, 2, W)),
    ear: s(p('M24 10 C42 6 52 20 48 34 C46 42 38 44 38 52 C38 58 30 60 26 54', S) + p('M24 10 C42 6 52 20 48 34 C46 42 38 44 38 52 C38 58 30 60 26 54 C20 46 14 18 24 10Z', S) + l('M30 18 C40 16 44 26 38 32 C34 36 36 40 32 42', OD, 3)),
    nose: s(c(32, 32, 24, S) + l('M32 18 L26 38 Q32 42 38 38', OD, 3.5)),
    mouth: s(c(32, 32, 24, S) + p('M18 30 Q32 52 46 30 Z', R) + r(22, 30, 20, 5, W, 1)),
    hand: s(hand(0, 32, 40)),
    hair: s(c(32, 38, 18, S) + p('M10 40 C8 14 30 4 44 10 C56 16 58 30 54 42 C50 30 40 24 32 26 C22 26 14 32 10 40Z', BR) + c(26, 40, 2.2, D) + c(38, 40, 2.2, D)),
    /* ---- sở thích, hoạt động ---- */
    singing: s(kid({ x: 26, shirt: P, style: 'long', hair: BR }) + r(38, 26, 4, 10, D, 2) + c(40, 24, 4, GR) + t(50, 18, '♪', 16, O) + t(56, 32, '♫', 12, B)),
    dancing: s(`<g transform="rotate(-10 32 36)">${kid({ shirt: P, style: 'pig', hair: BR })}</g>` + l('M14 36 l-8 -10 M50 34 l8 -12', S, 4) + t(10, 16, '♪', 12, O)),
    drawing: s(r(8, 12, 40, 44, W, 3, `stroke="${LD}" stroke-width="2"`) + l('M14 44 q8 -18 16 -6 t14 -10', B, 2.5) + c(22, 24, 5, Y) + `<g transform="rotate(35 46 30)">${r(42, 6, 8, 40, Y, 2)}${p('M42 46 h8 l-4 8z', S)}</g>`),
    painting: s(p('M32 8 C50 8 58 22 54 34 C50 44 42 38 38 44 C34 52 40 58 30 58 C14 58 6 44 8 30 C10 18 20 8 32 8Z', BRL) + c(20, 22, 4, R) + c(32, 16, 4, Y) + c(44, 22, 4, B) + c(18, 36, 4, G) + c(28, 46, 4, W) + `<g transform="rotate(40 48 46)">${r(46, 26, 5, 30, BR, 2)}${r(45, 52, 7, 8, D, 2)}</g>`),
    running: s(c(36, 12, 7, S) + p('M30 6 a7 7 0 0 1 13 3 c-4 -3 -9 -3 -13 -3z', D) + l('M34 20 l-4 16 l10 10 l-2 12 M30 36 l-10 6 l-6 -4 M33 24 l10 6 l6 -6 M33 24 l-10 2 l-6 6', O, 5)),
    walking: s(c(32, 12, 7, S) + p('M26 7 a7 7 0 0 1 13 2 c-4 -3 -9 -3 -13 -2z', D) + l('M32 20 v18 l-6 18 M32 38 l6 18 M32 24 l-8 10 M32 24 l8 10', G, 5)),
    swimming: s(c(30, 30, 8, S) + r(22, 22, 16, 6, R, 3) + e(38, 30, 3.5, 3, '#E8F1F6', `stroke="${D}" stroke-width="1"`) + l('M44 22 q8 -6 12 2', S, 4) + wave(40) + wave(50, BD)),
    cooking: s(e(28, 42, 20, 9, D) + r(46, 38, 16, 5, D, 2.5) + e(28, 40, 16, 6, GR) + e(24, 39, 5, 3, '#FFF3D6') + c(24, 39, 2.5, Y) + l('M20 26 q-3 -6 0 -12 M30 26 q-3 -6 0 -12', LD, 2.5)),
    reading: s(p('M32 18 C24 12 12 12 6 14 V50 C12 48 24 48 32 54 Z', B) + p('M32 18 C40 12 52 12 58 14 V50 C52 48 40 48 32 54 Z', BD) + p('M32 21 C25 16 14 16 9 18 V47 C14 46 25 46 32 50Z', W) + p('M32 21 C39 16 50 16 55 18 V47 C50 46 39 46 32 50Z', '#EEF3F8')),
    writing: s(r(10, 10, 36, 46, W, 3, `stroke="${LD}" stroke-width="2"`) + [18, 26, 34, 42].map(y => r(16, y, 24, 2.5, LD, 1)).join('') + `<g transform="rotate(35 44 36)">${r(40, 10, 8, 36, B, 2)}${p('M40 46 h8 l-4 8z', S)}</g>`),
    'listening to music': s(l('M14 36 a18 18 0 0 1 36 0', D, 4) + r(8, 32, 10, 18, R, 4) + r(46, 32, 10, 18, R, 4) + t(32, 44, '♪', 18, B)),
    'playing the piano': s(r(4, 18, 56, 34, D, 4) + r(8, 30, 48, 18, W, 2) + [16, 24, 32, 40, 48].map(x => r(x, 30, 1.5, 18, LD)).join('') + [13, 21, 37, 45].map(x => r(x, 30, 5, 10, K)).join('')),
    cycling: s(c(16, 44, 11, 'none', `stroke="${D}" stroke-width="3.5"`) + c(48, 44, 11, 'none', `stroke="${D}" stroke-width="3.5"`) + l('M16 44 l10 -16 h16 l6 16 M26 28 l8 16 l8 -16 M24 24 h8 M42 28 l-2 -8 h6', R, 3.5)),
    skating: s(p('M14 14 h18 v22 h14 a8 8 0 0 1 8 8 v4 h-40z', B) + r(10, 48, 44, 4, D, 2) + c(18, 56, 4, Y) + c(46, 56, 4, Y) + c(32, 56, 4, Y)),
    'flying a kite': s(p('M40 4 L56 18 L40 34 L24 18 Z', R) + l('M40 4 V34 M24 18 H56', W, 1.5) + l('M40 34 q-6 10 -12 6 t-14 14', D, 1.8) + p('M28 40 l3 -3 l1 4z', Y) + kid({ x: 14, y: 26, sc: .55, shirt: G })),
    skipping: s(kid({ x: 32, y: 4, shirt: P, style: 'pig', hair: BR }) + l('M12 34 C8 60 56 60 52 34', BR, 2.5)),
    /* ---- trường lớp ---- */
    classroom: s(r(6, 6, 52, 26, GD, 3) + t(32, 24, '2 + 3 = 5', 10, W) + r(10, 40, 18, 5, BRL, 1) + r(36, 40, 18, 5, BRL, 1) + r(12, 45, 3, 12, BR) + r(24, 45, 3, 12, BR) + r(38, 45, 3, 12, BR) + r(50, 45, 3, 12, BR)),
    library: s(r(6, 4, 52, 56, BR, 3) + [8, 26, 44].map(y => r(10, y, 44, 14, '#F3EFE6')).join('') + [[12, R], [17, B], [22, G], [27, Y], [32, P], [37, O], [42, BD], [47, GD]].map(([x, col], i) => [8, 26, 44].map((y, j) => r(x, y + 2 + ((i + j) % 3), 4, 12 - ((i + j) % 3), col, 1)).join('')).join('')),
    playground: s(r(0, 52, 64, 12, GL) + p('M8 18 L40 52 L46 52 L14 18Z', R) + r(4, 16, 14, 4, D, 1) + r(6, 20, 3, 32, D) + r(14, 20, 3, 32, D) + [26, 34, 42].map(y => r(6, y, 11, 2.5, D)).join('') + tree(52, 36, .9)),
    gym: s(r(8, 20, 6, 24, D, 2) + r(50, 20, 6, 24, D, 2) + r(2, 24, 8, 16, GR, 2) + r(54, 24, 8, 16, GR, 2) + r(14, 29, 36, 6, LD, 2)),
    'computer room': s(r(6, 8, 52, 36, D, 4) + r(10, 12, 44, 28, B, 2) + r(26, 44, 12, 6, LD) + r(14, 50, 36, 6, LD, 2) + t(32, 32, '&lt;/&gt;', 12, W)),
    'music room': s(r(6, 22, 52, 32, D, 4) + r(10, 36, 44, 14, W, 2) + [18, 26, 34, 42].map(x => r(x, 36, 1.4, 14, LD)).join('') + [15, 23, 39, 47].map(x => r(x, 36, 4, 8, K)).join('') + t(20, 18, '♪', 14, O) + t(44, 16, '♫', 12, B)),
    'art room': s(r(14, 6, 36, 30, W, 2, `stroke="${BR}" stroke-width="3"`) + c(26, 18, 5, Y) + p('M18 32 l10 -10 l8 8 l6 -6 l6 8 v2z', G) + l('M22 36 l-6 22 M42 36 l6 22 M32 36 v22', BR, 3)),
    'school bag': s(r(14, 14, 36, 44, B, 8) + r(20, 34, 24, 16, BD, 4) + l('M24 14 q8 -12 16 0', D, 3) + r(28, 38, 8, 3, Y, 1.5)),
    book: s(book(B)),
    pen: s(`<g transform="rotate(40 32 32)">${r(28, 4, 8, 44, BD, 3)}${r(28, 4, 8, 12, B, 3)}${p('M28 48 h8 l-4 12z', D)}${r(35, 8, 2, 14, GR, 1)}</g>`),
    pencil: s(`<g transform="rotate(40 32 32)">${r(28, 8, 8, 40, Y, 1)}${r(32, 8, 4, 40, YD)}${r(28, 2, 8, 8, P, 2)}${p('M28 48 h8 l-4 12z', S)}${p('M30.6 56 h2.8 l-1.4 4z', D)}</g>`),
    ruler: s(`<g transform="rotate(-30 32 32)">${r(4, 24, 56, 16, Y, 2)}${Array.from({ length: 11 }, (_, i) => r(8 + i * 4.8, 24, 1.4, i % 2 ? 5 : 8, YD)).join('')}</g>`),
    eraser: s(`<g transform="rotate(-20 32 32)">${r(10, 22, 44, 20, P, 4)}${r(10, 22, 18, 20, B, 4)}${r(24, 22, 4, 20, B)}</g>`),
    'pencil case': s(r(6, 20, 52, 26, G, 10) + r(10, 22, 44, 3, GD, 1.5) + c(48, 24, 3, Y) + r(14, 14, 6, 10, Y, 1) + r(24, 12, 6, 12, R, 1)),
    notebook: s(r(14, 8, 38, 50, O, 4) + r(14, 8, 8, 50, OD, 3) + r(28, 18, 18, 10, W, 2) + [16, 26, 36, 46].map(y => c(18, y, 1.8, W)).join('')),
    compass: s(c(32, 12, 5, GR) + l('M32 14 L18 56 M32 14 L46 56', D, 3.5) + p('M44 52 l2 6 l2 -6z', Y) + p('M16 52 l2 6 l1 -6z', GR)),
    calculator: s(r(14, 6, 36, 52, D, 5) + r(18, 10, 28, 12, GL, 2) + t(42, 20, '128', 9, D) + [0, 1, 2].map(row => [0, 1, 2].map(col => r(18 + col * 10, 26 + row * 10, 8, 7, row === 2 && col === 2 ? O : LD, 2)).join('')).join('')),
    'pencil sharpener': s(r(14, 20, 36, 30, B, 6) + c(32, 35, 8, D) + c(32, 35, 4, GR) + `<g transform="rotate(-50 46 20)">${r(44, 2, 6, 22, Y)}${p('M44 24 h6 l-3 6z', S)}</g>`),
    uniform: s(p('M20 8 L12 14 L6 28 L14 32 L18 24 V58 H46 V24 L50 32 L58 28 L52 14 L44 8 L38 12 H26Z', W, `stroke="${LD}" stroke-width="2"`) + p('M26 12 L32 22 L38 12', 'none', `stroke="${LD}" stroke-width="2"`) + p('M30 22 L32 40 L34 22Z', R) + c(26, 30, 3, BD)),
    homework: s(r(8, 8, 36, 48, W, 3, `stroke="${LD}" stroke-width="2"`) + [16, 24, 32].map(y => r(14, y, 22, 2.5, LD, 1)).join('') + l('M14 42 l4 4 l8 -8', G, 3) + p('M40 40 L54 30 L60 38 L52 40 V54 H42 V44Z', O) + r(45, 46, 5, 8, BR)),
    physics: s(c(32, 32, 5, R) + e(32, 32, 24, 9, 'none', `stroke="${B}" stroke-width="2.5"`) + e(32, 32, 24, 9, 'none', `stroke="${B}" stroke-width="2.5" transform="rotate(60 32 32)"`) + e(32, 32, 24, 9, 'none', `stroke="${B}" stroke-width="2.5" transform="rotate(-60 32 32)"`)),
    history: s(p('M12 10 h40 v6 h-40z M16 16 h32 l-2 4 h-28z', BRL) + [18, 28, 38].map(x => r(x, 20, 6, 30, '#E8DCC6')).join('') + r(12, 50, 40, 6, BRL) + r(8, 56, 48, 4, BR)),
    science: s(p('M26 8 h12 v4 h-2 v14 l14 24 a5 5 0 0 1 -4 8 h-28 a5 5 0 0 1 -4 -8 l14 -24 v-14 h-2z', L) + p('M20 40 h24 l6 10 a5 5 0 0 1 -4 8 h-28 a5 5 0 0 1 -4 -8z', G) + c(28, 48, 3, W) + c(36, 44, 2, W)),
    /* ---- lệnh trong lớp ---- */
    'stand up': s(kid({ x: 26, shirt: B }) + arrow('M52 50 V14 M44 22 l8 -8 l8 8', G)),
    'sit down': s(r(10, 34, 26, 4, BR) + r(12, 38, 3, 18, BR) + r(31, 38, 3, 18, BR) + r(10, 14, 3, 22, BR) + kid({ x: 24, y: -2, sc: .8, shirt: B }) + arrow('M52 14 V50 M44 42 l8 8 l8 -8', R)),
    'open your book': s(K_open()),
    'close your book': s(book(R)),
    'come here': s(hand(-30, 22, 36) + arrow('M58 32 H34 M42 24 l-8 8 l8 8', B)),
    'raise your hand': s(kid({ x: 24, y: 8, shirt: G }) + l('M34 34 L44 14', S, 5) + c(45, 11, 5, S)),
    'be quiet': s(c(32, 32, 24, S) + c(24, 26, 2.5, D) + c(40, 26, 2.5, D) + r(28, 30, 6, 24, S, 3, `stroke="${OD}" stroke-width="1.5"`) + l('M24 42 h16', D, 2.5)),
    'go out': s(r(26, 6, 30, 52, BR, 3) + r(30, 10, 22, 44, BRL, 2) + c(34, 34, 2, Y) + arrow('M22 32 H4 M12 24 l-8 8 l8 8', G)),
    /* ---- màu sắc ---- */
    ...Object.fromEntries([['red', R], ['yellow', Y], ['green', G], ['blue', B], ['black', K], ['white', W], ['brown', BR], ['orange', O], ['pink', '#F29BB2'], ['purple', '#8E5BC4'], ['grey', GR]].map(([w, col]) => [w, s(p('M32 6 C46 6 56 14 56 26 C56 34 50 36 50 42 C50 50 58 52 54 58 C48 62 38 56 32 58 C22 60 8 56 8 42 C8 30 6 28 10 20 C14 10 22 6 32 6Z', col, `stroke="${LD}" stroke-width="1.5"`))])),
    /* ---- giờ ra chơi, thể thao ---- */
    football: s(c(32, 32, 22, W, `stroke="${D}" stroke-width="2"`) + p('M32 22 l9 6 l-3 10 h-12 l-3 -10z', K) + l('M32 22 V12 M41 28 l9 -3 M38 38 l6 8 M26 38 l-6 8 M23 28 l-9 -3', D, 2)),
    basketball: s(ball(O, K) + l('M18 22 q14 12 28 0 M18 46 q14 -12 28 0', K, 2)),
    volleyball: s(c(32, 32, 20, W, `stroke="${D}" stroke-width="2"`) + l('M32 12 q-6 20 10 32 M14 26 q18 2 30 -10 M18 46 q10 -14 32 -12', B, 2.4)),
    badminton: s(`<g transform="rotate(-35 26 30)">${e(26, 20, 12, 15, 'none', `stroke="${R}" stroke-width="3"`)}${r(24, 34, 4, 24, D, 2)}${l('M18 14 L34 26 M18 26 L34 14 M26 6 V34 M14 20 H38', LD, 1)}</g>` + p('M46 22 l10 -6 l2 12z', W, `stroke="${LD}" stroke-width="1.5"`) + c(52, 30, 4, R)),
    chess: s(p('M22 54 h22 v-6 h-2 l-2 -14 c8 -4 10 -16 2 -22 c-6 -4 -14 -2 -18 6 l-6 10 l6 2 l6 -4 c0 6 -4 8 -6 8 l-2 14 h-2z', K) + r(18, 54, 30, 6, K, 2)),
    'table tennis': s(c(28, 28, 18, R) + r(36, 36, 8, 20, BR, 3, 'transform="rotate(-45 40 46)"') + c(50, 14, 5, W, `stroke="${LD}" stroke-width="1.5"`)),
    'hide-and-seek': s(tree(42, 34, 1.6) + kid({ x: 18, y: 18, sc: .7, shirt: Y }) + t(18, 14, '?', 14, B)),
    racket: s(`<g transform="rotate(-35 32 28)">${e(32, 20, 14, 17, 'none', `stroke="${B}" stroke-width="3.5"`)}${r(30, 36, 4, 24, D, 2)}${l('M22 12 L42 28 M22 28 L42 12 M32 4 V36 M18 20 H46', LD, 1)}</g>`),
    goggles: s(e(20, 32, 11, 9, B, `stroke="${D}" stroke-width="3"`) + e(44, 32, 11, 9, B, `stroke="${D}" stroke-width="3"`) + l('M31 32 h2 M9 30 l-6 -2 M55 30 l6 -2', D, 3) + c(17, 29, 2.5, W) + c(41, 29, 2.5, W)),
    ball: s(c(32, 34, 20, R) + p('M12 34 a20 20 0 0 0 40 0z', B) + c(26, 26, 4, W, 'opacity=".6"')),
    karate: s(kid({ shirt: W, y: 2 }) + r(20, 44, 24, 4, K) + p('M30 48 l-4 10 h4 l2 -8 l2 8 h4 l-4 -10z', K)),
    /* ---- gia đình, nghề nghiệp ---- */
    doctor: s(person({ shirt: W, acc: `${l('M-6 12 q-2 14 6 14 q8 0 6 -14', D, 1.8)}${c(0, 26, 2.5, GR)}${r(4, 18, 8, 8, W)}${r(7, 19, 2, 6, R)}${r(5, 21, 6, 2, R)}` })),
    nurse: s(person({ shirt: '#9FD3E6', style: 'long', hair: BR, acc: `${r(-8, -13, 16, 7, W, 2)}${r(-1.2, -12, 2.4, 5, R)}${r(-2.5, -10.7, 5, 2.4, R)}` })),
    farmer: s(person({ shirt: G, acc: `${e(0, -7, 17, 4, Y)}${p('M-8 -7 a8 8 0 0 1 16 0z', Y)}${r(-8, -9, 16, 2.5, BR)}` })),
    cook: s(person({ shirt: W, acc: `${c(-6, -14, 6, W, `stroke="${LD}"`)}${c(0, -16, 7, W, `stroke="${LD}"`)}${c(6, -14, 6, W, `stroke="${LD}"`)}${r(-8, -12, 16, 6, W, 1, `stroke="${LD}"`)}` })),
    driver: s(person({ y: -6, shirt: B, acc: '' }) + c(32, 48, 14, 'none', `stroke="${D}" stroke-width="4"`) + l('M18 48 h28 M32 48 v14', D, 3)),
    worker: s(person({ shirt: O, acc: `${p('M-11 -3 a11 10 0 0 1 22 0z', Y)}${r(-13, -4, 26, 3, YD, 1.5)}${r(-12, 20, 24, 3, Y)}` })),
    singer: s(person({ shirt: P, style: 'long', hair: K, acc: `${r(9, 8, 3, 12, D, 1.5)}${c(10.5, 6, 3.5, GR)}` }) + t(54, 16, '♪', 14, O)),
    /* ---- nhà, phòng ---- */
    house: s(p('M8 30 L32 8 L56 30z', R) + r(14, 28, 36, 30, '#F3EFE6') + r(28, 40, 10, 18, BR, 1) + r(18, 34, 8, 8, BL) + r(40, 34, 8, 8, BL)),
    'living room': s(room(r(10, 30, 44, 16, P, 5) + r(6, 28, 10, 18, PD, 4) + r(48, 28, 10, 18, PD, 4) + r(12, 46, 3, 6, BR) + r(49, 46, 3, 6, BR) + r(24, 12, 16, 12, Y, 2))),
    kitchen: s(room(r(10, 26, 26, 26, W, 2, `stroke="${LD}" stroke-width="2"`) + c(17, 31, 3, D) + c(29, 31, 3, D) + r(14, 38, 18, 12, LD, 1) + r(14, 18, 16, 8, GR, 2) + r(40, 16, 16, 36, '#CFE6F2', 2) + r(52, 28, 2, 8, D))),
    bedroom: s(room(r(8, 34, 48, 12, B, 3) + r(8, 26, 10, 20, BD, 3) + r(18, 30, 12, 6, W, 3) + r(10, 46, 3, 6, BR) + r(51, 46, 3, 6, BR))),
    bathroom: s(room(p('M8 32 h48 v6 a12 12 0 0 1 -12 12 h-24 a12 12 0 0 1 -12 -12z', W, `stroke="${LD}" stroke-width="2"`) + r(46, 14, 3, 18, GR) + r(40, 14, 9, 3, GR) + c(30, 30, 4, BL) + c(38, 28, 3, BL) + c(22, 28, 3, BL))),
    garden: s(r(0, 44, 64, 20, GL) + [6, 16, 26, 36, 46, 56].map(x => p(`M${x - 3} 56 v-16 l3 -4 l3 4 v16z`, '#E8DCC6')).join('') + r(0, 44, 64, 3, '#D9C7A8') + flower(14, 30, P) + flower(32, 24, R) + flower(50, 30, O) + l('M14 35 v9 M32 29 v15 M50 35 v9', G, 2)),
    sofa: s(r(8, 26, 48, 22, P, 6) + r(4, 22, 12, 26, PD, 5) + r(48, 22, 12, 26, PD, 5) + r(14, 36, 36, 6, '#F4A9B6', 2) + r(10, 48, 4, 8, BR) + r(50, 48, 4, 8, BR)),
    wardrobe: s(r(12, 4, 40, 54, BRL, 3) + r(15, 7, 16, 48, BR, 1) + r(33, 7, 16, 48, BR, 1) + r(28, 28, 2, 8, Y) + r(34, 28, 2, 8, Y) + r(14, 58, 4, 4, BR) + r(46, 58, 4, 4, BR)),
    fridge: s(r(16, 4, 32, 56, '#E8F1F6', 4, `stroke="${LD}" stroke-width="2"`) + r(16, 24, 32, 2, LD) + r(42, 10, 2.5, 10, GR, 1) + r(42, 30, 2.5, 14, GR, 1) + c(24, 14, 2.5, R)),
    cupboard: s(r(8, 10, 48, 44, BRL, 3) + r(11, 13, 20, 38, '#E8DCC6', 1) + r(33, 13, 20, 38, '#E8DCC6', 1) + c(27, 32, 2, BR) + c(37, 32, 2, BR) + e(21, 22, 6, 2, W) + e(43, 22, 6, 2, W)),
    bed: s(r(6, 30, 52, 16, B, 3) + r(6, 20, 8, 34, BD, 3) + r(50, 28, 8, 26, BD, 3) + r(16, 26, 14, 8, W, 3)),
    chair: s(r(18, 6, 6, 50, BR, 2) + r(18, 6, 28, 6, BR, 2) + r(18, 32, 28, 6, BRL, 2) + r(40, 38, 6, 18, BR, 2) + r(18, 18, 28, 4, BRL, 2)),
    desk: s(r(6, 24, 52, 6, BRL, 2) + r(8, 30, 4, 26, BR) + r(52, 30, 4, 26, BR) + r(32, 30, 20, 14, BR, 1) + r(40, 36, 6, 2, Y) + r(14, 12, 14, 12, B, 1)),
    door: s(r(16, 4, 32, 56, BR, 3) + r(20, 8, 24, 20, BRL, 2) + r(20, 32, 24, 24, BRL, 2) + c(42, 34, 2.5, Y)),
    window: s(r(8, 8, 48, 48, W, 3, `stroke="${BR}" stroke-width="4"`) + r(12, 12, 40, 40, BL) + r(30, 10, 4, 44, BR) + r(10, 30, 44, 4, BR) + c(20, 20, 4, Y)),
    lamp: s(p('M20 8 h24 l8 20 h-40z', Y) + r(30, 28, 4, 22, D) + r(20, 50, 24, 6, D, 3) + l('M24 34 l-6 6 M40 34 l6 6', YD, 2)),
    /* ---- đồ ăn uống ---- */
    bread: s(p('M10 30 C10 18 54 18 54 30 V50 H10Z', BRL) + p('M10 30 C10 18 54 18 54 30 C54 36 10 36 10 30Z', '#D8A26A') + l('M22 24 l4 6 M32 22 l4 6 M42 24 l4 6', BR, 2)),
    rice: s(p('M6 30 h52 a26 26 0 0 1 -52 0z', B) + p('M10 30 C10 16 54 16 54 30Z', W) + [16, 24, 32, 40, 48].map((x, i) => e(x, 26 - (i % 2) * 3, 2.5, 1.5, '#EEE')).join('') + l('M44 8 L28 26 M52 10 L36 26', BR, 2.5)),
    milk: s(glass('#FFFFFF') + l('M20 12 h24', LD, 1)),
    water: s(glass(BL)),
    juice: s(glass(O) + l('M38 4 L32 34', P, 3) + c(42, 22, 4, Y)),
    chicken: s(e(36, 26, 18, 16, '#D8873E') + e(32, 22, 8, 5, '#E9A35F') + r(16, 36, 6, 18, '#F3E3C8', 3, 'transform="rotate(-40 19 45)"') + c(12, 54, 4, '#F3E3C8') + c(8, 50, 4, '#F3E3C8')),
    fish: s(e(28, 32, 20, 12, B) + p('M46 32 L60 20 V44Z', BD) + c(18, 29, 2.5, D) + l('M30 24 q4 8 0 16', BD, 2)),
    egg: s(p('M32 8 C18 8 6 18 8 34 C10 50 22 56 32 56 C44 56 56 48 56 32 C56 16 46 8 32 8Z', W, `stroke="${LD}" stroke-width="2"`) + c(30, 32, 11, Y)),
    /* ---- thú cưng, động vật ---- */
    cat: s(p('M14 14 L24 24 L40 24 L50 14 L50 38 a18 16 0 0 1 -36 0z', O) + c(25, 34, 2.6, D) + c(39, 34, 2.6, D) + p('M30 40 h4 l-2 2z', P) + l('M20 42 h-10 M20 45 l-9 3 M44 42 h10 M44 45 l9 3', D, 1.2) + l('M28 46 q4 3 8 0', D, 1.5)),
    dog: s(c(32, 34, 18, BRL) + e(14, 30, 6, 14, BR, 'transform="rotate(15 14 30)"') + e(50, 30, 6, 14, BR, 'transform="rotate(-15 50 30)"') + e(32, 42, 9, 7, '#E8C9A0') + c(25, 30, 2.6, D) + c(39, 30, 2.6, D) + e(32, 38, 3.5, 2.5, D) + l('M29 45 q3 3 6 0', D, 1.5)),
    bird: s(e(30, 36, 18, 14, Y) + c(42, 26, 10, Y) + c(45, 24, 2.2, D) + p('M51 26 l9 3 l-9 3z', O) + p('M16 34 q10 -6 18 4 q-10 6 -18 -4z', YD) + l('M26 50 v8 M34 50 v8', O, 2)),
    parrot: s(e(30, 38, 12, 16, G) + c(34, 20, 11, G) + p('M42 18 q10 2 6 12 q-4 -6 -8 -4z', '#FFD24A') + c(36, 17, 2.4, D) + p('M22 40 q-6 14 4 22 l6 -10z', R) + p('M24 34 q6 6 12 2 q-4 12 -12 8z', B)),
    goldfish: s(e(28, 32, 17, 12, O) + p('M42 32 L60 18 L54 32 L60 46Z', '#F4A261') + c(19, 29, 2.5, D) + p('M26 20 q6 -6 12 2z', '#F4A261')),
    rabbit: s(e(24, 14, 5, 13, W, `stroke="${LD}" stroke-width="1.5"`) + e(40, 14, 5, 13, W, `stroke="${LD}" stroke-width="1.5"`) + e(24, 14, 2, 9, '#F7C6D0') + e(40, 14, 2, 9, '#F7C6D0') + c(32, 38, 16, W, `stroke="${LD}" stroke-width="1.5"`) + c(26, 36, 2.4, D) + c(38, 36, 2.4, D) + p('M30 42 h4 l-2 2z', P)),
    monkey: s(c(14, 30, 7, BR) + c(50, 30, 7, BR) + c(14, 30, 4, '#E8C9A0') + c(50, 30, 4, '#E8C9A0') + c(32, 32, 18, BR) + e(32, 38, 12, 10, '#E8C9A0') + e(26, 28, 5, 6, '#E8C9A0') + e(38, 28, 5, 6, '#E8C9A0') + c(26, 29, 2, D) + c(38, 29, 2, D) + l('M28 42 q4 3 8 0', D, 1.5)),
    elephant: s(e(14, 30, 12, 15, '#B5BEC4') + e(50, 30, 12, 15, '#B5BEC4') + c(32, 28, 16, GR) + p('M28 36 h8 v16 q0 6 -6 6 q-4 0 -4 -4 h4 q2 0 2 -2z', GR) + c(26, 26, 2.4, D) + c(38, 26, 2.4, D) + p('M24 38 l-4 8 l6 -4z M40 38 l4 8 l-6 -4z', W)),
    tiger: s(c(18, 16, 6, O) + c(46, 16, 6, O) + c(32, 34, 20, O) + e(32, 42, 10, 8, W) + c(25, 30, 2.6, D) + c(39, 30, 2.6, D) + p('M30 38 h4 l-2 2z', D) + l('M32 14 v8 M24 16 l2 6 M40 16 l-2 6 M12 32 h6 M12 38 h6 M46 32 h6 M46 38 h6', K, 2.2)),
    giraffe: s(p('M28 58 V20 l-4 -8 h14 v46z', Y) + e(34, 14, 10, 7, Y) + r(30, 2, 2, 6, YD) + r(36, 2, 2, 6, YD) + c(38, 12, 2, D) + [[30, 26], [34, 34], [30, 42], [34, 50], [32, 18]].map(([x, y]) => c(x, y, 2.6, BR)).join('')),
    bear: s(c(16, 16, 7, BR) + c(48, 16, 7, BR) + c(32, 34, 20, BR) + e(32, 42, 9, 7, BRL) + c(25, 30, 2.6, D) + c(39, 30, 2.6, D) + e(32, 38, 3.5, 2.5, D)),
    horse: s(p('M20 58 L22 30 L18 18 L26 8 L46 14 L52 30 L44 34 L38 28 L36 58z', BRL) + p('M26 8 l-4 -4 l6 2z', BRL) + p('M26 10 C18 22 20 36 22 44 L26 30z', BR) + c(36, 18, 2.4, D) + c(48, 28, 1.6, D)),
    crocodile: s(p('M4 38 C10 26 40 26 60 34 C60 40 40 44 4 44Z', G) + [14, 22, 30, 38, 46, 54].map(x => p(`M${x} 38 l2 4 l2 -4z`, W)).join('') + c(18, 30, 4, G) + c(18, 30, 2, D) + [24, 32, 40, 48].map(x => p(`M${x} 30 l3 -4 l3 4z`, GD)).join('')),
    peacock: s([0, 1, 2, 3, 4, 5, 6].map(i => { const a = (-150 + i * 20) * Math.PI / 180; return e(32 + 22 * Math.cos(a), 44 + 22 * Math.sin(a), 6, 9, G, `transform="rotate(${-60 + i * 20} ${32 + 22 * Math.cos(a)} ${44 + 22 * Math.sin(a)})"`) + c(32 + 22 * Math.cos(a), 44 + 22 * Math.sin(a), 3, B); }).join('') + e(32, 44, 7, 12, BD) + c(32, 30, 5, BD) + p('M36 30 l5 1 l-5 2z', Y) + c(33, 29, 1.2, W)),
    /* ---- đồ chơi ---- */
    car: s(p('M8 40 v-8 l8 -12 h28 l10 12 h4 v8z', R) + r(20, 22, 10, 8, BL, 1) + r(33, 22, 10, 8, BL, 1) + c(18, 42, 6, D) + c(46, 42, 6, D) + c(18, 42, 2, GR) + c(46, 42, 2, GR)),
    doll: s(kid({ shirt: P, style: 'long', hair: Y, y: -2 }) + p('M20 40 L14 58 H50 L44 40z', P)),
    kite: s(p('M32 4 L54 26 L32 48 L10 26 Z', B) + p('M32 4 L54 26 L32 26Z', Y) + p('M10 26 L32 48 V26Z', R) + l('M32 48 q-6 6 0 10 t-4 6', D, 1.8)),
    ship: s(p('M6 40 h52 l-8 12 h-36z', R) + r(30, 10, 3, 30, D) + p('M33 12 L52 36 H33Z', W, `stroke="${LD}" stroke-width="1.5"`) + p('M30 16 L14 36 H30Z', Y) + wave(58)),
    'teddy bear': s(c(20, 12, 6, BRL) + c(44, 12, 6, BRL) + c(32, 20, 13, BRL) + e(32, 44, 16, 16, BRL) + e(32, 46, 9, 10, '#E8C9A0') + c(27, 18, 2, D) + c(37, 18, 2, D) + e(32, 24, 3, 2, D) + c(14, 40, 6, BRL) + c(50, 40, 6, BRL) + p('M26 32 l6 4 l6 -4 l-6 4z', R)),
    robot: s(r(18, 12, 28, 22, GR, 5) + r(30, 4, 4, 8, D) + c(32, 4, 3, R) + c(25, 22, 4, Y) + c(39, 22, 4, Y) + r(24, 28, 16, 3, D, 1.5) + r(14, 36, 36, 22, LD, 5) + r(24, 42, 16, 8, B, 2) + r(6, 38, 8, 14, GR, 3) + r(50, 38, 8, 14, GR, 3)),
    plane: s(p('M6 34 L58 26 a4 4 0 0 1 0 8 L6 34Z', W, `stroke="${LD}" stroke-width="1.5"`) + p('M26 30 L18 12 h6 l14 18z', B) + p('M26 34 L18 52 h6 l14 -18z', B) + p('M8 33 L4 22 h5 l6 10z', R)),
    /* ---- địa lí, thiên nhiên (lớp 6) ---- */
    mountain: s(p('M2 56 L24 14 L46 56Z', G) + p('M24 14 L30 26 L24 24 L18 26Z', W) + p('M28 56 L44 26 L62 56Z', GD) + c(52, 12, 6, Y)),
    river: s(r(0, 0, 64, 64, GL) + p('M20 0 C30 16 10 28 26 40 C38 50 30 58 36 64 H52 C46 56 54 46 42 36 C28 24 46 14 36 0Z', B) + tree(10, 50, .7) + tree(56, 20, .7)),
    lake: s(r(0, 0, 64, 64, GL) + e(32, 36, 26, 14, B) + e(28, 34, 12, 4, BL) + tree(10, 16, .7) + tree(54, 18, .8)),
    island: s(r(0, 0, 64, 64, BL) + e(32, 46, 24, 8, Y) + r(31, 22, 3, 24, BR) + p('M32 22 q-12 -6 -18 2 q8 -2 18 -2 q-4 -10 -14 -12 q12 2 14 12 q4 -12 16 -10 q-12 2 -14 10 q10 -4 18 2 q-10 -4 -20 -2z', G) + wave(56, B)),
    desert: s(r(0, 0, 64, 64, '#FCE9C8') + c(48, 14, 7, O) + p('M0 44 C16 34 30 34 44 42 C52 46 58 44 64 40 V64 H0Z', '#E9B872') + r(16, 22, 6, 26, G, 3) + r(10, 28, 6, 10, G, 3) + r(22, 26, 6, 10, G, 3)),
    waterfall: s(p('M4 8 H24 V60 H4Z M40 8 H60 V60 H40Z', GR) + r(24, 8, 16, 46, B) + l('M28 10 V50 M34 12 V52', BL, 2) + e(32, 56, 20, 6, BL)),
    cave: s(r(0, 0, 64, 64, GL) + p('M2 60 C2 24 18 8 32 8 C48 8 62 24 62 60Z', GR) + p('M18 60 C18 40 24 30 32 30 C40 30 46 40 46 60Z', K)),
    forest: s(tree(14, 40, 1.2) + tree(32, 34, 1.5) + tree(50, 40, 1.2) + r(0, 56, 64, 8, GL)),
    beach: s(r(0, 0, 64, 40, BL) + c(50, 12, 7, Y) + p('M0 38 Q16 32 32 38 T64 38 V46 H0Z', B) + r(0, 44, 64, 20, '#F6DCA0') + p('M14 54 L26 30 L38 54Z', R) + r(25, 30, 2, 26, D)),
    valley: s(r(0, 0, 64, 64, '#EAF4FB') + p('M0 56 L0 16 L26 50Z', G) + p('M64 56 L64 12 L38 50Z', GD) + p('M0 56 L26 46 L38 46 L64 56 V64 H0Z', GL) + l('M28 64 q4 -8 6 -16', B, 3)),
    /* ---- Tết (lớp 6) ---- */
    'peach flower': s(l('M8 56 C20 44 26 36 40 20 M26 38 l14 6 M34 28 l-12 -10', BR, 3) + flower(40, 18, '#F29BB2', 6) + flower(42, 44, '#F29BB2', 5) + flower(20, 16, '#F29BB2', 5)),
    'apricot flower': s(l('M8 56 C20 44 26 36 40 20 M26 38 l14 6 M34 28 l-12 -10', BR, 3) + flower(40, 18, Y, 6) + flower(42, 44, Y, 5) + flower(20, 16, Y, 5)),
    'lucky money': s(r(14, 6, 36, 52, R, 4) + p('M14 10 L32 26 L50 10', 'none', `stroke="${YD}" stroke-width="2"`) + c(32, 36, 8, Y) + t(32, 40, '福', 10, R)),
    firework: s(r(0, 0, 64, 64, '#1F2A44', 8) + [0, 45, 90, 135, 180, 225, 270, 315].map(a => l(`M32 26 L${32 + 18 * Math.cos(a * Math.PI / 180)} ${26 + 18 * Math.sin(a * Math.PI / 180)}`, a % 90 ? Y : P, 2.5)).join('') + c(32, 26, 4, W) + [[12, 52, B], [52, 50, G], [16, 12, Y]].map(([x, y, col]) => c(x, y, 3, col)).join('')),
    'banh chung': s(r(10, 12, 44, 44, G, 4) + r(14, 16, 36, 36, GD, 2) + l('M26 10 V58 M38 10 V58 M8 26 H56 M8 38 H56', '#E8DCC6', 2)),
    decorate: s(l('M4 10 q28 22 56 0', D, 1.8) + [[10, R], [20, Y], [32, B], [44, G], [54, P]].map(([x, col], i) => p(`M${x} ${14 + Math.sin(i) * 2 + (i === 2 ? 6 : i % 2 ? 4 : 2)} l-5 10 h10z`, col)).join('') + flower(20, 46, Y, 5) + flower(44, 48, '#F29BB2', 5)),
    wish: s(p('M32 6 L38 24 L58 24 L42 36 L48 56 L32 44 L16 56 L22 36 L6 24 L26 24Z', Y) + c(32, 32, 4, W)),
    /* ---- tivi (lớp 6) ---- */
    television: s(tv(c(32, 29, 7, Y))),
    channel: s(tv(t(32, 36, '7', 20, W))),
    cartoon: s(tv(c(32, 29, 9, Y) + c(28, 27, 1.5, D) + c(36, 27, 1.5, D) + l('M28 32 q4 3 8 0', D, 1.6) + c(24, 20, 4, Y) + c(40, 20, 4, Y))),
    news: s(tv(r(14, 18, 18, 18, W, 2) + r(16, 21, 14, 2, LD) + r(16, 26, 14, 2, LD) + r(16, 31, 10, 2, LD) + person({ x: 42, y: 13, sc: .55, shirt: BD }))),
    'game show': s(tv(t(32, 38, '?', 22, Y))),
    comedy: s(c(32, 32, 24, Y) + p('M18 26 q4 -6 8 0 M38 26 q4 -6 8 0', 'none', `stroke="${D}" stroke-width="3"`) + p('M18 36 Q32 56 46 36Z', D) + p('M24 42 Q32 50 40 42Z', R)),
    'remote control': s(r(22, 4, 20, 56, D, 8) + c(32, 14, 4, R) + [0, 1, 2].map(row => [0, 1].map(col => c(27 + col * 10, 26 + row * 9, 3, LD)).join('')).join('')),
    /* ---- thành phố (lớp 6) ---- */
    'clock tower': s(r(24, 14, 16, 46, '#D8B98A') + p('M22 14 L32 2 L42 14Z', GD) + c(32, 24, 6, W, `stroke="${D}" stroke-width="1.5"`) + l('M32 24 v-4 M32 24 h3', D, 1.5) + r(28, 40, 8, 20, BR)),
    tower: s(p('M32 4 L22 58 H28 L32 36 L36 58 H42Z', BR) + r(24, 26, 16, 3, BR) + r(20, 40, 24, 3, BR) + l('M26 58 q6 -14 12 0', W, 2)),
    'opera house': s(r(0, 48, 64, 16, B) + p('M8 48 Q16 20 30 48Z', W, `stroke="${LD}" stroke-width="1.5"`) + p('M22 48 Q32 14 44 48Z', W, `stroke="${LD}" stroke-width="1.5"`) + p('M38 48 Q48 26 58 48Z', W, `stroke="${LD}" stroke-width="1.5"`)),
    city: s([[4, 30, B], [14, 16, BD], [26, 24, GR], [38, 8, B], [50, 22, BD]].map(([x, y, col]) => r(x, y, 11, 60 - y, col, 1) + [0, 1, 2, 3].map(i => r(x + 3, y + 5 + i * 8, 5, 3, Y, 0.5)).join('')).join('')),
    palace: s(r(8, 30, 48, 28, '#F3E3C8') + p('M4 32 L32 14 L60 32Z', R) + p('M14 22 L32 8 L50 22Z', OD) + r(28, 42, 8, 16, BR) + [14, 22, 40, 48].map(x => r(x, 36, 4, 8, B)).join('')),
    market: s(p('M6 22 L12 10 H52 L58 22Z', R) + [8, 20, 32, 44].map(x => p(`M${x} 22 h12 v4 a6 6 0 0 1 -12 0z`, x % 24 ? W : R)).join('') + r(10, 26, 44, 30, '#F3EFE6') + c(22, 44, 5, O) + c(32, 44, 5, Y) + c(42, 44, 5, G)),
    /* ---- nhà tương lai (lớp 6) ---- */
    villa: s(r(0, 54, 64, 10, GL) + p('M4 30 L24 14 L44 30z', R) + r(8, 28, 32, 26, '#F3EFE6') + r(40, 34, 20, 20, '#E8DCC6') + r(40, 30, 20, 4, R) + r(20, 40, 8, 14, BR) + e(52, 58, 8, 3, BL)),
    apartment: s(r(12, 4, 40, 56, '#D8B98A', 2) + Array.from({ length: 5 }, (_, row) => [0, 1, 2].map(col => r(17 + col * 11, 9 + row * 10, 7, 6, BL, 1)).join('')).join('')),
    skyscraper: s(r(20, 4, 24, 56, BD, 2) + Array.from({ length: 9 }, (_, row) => [0, 1, 2].map(col => r(23 + col * 7, 8 + row * 6, 4, 3.5, BL, .5)).join('')).join('') + r(30, 0, 4, 6, D)),
    houseboat: s(r(12, 20, 40, 18, '#F3EFE6') + p('M8 22 L32 10 L56 22Z', G) + r(18, 26, 8, 6, BL) + r(36, 26, 10, 12, BR) + p('M4 38 h56 l-6 10 h-44z', R) + wave(56)),
    'smart tv': s(tv(t(32, 34, 'Wi-Fi', 9, W) + l('M24 24 q8 -6 16 0 M27 27 q5 -3 10 0', W, 1.8))),
    'washing machine': s(r(12, 6, 40, 52, W, 4, `stroke="${LD}" stroke-width="2"`) + r(12, 6, 40, 10, '#E8F1F6', 4) + c(20, 11, 2, R) + c(26, 11, 2, G) + c(32, 36, 14, GR) + c(32, 36, 10, BL) + p('M24 38 q8 -6 16 0 v4 h-16z', B)),
    dishwasher: s(r(10, 6, 44, 52, '#E8F1F6', 4, `stroke="${LD}" stroke-width="2"`) + r(10, 6, 44, 8, GR, 4) + [18, 26, 34, 42].map(x => e(x + 2, 36, 4, 12, W, `stroke="${LD}" stroke-width="1.5"`)).join('') + r(14, 50, 36, 3, LD, 1.5)),
    'solar panel': s(c(52, 12, 7, Y) + `<g transform="skewX(-15) translate(10 0)">${r(10, 24, 44, 24, BD, 2)}${l('M10 32 H54 M10 40 H54 M21 24 V48 M32 24 V48 M43 24 V48', BL, 1.2)}</g>` + r(30, 48, 4, 12, GR)),
    /* ---- môi trường (lớp 6) ---- */
    recycle: s([0, 120, 240].map(a => `<g transform="rotate(${a} 32 34)">${p('M24 16 L40 16 L46 26 L52 22 L48 36 L36 32 L42 28 L37 21 H27Z', G)}</g>`).join('')),
    reduce: s(r(8, 16, 22, 30, B, 4) + r(38, 26, 14, 20, B, 3) + arrow('M30 54 h20 M44 48 l6 6 l-6 6', G)),
    reuse: s(glass(BL) + p('M44 20 c8 0 8 14 0 14', 'none', `stroke="${G}" stroke-width="3"`) + flower(32, 10, P, 4)),
    'plastic bag': s(p('M14 18 h36 l4 40 h-44z', '#E8F1F6', `stroke="${LD}" stroke-width="2"`) + l('M22 18 q0 -12 6 -12 q6 0 6 12 M30 18 q0 -12 6 -12 q6 0 6 12', LD, 2)),
    'glass bottle': s(p('M26 4 h12 v12 c8 4 10 10 10 16 v24 a4 4 0 0 1 -4 4 h-24 a4 4 0 0 1 -4 -4 v-24 c0 -6 2 -12 10 -16z', '#A8D5C5', `stroke="${GD}" stroke-width="1.5"`) + r(24, 34, 16, 12, W, 2)),
    rubbish: s(r(14, 18, 36, 40, GR, 4) + r(10, 12, 44, 6, D, 2) + r(26, 6, 12, 6, D, 2) + l('M24 26 v24 M32 26 v24 M40 26 v24', LD, 2.5)),
    'plant trees': s(r(0, 50, 64, 14, '#C9A57A') + tree(32, 34, 1.3) + `<g transform="translate(10 40)">${r(0, 0, 4, 12, BR)}${p('M4 -2 l10 -6 l2 4 l-10 6z', GR)}</g>`),
    environment: s(c(32, 32, 26, B) + p('M20 14 c8 2 12 10 8 16 c-4 6 4 10 0 18 c-8 -4 -14 -14 -12 -24 c1 -4 2 -8 4 -10z', G) + p('M40 12 c8 4 14 12 12 22 c-6 0 -8 -6 -12 -4 c-4 2 -6 -6 0 -18z', G)),
    /* ---- người máy (lớp 6) ---- */
    'do the dishes': s(e(32, 44, 24, 12, BL) + e(32, 40, 18, 6, W, `stroke="${LD}" stroke-width="2"`) + e(26, 34, 12, 4, W, `stroke="${LD}" stroke-width="2"`) + c(44, 26, 4, BL) + c(50, 18, 3, BL)),
    'make the bed': s(r(6, 30, 52, 16, B, 3) + r(6, 20, 8, 34, BD, 3) + r(16, 24, 16, 8, W, 3) + l('M36 30 l6 -12 l6 12', G, 3)),
    'iron clothes': s(p('M10 44 C10 30 22 22 44 22 H54 V44Z', B) + r(10, 44, 44, 4, GR, 2) + p('M28 22 q4 -10 16 -10 v10', 'none', `stroke="${D}" stroke-width="3"`) + l('M20 54 q4 -4 8 0 t8 0', LD, 2)),
    'guard the house': s(p('M10 30 L32 10 L54 30z', R) + r(16, 28, 32, 30, '#F3EFE6') + r(28, 40, 8, 18, BR) + p('M48 34 l10 4 v10 c0 6 -10 10 -10 10 c0 0 -10 -4 -10 -10 v-10z', G) + l('M44 46 l3 3 l6 -6', W, 2)),
    /* ---- giới từ chỉ vị trí (lớp 6) ---- */
    in: s(r(14, 24, 36, 30, BRL, 2) + c(32, 38, 8, R) + r(14, 24, 36, 6, BR, 2) + p('M14 24 L14 54 L50 54 L50 24 L46 24 L46 50 L18 50 L18 24Z', BRL)),
    on: s(box + c(32, 20, 9, R)),
    under: s(r(10, 20, 44, 6, BRL, 2) + r(12, 26, 4, 30, BR) + r(48, 26, 4, 30, BR) + c(32, 48, 8, R)),
    'next to': s(r(8, 30, 26, 24, BRL, 2) + r(8, 30, 26, 6, BR, 2) + c(46, 46, 8, R)),
    behind: s(c(42, 30, 8, R) + box),
    'in front of': s(box + c(40, 50, 8, R)),
    between: s(r(4, 32, 18, 22, BRL, 2) + r(42, 32, 18, 22, BRL, 2) + c(32, 46, 8, R)),
    /* ---- tính từ (lớp 6) ---- */
    tall: s(person({ x: 22, y: 2, sc: 1.05, shirt: B }) + kid({ x: 46, y: 22, sc: .6, shirt: O })),
    'short hair': s(person({ shirt: G, hair: K })),
    'curly hair': s(person({ shirt: P, acc: [-8, -4, 0, 4, 8].map(x => c(x, -8 + Math.abs(x) / 2, 4.5, BR)).join('') + c(-10, -2, 4, BR) + c(10, -2, 4, BR) })),
    glasses: s(e(20, 32, 11, 9, 'none', `stroke="${D}" stroke-width="3"`) + e(44, 32, 11, 9, 'none', `stroke="${D}" stroke-width="3"`) + l('M31 30 q1 -3 2 0 M9 30 l-6 -4 M55 30 l6 -4', D, 3)),
    'round face': s(c(32, 32, 24, S) + c(24, 30, 3, D) + c(40, 30, 3, D) + l('M24 42 q8 6 16 0', D, 2.5) + c(18, 38, 4, P, 'opacity=".5"') + c(46, 38, 4, P, 'opacity=".5"')),
    kind: s(hand(-10, 30, 44) + p('M32 30 C22 22 20 16 24 12 C28 8 32 12 32 15 C32 12 36 8 40 12 C44 16 42 22 32 30Z', P)),
    clever: s(kid({ shirt: B, y: 8 }) + p('M32 2 a8 8 0 0 0 -5 14 c2 2 2 3 2 4 h6 c0 -1 0 -2 2 -4 a8 8 0 0 0 -5 -14z', Y)),
    funny: s(c(32, 32, 24, Y) + l('M18 26 q4 -5 8 0 M38 26 q4 -5 8 0', D, 3) + p('M18 36 Q32 54 46 36Z', D) + p('M24 42 Q32 50 40 42Z', R) + p('M8 28 q-2 6 2 8 q2 -4 -2 -8z M56 28 q2 6 -2 8 q-2 -4 2 -8z', BL)),
    creative: s(p('M32 6 a14 14 0 0 0 -8 25 c3 3 3 5 3 7 h10 c0 -2 0 -4 3 -7 a14 14 0 0 0 -8 -25z', Y) + r(26, 40, 12, 5, LD, 2) + r(28, 46, 8, 4, D, 2) + c(12, 18, 3, P) + c(52, 16, 3, B) + c(50, 44, 3, G) + c(12, 46, 3, O)),
    confident: s(person({ shirt: R }) + p('M32 36 l2 5 h5 l-4 3 l2 5 l-5 -3 l-5 3 l2 -5 l-4 -3 h5z', Y)),
    'hard-working': s(r(6, 44, 26, 6, B, 1) + r(8, 38, 24, 6, G, 1) + r(6, 32, 26, 6, O, 1) + kid({ x: 46, y: 6, shirt: Y }) + l('M38 40 q-4 -8 -8 -10', S, 4)),
    shy: s(c(32, 32, 24, S) + l('M22 30 q3 3 6 0 M36 30 q3 3 6 0', D, 2.2) + l('M28 42 q4 2 8 0', D, 2) + e(18, 38, 6, 4, P, 'opacity=".7"') + e(46, 38, 6, 4, P, 'opacity=".7"')),
    sporty: s(kid({ x: 24, shirt: G }) + c(50, 44, 9, W, `stroke="${D}" stroke-width="1.5"`) + p('M50 38 l5 4 l-2 6 h-6 l-2 -6z', K)),
    noisy: s(p('M8 24 h10 l14 -12 v40 l-14 -12 h-10z', D) + l('M40 22 q6 10 0 20 M46 16 q10 16 0 32 M52 10 q14 22 0 44', R, 3)),
    quiet: s(r(0, 0, 64, 64, '#1F2A44', 8) + p('M40 10 a20 20 0 1 0 14 34 a16 16 0 1 1 -14 -34z', Y) + t(18, 22, 'z', 10, W) + t(26, 14, 'z', 8, W)),
    crowded: s([[10, 20, B], [22, 16, O], [34, 20, G], [46, 16, P], [56, 22, Y], [16, 36, R], [28, 32, BD], [40, 36, GD], [52, 34, PD]].map(([x, y, col]) => c(x, y, 5, S) + r(x - 6, y + 5, 12, 64, col, 5)).join('')),
    peaceful: s(r(0, 0, 64, 64, '#EAF4FB') + c(46, 18, 8, Y) + p('M0 48 C16 34 32 40 44 34 C52 30 58 34 64 38 V64 H0Z', G) + p('M0 56 C20 48 40 54 64 48 V64 H0Z', GD) + l('M10 18 q3 -3 6 0 q3 -3 6 0', D, 1.6)),
    modern: s(r(10, 22, 16, 38, B, 1) + r(28, 6, 14, 54, BD, 1) + p('M44 60 V20 L56 12 V60Z', '#7DB5EA') + l('M30 14 h10 M30 22 h10 M30 30 h10 M30 38 h10 M30 46 h10', BL, 1.5)),
    historic: s(p('M8 20 L32 6 L56 20Z', '#D8B98A') + r(8, 20, 48, 4, '#C9A57A') + [12, 24, 36, 48].map(x => r(x, 24, 5, 28, '#E8DCC6')).join('') + r(6, 52, 52, 6, '#C9A57A')),
    'art gallery': s(r(4, 8, 56, 50, '#F3EFE6', 3) + r(10, 14, 20, 16, W, 1, `stroke="${YD}" stroke-width="3"`) + p('M12 28 l6 -8 l6 6 l4 -4 v6z', G) + r(36, 14, 18, 22, W, 1, `stroke="${YD}" stroke-width="3"`) + c(45, 25, 5, P) + kid({ x: 22, y: 30, sc: .55, shirt: B })),
    temple: s(p('M4 26 Q32 10 60 26 L52 26 Q32 18 12 26Z', R) + r(14, 26, 36, 6, '#C9A57A') + p('M10 36 Q32 24 54 36 L48 36 Q32 30 16 36Z', R) + r(18, 36, 28, 22, '#E8DCC6') + r(28, 44, 8, 14, BR) + r(30, 4, 4, 10, Y)),
    square: s(r(0, 0, 64, 64, '#E8E6DE') + e(32, 40, 20, 8, LD) + e(32, 38, 14, 5, BL) + r(30, 18, 4, 20, GR) + l('M32 18 q-8 -6 -12 6 M32 18 q8 -6 12 6', B, 2) + tree(8, 22, .6) + tree(56, 22, .6)),
    'railway station': s(r(2, 50, 60, 4, D) + [6, 16, 26, 36, 46, 56].map(x => r(x, 54, 4, 4, BR)).join('') + r(8, 22, 40, 26, R, 6) + r(12, 26, 10, 10, BL, 2) + r(26, 26, 10, 10, BL, 2) + p('M48 30 h6 a6 6 0 0 1 6 6 v12 h-12z', R) + c(16, 50, 4, D) + c(40, 50, 4, D)),
  };
  function K_open() { return p('M32 18 C24 12 12 12 6 14 V50 C12 48 24 48 32 54 Z', G) + p('M32 18 C40 12 52 12 58 14 V50 C52 48 40 48 32 54 Z', GD) + p('M32 21 C25 16 14 16 9 18 V47 C14 46 25 46 32 50Z', W) + p('M32 21 C39 16 50 16 55 18 V47 C50 46 39 46 32 50Z', '#EEF3F8'); }

  window.PIC_LIB = LIBR;
  window.PIC = (key, cls = 'qpic') => LIBR[key] ? `<span class="${cls}">${LIBR[key]}</span>` : '';
  window.V = (en, vi, key) => {
    const k = (key || en).toLowerCase(), pic = LIBR[k] ? `<span class="vpic">${LIBR[k]}</span>` : '';
    const real = (window.PRON || {})[en.toLowerCase()];
    const cam = `https://dictionary.cambridge.org/search/direct/?datasetsearch=english&q=${encodeURIComponent(en)}`;
    return `<div class="vcard"><button class="vbtn" data-say="${en}">${pic}<b>${en}</b>${vi ? `<span>${vi}</span>` : ''}</button>${real ? `<span class="uk" title="Giọng người thật (UK) · ${real.by} · ${real.lic}">UK</span>` : `<a class="cam" href="${cam}" target="_blank" rel="noopener">Cambridge</a>`}</div>`;
  };
  window.VGRID = list => `<div class="vgrid">${list.map(x => window.V(x[0], x[1], x[2])).join('')}</div>`;
})();
