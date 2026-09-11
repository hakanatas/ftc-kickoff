/**
 * Özgün SVG illüstrasyonlar.
 *
 * Dışarıdan görsel yok; hepsi burada, paletle aynı renklerde çiziliyor.
 * Her fonksiyon bir SVG dizesi döndürür; sayfada da slaytta da aynı
 * çizim kullanılır, ölçek viewBox'tan gelir.
 */

const C = {
  gold: '#e0952f',
  goldSoft: '#f7e3be',
  sage: '#7fb093',
  sageDim: '#5d8672',
  sky: '#8ab4d8',
  red: '#d9704a',
  paper: '#edf3ef',
  dim: 'rgba(237, 243, 239, 0.55)',
  faint: 'rgba(237, 243, 239, 0.2)',
  deep: '#0e2a1e',
};
const SANS = "font-family:'Instrument Sans',Helvetica,Arial,sans-serif";
const SERIF = "font-family:'Fraunces',Georgia,serif";

function svg(w, h, body, title) {
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg"><title>${title}</title>${body}</svg>`;
}

function hexPath(cx, cy, r) {
  const p = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    p.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return `M${p.join('L')}Z`;
}

/** Petek kümesi: BIOBUZZ sezonunun motifi. */
function hive(cx, cy, r, cells, lit = []) {
  const dx = r * Math.sqrt(3);
  const dy = r * 1.5;
  return cells
    .map(([col, row], i) => {
      const x = cx + col * dx + (row % 2 ? dx / 2 : 0);
      const y = cy + row * dy;
      const on = lit.includes(i);
      return `<path d="${hexPath(x, y, r * 0.9)}" fill="${on ? C.gold : 'none'}" fill-opacity="${on ? 0.16 : 0}" stroke="${on ? C.gold : C.sage}" stroke-opacity="${on ? 0.7 : 0.35}" stroke-width="1.5" />`;
    })
    .join('');
}

