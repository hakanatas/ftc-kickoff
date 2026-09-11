/**
 * Kaynak simgesi. assets/icons/<icon>.svg, sonra .png, sonra .webp denenir;
 * hiçbiri yoksa simge kendini kaldırır ve kart simgesiz kalır.
 */
export function iconImg(r, cls) {
  if (!r.icon) return null;
  const img = document.createElement('img');
  img.className = cls;
  img.alt = '';
  img.decoding = 'async';
  const exts = ['svg', 'png', 'webp'];
  let k = 0;
  const tryNext = () => {
    if (k >= exts.length) {
      img.remove();
      return;
    }
    img.src = `./assets/icons/${r.icon}.${exts[k++]}`;
  };
  img.addEventListener('error', tryNext);
  tryNext();
  return img;
}
