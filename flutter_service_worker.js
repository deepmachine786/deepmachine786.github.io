'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f0b592d78ea6488475aed51353d946a7",
"assets/AssetManifest.json": "413a409e44ffe76f48ed34c344c8fe55",
"assets/assets/page-1/images/arrow_forward.png": "927534c6b5143fd1a6f0d93f0b7cf2f8",
"assets/assets/page-1/images/Bavch_Edutech_images.png": "d7510ab2e068dc796656d29e73fc51b3",
"assets/assets/page-1/images/bit_slider.png": "5279e56474c32cfb1af412b6bb0b05c8",
"assets/assets/page-1/images/CodeClause_images.png": "d9843d4c3dd639f5013efe64303cf2e1",
"assets/assets/page-1/images/download.jpeg": "66b6b5e211fc366336521b8ad69c9ffc",
"assets/assets/page-1/images/email_icon.jpg": "ff26e35a2dfb19d94f3f1e56d6aacce0",
"assets/assets/page-1/images/email_icon.png": "139cb06885b51dccff7415a539bc4131",
"assets/assets/page-1/images/favicon.png": "cc7c1a562a0c2bd5001855962fa3943a",
"assets/assets/page-1/images/firstimage.png": "fa82e4c7417638e1fdc56b088789286c",
"assets/assets/page-1/images/first_port_1.png": "e48184f67931db8eda0b705e1bc14657",
"assets/assets/page-1/images/github.png": "dda4ed64a67ac5d80e8eac27dfbe677e",
"assets/assets/page-1/images/githubprofileimages-1.jpg": "7762e3165c0fecc09823d454ddd3a9c5",
"assets/assets/page-1/images/githubprofileimages-2.png": "5456eb9050e3283250a961fd9692e52f",
"assets/assets/page-1/images/githubprofileimages-3.png": "7a8a42ac62e537c4eb75ea3e8fcaa626",
"assets/assets/page-1/images/google%2520developer%2520club%2520.png": "52c76cac0a9516da22ad535ce9622d4e",
"assets/assets/page-1/images/gyujbgvems0qhq34sjn7ykhjs8rbertrcja8lhf9gtnc5brd0ac23ietapklcfujkgphmma7icyubsqrlxbvh2jlhw2opyk2f-fctbvd1ytmctad898bw252-rw-e365-v1.png": "cb90ed61419299158ba85540437fda0f",
"assets/assets/page-1/images/lasts.png": "a7566216469235d933e5947d14a3624f",
"assets/assets/page-1/images/last_port_1.png": "36c87d4f24c9b39c188c92eecc5ef162",
"assets/assets/page-1/images/linkedin.png": "bc42c022a3af59cf55d0a6e911c1258f",
"assets/assets/page-1/images/lpu_logo1.jpeg": "a4d571440dfce36176e7ade87b454b89",
"assets/assets/page-1/images/lpu_logo_2.jpeg": "a84c38fdeadcfba0e3d3ef4471ca3a9c",
"assets/assets/page-1/images/lpu_logo_3.jpeg": "94c8c464c38593910d598410295257b9",
"assets/assets/page-1/images/lpu_logo_4.jpeg": "c5c16e01d94f9c4471fcda823a779813",
"assets/assets/page-1/images/lpu_logo_5.jpeg": "2418e8015a7eed7d98ad54e4ed1a8e3d",
"assets/assets/page-1/images/lpu_logo_6.jpeg": "caec4155064ef77d56f53bc4d354bb55",
"assets/assets/page-1/images/Md_Shahid_Style.png": "933d1d879f227db9d82d57ebbb03adbc",
"assets/assets/page-1/images/new_last.png": "a2a075fb01347cb416f34aa16cb2900b",
"assets/assets/page-1/images/new_resume_pic.jpeg": "7dd66409f6fffa8c478fdddbf5ee3a80",
"assets/assets/page-1/images/port.png": "4749eb7a44db0ef78dca65884d50a240",
"assets/assets/page-1/images/profile.png": "e459835010bf256bf5e3f7423b43bc51",
"assets/assets/page-1/images/p_logos.png": "770f75f94837539eae9fd3144b47ec4f",
"assets/assets/page-1/images/rectangle-10.png": "1c244456fbe5625870e3d18e7f4aec01",
"assets/assets/page-1/images/rectangle-11.png": "7a290a992e74e3be182b651923f6487a",
"assets/assets/page-1/images/rectangle-12.png": "21b5aad7eedeb3d99a286de57b442a70",
"assets/assets/page-1/images/rectangle-13.png": "9e5a47f0257a30aebfc0540baf300e5f",
"assets/assets/page-1/images/rectangle-15.png": "170c6c4951b73df694fb2fe5634835c6",
"assets/assets/page-1/images/rectangle-16-rtG.png": "81ef2cd4aa147c33fe6d8f005159291b",
"assets/assets/page-1/images/rectangle-16.png": "26cbe4e11a0cfb756fc82a93cb9545e7",
"assets/assets/page-1/images/rectangle-17-5f6.png": "ebe40c7bf062217cf228d791f29bfe3d",
"assets/assets/page-1/images/rectangle-17-bg.png": "170c6c4951b73df694fb2fe5634835c6",
"assets/assets/page-1/images/rectangle-17.png": "ebe40c7bf062217cf228d791f29bfe3d",
"assets/assets/page-1/images/rectangle-19.png": "ac926de2442ac443000ab1e0b2f813a2",
"assets/assets/page-1/images/rectangle-2.png": "ce2d478224dffd533f132678537a8270",
"assets/assets/page-1/images/rectangle-20.png": "cdab1e2930a7e345c4772fc8f58f577d",
"assets/assets/page-1/images/rectangle-21.png": "56f6f912236d8f872f1d4d5c77c8e6ae",
"assets/assets/page-1/images/rectangle-3.png": "f599e9560090dc1d1004723b688c695f",
"assets/assets/page-1/images/rectangle-4.png": "c6e700bf4031ad95a6ab6239e320a440",
"assets/assets/page-1/images/rectangle-5.png": "6b42c12c3ce2e1f87fcb16417d40ded3",
"assets/assets/page-1/images/rectangle-6.png": "e07e790b477af94a356be7a86008f85c",
"assets/assets/page-1/images/rectangle-7.png": "98d006fc8e30d0426c56bcff7e05b6e0",
"assets/assets/page-1/images/rectangle-8.png": "008068ecf7c4b4224642e9217c29b6df",
"assets/assets/page-1/images/rectangle-9.png": "974d7989c4fa8a3cf0334919e2ea92c6",
"assets/assets/page-1/images/regent_1.jpg": "cece3fc789887b386d1279e9ec587253",
"assets/assets/page-1/images/regent_2.jpeg": "388ecc850af0a355136622c58f8d87a9",
"assets/assets/page-1/images/regent_3.jpeg": "2701d487759717b3f4a37253abe016ec",
"assets/assets/page-1/images/rq6fpwdusahwtmc0eila-wwxa2yhjbatidpjvuti5qadkncuhwflyhir8m0zgwis46pkhk7f133lvgt0xw3vlvw72c9yjwpxegbv5yb6m81prd4ii-yw252-rw-e365-v1.png": "ee56e0c6d248b09a0677b542506d8dc7",
"assets/assets/page-1/images/scrollbutton.png": "1d24869ffc1f8984f8a7c93edfbb882e",
"assets/assets/page-1/images/todo.png": "1a2bfbc93c53425c605c1725c4fa8711",
"assets/assets/page-1/images/todo1.png": "7b4a88cbac633ab51e4d744ae6e89b38",
"assets/assets/page-1/images/Transare.png": "2856e300c9f78367c2dc3befafdd0b05",
"assets/assets/page-1/images/transare1.png": "dcec303b97ed0aa9ced705eb60e65772",
"assets/assets/page-1/images/whatsapp.png": "c2da9b9b4ea95806d2301b1c3daa9341",
"assets/assets/page-1/images/WorkSuitkit.png": "c86e286698051939de1ef5006fa31f34",
"assets/assets/page-1/images/worksuitkit1.png": "e8857fd00d048bd3255ff37b0141106f",
"assets/FontManifest.json": "2ded4e86ed7adbefb3d9625511b0b387",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/NOTICES": "04eb2847c79b77bf1f42d5f330a5e485",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "770f75f94837539eae9fd3144b47ec4f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ef3cdd85d9bfc2178de5275bc1b07d6",
"/": "0ef3cdd85d9bfc2178de5275bc1b07d6",
"main.dart.js": "91886798bde5b1e384b285f860163b61",
"manifest.json": "59dfbfedc997b3976a9d979324922396",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
