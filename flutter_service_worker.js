'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e01f1e1ebec69d5321c266b49dcd250e",
"index.html": "8b42c52d326198de06993ccb88319cf0",
"/": "8b42c52d326198de06993ccb88319cf0",
"main.dart.js": "f12083ca23b340509163081985af19ab",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6d5af84b21e12e3246da765e12d88e7e",
".git/config": "5551ac0ff40a904ae59e9fff73f34ec3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/94/20ecec5453693538e5e7b3a19b0d69f6f7f2c8": "1a4da9922b9715e53754a786ee5fda0b",
".git/objects/9d/9cfa6e92ac4ae61f7672f416ec4bd7befd2b13": "8ff0801b8be3f0c6c8af439ed62547d3",
".git/objects/b2/d5e0017454a931c26c67aaabdb614a4d5740ea": "b6d7afd70948137dd1fea112104df695",
".git/objects/d9/a611eaf0d9eaf18fd2c3c9d6417272f6a771cc": "4f4edec4b10d92d82a6a25cc20003b7b",
".git/objects/ae/a875e40fe5cd88f9f00127e71831b062f2a547": "803f7a35f431cf0290b3dd877facbb8d",
".git/objects/ae/6063067f5f5d4de36593bb51aaf8c5c2d77c45": "78e0f2001c2c796e45f8aa76287c98a4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c0/669b38ff8d0b21fd6a0edbc1d2fddbe576d60f": "c6e5c83f9a0e5d103d3766681a32c65f",
".git/objects/cf/1cbe16e6aea0455f3f92f35d29e42a55e52ee3": "c58e8f85990ca89e9ab82d573006cd8d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/89/ee8dec65020ca960d4f9b4e9202a6f3afcc821": "179811975f167a25017432cf3de1b134",
".git/objects/8f/e3994de6e0883c6457e29ed709e4b10ae16bd3": "beacc49e17af25a98f90f361451f4e15",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/d0fa668ba432d74a8e82653e509e1995abb187": "29906296fd7f64cb49871d5de3ef66a2",
".git/objects/75/9b977e15bbe01b2e5cf2e722a5ea385d5853ff": "6113ae65d30b7d139821f6cb17c6b287",
".git/objects/43/1da0ace3f500b8f1cfe483be1f59e08fd5ba30": "47a0fc5e4b614251a17276ac2de15495",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/8e7200c5df3f9bf68ffdf1650700d73f1bc4db": "02d57d4428b99768f11e0744f5eed732",
".git/objects/3f/a7ab7ba4dfd4e58fa5e49223e30c12d645dcf2": "d74774ab8c0c294c09d9ebeda1851066",
".git/objects/08/6bfdaed76a6ae9ea4cb56048b005a5919e3869": "f5e4d82e7f59487a45764de8ec0fc7fb",
".git/objects/99/aff7b1eb054d36b4aceb06f292578177cdd79b": "a0bf5c2989da195ea827cb253f922c11",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/a7/2572008fc6500c4dbf61ddddfb6ea68e0d2f69": "53fbe1fd8655c28e1755a7c52f02d395",
".git/objects/a7/3e298acc52d73a5b2e6d8b574ced852ca3fe83": "bad1c52cfbf8272b9614e58b62483b14",
".git/objects/d2/b5084feb3154236958c93692beae7ac22bedf1": "39521a0f0f8cd886cff2339180991c5e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/cc2add7d6f3dfa37ae5a09430efb31e11d3a04": "78873d16c855b3fc48dce5153d1cc918",
".git/objects/e8/603ff45ba55ef38081abd62ecc14f6274ffffd": "18550dc37cf89fb58e66cc38413c6cbf",
".git/objects/c2/a20f3967e6ddae1fa0c7c1701fef686afd7769": "ae71322f620a1501334eff6fff897f04",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/6fedafcdc64173c20b1321cd905225add0ec30": "1418299a60d78946ce98e6e4ab8bc3b5",
".git/objects/84/a82de305eb38289cb318128fd26dc661f03076": "c3b814e23753257ddc2ded445193ce2b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "50039ca4d56a420d0a620efbaee898d8",
".git/logs/refs/heads/master": "50039ca4d56a420d0a620efbaee898d8",
".git/logs/refs/remotes/origin/master": "980f8e64d515187ee298b86f17c4bbed",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4f9ddd156bc7c5038f1246ca54fe2f99",
".git/refs/remotes/origin/master": "4f9ddd156bc7c5038f1246ca54fe2f99",
".git/index": "a93f3317de3c05637428bbc89213200f",
".git/COMMIT_EDITMSG": "2832e21254f4d3b0ed755a827d07ce58",
"assets/AssetManifest.json": "c0bd04fdcf71ac738a264b7875066235",
"assets/NOTICES": "9b8f04fcbb208509e010c92f486cb28c",
"assets/FontManifest.json": "674ae311c12b2e2d6daa6c8343f87b77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/NunitoSans-Regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/fonts/NunitoSans-Bold.ttf": "4aa57ec2fb7650165f1f2fef64d61b2e",
"assets/fonts/NunitoSans-SemiBold.ttf": "6c7de16a9fe7eeb51fa02e3532c8c119",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/background/dark.png": "3c264a0f99c7aeb56b5462c920780338",
"assets/assets/background/light.png": "c03eb67beff6ae46fa89b9eff90b3c04",
"assets/assets/icons/logo.png": "32d57744f74b1b3b723fc1f1f50680ac",
"assets/assets/icons/google.svg": "648fa9faea73bcefeebcdd3c28c94c38",
"assets/assets/icons/closed_eye.svg": "1a43e274ece5276512a11d6982c25053",
"assets/assets/icons/logo.svg": "c53d6f690af48f57904e5d7d1fdbc531",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
