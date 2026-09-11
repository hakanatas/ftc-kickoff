/**
 * Varlık listesi. assets/<dir>/manifest.json varsa (yayında iş akışı üretir,
 * yerelde serve.mjs anında verir) dosya adlarını oradan okur; yoksa null
 * döner ve çağıran taraf uzantıları sırayla denemeye düşer.
 */
const cache = new Map();

export function listAssets(dir) {
  if (!cache.has(dir)) {
    cache.set(
      dir,
      fetch(`./assets/${dir}/manifest.json`, { cache: 'no-cache' })
        .then((r) => (r.ok ? r.json() : null))
        .then((list) => (Array.isArray(list) ? new Set(list) : null))
        .catch(() => null)
    );
  }
  return cache.get(dir);
}

/** `name` için listedeki ilk eşleşen dosya (uzantı sırası exts) ya da null. */
export function pickAsset(list, name, exts) {
  for (const e of exts) if (list.has(`${name}.${e}`)) return `${name}.${e}`;
  return null;
}
