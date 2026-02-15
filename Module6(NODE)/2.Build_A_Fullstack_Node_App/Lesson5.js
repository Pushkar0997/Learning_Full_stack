// Aside: Path Module

/*
Current Working Directory: The directory from which the Node.js process is launched. It can be accessed using process.cwd().
Its the folder from which you run the node command. So if you run node from the root of your project, then the current working directory will be the root of your project. If you run node from a subfolder, then the current working directory will be that subfolder.
typically with the command like : node server.js

There are 2 kinds of Paths:

1. Absolute Path: An absolute path is a path that starts from the root of the file system. It is a complete path that specifies the location of a file or directory in the file system. For example, on Windows, an absolute path might look like C:\Users\Username\Documents\project\index.html, while on Unix-based systems, it might look like /home/username/project/index.html.
- 

*/

console.log(process.cwd())