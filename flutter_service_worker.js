'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8d18d94f33380f3f49a167c9c25f82e8",
".git/config": "f389923037cc8060f2a36750635f2ac1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b1c66d5bf4c837a22c6f7fd325399e16",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "be2789de1205a0331b3af6121d41508a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "adc0796deab58919e7a39d14a16c76f0",
".git/logs/refs/heads/main": "adc0796deab58919e7a39d14a16c76f0",
".git/logs/refs/remotes/origin/HEAD": "88c7ad519850608f014a72f7f12000bf",
".git/logs/refs/remotes/origin/main": "695b8d5d1e90b87072e5cdb573080370",
".git/objects/00/51ff4f475682b34f968b8c1029c3338777c9a9": "5b2fd7d60faecce4139a2fb6caef503b",
".git/objects/0a/e3ba6c48a41ad47167f58c728c1e6b9ce944f9": "21fe953e8a1123f8624f5ffa52831331",
".git/objects/0d/51444809ba161b8ad3b51f57f706abc56f098c": "a1feae617cd48d5e119ff349562f58e0",
".git/objects/16/a12dd14a4ec95aff29b653e4bd0299c212daba": "a6a00f4c268aaeea516d2f48728217d3",
".git/objects/1e/22334cf03ae75c6d62cbd463bc5e154a0995d9": "47b229d1ed792626fb89f364b73f2ee7",
".git/objects/26/7b5dab412605e1063684c0fe15ec839aec2b29": "f3a0b13a7223d80cedeb3e036fc638df",
".git/objects/2c/4be66b2cc6829094a472541fb54b4242d40790": "3fcadf1dfad9c5fc421c650164f1c45b",
".git/objects/31/1d21c5d96bcc2e87b8260fdc7c01aef68b58cc": "215107b9aa96d6d774de678d062edf4c",
".git/objects/34/8080a9c5fb73ccd775bd890439c4e72e101abd": "72b22fb5b6d87033c5f07992043361e5",
".git/objects/3b/0cce674336a17a945a372eb432160fec919bfc": "79c9d44866d8267664c58f195899c262",
".git/objects/41/b8ee98d7eaaa14b54484443e2d6fcf79cda149": "17f4a3667136f0f94a9beb1519f572c6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/53/6329cea0a15ea2d7e0292586ac11b7201872c4": "b1af8202b8ca46e26289f5ffd43f59c0",
".git/objects/5a/47f4abaebfdfe1ea15909bf52d1fe08aaf37b5": "578260240fa28f8bf67a58431b9156bc",
".git/objects/5a/6e8e9dec236c76a7c36ca395ee386686c7736c": "f045384c6adb82dba89ba16b0418bfe0",
".git/objects/5a/94e5dc40487ee7b010b47c3e156ef2fbd5b959": "191651d06d790534304e1363c60be980",
".git/objects/5a/d4f31f32bb1ca876d6fe11f3d3ba290f0c1c8b": "c3daa9cce2b0bb10ea220f7b1bf42672",
".git/objects/5c/63fac2489def1434e08fb7cd8bcc455c41db2e": "04bc39bc76bc92478431993251aa9def",
".git/objects/62/eb43de3ec571a19329af2fee7a1801ec25fdc6": "de0d505f993020150f96a667669b887f",
".git/objects/63/8f78b93e72ddb4e5eebe194a4b3bd49595745a": "286a08708a66ce63ade7fa133f2a77de",
".git/objects/68/b6f9499505d8a9a970b1f035095312b7d8d5ca": "0ab3eac2cd2f16f7e31e86fd8fc1a2fa",
".git/objects/6e/2fde710100446c321c775ae89a27cd171ad55b": "ba7b675bc155fbe5aa656aaf24690131",
".git/objects/70/5ce60e116c74055a950cd458517d8eb2bcb951": "0f2651569038c65c02dad14f9353cdee",
".git/objects/7e/1314512d34b162b2766f2a9785439de35ac478": "3ac0a950bb23c5f637d0e7b9f1445969",
".git/objects/84/f55529c84e0ce334ee76b2f2335445e6bab1d4": "fbec7e5b66080f8c1f0d788e8fc40265",
".git/objects/88/198beb23ae762da0895b56b8fbded85af272fa": "486ffb65fa839bf96f4034eee1122e3c",
".git/objects/89/2e0b433d33fae93ba2e3a3fa32bb666098817d": "a604bbf3d8f77e8eb0a2ab74b795b780",
".git/objects/8f/b7e787a4d4a198c0e9196ad7d8e9f6f1cd4733": "703f5f35a5af73fa5e6e0f91e72a905b",
".git/objects/93/52ede3638e5854b248c8486473bad34e65a7a8": "7ae0428dbe3d51858e1addfc4d03b390",
".git/objects/96/0f4386af0f145c44db4eda09474be3de4b424a": "3e71bd903c376cd2aa5e41f1b36356b4",
".git/objects/9b/b0c8e57d4a5c4daac9990ce66274066828b7d9": "8222bfeb527615167a2e05924d41dc07",
".git/objects/a6/3442d674c121167c3be991f4c18216be42e3f1": "1fb1033c8b0d36a4d66c855f24be0edb",
".git/objects/ab/deae97cfd7f9b6be32bb1ea72129331f5fe6e4": "42e425a08a9dbf6d7b4f9323db851a4b",
".git/objects/b2/8b81529a8391025fcaa63de655c87ec4c3137f": "ce38e7aacd6d7c365acb99833022f139",
".git/objects/b7/8124ccff218c1a725c5d4b6ac4efd9275a3bd0": "b57fffc5c6eeb068e015e9e315c435bc",
".git/objects/c8/b0bb2e08c18086218b52256e55ad129cd97cc3": "1cf4aad972044733595de852043727a8",
".git/objects/cd/6882fe2b34a39a72c08d0efb4ca6b4a755e3d3": "077914ad05e0c199b7cb4b589e5801d2",
".git/objects/ce/66a99bc1f0fb33ae9639ec38c74604d5f81447": "07f5a3619f50751554fc569821bf7d85",
".git/objects/cf/580de61b033b47e476354f5d585b6cbdbf6677": "3c998705c4f2b0a8c805fb316efc3527",
".git/objects/cf/d628a2fbb6e67d0075fc31dce3f4fbbc771c6c": "e55cc3e4a72a018a14c7631723c9b5fd",
".git/objects/d0/7717a07e81ac5157b8bf30fe81631951116343": "ee158c90aa770e2eee8b42fb6d0ca35f",
".git/objects/d4/cba123dc6e5a4e516aa0ad187f99b6fb2caa23": "05c87184f10a3d9834478a80bb375f5c",
".git/objects/dd/c9baf799c55797b0576b2b61452d07a2cdb143": "b71b2fbe5fbbe507e4cb6b6ed5ffb5ee",
".git/objects/dd/ff2576756cf138e9182333cc16c108743a89bb": "32f4efcbf9af96e84ade376f193ece2e",
".git/objects/e3/36b59624ff4f0dabb44bd286e1b6ce281c35d1": "0ab9648aeb71ea263896b705bfe063cc",
".git/objects/e6/3d97e0a97e7356029b1bec972e42534c394e73": "936420a035be55aab8b3ebc6bcf7d98b",
".git/objects/e7/7e83ff5173f407b801f807c60e5b47d6f42f04": "317067a254e9d90001ba80d8a0649166",
".git/objects/e8/1583ad02cbed0b8ef9297215d98c1614812400": "05be84aa2f37fdc671de3860c525a097",
".git/objects/ea/90c959b21e77e7bae7a55e524a5961704fa822": "0029d35e1e21eaca1b57b5282c6668ad",
".git/objects/f0/746a7c3d26145062e6ffc9c92b929375d9b1fe": "c32b3378ae907ff9515751cf4e896c73",
".git/objects/f2/604dd9fd550327d9dff7feef7877df89e52814": "a16309d961b2f855abce17174bdc746d",
".git/objects/fe/1456811f872b5bbe0b54a70725650e303dd0fb": "8bb5afe12b693998cdca3cb55a6c43b4",
".git/objects/pack/pack-2d01104a7d3d98e87ccf694cda4ac7e4cf31a777.idx": "7872575cc378815b2c1b7947fb1005bc",
".git/objects/pack/pack-2d01104a7d3d98e87ccf694cda4ac7e4cf31a777.pack": "fb8d80a8d935f019dbccc8ae513edf1e",
".git/ORIG_HEAD": "2d7a90344a91f36dfa5a9fca56d41b12",
".git/packed-refs": "47f00f6c79e1dca23712278d6d5ff4b2",
".git/refs/heads/main": "9f234bcb524b5a944e9095c054872516",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9f234bcb524b5a944e9095c054872516",
"assets/AssetManifest.bin": "58f337e3c44ec3246f500a89954184da",
"assets/AssetManifest.json": "46f56160dadd163eaca44da451cf1897",
"assets/assets/page-1/images/arrow_forward.png": "927534c6b5143fd1a6f0d93f0b7cf2f8",
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
"assets/assets/page-1/images/new_resume_pic.jpeg": "29899acd3eb5742d4f73182d5cd328e7",
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
"assets/NOTICES": "9ae0ae2c5793ca706dc22fd2478c8cd7",
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
"index.html": "17f929d3f4b06be8a8a592185fbe73aa",
"/": "17f929d3f4b06be8a8a592185fbe73aa",
"main.dart.js": "296d39528639703c9e3d57b5a9ab7766",
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
