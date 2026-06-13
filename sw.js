const CACHE = "mixtape-mitski-v1";
const ASSETS = [
  '/mixtape-mitski/',
  '/mixtape-mitski/index.html',
  '/mixtape-mitski/songs/washing-machine-heart.mp3',
  '/mixtape-mitski/songs/first-love-late-spring.mp3',
  '/mixtape-mitski/songs/i-will.mp3',
  '/mixtape-mitski/songs/a-pearl.mp3',
  '/mixtape-mitski/songs/francis-forever.mp3',
  '/mixtape-mitski/songs/i-bet-on-losing-dogs.mp3',
  '/mixtape-mitski/songs/liquid-smooth.mp3',
  '/mixtape-mitski/songs/if-i-leave.mp3',
  '/mixtape-mitski/songs/jobless-monday.mp3',
  '/mixtape-mitski/songs/wheres-my-phone.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});