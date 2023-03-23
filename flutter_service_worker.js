'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "60c3fc61607f9bc8a27694f6e0a55aae",
".git/config": "e1491bb429eafdf20c82e87b9b94ab02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f363bd5b80d80c519386c4664d582195",
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
".git/index": "db174736c67ac98db70e45ba83df2df2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a2c777412d62d78fd8e6d8d78810d09",
".git/logs/refs/heads/main": "6a2c777412d62d78fd8e6d8d78810d09",
".git/logs/refs/remotes/origin/main": "ff9890ba9662d93d4477226ae9d45e67",
".git/objects/00/0b2f59e3c98da364b9a6bafccb1f25fe9aeb6c": "850c8d1e95c1d5bd5fea76fa94c8d535",
".git/objects/05/461cf2bcbdcdc30ab4d8471b34237021dd572e": "f3d7bf865ecb778a771124af68b19869",
".git/objects/08/988b7a65f1f347e47e7341aa95d2c83552c9ed": "ff81bb6d53d7a6349c9ff2900b8c0236",
".git/objects/08/b3473ec2ccaf185a9726bd90ef3a80eded48df": "a5f5b4bfe18bc98a3da4fe84b1156819",
".git/objects/0d/a721adc8bc5ddec85a4f323a8041156e1d91a6": "7502933b37d434e5e5480b892375dc04",
".git/objects/11/91c8102b79cf1cf1068ed791c16016ea3f25d1": "654e1e122497e08e376f382448a107a1",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/c172d6cb4830172e0f5504d6788a6a6cad8477": "afb1234045289670862e73271a2abde1",
".git/objects/1b/0a27cf959c14ca63f45e1b9f6e39bc06b96155": "98e3f78bda2518c43c81f344cfb39975",
".git/objects/29/012a9e7463633b9c5cea6641376aa27bf10b87": "ec8fc4ad12dccd32a8500f5264a160dc",
".git/objects/2d/907345f1b95a8d62c2b6d961065bab6efdff24": "1ecc66ec7f24b0bf4a24225376e9bab7",
".git/objects/2f/0911da31e82ab533c1d42a6d13e1f889bc2150": "6e141d8bd33cf1ea98b37698dcb5653f",
".git/objects/30/c96dd86447db0ca1f91e3d408305344204d60c": "ba602256286274574a9f60311d808187",
".git/objects/32/505f822e29a3af8a7dd6c5c4a7df9d25e55daf": "0ca661662baf67563df031d5c788fd33",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/bc0cf3b3ce0ab37fefa1fac716f93ff8304cdd": "680f51f00d4e3ee98e7bf81bc34d8887",
".git/objects/3b/23830ff34994421a8e5948e81e74d110b78811": "2c1a12787e3eaa8702415f5845037b3e",
".git/objects/3c/8a5c2c129c49a89ce3b151994d9dcd85b3bbfc": "1ce00b429ad41c4532e4f0078a08bcf6",
".git/objects/3d/66bbd8780ffb902032f0449e5508ccb4d575a1": "633e389ebbace948137bf3a4883bf904",
".git/objects/40/20185107f1f4dc7a1ee9798d306dde60caf30a": "7825e891d0371da5a892bbd93df9c87f",
".git/objects/40/ceb8c63863b06eb82884241d098267fd2cb9c4": "77616bbd0df9a79520d60be623536987",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/73568dbaeaf6c0b86fa361440f38b3e60c3c42": "cc7a144666ae868b883dce62ace91d55",
".git/objects/45/40ab01ff62c1040e2f3203193d39d873111a0c": "52359bc1c18e6b26267fc1dba0dc62e0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/af7c245ae06c8a235352c1e56cc32d6f2e398d": "a883dd46a924897bbb04f083afd92e91",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5b/d22a3cab71bb1e3c4f7c20b6036f5fc4b74c76": "b1b9b80744ae3ac292a0e5465839dad4",
".git/objects/5d/8c85cbd514ab061c27589d324fbd95eaa533a1": "b3f9bc2810f0086ecf41b6574c7f58f0",
".git/objects/68/eb06ae03d57f2034f544055c750a6d37b7e6f6": "5595b80df68a0cb2ce6568f4722f260b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/1fcc92d78fd3947ffa50c551a84ed323b519c5": "3a57b6610d32786bdb2bf4270ae53a14",
".git/objects/6b/b33e3abdca903881a6f15aa76bef9043d730c1": "e1c38ed6485bd9a001d520407ac009c5",
".git/objects/6c/a0c65e8c2d7ca07a74d48a4a504dd5bb50e5c5": "8ae9a35b1a467dd2c08b9289641b41d0",
".git/objects/6d/de7961f210374047bca599d3999418e756ddb2": "827f856977d25e491433fcf1f4e3699d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/cc57263a010a293a05e099aa7642a483db79c2": "d75190df564120ae0fecbd800b2bd93c",
".git/objects/75/5fa9c799382d50fd81ae1dee1974635b5f5399": "863d299211011fdd35ef0f318f62139e",
".git/objects/76/fa5b940597cccac358c31f6642af71cd5a6ffe": "37a41d16b30da69bb19c20c54f867cff",
".git/objects/78/f885a7053cb04efd41d4bf81a007ab329b785b": "ccbe882eeb93f2ebc61d351a77a200a8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/4f0cfefef114ce800340fab03d791887ac5c7d": "0fab5afd1496778b00f099272da6e83a",
".git/objects/82/a354436c3bf6ef88bb2f543fd548d099cafed0": "755384c26c78cccdc0be62b73e9128d1",
".git/objects/84/5b4b0c25426dd49b8ce2ea1aa20fe7edbda5f1": "cb6da0bd5b5b5aa3b3d76f757f13c889",
".git/objects/86/fdc64a3da7e3040578352a7b8213ea0a715a03": "d08514bb11f40bd1004974c429f5f8e1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/1341f0fd4eea2be023c8d97a21eed1cb971289": "efd6303f6192d1736d8870d19034ef19",
".git/objects/93/79225977112073ab9c6e3710fd7d10ff84a67d": "ce572319af7b3327044cfb5d780c6a7b",
".git/objects/96/d25d646b54e4c426bf428459bc1a7450ee86c2": "caf301470a603bf700fab8f8f0b3b7c8",
".git/objects/9c/6542250f2036b311bff910f3afe4c213f2c785": "d80b95abfa57869a2de5267ae4274079",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c0ad109568d87a2bfd5ef3c7fa19ddff744a5a": "05da1dad4728c66e0992c950d093e1c9",
".git/objects/a4/590e3cf850fecbd2736e9a6b816886ac20142b": "e0953417bf87825061eb686529db4bd4",
".git/objects/a4/d67034bc2f5d771ecfe79df4692c54667543c0": "ea75401a26d33c364b907e9c91fe3b14",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/a6/dc9d9375674400e2d5e65212f03d7b6d965869": "e0c920c84cd19b6c1d3265a07f0a8afc",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/138596ed25390942eabd2547e7e06a04326d77": "e8752717cd90c30eca1af1560d85fe0b",
".git/objects/b3/e4149bb7d82df2db9c1e558540e2f10892e521": "2a0b60878ac25bd3f4345b29f7b2285e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/eba1ef1219f387595f502980ec6a2c3f5e9d22": "b956f0d18d7b7660d8093f0ce1853ce0",
".git/objects/b8/4f68d1aafbe0af897e38c09e5a7fd1cc6e444a": "3b3f4bcce663eec3f0b8f19d8857a7ea",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/633bd2357218ff443f7ec029572d65dd43a208": "48437987ae23a98db5bfb5b5c6ab6364",
".git/objects/c7/7b45b329cab9fefffaa0b21478f346bcc3ecd0": "8a45a0b989716cdf0ca5c3b1315739c7",
".git/objects/ce/d79af44c9355da71f4c7e16ca0500eb5b1040f": "f1a56b0079b2b54bf3ce66a239316cd6",
".git/objects/d1/23ba1878538c1048aa07bc222531851243888b": "f7861cdc10147307bcf53444bae3e0f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4b2414f39f38e3712fd9160c98c0e7e0b47443": "349c40c6334ac870ebea1afabd56b7e5",
".git/objects/de/9806d2c1ae29ad16c53ddbc6410155ab3dcfb6": "bf49ee53caa74a0649651f5ba6e40d75",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/464cbcc70153187fe1e978dfaa2260a3d460bf": "bee0b69ebdc53f11db2b3c95f247c258",
".git/objects/ea/a22d0aa26eebadd9b9e3b0c99d055ad111ba9c": "f5f04bd46d50906923a695b820cc4a49",
".git/objects/ea/ebc1d736a501342b17cb55aa36b9f35d70d86a": "d5f84fccac932bdd9905d8876a04175e",
".git/objects/eb/70fb2353d6231e5d5d1ed46ab994cbc4177010": "f55d0837ba2a2497708b8142d9dfea7e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/181980eec0e48405b0d625747c1d79ce061306": "97b12e2372e1a0f353312cef98f768a8",
".git/objects/f7/0103033d08436db6b279873fdb84e98500827a": "c0a50f5ae56995974244e0143a077a5f",
".git/objects/ff/bb11405337c462749f7724c6adaa008adfc6ee": "fd20d7103cf0f9e4607fd220de3dae38",
".git/refs/heads/main": "bb8d08f72c77cf8f481b87939571aab4",
".git/refs/remotes/origin/main": "bb8d08f72c77cf8f481b87939571aab4",
"assets/AssetManifest.json": "6a146b8844893a5769905b7432b5e015",
"assets/assets/page-1/images/favicon.png": "cc7c1a562a0c2bd5001855962fa3943a",
"assets/assets/page-1/images/firstimage.png": "fa82e4c7417638e1fdc56b088789286c",
"assets/assets/page-1/images/githubprofileimages-1.jpg": "7762e3165c0fecc09823d454ddd3a9c5",
"assets/assets/page-1/images/githubprofileimages-2.png": "5456eb9050e3283250a961fd9692e52f",
"assets/assets/page-1/images/githubprofileimages-3.png": "7a8a42ac62e537c4eb75ea3e8fcaa626",
"assets/assets/page-1/images/gyujbgvems0qhq34sjn7ykhjs8rbertrcja8lhf9gtnc5brd0ac23ietapklcfujkgphmma7icyubsqrlxbvh2jlhw2opyk2f-fctbvd1ytmctad898bw252-rw-e365-v1.png": "2608b452e9505fce64dbc95f87a762ee",
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
"index.html": "a3b3faac5f2d97c716b7c6548964d5cf",
"/": "a3b3faac5f2d97c716b7c6548964d5cf",
"main.dart.js": "8cf038e4ebb04b3b8e75c20a0d6b0c0a",
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
