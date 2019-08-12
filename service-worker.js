importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// Force development builds
workbox.setConfig({ debug: true });



// Cache all files
workbox.routing.registerRoute(
    new RegExp('/'),
    new workbox.strategies.StaleWhileRevalidate()
);

// Cache JS files
workbox.routing.registerRoute(
    new RegExp('.+\\.js$'),
    new workbox.strategies.StaleWhileRevalidate()
);

// Cache CSS files
workbox.routing.registerRoute(
    new RegExp('.+\\.css$'),
    new workbox.strategies.StaleWhileRevalidate()
);
