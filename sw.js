// 아림 마을 오프라인 캐시. 내용을 고쳐서 다시 올릴 때는 아래 버전 숫자를 올려 주세요.
const CACHE = "arim-town-v44";
const CORE = ["./", "index.html", "manifest.webmanifest", "packs.json", "books.json", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png", "map/b_c.webp", "map/b_e.webp", "map/b_f.webp", "map/b_h.webp", "map/b_home.webp", "map/b_k.webp", "map/b_l.webp", "map/b_p.webp", "map/b_s.webp", "map/b_u.webp", "map/b_v.webp", "map/base.webp", "map/in_corr.webp", "map/in_room.webp", "map/in_shop.webp", "map/in_study.webp", "map/top.webp"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  // 도서관 책 검색, 가족 대시보드의 날씨·기기 연결은 늘 새로 받아 와요 (캐시하지 않음)
  if (u.hostname === "firestore.googleapis.com" || u.hostname === "api.open-meteo.com" || u.hostname === "dapi.kakao.com" || (u.hostname === "www.googleapis.com" && u.pathname.startsWith("/books"))) return;
  const same = u.origin === self.location.origin;
  // 화면(html)과 새 문제 꾸러미(packs.json)는 인터넷이 되면 늘 새 것을 먼저 받아요 → 고친 내용이 바로 보여요
  if (same && (e.request.mode === "navigate" || u.pathname.endsWith(".html") || u.pathname.endsWith("/") || u.pathname.endsWith("packs.json") || u.pathname.endsWith("books.json") || u.pathname.endsWith("control.json"))) {
    e.respondWith(caches.open(CACHE).then(c => fetch(u.origin + u.pathname, {cache: "no-cache"}).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(() => c.match(e.request, {ignoreSearch: true}).then(h => h || c.match("index.html")))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: same});
    const net = fetch(e.request).then(r => { if (r && (r.ok || r.type === "opaque")) c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
