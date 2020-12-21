self.addEventListener('install', function(event) {
    console.log('SW installed.');
    event.waitUntil(
        caches.open('static')
        .then(function(cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/information.html',
                '/donation.html',
                '/preventions.html',
                '/treatments.html',
                '/login.html',
                '/register.html',
                '/donor.html',
                'css/style.css',
                'js/index.js',
                'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
                'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.10.1/css/mdb.min.css',
                'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js'
            ]);
        })
    );
});

self.addEventListener('activate', function() {
    console.log('SW activated.');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if (res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    )
})