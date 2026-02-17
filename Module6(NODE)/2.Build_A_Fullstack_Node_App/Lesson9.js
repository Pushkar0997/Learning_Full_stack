// ============================================
// Global variables in Node.js (Past and Present)
// ============================================

/*
Global variables in Node.js are variables that are accessible throughout the entire application without needing to be imported or required. They are defined in the global scope and can be accessed from any module or file within the application.

Some common global variables in Node.js include:

1. `__dirname`: This variable contains the directory name of the current module. It provides the absolute path to the directory where the current file is located.
   Example: /Users/username/projects/myapp/src
   
2. `__filename`: This variable contains the file name of the current module. It provides the absolute path to the current file.
   Example: /Users/username/projects/myapp/src/index.js
   
3. `global`: This is an object that provides access to global variables and functions. You can define your own global variables by attaching them to the `global` object.
   Example: global.myVariable = "value";

Note: The availability and implementation of these globals differ based on the module system (CommonJS vs ES Modules) and Node.js version.
*/


/* ====================================
   APPROACH 1: CommonJS Modules (Legacy)
   ====================================
   In CommonJS (the original Node.js module system), __dirname and __filename 
   are automatically available as global variables without any imports needed.
   This was the standard approach before ES Modules were introduced.
   
   To use this, uncomment the lines below and remove the ES Modules approach.
   Works in all Node.js versions without any additional setup.
*/

// console.log(__dirname)
// console.log(__filename)


/* ========================================================================================
   APPROACH 2: ES Modules (Node.js v12.20+, v14.13+, v16+) - Before v20
   ========================================================================================
   
   ES Modules (import/export syntax) don't have automatic __dirname and __filename 
   global variables like CommonJS does. To get the same functionality, we need to:
   
   1. Import the 'url' module to access import.meta.url
   2. Import the 'path' module to work with file paths
   3. Use url.fileURLToPath() to convert the ES Module URL to a file path
   4. Use path.dirname() to extract just the directory name
   
   - import.meta.url: Contains the absolute file URL of the current module
   - url.fileURLToPath(): Converts the file:// URL to a regular file system path
   - path.dirname(): Extracts the directory path from a full file path
*/

import path from 'node:path'
import url from 'node:url'

// Convert ES Module URL to file path and extract __filename
const __filename = url.fileURLToPath(import.meta.url)

// Extract directory from the full file path
const __dirname = path.dirname(__filename)

// Display the current file's full path and directory
console.log(__filename)
console.log(__dirname)


/* ========================================================================================
   APPROACH 3: ES Modules using import.meta (Node.js v20+)
   ========================================================================================
   
   Starting with Node.js v20+, the import.meta object provides native support for 
   __dirname and __filename directly, eliminating the need for manual conversions.
   
   - import.meta.filename: Automatically provides the full file path (equivalent to __filename)
   - import.meta.dirname: Automatically provides the directory path (equivalent to __dirname)
   
   Advantages:
   - Simpler and cleaner syntax
   - No need to import 'path' and 'url' modules
   - More straightforward for ES Module users
   - Better performance as it's native
   
   Disadvantages:
   - Only available in Node.js v20 and above
   - Not compatible with older Node.js versions
   
   If you have Node.js v20+, this is the recommended approach.
*/

// console.log(import.meta.dirname)
// console.log(import.meta.filename)


