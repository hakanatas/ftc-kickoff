import { AWARDS, AWARD_GROUPS } from './data.js';

/**
 * Ödül haritası. Sayfada da sunumda da aynı yerleşim:
 * Inspire büyük, Think ve Judges' Choice tek, TA ve MCI grupları üçlü.
 * onPick verilirse kartlar düğme olur ve tıklanınca ilgili role gider.
 */
export function renderAwards({ onPick } = {}) {
  const host = document.createElement('div');
  host.className = 'awards';

  const card = (a) => {
    const el = document.createElement(onPick ? 'button' : 'div');
    if (onPick) el.type = 'button';
    el.className = `award${a.big ? ' award--big' : ''}${a.isNew ? ' award--new' : ''}`;
    el.innerHTML = `
      <p class="award__role">${a.role}</p>
      <h3 class="award__name">${a.name}</h3>
      <p class="award__desc">${a.desc}</p>
      ${a.isNew ? `<span class="award__new">Yeni · eski ${a.was}</span>` : ''}`;
    if (onPick) el.addEventListener('click', () => onPick(a));
    return el;
  };

  const group = (key) => {
    const g = AWARD_GROUPS[key];
    const box = document.createElement('div');
    box.className = `awardgroup awardgroup--${key}`;
    box.innerHTML = `<div class="awardgroup__head"><span class="awardgroup__short">${g.short}</span><h4 class="awardgroup__name">${g.name}</h4><span class="awardgroup__line">${g.line}</span></div>`;
    const row = document.createElement('div');
    row.className = 'awardgroup__row';
    for (const a of AWARDS.filter((x) => x.group === key)) row.appendChild(card(a));
    box.appendChild(row);
    return box;
  };

  const solo = (name) => card(AWARDS.find((a) => a.name === name));
  host.appendChild(solo('Inspire'));
  host.appendChild(solo('Think'));
  host.appendChild(group('ta'));
  host.appendChild(solo("Judges' Choice"));
  host.appendChild(group('mci'));
  return host;
}