// ---------------------------------------------------------------------------
// Kapak: 18 inç kübün içinde bir FTC robotu, yan görünüş.
// ---------------------------------------------------------------------------
export function robot() {
  const g = C.gold;
  const p = C.paper;
  const s = C.sage;
  const holes = [];
  for (let x = 120; x <= 360; x += 24) holes.push(`<circle cx="${x}" cy="272" r="3.2" fill="none" stroke="${p}" stroke-opacity="0.45" stroke-width="1.2" />`);
  const wheel = (cx, cy) => `
    <circle cx="${cx}" cy="${cy}" r="27" fill="${C.deep}" stroke="${p}" stroke-width="2.2" />
    <circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="${g}" stroke-width="2" />
    ${[0, 45, 90, 135].map((a) => `<line x1="${cx}" y1="${cy - 27}" x2="${cx}" y2="${cy + 27}" stroke="${p}" stroke-opacity="0.35" stroke-width="1.4" transform="rotate(${a} ${cx} ${cy})" />`).join('')}
    <circle cx="${cx}" cy="${cy}" r="19" fill="none" stroke="${p}" stroke-opacity="0.3" stroke-width="1.2" stroke-dasharray="4 5" />`;

  const body = `
    ${hive(48, 52, 22, [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2], [2, 1]], [1, 3])}
    ${hive(438, 372, 18, [[0, 0], [1, 0], [0, 1], [1, 1], [2, 0]], [0, 4])}

    <!-- 18 inç boyut kübü -->
    <rect x="94" y="52" width="292" height="292" rx="10" fill="none" stroke="${g}" stroke-opacity="0.55" stroke-width="1.6" stroke-dasharray="7 7" />
    <text x="240" y="38" text-anchor="middle" fill="${g}" font-size="12.5" letter-spacing="2" style="${SANS}">18 IN · BOYUT KÜBÜ</text>
    <line x1="94" y1="26" x2="386" y2="26" stroke="${g}" stroke-opacity="0.5" stroke-width="1" />
    <line x1="94" y1="21" x2="94" y2="31" stroke="${g}" stroke-opacity="0.5" stroke-width="1" />
    <line x1="386" y1="21" x2="386" y2="31" stroke="${g}" stroke-opacity="0.5" stroke-width="1" />

    <!-- zemin -->
    <line x1="40" y1="344" x2="480" y2="344" stroke="${s}" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="2 6" />

    <!-- lineer kızak -->
    <rect x="300" y="96" width="20" height="164" rx="3" fill="${C.deep}" stroke="${p}" stroke-width="2" />
    <rect x="305" y="60" width="10" height="150" rx="2" fill="${g}" fill-opacity="0.9" />
    ${[110, 130, 150, 170, 190, 210, 230].map((y) => `<line x1="303" y1="${y}" x2="317" y2="${y}" stroke="${p}" stroke-opacity="0.35" stroke-width="1" />`).join('')}
    <!-- pençe -->
    <path d="M310 60 L296 44 M310 60 L324 44" stroke="${p}" stroke-width="2.4" stroke-linecap="round" fill="none" />
    <path d="M296 44 l-8 -6 M324 44 l8 -6" stroke="${p}" stroke-width="2.4" stroke-linecap="round" fill="none" />
    <circle cx="310" cy="60" r="4" fill="${g}" />

    <!-- şasi kanalı -->
    <rect x="104" y="256" width="276" height="34" rx="6" fill="${C.deep}" stroke="${p}" stroke-width="2.2" />
    ${holes.join('')}

    <!-- Control Hub -->
    <rect x="140" y="204" width="96" height="46" rx="7" fill="${C.deep}" stroke="${p}" stroke-width="2" />
    ${[152, 166, 180, 194, 208].map((x) => `<rect x="${x}" y="208" width="9" height="6" rx="1" fill="${s}" fill-opacity="0.7" />`).join('')}
    <text x="188" y="238" text-anchor="middle" fill="${p}" font-size="11" letter-spacing="2" style="${SANS}">CONTROL HUB</text>
    <circle cx="226" cy="236" r="3" fill="${g}" />

    <!-- batarya -->
    <rect x="248" y="212" width="42" height="38" rx="5" fill="${C.deep}" stroke="${p}" stroke-width="2" />
    <rect x="262" y="206" width="14" height="6" rx="1.5" fill="${p}" />
    <text x="269" y="236" text-anchor="middle" fill="${g}" font-size="11" font-weight="600" style="${SANS}">12V</text>
    <path d="M236 228 C240 228 242 226 248 226" stroke="${g}" stroke-width="2" fill="none" />

    <!-- alıcı (intake) -->
    <path d="M104 262 L70 300" stroke="${p}" stroke-width="2.4" stroke-linecap="round" />
    <path d="M104 286 L84 306" stroke="${p}" stroke-width="2.4" stroke-linecap="round" />
    ${[[70, 300], [84, 306]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" fill="${g}" fill-opacity="0.85" /><circle cx="${x}" cy="${y}" r="3" fill="${C.deep}" />`).join('')}

    <!-- tekerler -->
    ${wheel(158, 316)}
    ${wheel(330, 316)}

    <!-- kamera -->
    <rect x="112" y="226" width="20" height="16" rx="3" fill="${C.deep}" stroke="${C.sky}" stroke-width="2" />
    <circle cx="122" cy="234" r="4" fill="${C.sky}" />
    <path d="M110 234 l-22 -10 M110 234 l-22 10" stroke="${C.sky}" stroke-opacity="0.5" stroke-width="1" stroke-dasharray="3 3" />
  `;
  return svg(520, 400, body, 'Bir FTC robotunun çizimi: 18 inç boyut kübü içinde şasi, lineer kızak, Control Hub, batarya ve kamera');
}

// ---------------------------------------------------------------------------
// Zaman çizelgesi: 12 Eylül kickoff'tan aralık ilk haftasındaki turnuvaya.
// zones=true ise sipariş pencerelerini boyar; değilse dönüm noktalarını.
// ---------------------------------------------------------------------------
export function timeline({ zones = false } = {}) {
  const W = 960;
  const x0 = 70;
  const x1 = 890;
  const wk = (w) => x0 + ((x1 - x0) * w) / 12;
  const y = 104;
  let body = '';

  // 12 hafta ayracı
  body += `<path d="M${x0} 30 v-8 h${x1 - x0} v8" fill="none" stroke="${C.gold}" stroke-opacity="0.55" stroke-width="1.2" />
    <text x="${(x0 + x1) / 2}" y="16" text-anchor="middle" fill="${C.gold}" font-size="13" letter-spacing="2.2" style="${SANS}">12 HAFTA · 84 GÜN</text>`;

  if (zones) {
    const Z = [
      [0, 4, 'Her ikisi de açık', C.sage, 'Yurt dışı sipariş için doğru zaman'],
      [4, 8, 'Yurt dışı riskli', C.sky, 'Kritik parçayı yurt içinden alın'],
      [8, 10, 'Sadece yurt içi', C.gold, 'Gümrük yetişmez'],
      [10, 12, 'Sadece stok', C.red, 'Eldekiyle çözün'],
    ];
    for (const [a, b, t, col, sub] of Z) {
      const xa = wk(a);
      const xb = wk(b);
      body += `<rect x="${xa + 1}" y="${y - 11}" width="${xb - xa - 2}" height="22" rx="6" fill="${col}" fill-opacity="0.28" stroke="${col}" stroke-opacity="0.7" stroke-width="1.2" />
        <text x="${(xa + xb) / 2}" y="${y + 40}" text-anchor="middle" fill="${col}" font-size="15" font-weight="600" style="${SANS}">${t}</text>
        <text x="${(xa + xb) / 2}" y="${y + 60}" text-anchor="middle" fill="${C.dim}" font-size="12.5" style="${SANS}">${sub}</text>`;
    }
  } else {
    body += `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${C.paper}" stroke-opacity="0.3" stroke-width="2" />`;
    // bu hafta vurgusu
    body += `<rect x="${wk(0)}" y="${y - 9}" width="${wk(1) - wk(0)}" height="18" rx="5" fill="${C.gold}" fill-opacity="0.35" />`;
    const M = [
      [0, 'Kickoff', '12 Eylül · Manual yayını', 'up', C.gold],
      [0.5, 'Bu hafta', 'Kaynak haritası, beş görev', 'down', C.gold],
      [6, 'Sezon ortası', "Android Studio'ya geçiş", 'up', C.sage],
      [12, 'İlk turnuva', 'Aralık ilk haftası', 'up', C.gold],
    ];
    for (const [w, t, sub, dir, col] of M) {
      const x = wk(w);
      const up = dir === 'up';
      const anchor = w === 12 ? 'end' : w === 0 ? 'start' : 'middle';
      const tx = w === 12 ? x + 4 : w === 0 ? x - 4 : x;
      body += `<line x1="${x}" y1="${y}" x2="${x}" y2="${up ? y - 26 : y + 26}" stroke="${col}" stroke-opacity="0.7" stroke-width="1.4" />
        <circle cx="${x}" cy="${y}" r="6" fill="${C.deep}" stroke="${col}" stroke-width="2.4" />
        <text x="${tx}" y="${up ? y - 46 : y + 46}" text-anchor="${anchor}" fill="${C.paper}" font-size="18" font-weight="500" style="${SERIF}">${t}</text>
        <text x="${tx}" y="${up ? y - 30 : y + 64}" text-anchor="${anchor}" fill="${C.dim}" font-size="13" style="${SANS}">${sub}</text>`;
    }
  }

  // hafta çentikleri
  for (let w = 0; w <= 12; w++) {
    const x = wk(w);
    body += `<line x1="${x}" y1="${y + 14}" x2="${x}" y2="${y + 20}" stroke="${C.paper}" stroke-opacity="0.35" stroke-width="1.2" />`;
    if (zones || w % 2 === 0) {
      body += `<text x="${x}" y="${y + (zones ? -20 : 84)}" text-anchor="middle" fill="${C.sageDim}" font-size="11.5" letter-spacing="1" style="${SANS}">H${w}</text>`;
    }
  }
  if (zones) {
    body += `<g data-marker transform="translate(${wk(0)} 0)">
        <line x1="0" y1="${y - 12}" x2="0" y2="${y + 22}" stroke="${C.paper}" stroke-width="2" stroke-linecap="round" />
        <path d="M-6 ${y - 42} h12 l-6 8 z" fill="${C.paper}" />
        <text x="0" y="${y - 48}" text-anchor="middle" fill="${C.paper}" font-size="12" letter-spacing="1.6" style="${SANS}">ŞU AN</text>
      </g>`;
    body += `<text x="${x0}" y="${y + 92}" text-anchor="start" fill="${C.dim}" font-size="12" style="${SANS}">12 Eylül · kickoff</text>
      <text x="${x1}" y="${y + 92}" text-anchor="end" fill="${C.dim}" font-size="12" style="${SANS}">Aralık ilk haftası · turnuva</text>`;
  }
  return svg(W, 200, body, zones ? 'Sipariş pencereleri: ilk dört hafta yurt dışı açık, sonra yurt içi, son iki hafta yalnızca stok' : 'Sezon zaman çizelgesi: 12 Eylül kickoff, sezon ortasında Android Studio, aralık ilk haftasında ilk turnuva');
}

