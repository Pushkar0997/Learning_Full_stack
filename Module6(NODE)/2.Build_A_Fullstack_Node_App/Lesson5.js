// Aside: Path Module

/*
Current Working Directory: The directory from which the Node.js process is launched. It can be accessed using process.cwd().
Its the folder from which you run the node command. So if you run node from the root of your project, then the current working directory will be the root of your project. If you run node from a subfolder, then the current working directory will be that subfolder.
typically with the command like : node server.js

There are 2 kinds of Paths:

1. Absolute Path: An absolute path is a path that starts from the root of the file system. It is a complete path that specifies the location of a file or directory in the file system. For example, on Windows, an absolute path might look like C:\Users\Username\Documents\project\index.html, while on Unix-based systems, it might look like /home/username/project/index.html.
- Show the full location of a file or folder on the system, where your code is running. It starts with the root directory and includes all the directories leading to the file or folder.
- Always the same no matter where you run your code from. It is a fixed path that does not change based on the current working directory.(In our case server.js file)
- Independent of the current working directory. It does not change based on where you run your code from.
e.g. C:\Users\Username\Documents\project\index.html

2. Relative Path: A relative path is a path that is relative to the current working directory. It specifies the location of a file or directory in relation to the current working directory. For example, if the current working directory is C:\Users\Username\Documents\project, then a relative path to index.html would be ./index.html.
- Show the location of a file or folder relative to the current working directory.
- Change based on where you run your code from. If you run your code from a different directory, the relative path will be different.
- Dependent on the current working directory. It changes based on where you run your code from.
- Often includes special characters like . (current directory) and .. (parent directory) to navigate through the file system.
- We often see this in import statements and when we are trying to read files using the fs module. We use relative paths to specify the location of the file we want to read or import.
e.g. ./index.html or ../index.html
e.g. import {servestatic} from './utils/ServerStatic.js'

Relative path created with Path Module:
- Start from Current working directory and then navigate to the file or folder you want to access. The path module provides methods to create relative paths that are compatible with different operating systems, making your code more portable and flexible.
- Are therefore affected by the changes in the current working directory. If you change the current working directory, the relative paths will also change accordingly.
- That means they are not safe to use but they sometimes more flexible and easier to write. So we have to be careful when using relative paths and make sure that we are using them in the right context.

Path Module:
- Join path elements to create one path (absolute or relative) which will work on any operating system. It takes care of the differences in path separators (e.g., / for Unix-based systems and \ for Windows) and ensures that the paths are constructed correctly.
e.g. path.join(__dirname, 'public', 'index.html') will create an absolute path to the index.html file in the public folder, regardless of the operating system.

We will try to stick with absolute path during this project but will use relative paths when necessary.
- Cause if you have got a file you want to use in multiple places in your code, possibly called from various other utility function, then it is better to use relative path to import that file. This way, you can easily change the location of that file without having to change the import statements in all the files that are importing it.
*/

console.log(process.cwd())
import http from 'node:http'
import path from 'node:path'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res)=> {

  const absPathToResource = path.join(__dirname, 'public', 'index.html')
  const relPathToResource = path.join('public', 'index.html')
  /*
  Explaination:
  In the above code, we are using the path.join() method to create both an absolute path and a relative path to the index.html file located in the public folder.

  For the absolute path, we start with __dirname, which gives us the directory name of the current module (the directory where our server.js file is located). We then join it with 'public' and 'index.html' to create the full path to the index.html file. This will work regardless of where we run our code from, as it is based on the location of the server.js file.
  For the relative path, we simply join 'public' and 'index.html' without starting with __dirname. This creates a path that is relative to the current working directory. If we run our code from the root of our project, this relative path will work correctly. However, if we run our code from a different directory, this relative path may not work as expected, as it depends on the current working directory.
  */
  console.log('absolute: ', absPathToResource)
  console.log('relative: ', relPathToResource)

  res.statusCode = 200 
  res.setHeader('Content-Type', 'text/html')
  res.end()
})

server.listen(PORT, () => console.log('connected on port 8000'))