#!/usr/bin/env node
// Yerel geliştirme için bağımlılıksız küçük statik sunucu.
//   node serve.mjs            -> http://localhost:8080
//   node serve.mjs 3000       -> http://localhost:3000
import http from 'node:http';
import { createReadStream, statSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.argv[2] || process.env.PORT || 8080);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.ttf': 'font/ttf',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
};

http
  .createServer((req, res) => {
    let urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (urlPath.endsWith('/')) urlPath += 'index.html';
    // assets/<klasör>/manifest.json: klasördeki dosya adları (yayında iş akışı üretir)
    const mf = urlPath.match(/^\/assets\/(icons|photos)\/manifest\.json$/);
    if (mf) {
      let files = [];
      try {
        files = readdirSync(path.join(root, 'assets', mf[1])).filter((f) => !f.startsWith('.') && f !== 'README.md' && f !== 'manifest.json');
      } catch {
        /* klasör yoksa boş liste */
      }
      res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-cache' }).end(JSON.stringify(files));
      return;
    }
    const file = path.normalize(path.join(root, urlPath));
    if (!file.startsWith(root)) {
      res.writeHead(403).end();
      return;
    }
    let st;
    try {
      st = statSync(file);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain' }).end('Not found');
      return;
    }
    if (st.isDirectory()) {
      res.writeHead(301, { location: urlPath + '/' }).end();
      return;
    }
    res.writeHead(200, {
      'content-type': types[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'content-length': st.size,
      'cache-control': 'no-cache',
    });
    createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`FTC Kaynak Haritası → http://localhost:${port}`));
