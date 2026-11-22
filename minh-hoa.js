/* Hình minh hoạ phẳng (SVG 120×120), cùng phong cách với bộ slide mẫu. */
(function () {
  const D = '#2B3A33', G = '#4E9A6B', GD = '#3A7A52', O = '#EE7D45', OD = '#C9612F', Y = '#F6BE4A', YD = '#DC9E22',
    B = '#4A93D6', BD = '#3576B4', P = '#EA7486', PD = '#C85567', W = '#FFFFFF', L = '#DDE3E0', LD = '#AEB8B3', S = '#F5C49A';
  const svg = (body, cls = '') => `<svg class="ill ${cls}" viewBox="0 0 120 120" aria-hidden="true">${body}</svg>`;

  const I = {
    toan: () => svg(`<rect x="14" y="20" width="64" height="84" rx="12" fill="${B}"/><rect x="22" y="28" width="48" height="20" rx="6" fill="${W}"/>
      <text x="64" y="44" text-anchor="end" font-family="League Spartan,Arial" font-weight="800" font-size="15" fill="${D}">128</text>
      ${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${22 + c * 17}" y="${56 + r * 15}" width="13" height="11" rx="3" fill="${r === 2 && c === 2 ? Y : '#BFD9F2'}"/>`).join('')).join('')}
      <g transform="rotate(18 92 62)"><rect x="84" y="14" width="18" height="90" rx="4" fill="${Y}"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="84" y="${22 + i * 10}" width="${i % 2 ? 6 : 10}" height="2.4" fill="${YD}"/>`).join('')}</g>`),
    toan6: () => svg(`<circle cx="50" cy="60" r="38" fill="${B}"/><path d="M50 60 L50 22 A38 38 0 0 1 86 48 Z" fill="${Y}"/>
      <text x="50" y="74" text-anchor="middle" font-family="League Spartan,Arial" font-weight="800" font-size="34" fill="${W}">x²</text>
      <rect x="80" y="70" width="30" height="30" rx="8" fill="${P}"/><text x="95" y="92" text-anchor="middle" font-family="League Spartan,Arial" font-weight="800" font-size="20" fill="${W}">÷</text>`),
    tiengviet: () => svg(`<path d="M60 30 C44 22 24 22 12 26 V96 C24 92 44 92 60 100Z" fill="${O}"/><path d="M60 30 C76 22 96 22 108 26 V96 C96 92 76 92 60 100Z" fill="${OD}"/>
      <path d="M60 34 C46 27 30 27 18 30 V90 C30 87 46 87 60 94Z" fill="${W}"/><path d="M60 34 C74 27 90 27 102 30 V90 C90 87 74 87 60 94Z" fill="#FBEFE6"/>
      <text x="38" y="70" text-anchor="middle" font-family="League Spartan,Arial" font-weight="800" font-size="24" fill="${D}">Aa</text>
      ${[0, 1, 2, 3].map(i => `<rect x="68" y="${46 + i * 10}" width="${26 - (i % 2) * 8}" height="4" rx="2" fill="${LD}"/>`).join('')}`),
    nguvan: () => svg(`<rect x="22" y="18" width="62" height="86" rx="10" fill="${P}"/><rect x="30" y="26" width="46" height="70" rx="6" fill="${W}"/>
      ${[0, 1, 2, 3, 4].map(i => `<rect x="36" y="${36 + i * 11}" width="${34 - (i % 3) * 7}" height="4" rx="2" fill="${LD}"/>`).join('')}
      <g transform="rotate(30 90 60)"><path d="M86 16 C104 26 104 60 92 88 L86 88 C82 60 78 34 86 16Z" fill="${Y}"/><rect x="87" y="86" width="4" height="22" rx="2" fill="${D}"/></g>`),
    tienganh: () => svg(`<path d="M14 24 h62 a10 10 0 0 1 10 10 v30 a10 10 0 0 1 -10 10 h-34 l-14 12 v-12 h-14 a10 10 0 0 1 -10 -10 v-30 a10 10 0 0 1 10 -10z" fill="${B}"/>
      <text x="45" y="58" text-anchor="middle" font-family="League Spartan,Arial" font-weight="800" font-size="26" fill="${W}">Hello</text>
      <path d="M58 64 h46 a8 8 0 0 1 8 8 v20 a8 8 0 0 1 -8 8 h-6 v10 l-12 -10 h-28 a8 8 0 0 1 -8 -8 v-20 a8 8 0 0 1 8 -8z" fill="${Y}"/>
      <text x="81" y="92" text-anchor="middle" font-family="League Spartan,Arial" font-weight="800" font-size="20" fill="${D}">Hi!</text>`),
    daoduc: () => svg(`<path d="M60 102 C20 76 12 54 18 38 C26 18 50 18 60 36 C70 18 94 18 102 38 C108 54 100 76 60 102Z" fill="${P}"/>
      <path d="M40 34 C32 36 28 44 30 52" stroke="${W}" stroke-width="6" stroke-linecap="round" fill="none" opacity=".7"/>
      <circle cx="60" cy="62" r="16" fill="${Y}"/><path d="M52 62 l6 6 l11 -12" stroke="${D}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`),
    gdcd: () => svg(`<rect x="57" y="18" width="6" height="74" rx="3" fill="${D}"/><rect x="34" y="96" width="52" height="10" rx="5" fill="${D}"/>
      <rect x="20" y="30" width="80" height="6" rx="3" fill="${D}"/>
      <path d="M16 70 h30 l-15 -32z" fill="none"/><path d="M14 66 a17 8 0 0 0 34 0z" fill="${G}"/><path d="M72 66 a17 8 0 0 0 34 0z" fill="${B}"/>
      <path d="M31 36 L18 66 M31 36 L44 66 M89 36 L76 66 M89 36 L102 66" stroke="${LD}" stroke-width="2"/>
      <circle cx="60" cy="20" r="8" fill="${Y}"/>`),
    tnxh: () => svg(`<rect x="54" y="56" width="10" height="48" rx="4" fill="#8A6A4A"/>
      <circle cx="60" cy="44" r="30" fill="${G}"/><circle cx="40" cy="58" r="18" fill="${GD}"/><circle cx="82" cy="56" r="18" fill="${GD}"/>
      <circle cx="50" cy="34" r="5" fill="${P}"/><circle cx="74" cy="40" r="5" fill="${P}"/><circle cx="62" cy="58" r="5" fill="${P}"/>
      <circle cx="100" cy="20" r="11" fill="${Y}"/><rect x="18" y="100" width="84" height="8" rx="4" fill="#C7E3CF"/>`),
    khtn: () => svg(`<path d="M46 14 h28 v8 h-4 v24 l26 46 a10 10 0 0 1 -9 15 h-54 a10 10 0 0 1 -9 -15 l26 -46 v-24 h-4z" fill="${L}"/>
      <path d="M34 72 h52 l12 22 a8 8 0 0 1 -7 12 h-62 a8 8 0 0 1 -7 -12z" fill="${G}"/>
      <circle cx="52" cy="88" r="5" fill="${W}" opacity=".8"/><circle cx="68" cy="82" r="3.5" fill="${W}" opacity=".8"/><circle cx="62" cy="96" r="3" fill="${W}" opacity=".8"/>
      <circle cx="92" cy="30" r="8" fill="${Y}"/><circle cx="100" cy="48" r="5" fill="${P}"/>`),
    lsdl: () => svg(`<circle cx="56" cy="60" r="40" fill="${B}"/>
      <path d="M36 36 c10 -4 18 2 16 10 c-2 8 8 10 6 18 c-2 6 -12 4 -14 12 c-8 -4 -16 -16 -14 -26 c1 -6 3 -10 6 -14z" fill="${G}"/>
      <path d="M70 30 c8 2 16 10 18 20 c-6 2 -10 -2 -14 2 c-4 4 -10 0 -8 -8 c1 -6 -2 -10 4 -14z" fill="${G}"/>
      <path d="M68 74 c6 -2 14 2 14 8 c-2 6 -10 10 -16 6 c-3 -4 -2 -12 2 -14z" fill="${G}"/>
      <rect x="92" y="76" width="22" height="30" rx="4" fill="${Y}"/><path d="M96 84 h14 M96 91 h14 M96 98 h9" stroke="${YD}" stroke-width="3" stroke-linecap="round"/>`),
    tin: () => svg(`<rect x="18" y="24" width="84" height="56" rx="8" fill="${D}"/><rect x="24" y="30" width="72" height="44" rx="4" fill="${B}"/>
      <path d="M44 44 l-8 8 l8 8 M76 44 l8 8 l-8 8 M64 40 l-8 24" stroke="${W}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 84 h100 l-8 12 h-84z" fill="${LD}"/><rect x="50" y="86" width="20" height="4" rx="2" fill="${D}"/>`),
    tincn: () => svg(`<rect x="14" y="20" width="70" height="48" rx="8" fill="${D}"/><rect x="20" y="26" width="58" height="36" rx="4" fill="${B}"/>
      <circle cx="40" cy="44" r="7" fill="${Y}"/><path d="M50 56 l10 -14 l12 14z" fill="${G}"/><rect x="40" y="68" width="18" height="10" fill="${LD}"/><rect x="30" y="76" width="38" height="6" rx="3" fill="${LD}"/>
      <rect x="74" y="64" width="34" height="44" rx="8" fill="${Y}"/><circle cx="91" cy="82" r="10" fill="${W}"/><circle cx="91" cy="82" r="4" fill="${D}"/>
      <rect x="86" y="96" width="10" height="5" rx="2.5" fill="${YD}"/>`),
    congnghe: () => svg(`<path d="M18 56 L60 20 L102 56z" fill="${O}"/><rect x="26" y="54" width="68" height="50" rx="4" fill="${L}"/>
      <rect x="50" y="76" width="20" height="28" rx="3" fill="${OD}"/><rect x="34" y="64" width="12" height="12" rx="2" fill="${B}"/><rect x="74" y="64" width="12" height="12" rx="2" fill="${B}"/>
      <circle cx="96" cy="92" r="14" fill="${Y}"/><circle cx="96" cy="92" r="5" fill="${D}"/>
      ${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<rect x="94" y="74" width="4" height="6" rx="1" fill="${Y}" transform="rotate(${a} 96 92)"/>`).join('')}`),
    kidTam: () => svg(`<circle cx="60" cy="60" r="56" fill="${O}"/>
      <path d="M26 62 C24 30 44 18 60 18 C78 18 96 30 94 62 C94 78 90 88 86 92 L34 92 C30 88 26 78 26 62z" fill="${D}"/>
      <circle cx="60" cy="62" r="28" fill="${S}"/><path d="M32 54 C38 34 56 30 74 34 C84 38 90 46 88 56 C78 48 64 44 50 46 C42 48 36 52 32 54z" fill="${D}"/>
      <circle cx="50" cy="64" r="3.4" fill="${D}"/><circle cx="70" cy="64" r="3.4" fill="${D}"/><path d="M52 74 q8 7 16 0" stroke="${D}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="72" r="4" fill="${P}" opacity=".6"/><circle cx="76" cy="72" r="4" fill="${P}" opacity=".6"/>
      <circle cx="88" cy="40" r="8" fill="${Y}"/><circle cx="84" cy="36" r="4" fill="${P}"/>
      <path d="M30 120 C30 98 44 90 60 90 C76 90 90 98 90 120z" fill="${W}"/><path d="M52 90 l8 10 l8 -10z" fill="${P}"/>`),
    kidDat: () => svg(`<circle cx="60" cy="60" r="56" fill="${B}"/>
      <circle cx="60" cy="60" r="28" fill="${S}"/><path d="M30 56 C30 34 46 26 62 26 C80 26 92 36 90 56 C84 46 76 42 62 42 C48 42 38 48 30 56z" fill="${D}"/>
      <rect x="42" y="56" width="16" height="12" rx="5" fill="none" stroke="${D}" stroke-width="3"/><rect x="62" y="56" width="16" height="12" rx="5" fill="none" stroke="${D}" stroke-width="3"/><path d="M58 61 h4" stroke="${D}" stroke-width="3"/>
      <circle cx="50" cy="62" r="2.6" fill="${D}"/><circle cx="70" cy="62" r="2.6" fill="${D}"/><path d="M52 76 q8 6 16 0" stroke="${D}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M30 120 C30 98 44 90 60 90 C76 90 90 98 90 120z" fill="${W}"/><path d="M54 90 h12 l-2 16 h-8z" fill="${PD}"/>`),
    star: (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.2 6.1 20.5l1.3-6.6L2.5 9.4l6.6-.8z" fill="${on ? Y : 'none'}" stroke="${on ? YD : LD}" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    heroBooks: () => svg(`<rect x="14" y="70" width="92" height="16" rx="5" fill="${B}"/><rect x="20" y="54" width="80" height="16" rx="5" fill="${G}"/><rect x="10" y="86" width="100" height="18" rx="5" fill="${O}"/>
      <rect x="26" y="74" width="40" height="4" rx="2" fill="${W}" opacity=".7"/><rect x="30" y="59" width="30" height="4" rx="2" fill="${W}" opacity=".7"/><rect x="20" y="91" width="50" height="4" rx="2" fill="${W}" opacity=".7"/>
      <path d="M60 14 l30 12 l-30 12 l-30 -12z" fill="${D}"/><path d="M44 32 v12 c8 6 24 6 32 0 v-12 l-16 6z" fill="${D}"/><path d="M90 26 v16" stroke="${Y}" stroke-width="3"/><circle cx="90" cy="44" r="4" fill="${Y}"/>`),
    heroPencil: () => svg(`<g transform="rotate(35 60 60)"><rect x="50" y="10" width="20" height="78" rx="4" fill="${Y}"/><rect x="60" y="10" width="10" height="78" fill="${YD}"/><rect x="50" y="4" width="20" height="14" rx="4" fill="${P}"/><path d="M50 88 h20 l-10 20z" fill="${S}"/><path d="M56.5 100 h7 l-3.5 8z" fill="${D}"/></g>`),
    heroBulb: () => svg(`<path d="M60 8 a38 38 0 0 0 -22 69 c6 5 8 10 8 16 h28 c0-6 2-11 8-16 a38 38 0 0 0 -22 -69z" fill="${Y}"/><path d="M48 50 q12 14 24 0" stroke="${YD}" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="44" y="94" width="32" height="9" rx="4" fill="${LD}"/><rect x="47" y="104" width="26" height="9" rx="4" fill="${D}"/>`),
    sound: (on) => on
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/></svg>`,
  };
  window.ILL = I;
})();