// ---------------------------------------------------------------------------
// Üç katman: iç içe halkalar. Çekirdek resmî, dışa doğru bağlayıcılık azalır.
// ---------------------------------------------------------------------------
export function rings() {
  const cx = 170;
  const cy = 170;
  const R = [
    [60, C.gold, '01', 'Resmî FIRST', 'Kural gücü var. Tartışmayı bitirir.'],
    [112, C.sage, '02', 'Topluluk dokümanı', 'Öğretir, ama bağlamaz.'],
    [160, C.sky, '03', 'Canlı topluluk', 'Yazılmamışı sorarsınız.'],
  ];
  let body = '';
  for (let i = R.length - 1; i >= 0; i--) {
    const [r, col] = R[i];
    body += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${col}" fill-opacity="${i === 0 ? 0.22 : 0.06}" stroke="${col}" stroke-opacity="${i === 0 ? 0.9 : 0.55}" stroke-width="${i === 0 ? 2 : 1.4}" ${i === 0 ? '' : 'stroke-dasharray="3 5"'} />`;
  }
  body += `<text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="${C.goldSoft}" font-size="13" letter-spacing="2.4" style="${SANS}">KURAL</text>
    <text x="${cx}" y="${cy + 14}" text-anchor="middle" fill="${C.gold}" font-size="19" font-weight="500" style="${SERIF}">bağlayıcı</text>`;
  const angles = [-38, -10, 20];
  R.forEach(([r, col, no, name, line], i) => {
    const a = (Math.PI / 180) * angles[i];
    const px = cx + r * Math.cos(a);
    const py = cy + r * Math.sin(a);
    const ly = 92 + i * 78;
    body += `<circle cx="${px}" cy="${py}" r="3.5" fill="${col}" />
      <path d="M${px} ${py} L${360} ${ly}" fill="none" stroke="${col}" stroke-opacity="0.6" stroke-width="1.2" />
      <text x="372" y="${ly - 8}" fill="${col}" font-size="12" letter-spacing="2" style="${SANS}">${no}</text>
      <text x="372" y="${ly + 12}" fill="${C.paper}" font-size="20" font-weight="500" style="${SERIF}">${name}</text>
      <text x="372" y="${ly + 32}" fill="${C.dim}" font-size="13" style="${SANS}">${line}</text>`;
  });
  return svg(600, 340, body, 'Üç katman iç içe halkalar: çekirdekte resmî FIRST, sonra topluluk dokümanı, en dışta canlı topluluk');
}

