import { POLLEN } from './data.js';

/**
 * Pollen sahası: küçük bir fizik oyuncağı.
 *
 * Game Preview'un dediği şey ekranda olsun: Pollen köpük zeminde yuvarlanır,
 * kenara ve köşeye gider. İmleç robottur; topları iter. "Salla" sahayı
 * karıştırır, "Sıra" ve "Yığın" ön izlemedeki iki düzeni kurar.
 * Ölçekli değil: top gerçekte sahanın %2'si, burada görünür olsun diye büyük.
 */
export function pollenField({ reduced = false } = {}) {
  const root = document.createElement('div');
  root.className = 'pollen';
  root.innerHTML = `
    <div class="pollen__stage">
      <canvas class="pollen__canvas" aria-label="Pollen sahası: imleçle topları itin"></canvas>
      <div class="pollen__hint">İmleç robottur · topları itin</div>
    </div>
    <div class="pollen__side">
      <div class="pollen__stats">
        <div class="pstat"><b data-k="corner">0</b><span>köşede</span></div>
        <div class="pstat"><b data-k="edge">0</b><span>kenarda</span></div>
        <div class="pstat"><b data-k="open">0</b><span>açıkta</span></div>
      </div>
      <div class="pollen__btns">
        <button type="button" data-do="shake">Salla</button>
        <button type="button" data-do="line">Sıra</button>
        <button type="button" data-do="pile">Yığın</button>
      </div>
      <ul class="pollen__facts">
        <li><b>${POLLEN.diameterIn} in</b> çap, yaklaşık ${POLLEN.diameterCm} cm · sarı</li>
        <li><b>${POLLEN.weightG} g</b> (${POLLEN.weightLb} lb) · DECODE'un Artifact'ine yakın</li>
        <li><b>${POLLEN.vendors.length} üretici</b> StarterBot: ${POLLEN.vendors.join(', ')} · taban = şasi + intake</li>
        <li><b>${POLLEN.skillBuilders} Skill Builder</b> mini oyun: sürüş, intake, döngü, otonom</li>
      </ul>
    </div>`;

  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const N = 18;
  const balls = [];
  let W = 400;
  let H = 400;
  let R = 10;
  let dpr = 1;
  const robot = { x: -999, y: -999, px: -999, py: -999, w: 64, h: 64, on: false };
  let raf = 0;
  let alive = true;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const size = Math.max(220, Math.floor(Math.min(rect.width, rect.height || rect.width)));
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = H = size;
    R = Math.max(7, Math.round(size / 38));
    robot.w = robot.h = Math.round(size / 6);
    canvas.width = Math.round(size * dpr);
    canvas.height = Math.round(size * dpr);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    for (const b of balls) {
      b.x = Math.min(W - R, Math.max(R, b.x));
      b.y = Math.min(H - R, Math.max(R, b.y));
    }
  }

  const rnd = (a, b) => a + Math.random() * (b - a);

  function layout(mode) {
    balls.length = 0;
    for (let k = 0; k < N; k++) {
      let x;
      let y;
      if (mode === 'line') {
        x = W * 0.15 + ((W * 0.7) / (N - 1)) * k;
        y = H * 0.5;
      } else if (mode === 'pile') {
        const ring = k < 1 ? 0 : k < 7 ? 1 : 2;
        const idx = k < 1 ? 0 : k < 7 ? k - 1 : k - 7;
        const cnt = ring === 0 ? 1 : ring === 1 ? 6 : 11;
        const a = (idx / cnt) * Math.PI * 2;
        x = W * 0.5 + Math.cos(a) * ring * R * 2.05;
        y = H * 0.5 + Math.sin(a) * ring * R * 2.05;
      } else {
        x = rnd(R * 3, W - R * 3);
        y = rnd(R * 3, H - R * 3);
      }
      balls.push({ x, y, vx: 0, vy: 0 });
    }
  }

  function shake() {
    for (const b of balls) {
      const a = rnd(0, Math.PI * 2);
      const v = rnd(3, 9);
      b.vx += Math.cos(a) * v;
      b.vy += Math.sin(a) * v;
    }
  }

  function step() {
    const fr = 0.982;
    const rest = 0.38;
    for (const b of balls) {
      b.x += b.vx;
      b.y += b.vy;
      b.vx *= fr;
      b.vy *= fr;
      if (Math.abs(b.vx) < 0.02) b.vx = 0;
      if (Math.abs(b.vy) < 0.02) b.vy = 0;
      if (b.x < R) { b.x = R; b.vx = -b.vx * rest; }
      if (b.x > W - R) { b.x = W - R; b.vx = -b.vx * rest; }
      if (b.y < R) { b.y = R; b.vy = -b.vy * rest; }
      if (b.y > H - R) { b.y = H - R; b.vy = -b.vy * rest; }
    }
    // top-top: iç içe girmesinler, hız değiş tokuşu
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const a = balls[i];
        const c = balls[j];
        const dx = c.x - a.x;
        const dy = c.y - a.y;
        const d = Math.hypot(dx, dy) || 0.001;
        if (d < R * 2) {
          const nx = dx / d;
          const ny = dy / d;
          const push = (R * 2 - d) / 2;
          a.x -= nx * push; a.y -= ny * push;
          c.x += nx * push; c.y += ny * push;
          const rel = (a.vx - c.vx) * nx + (a.vy - c.vy) * ny;
          if (rel > 0) {
            a.vx -= rel * nx * 0.9; a.vy -= rel * ny * 0.9;
            c.vx += rel * nx * 0.9; c.vy += rel * ny * 0.9;
          }
        }
      }
    }
    // robot: dikdörtgen, topları dışarı iter ve hareketini aktarır
    if (robot.on) {
      const hw = robot.w / 2;
      const hh = robot.h / 2;
      const mvx = robot.x - robot.px;
      const mvy = robot.y - robot.py;
      for (const b of balls) {
        const cx = Math.max(robot.x - hw, Math.min(robot.x + hw, b.x));
        const cy = Math.max(robot.y - hh, Math.min(robot.y + hh, b.y));
        const dx = b.x - cx;
        const dy = b.y - cy;
        const d = Math.hypot(dx, dy);
        if (d < R) {
          let nx;
          let ny;
          if (d < 0.001) {
            const ox = b.x - robot.x;
            const oy = b.y - robot.y;
            if (Math.abs(ox) / hw > Math.abs(oy) / hh) { nx = Math.sign(ox) || 1; ny = 0; } else { nx = 0; ny = Math.sign(oy) || 1; }
            b.x = nx ? robot.x + nx * (hw + R) : b.x;
            b.y = ny ? robot.y + ny * (hh + R) : b.y;
          } else {
            nx = dx / d; ny = dy / d;
            b.x = cx + nx * R;
            b.y = cy + ny * R;
          }
          const along = mvx * nx + mvy * ny;
          b.vx += nx * Math.max(1.2, along * 0.9);
          b.vy += ny * Math.max(1.2, along * 0.9);
        }
      }
      robot.px = robot.x;
      robot.py = robot.y;
    }
  }

  function classify() {
    let corner = 0;
    let edge = 0;
    const t = R * 1.6;
    for (const b of balls) {
      const nearX = b.x < t || b.x > W - t;
      const nearY = b.y < t || b.y > H - t;
      if (nearX && nearY) corner++;
      else if (nearX || nearY) edge++;
    }
    root.querySelector('[data-k="corner"]').textContent = corner;
    root.querySelector('[data-k="edge"]').textContent = edge;
    root.querySelector('[data-k="open"]').textContent = balls.length - corner - edge;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // köpük karolar 6×6
    const tile = W / 6;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = (i + j) % 2 ? 'rgba(237,243,239,0.07)' : 'rgba(237,243,239,0.045)';
        ctx.fillRect(i * tile, j * tile, tile, tile);
      }
    }
    ctx.strokeStyle = 'rgba(237,243,239,0.35)';
    ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, W - 3, H - 3);
    // köşe vurgusu
    ctx.fillStyle = 'rgba(224,149,47,0.09)';
    const cs = R * 3.2;
    for (const [x, y] of [[0, 0], [W - cs, 0], [0, H - cs], [W - cs, H - cs]]) ctx.fillRect(x, y, cs, cs);
    // toplar
    for (const b of balls) {
      const g = ctx.createRadialGradient(b.x - R * 0.35, b.y - R * 0.35, R * 0.2, b.x, b.y, R);
      g.addColorStop(0, '#f7d872');
      g.addColorStop(1, '#d99a1a');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, R, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(14,42,30,0.35)';
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * Math.PI * 2 + b.x * 0.01;
        ctx.beginPath();
        ctx.arc(b.x + Math.cos(a) * R * 0.5, b.y + Math.sin(a) * R * 0.5, R * 0.16, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // robot
    if (robot.on) {
      ctx.fillStyle = 'rgba(127,176,147,0.28)';
      ctx.strokeStyle = '#7fb093';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(robot.x - robot.w / 2, robot.y - robot.h / 2, robot.w, robot.h, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#7fb093';
      ctx.fillRect(robot.x - robot.w / 2 + 4, robot.y - robot.h / 2 + 4, robot.w - 8, 5);
    }
  }

  function loop() {
    if (!alive) return;
    step();
    classify();
    draw();
    raf = requestAnimationFrame(loop);
  }

  function pointerPos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
  }
  canvas.addEventListener('pointermove', (e) => {
    const p = pointerPos(e);
    if (!robot.on) { robot.px = p.x; robot.py = p.y; robot.on = true; }
    robot.x = p.x;
    robot.y = p.y;
  });
  canvas.addEventListener('pointerleave', () => { robot.on = false; });
  canvas.addEventListener('pointerdown', (e) => {
    e.stopPropagation();
    const p = pointerPos(e);
    robot.px = robot.x = p.x;
    robot.py = robot.y = p.y;
    robot.on = true;
  });
  canvas.addEventListener('pointerup', (e) => e.stopPropagation());
  canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

  root.querySelectorAll('[data-do]').forEach((b) =>
    b.addEventListener('click', () => {
      const k = b.dataset.do;
      if (k === 'shake') shake();
      else layout(k);
    })
  );

  const ro = new ResizeObserver(() => resize());
  ro.observe(canvas.parentElement);

  layout('scatter');
  requestAnimationFrame(() => {
    resize();
    layout('scatter');
    if (!reduced) shake();
    loop();
  });

  return {
    el: root,
    destroy() {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    },
  };
}
