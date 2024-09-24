import { serve } from 'bun';

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('Hello ice tea', { status: 200 });
        } else if (url.pathname === '/ice-tea') {  // Adjust this path as needed
            return new Response('ice tea is a good option', { status: 200 });
        } else {
            return new Response('404 Not found', { status: 404 });
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
});

// import { serve } from 'bun';

// serve({
//     fetch(request) {
//         // Construct an absolute URL by prepending the request's origin
//         const url = new URL(request.url, `http://${request.headers.get('host')}`);

//         if (url.pathname === '/') {
//             return new Response('Hello ice tea', { status: 200 });
//         } else if (url.pathname === '/some-path') {  // Adjust this path as needed
//             return new Response('ice tea is a good option', { status: 200 });
//         } else {
//             return new Response('404 Not found', { status: 404 });
//         }
//     },
//     port: 3000,
//     hostname: '127.0.0.1'
// });