// ---------------------------------------------------------------------------
// Dişli çifti: 12 diş 24 dişi sürüyor. Oran 2:1, tork iki kat, hız yarı.
// ---------------------------------------------------------------------------
function gearPath(cx, cy, r, n, add, rot = 0) {
  const ri = r - add * 0.85;
  const ro = r + add;
  const s = (Math.PI * 2) / n;
  const pt = (rad, t) => `${(cx + rad * Math.cos(t + rot)).toFixed(1)},${(cy + rad * Math.sin(t + rot)).toFixed(1)}`;
  const seg = [];
  for (let i = 0; i < n; i++) {
    const t = i * s;
    seg.push(pt(ri, t), pt(ri, t + 0.25 * s), pt(ro, t + 0.35 * s), pt(ro, t + 0.65 * s), pt(ri, t + 0.75 * s));
  }
  return `M${seg.join('L')}Z`;
}

export function gears() {
  const a = { cx: 130, cy: 150, r: 48, n: 12 };
  const b = { cx: 130 + 48 + 96, cy: 150, r: 96, n: 24 };
  const gear = (g, col, rot) => `
    <path d="${gearPath(g.cx, g.cy, g.r, g.n, 9, rot)}" fill="${col}" fill-opacity="0.14" stroke="${col}" stroke-width="2" stroke-linejoin="round" />
    <circle cx="${g.cx}" cy="${g.cy}" r="${g.r * 0.62}" fill="none" stroke="${col}" stroke-opacity="0.5" stroke-width="1.2" />
    ${[0, 60, 120].map((d) => `<line x1="${g.cx - g.r * 0.58}" y1="${g.cy}" x2="${g.cx + g.r * 0.58}" y2="${g.cy}" stroke="${col}" stroke-opacity="0.35" stroke-width="1.4" transform="rotate(${d} ${g.cx} ${g.cy})" />`).join('')}
    <circle cx="${g.cx}" cy="${g.cy}" r="${g.r * 0.16}" fill="${C.deep}" stroke="${col}" stroke-width="2" />
    <circle cx="${g.cx}" cy="${g.cy}" r="${g.r + 1}" fill="none" stroke="${col}" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="2 5" />`;
  const arrow = (g, col, cw) => {
    const r = g.r * 0.36;
    const sweep = cw ? 1 : 0;
    const x0 = g.cx + r * Math.cos(-2.4);
    const y0 = g.cy + r * Math.sin(-2.4);
    const x1 = g.cx + r * Math.cos(-0.7);
    const y1 = g.cy + r * Math.sin(-0.7);
    return `<path d="M${cw ? x0 : x1} ${cw ? y0 : y1} A${r} ${r} 0 0 ${sweep} ${cw ? x1 : x0} ${cw ? y1 : y0}" fill="none" stroke="${col}" stroke-width="2" stroke-linecap="round" marker-end="url(#gear-arrow)" />`;
  };
  const body = `
    <defs><marker id="gear-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${C.paper}" /></marker></defs>
    ${gear(b, C.sage, 0)}
    ${gear(a, C.gold, -Math.PI / a.n)}
    ${arrow(a, C.paper, true)}
    ${arrow(b, C.paper, false)}
    <text x="${a.cx}" y="${a.cy + 78}" text-anchor="middle" fill="${C.gold}" font-size="13" letter-spacing="1.6" style="${SANS}">12 DİŞ · MOTOR</text>
    <text x="${b.cx}" y="${b.cy + 126}" text-anchor="middle" fill="${C.sage}" font-size="13" letter-spacing="1.6" style="${SANS}">24 DİŞ · ÇIKIŞ</text>
    <line x1="410" y1="60" x2="410" y2="240" stroke="${C.paper}" stroke-opacity="0.15" stroke-width="1" />
    <text x="440" y="86" fill="${C.paper}" font-size="40" font-weight="500" style="${SERIF}">2:1</text>
    <text x="440" y="112" fill="${C.dim}" font-size="13" letter-spacing="1.6" style="${SANS}">DİŞLİ ORANI</text>
    <text x="440" y="158" fill="${C.gold}" font-size="22" font-weight="500" style="${SERIF}">Tork × 2</text>
    <text x="440" y="192" fill="${C.sage}" font-size="22" font-weight="500" style="${SERIF}">Hız ÷ 2</text>
    <text x="440" y="228" fill="${C.dim}" font-size="13.5" style="${SANS}">Aynı motor, farklı iş. Önce hesap.</text>
  `;
  return svg(640, 300, body, 'Dişli çifti çizimi: 12 dişli motor dişlisi 24 dişli çıkış dişlisini sürüyor, oran 2:1, tork iki kat, hız yarı');
}

