// Routings and paths

/*
In this scrim a separate website for retrotech is created and I will create a separate
folder called retrotech and put all the files there and keep this as documentation and notes
for the course as we continue. This retrotech website is a simple webstore for retro tech
products.

The thing to start with is how can I serve my store.

We have to make the paths OS agnostic. So we have to use the path module to create paths that work on all operating systems. We will use the path module to create paths for our static files and for our views.

*/

console.log(import.meta.dirname)