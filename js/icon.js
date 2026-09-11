import { listAssets, pickAsset } from './assets.js';

/**
 * Kaynak simgesi. assets/icons/<icon>.svg, .png, .webp, .jpg sırayla;
 * manifest varsa yalnızca var olan dosya istenir, yoksa simge hiç eklenmez.
 * Manifest yoksa uzantılar sırayla denenir; hiçbiri yoksa simge kendini kaldırır.
 */
const EXTS = ['svg', 'png', 'webp', 'jpg'];

export function iconImg(r, cls) {
  if (!r.icon) return null;
  const img = document.createElement('img');
  img.className = cls;
  img.alt = '';
  img.decoding = 'async';
  listAssets('icons').then((list) => {
    if (list) {
      const file = pickAsset(list, r.icon, EXTS);
      if (file) img.src = `./assets/icons/${file}`;
      else img.remove();
      return;
    }
    let k = 0;
    const tryNext = () => {
      if (k >= EXTS.length) {
        img.remove();
        return;
      }
      img.src = `./assets/icons/${r.icon}.${EXTS[k++]}`;
    };
    img.addEventListener('error', tryNext);
    tryNext();
  });
  return img;
}
