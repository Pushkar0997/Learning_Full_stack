// Routings and paths

/*
In this scrim a separate website for retrotech is created and I will create a separate
folder called retrotech and put all the files there and keep this as documentation and notes
for the course as we continue. This retrotech website is a simple webstore for retro tech
products.

The thing to start with is how can I serve my store.

Checklist for serving our website:
Reading and Serving data:
1. Identify what resource the client wants(in this case index.html)
2. Identify the path to the resource:
- The current module's directory
- The path to the resource from the current module's directory(Path module)
3. Read the resource we want to serve using FS module
4. Send the resource to the client

Now we have to identify the path to the resource.
But we have a problem although the file system is the same on all operating systems,
 the way we write paths is different on different operating systems. For example, on
 Windows we use backslashes to separate directories, while on Unix-based systems we use 
 forward slashes. This can cause problems when we are trying to serve our website on
 different operating systems.

So before we can read the resource we want to serve, we need to identify the path to the resource.
And we don't want to hardcode the path to the resource because that would make our code less flexible and less portable. We want to be able to run our code on any operating system without having to change the paths in our code.
We wil also have issue when collaborating with other developers who are using different operating systems. If we hardcode the paths in our code, then we will have to change the paths every time we want to run our code on a different operating system.
And also what could happen when we deploy our code to a server that is running a different operating system than the one we are developing on. If we hardcode the paths in our code, then we will have to change the paths every time we want to deploy our code to a different server.

We have to make the paths OS agnostic. So we have to use the path module to create paths that work on all operating systems. We will use the path module to create paths for our static files and for our views.

We can use file paths by import.meta
- import.meta is an specific object in modular Js Environments that contains metadata about the current module. It provides information such as the URL of the module, the directory of the module, and other relevant details. This allows us to access the file paths in a way that is compatible with different operating systems, making our code more portable and flexible.
- import.meta.dirname returns the directory name of the current module(file).

If you are old school and not working in modular JS environment, node make this directory name available to you, you can use __dirname to get the directory name of the current module(file). But in modular JS environment, __dirname is not available, so we have to use import.meta.dirname instead.

So we will use this convention here:

const __dirname = import.meta.dirname

But we face the same issue again when we want to create the path to the resource we want to serve. We don't want to hardcode the path to the resource because that would make our code less flexible and less portable. We want to be able to run our code on any operating system without having to change the paths in our code.
So we will look into path module to create paths that work on all operating systems. We will use the path module to create paths for our static files and for our views.
const filePath = `${__dirname}/public/index.html`
*/

console.log(import.meta.dirname)