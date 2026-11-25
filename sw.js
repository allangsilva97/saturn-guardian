// Saturn Guardian offline support for the installed web app (phones and desktop browsers).
// Pages: network first, so a new version shows up as soon as you are online; cached copy when offline.
// Everything else (icons, Tailwind, fonts): cache first, filled the first time it is fetched.
const CACHE = 'saturn-guardian-v1';
const CORE = ['./', 'index.html', 'saturn_guardian.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys()
        .then((names) => Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
        .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const put = (res) => {
        if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
    };
    if (req.mode === 'navigate') {
        e.respondWith(fetch(req).then(put).catch(() =>
            caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('saturn_guardian.html'))));
        return;
    }
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then(put)));
});
