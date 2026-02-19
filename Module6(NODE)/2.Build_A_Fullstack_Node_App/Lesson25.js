// Intro to Nodemon

/*
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

To install nodemon, you can use npm:
npm install --save-dev nodemon
or 
npm install -D 

This extra flag is just a shorthand for --save-dev, which tells npm to add nodemon to the devDependencies section of your package.json file. This is a common practice for tools that are only needed during development and not in production.

Once you have nodemon installed, you can start your server using nodemon instead of node. For example:
nodemon server.js,
or if you have a start script defined in your package.json file, you can use:
npm run dev

we have to change our script file in package.json to use nodemon instead of node. For example:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

we have to use npm run dev to start the server with nodemon. This will allow us to see the changes we make to our code without having to manually restart the server every time.
and run is always used whevenver we want to run a script defined in the package.json file. It tells npm to execute the specified script, which in this case is "dev" that we defined to use nodemon.
It is used for everything in script except for the start script, which can be run with npm start without the run keyword.

This is A hot reload feature that nodemon provides, which is very useful for development as it saves time and allows for a smoother workflow.

THe nodemon works by watching the files in your project for changes. When it detects a change, it automatically restarts the server, allowing you to see the effects of your changes immediately without having to manually stop and start the server.
And only for server side node file and not our front end files. So we can make changes to our HTML, CSS, and client-side JavaScript files without needing to restart the server, which is very convenient for development.
We can search for frotend hot reaload tools like live-server or browser-sync to achieve hot reload for our front end files.

- it is a development tool that automatically restarts the server when changes are detected in the source code, saving time and improving workflow during development.
- It is installed as a dev dependency and can be run using npm scripts defined in the package.json file.
- It watches for changes in server-side files and restarts the server, but does not affect front-end files, allowing for seamless development of both server and client-side code.
- It is a convienience tool that enhances the development experience by providing hot reload functionality for server-side code, allowing developers to see changes in real-time without manual restarts.
- it doesn't affect how node works in production, as it is only a development tool and should not be used in a production environment.
- its configurable and can be customized to watch specific files or directories, ignore certain files, and run specific commands on restart, making it a flexible tool for various development needs.

The configuration is done in the package.json file under the "scripts" section, where you can define a script to run nodemon with specific options. For example:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js --watch src --ext js,html"
}
*/