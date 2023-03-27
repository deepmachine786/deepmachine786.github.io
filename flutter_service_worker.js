'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cf4d22399fbacd8365144d655628aa84",
".git/config": "e1491bb429eafdf20c82e87b9b94ab02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "14ebf1d2215b461adc3ce52b33428106",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "da95e31006e44f1680d6f4f2d09f38f7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81e0784c47c2de4f1a2da6a3f4dbdad5",
".git/logs/refs/heads/main": "81e0784c47c2de4f1a2da6a3f4dbdad5",
".git/logs/refs/remotes/origin/main": "b2449c849e88a91c7b070482cf2b44be",
".git/objects/05/461cf2bcbdcdc30ab4d8471b34237021dd572e": "f3d7bf865ecb778a771124af68b19869",
".git/objects/08/988b7a65f1f347e47e7341aa95d2c83552c9ed": "ff81bb6d53d7a6349c9ff2900b8c0236",
".git/objects/0c/814feb0f04170be1d192c46e20811e4f4e499b": "d7d533338f4382f0f9a2b6668c46a80c",
".git/objects/0d/a721adc8bc5ddec85a4f323a8041156e1d91a6": "7502933b37d434e5e5480b892375dc04",
".git/objects/11/91c8102b79cf1cf1068ed791c16016ea3f25d1": "654e1e122497e08e376f382448a107a1",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/5928b7f7d337926f92225af4c7e7d1e8e345b1": "571e3f58a9481e04cfda2ed392e8cf54",
".git/objects/16/c172d6cb4830172e0f5504d6788a6a6cad8477": "afb1234045289670862e73271a2abde1",
".git/objects/27/18be6a88c5ddcaf225e250566518f4cad3af14": "8f54842d0ae3ca1458d7ff8180cac399",
".git/objects/29/012a9e7463633b9c5cea6641376aa27bf10b87": "ec8fc4ad12dccd32a8500f5264a160dc",
".git/objects/30/c96dd86447db0ca1f91e3d408305344204d60c": "ba602256286274574a9f60311d808187",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/bc0cf3b3ce0ab37fefa1fac716f93ff8304cdd": "680f51f00d4e3ee98e7bf81bc34d8887",
".git/objects/3a/a3858bf29c2214aef171770edf72ab63ca50bf": "86c2637b9534b85f95a870a7d0a40146",
".git/objects/3b/23830ff34994421a8e5948e81e74d110b78811": "2c1a12787e3eaa8702415f5845037b3e",
".git/objects/43/73568dbaeaf6c0b86fa361440f38b3e60c3c42": "cc7a144666ae868b883dce62ace91d55",
".git/objects/45/40ab01ff62c1040e2f3203193d39d873111a0c": "52359bc1c18e6b26267fc1dba0dc62e0",
".git/objects/45/b0362e3f3545b1d26e27e292b37d5860a8bac8": "1cd6dca2af9b3991354d413a5b2153d7",
".git/objects/4a/9ac98ad05c8cdfdd53e5f0e882f48ef40a5ffa": "e42324d34cf6557e5ca05715a60df0b2",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/402b197f555240274a0a47d02347526d9f313d": "e4847a8c8d5ae58b2f34db3f0fbdb5e6",
".git/objects/4e/5e42510f7bac7525bbb629d0978fb3f1d83542": "6821dcea9ea46a2e7a050988f2613097",
".git/objects/4f/af7c245ae06c8a235352c1e56cc32d6f2e398d": "a883dd46a924897bbb04f083afd92e91",
".git/objects/50/3126b13920a68dc0bf017610c233f91037ddca": "2f9a390e3a73c2e8b431274211166e9d",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/6269602b845176f02c178843927e764e93869e": "a12928dfdb53ee52645c2509435e7ebb",
".git/objects/5a/49782500d3ca15401d6580bea1d411d7a2322c": "f53001b8f368d106d810a7c72990bb0b",
".git/objects/5b/d22a3cab71bb1e3c4f7c20b6036f5fc4b74c76": "b1b9b80744ae3ac292a0e5465839dad4",
".git/objects/68/eb06ae03d57f2034f544055c750a6d37b7e6f6": "5595b80df68a0cb2ce6568f4722f260b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/1fcc92d78fd3947ffa50c551a84ed323b519c5": "3a57b6610d32786bdb2bf4270ae53a14",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/cc57263a010a293a05e099aa7642a483db79c2": "d75190df564120ae0fecbd800b2bd93c",
".git/objects/76/fa5b940597cccac358c31f6642af71cd5a6ffe": "37a41d16b30da69bb19c20c54f867cff",
".git/objects/78/f885a7053cb04efd41d4bf81a007ab329b785b": "ccbe882eeb93f2ebc61d351a77a200a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/4191460061fa41df1a3568e9d42e7814b78bf3": "bec8f53439d447f0d0b6fecc21b8c304",
".git/objects/81/4f0cfefef114ce800340fab03d791887ac5c7d": "0fab5afd1496778b00f099272da6e83a",
".git/objects/82/a354436c3bf6ef88bb2f543fd548d099cafed0": "755384c26c78cccdc0be62b73e9128d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/f7c6ca1f916746e4bcbd3f9abf683f4e4b3b72": "7b4e1ec499d18c3ba947cd5bd13ac919",
".git/objects/8c/43592e2cf0067c7a5a4b22c852212c15b4e0ef": "7052175ebdbf263da35e133ec20b838f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/225282c237f40b659071fc8a143de6756dbb50": "c48fd9d274c0d2c0c130aafd14fde853",
".git/objects/94/051c9cd3375f50af976977423d7ad65e9f5122": "791322083e7088848c589cd9c4abcab0",
".git/objects/95/cdc93f5a5bbf0584460c8d6e24baf90d78ba07": "f1860370aa3e48cff759ce43a294c072",
".git/objects/9a/39ad4715d50d27e6ab7c7ee6b6d1a87763b627": "89545cdc80f597018f8fe8db26cece48",
".git/objects/9a/fed7b40208651b7ff1a7cf2cbf67fa985889a6": "c7775218d9644fdfe5f312bc6a1f3e01",
".git/objects/9b/df9133617ea2c8c72a172905ca55ab9b12c45e": "7ea8c29135f8a3a0f3189df863c4a396",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/3ab6f36ba4b24a3659c902b14fa90087f0713c": "fdb266865a0196009e3b22f958d43703",
".git/objects/a4/d67034bc2f5d771ecfe79df4692c54667543c0": "ea75401a26d33c364b907e9c91fe3b14",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ac/d87e5a1b4773eec2208f69ec734ff1a911e8de": "52ea9711f4d5a9f8b8fc932c9114d04a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a1d682578b7655070c90f8a7f758dd3fc13aed": "97dca089430a0629b279c362af5aa570",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c9/e9982e7eb34889bbc13d72baeda47a5cce5a56": "d49139d8693b3f415d71657acbe33a04",
".git/objects/ce/d79af44c9355da71f4c7e16ca0500eb5b1040f": "f1a56b0079b2b54bf3ce66a239316cd6",
".git/objects/d3/71dfea52bba973938428f552d6287e8b33fd31": "322f8e793722f3ef2eea5bad4dd5c580",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/095c87dc7332c7480aaae86b8ad5078a8d4cc2": "9be0b625423f4e690550fe8ee791fdbc",
".git/objects/e2/38d2087ac96428f94773966b38e59f1ffa4def": "da91e4cd7a73cd6b79ed2d912662f35a",
".git/objects/e4/9124d52e52659ff694947bdba9685fa4518c3e": "395dcbe95fbddc8aa49c0d4f99581efa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/464cbcc70153187fe1e978dfaa2260a3d460bf": "bee0b69ebdc53f11db2b3c95f247c258",
".git/objects/ea/ebc1d736a501342b17cb55aa36b9f35d70d86a": "d5f84fccac932bdd9905d8876a04175e",
".git/objects/eb/70fb2353d6231e5d5d1ed46ab994cbc4177010": "f55d0837ba2a2497708b8142d9dfea7e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/5e237d1d81d9f12e9b56d539f2cb04790edf1c": "3f90cfcfea35daba9cd738abaf95eeb9",
".git/objects/f5/181980eec0e48405b0d625747c1d79ce061306": "97b12e2372e1a0f353312cef98f768a8",
".git/objects/f7/0103033d08436db6b279873fdb84e98500827a": "c0a50f5ae56995974244e0143a077a5f",
".git/objects/fb/61b8c77fe1b656904b1a5f970b725c67f85f9e": "5603f462b5af6366839b4612b7254e10",
".git/objects/ff/bb11405337c462749f7724c6adaa008adfc6ee": "fd20d7103cf0f9e4607fd220de3dae38",
".git/refs/heads/main": "0c0d181ca298cec7e3dcc06bb007f60b",
".git/refs/remotes/origin/main": "0c0d181ca298cec7e3dcc06bb007f60b",
"assets/AssetManifest.json": "37f15e88a5edbb389a26d617c6dedf69",
"assets/assets/page-1/images/download.jpeg": "66b6b5e211fc366336521b8ad69c9ffc",
"assets/assets/page-1/images/favicon.png": "cc7c1a562a0c2bd5001855962fa3943a",
"assets/assets/page-1/images/firstimage.png": "fa82e4c7417638e1fdc56b088789286c",
"assets/assets/page-1/images/github.png": "dda4ed64a67ac5d80e8eac27dfbe677e",
"assets/assets/page-1/images/githubprofileimages-1.jpg": "7762e3165c0fecc09823d454ddd3a9c5",
"assets/assets/page-1/images/githubprofileimages-2.png": "5456eb9050e3283250a961fd9692e52f",
"assets/assets/page-1/images/githubprofileimages-3.png": "7a8a42ac62e537c4eb75ea3e8fcaa626",
"assets/assets/page-1/images/google%2520developer%2520club%2520.png": "52c76cac0a9516da22ad535ce9622d4e",
"assets/assets/page-1/images/gyujbgvems0qhq34sjn7ykhjs8rbertrcja8lhf9gtnc5brd0ac23ietapklcfujkgphmma7icyubsqrlxbvh2jlhw2opyk2f-fctbvd1ytmctad898bw252-rw-e365-v1.png": "2608b452e9505fce64dbc95f87a762ee",
"assets/assets/page-1/images/linkedin.png": "bc42c022a3af59cf55d0a6e911c1258f",
"assets/assets/page-1/images/profile.png": "e459835010bf256bf5e3f7423b43bc51",
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
"assets/assets/page-1/images/rq6fpwdusahwtmc0eila-wwxa2yhjbatidpjvuti5qadkncuhwflyhir8m0zgwis46pkhk7f133lvgt0xw3vlvw72c9yjwpxegbv5yb6m81prd4ii-yw252-rw-e365-v1.png": "ee56e0c6d248b09a0677b542506d8dc7",
"assets/assets/page-1/images/scrollbutton.png": "1d24869ffc1f8984f8a7c93edfbb882e",
"assets/assets/page-1/images/whatsapp.png": "c2da9b9b4ea95806d2301b1c3daa9341",
"assets/FontManifest.json": "2ded4e86ed7adbefb3d9625511b0b387",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/NOTICES": "9ee070deb91c073d88477d8f9644b9e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "cc7c1a562a0c2bd5001855962fa3943a",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b505a0455ffc86734d9c2b59b1e3dc1d",
"/": "b505a0455ffc86734d9c2b59b1e3dc1d",
"main.dart.js": "c56888d5ddcf3e4dfbf125765192002d",
"manifest.json": "59dfbfedc997b3976a9d979324922396",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
