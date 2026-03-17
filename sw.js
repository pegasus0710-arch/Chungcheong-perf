// ── 충청영업팀 실적관리 시스템 Service Worker v2 ──
const CACHE_NAME     = "cst-v4";
const CDN_CACHE_NAME = "cst-cdn-v4";

// 앱 정적 파일
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./plan.html",
  "./style.css",
  "./app.js",
  "./plan.js",
  "./manifest.json",
  "./icon_192.png",
  "./icon_180.png"
];

// CDN 라이브러리 - 버전 고정이므로 장기 캐시 가능
const CDN_ASSETS = [
  "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
];

// ── 설치: 정적 파일 + CDN 캐시
self.addEventListener("install", event => {
  event.waitUntil(
    Promise.all([
      // 앱 파일
      caches.open(CACHE_NAME).then(cache =>
        Promise.allSettled(STATIC_ASSETS.map(url => cache.add(url).catch(()=>{})))
      ),
      // CDN 라이브러리 (실패해도 설치 계속)
      caches.open(CDN_CACHE_NAME).then(cache =>
        Promise.allSettled(CDN_ASSETS.map(url => cache.add(url).catch(()=>{})))
      ),
    ])
  );
  self.skipWaiting();
});

// ── 활성화: 이전 캐시 제거
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== CDN_CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── 요청 처리 전략
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Firebase 요청 → 항상 네트워크 직접 (캐시 절대 안 함)
  const isFirebase =
    url.hostname.includes("firebaseio.com") ||
    url.hostname.includes("googleapis.com") ||
    url.hostname.includes("firestore.googleapis.com") ||
    url.hostname.includes("gstatic.com");
  if (isFirebase) {
    event.respondWith(fetch(event.request));
    return;
  }

  // CDN 라이브러리 → Cache First (버전 고정이므로 캐시 우선)
  const isCDN = url.hostname.includes("cdnjs.cloudflare.com");
  if (isCDN) {
    event.respondWith(
      caches.open(CDN_CACHE_NAME).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          // 캐시 없으면 네트워크 가져와서 저장
          return fetch(event.request).then(response => {
            if (response && response.status === 200)
              cache.put(event.request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // 앱 파일 (index.html, app.js 등) → Network First + 캐시 fallback
  if (url.hostname === self.location.hostname) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 그 외 → 네트워크
  event.respondWith(fetch(event.request));
});