/** Sipariş çizelgesinde kalan haftayı x konumuna çevirir (viewBox birimi). */
export const windowX = (remaining) => 70 + ((890 - 70) * (12 - Math.min(12, Math.max(0, remaining)))) / 12;

// ---------------------------------------------------------------------------
// FTC Docs: ekranında doküman sitesi açık laptop, USB ile bağlı Control Hub
// ve webcam. "Teknik tarafın resmî evi" slaydı için.
// ---------------------------------------------------------------------------
export function docs() {
  const W = 960;
  const H = 300;
  let b = '';
  // zemin çizgisi
  b += `<line x1="40" y1="262" x2="${W - 40}" y2="262" stroke="${C.paper}" stroke-opacity="0.22" stroke-width="1.5" />`;

  // --- laptop ---
  const sx = 110;
  const sy = 34;
  const sw = 430;
  const sh = 212;
  b += `<rect x="${sx - 8}" y="${sy - 8}" width="${sw + 16}" height="${sh + 16}" rx="12" fill="${C.deep}" stroke="${C.sage}" stroke-width="1.8" />
    <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" rx="6" fill="#0a1c14" />
    <path d="M${sx - 60} 262 L${sx - 30} ${sy + sh + 8} H${sx + sw + 38} L${sx + sw + 68} 262 Z" fill="${C.deep}" stroke="${C.sage}" stroke-width="1.8" />
    <rect x="${sx + sw / 2 - 40}" y="${sy + sh + 12}" width="80" height="6" rx="3" fill="${C.sage}" fill-opacity="0.5" />`;
  // tarayıcı çubuğu
  b += `<rect x="${sx}" y="${sy}" width="${sw}" height="26" rx="6" fill="${C.paper}" fill-opacity="0.07" />
    <circle cx="${sx + 14}" cy="${sy + 13}" r="3.5" fill="${C.red}" fill-opacity="0.8" /><circle cx="${sx + 26}" cy="${sy + 13}" r="3.5" fill="${C.gold}" fill-opacity="0.8" /><circle cx="${sx + 38}" cy="${sy + 13}" r="3.5" fill="${C.sage}" fill-opacity="0.8" />
    <rect x="${sx + 54}" y="${sy + 6}" width="${sw - 68}" height="14" rx="7" fill="${C.paper}" fill-opacity="0.08" />
    <text x="${sx + 64}" y="${sy + 16.5}" fill="${C.dim}" font-size="10.5" style="${SANS}">ftc-docs.firstinspires.org</text>`;
  // kenar çubuğu: bölümler
  const items = ['Getting Started', 'Control System', 'SDK', 'Vision · AprilTag', 'Wiring Guide', 'ESD', 'CAD Resources'];
  const lx = sx + 12;
  let ly = sy + 44;
  b += `<line x1="${sx + 138}" y1="${sy + 30}" x2="${sx + 138}" y2="${sy + sh - 6}" stroke="${C.paper}" stroke-opacity="0.12" />`;
  for (const [i, t] of items.entries()) {
    const hot = i === 1;
    if (hot) b += `<rect x="${lx - 6}" y="${ly - 12}" width="128" height="20" rx="5" fill="${C.gold}" fill-opacity="0.16" />`;
    b += `<circle cx="${lx + 3}" cy="${ly - 2.5}" r="2.2" fill="${hot ? C.gold : C.sage}" />
      <text x="${lx + 12}" y="${ly + 1.5}" fill="${hot ? C.goldSoft : C.paper}" fill-opacity="${hot ? 1 : 0.75}" font-size="11" font-weight="${hot ? 600 : 400}" style="${SANS}">${t}</text>`;
    ly += 24;
  }
  // ana alan: başlık + satırlar + küçük şema
  const mx = sx + 156;
  b += `<text x="${mx}" y="${sy + 56}" fill="${C.paper}" font-size="15" font-weight="500" style="${SERIF}">Control System</text>
    <line x1="${mx}" y1="${sy + 64}" x2="${mx + 60}" y2="${sy + 64}" stroke="${C.gold}" stroke-width="1.5" />`;
  const lines = [220, 250, 180, 236, 150];
  lines.forEach((w, i) => {
    b += `<rect x="${mx}" y="${sy + 78 + i * 13}" width="${w}" height="5" rx="2.5" fill="${C.paper}" fill-opacity="0.18" />`;
  });
  // mini bağlantı şeması
  b += `<rect x="${mx}" y="${sy + 150}" width="54" height="34" rx="4" fill="${C.gold}" fill-opacity="0.18" stroke="${C.gold}" stroke-width="1" />
    <rect x="${mx + 110}" y="${sy + 150}" width="54" height="34" rx="4" fill="${C.sage}" fill-opacity="0.16" stroke="${C.sage}" stroke-width="1" />
    <line x1="${mx + 54}" y1="${sy + 167}" x2="${mx + 110}" y2="${sy + 167}" stroke="${C.paper}" stroke-opacity="0.5" stroke-width="1.5" />
    <line x1="${mx + 27}" y1="${sy + 184}" x2="${mx + 27}" y2="${sy + 200}" stroke="${C.paper}" stroke-opacity="0.4" stroke-width="1.5" />
    <circle cx="${mx + 27}" cy="${sy + 205}" r="5" fill="none" stroke="${C.paper}" stroke-opacity="0.5" />
    <text x="${mx + 190}" y="${sy + 172}" fill="${C.dim}" font-size="10" style="${SANS}">wiring diagram</text>`;

  // --- USB kablosu ---
  b += `<path d="M${sx + sw + 8} 150 C 640 150, 620 200, 690 200" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="6 5" />
    <text x="600" y="140" text-anchor="middle" fill="${C.gold}" font-size="10.5" letter-spacing="1.6" style="${SANS}">USB · WI-FI</text>`;

  // --- Control Hub ---
  const hx = 690;
  const hy = 150;
  const hw = 200;
  const hh = 100;
  b += `<rect x="${hx}" y="${hy}" width="${hw}" height="${hh}" rx="10" fill="${C.deep}" stroke="${C.sage}" stroke-width="1.8" />
    <path d="M${hx + 118} ${hy + 1} h60 l-34 ${hh - 2} h-60 z" fill="${C.gold}" fill-opacity="0.22" />
    <text x="${hx + 16}" y="${hy + 40}" fill="${C.paper}" font-size="13" letter-spacing="1.6" style="${SANS}">CONTROL</text>
    <text x="${hx + 16}" y="${hy + 58}" fill="${C.paper}" font-size="13" letter-spacing="1.6" style="${SANS}">HUB</text>`;
  for (let i = 0; i < 6; i++) b += `<rect x="${hx + 14 + i * 30}" y="${hy + hh - 16}" width="18" height="8" rx="2" fill="${C.sage}" fill-opacity="0.55" />`;
  for (let i = 0; i < 4; i++) b += `<rect x="${hx + hw - 10}" y="${hy + 14 + i * 20}" width="8" height="12" rx="2" fill="${C.sage}" fill-opacity="0.55" />`;
  b += `<line x1="${hx + hw / 2}" y1="${hy + hh}" x2="${hx + hw / 2}" y2="262" stroke="${C.paper}" stroke-opacity="0.25" />`;

  // --- webcam ---
  b += `<path d="M${hx + 40} ${hy} C ${hx + 40} 100, ${hx + 90} 100, ${hx + 90} 78" fill="none" stroke="${C.sage}" stroke-width="1.6" />
    <rect x="${hx + 62}" y="40" width="56" height="40" rx="10" fill="${C.deep}" stroke="${C.sage}" stroke-width="1.6" />
    <circle cx="${hx + 90}" cy="60" r="11" fill="none" stroke="${C.sage}" stroke-width="1.6" /><circle cx="${hx + 90}" cy="60" r="4.5" fill="${C.sky}" />
    <text x="${hx + 130}" y="64" fill="${C.dim}" font-size="10.5" style="${SANS}">webcam</text>`;

  // alt yazılar
  b += `<text x="${sx + sw / 2}" y="288" text-anchor="middle" fill="${C.dim}" font-size="12" letter-spacing="1.6" style="${SANS}">RESMÎ DOKÜMAN · TEK ADRES</text>
    <text x="${hx + hw / 2}" y="288" text-anchor="middle" fill="${C.dim}" font-size="12" letter-spacing="1.6" style="${SANS}">SAHADAKİ DONANIM</text>`;
  return svg(W, H, b, 'FTC Docs çizimi: ekranında doküman sitesinin bölüm listesi açık bir laptop, USB ile bağlı Control Hub ve webcam');
}

export const ART = { robot, timeline, rings, gears, docs, windows: () => timeline({ zones: true }) };
