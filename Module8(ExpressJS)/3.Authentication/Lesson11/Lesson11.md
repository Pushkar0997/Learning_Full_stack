# Environment Variables

An Environmnet can be your local machine, a staging server, or a production server. Each environment has its own set of variables that can be used to configure the application. For example, you might have a different database URL for your local machine than you do for your production server.

Basically, environment variables are a way to store configuration values outside of your code. This allows you to easily change the configuration without having to modify your code.

And these variabes are accessible in any file in our application through the `process.env` object. For example, if we have an environment variable called `SPIRAL_SESSION_SECRET`, we can access it in our code like this:

```javascript
const secret = process.env.SPIRAL_SESSION_SECRET
```

We can set environment variables in a `.env` file in the root of our project. For example, we can create a `.env` file with the following content:

```
SPIRAL_SESSION_SECRET = jellyfish-baskingshark
```

Then, we can use the `dotenv` package to load the environment variables from the `.env` file into our application. We can do this by adding the following code to our main server file (e.g., `server.js`):

```javascript
import dotenv from 'dotenv'

dotenv.config()
```
Here, we are importing the `dotenv` package and calling the `config()` method to load the environment variables from the `.env` file into our application. After this, we can access the environment variables using `process.env`.

We can also set environment variables directly in the terminal before starting our application. For example, we can run the following command to set the `SPIRAL_SESSION_SECRET` environment variable:

```bash
export SPIRAL_SESSION_SECRET=jellyfish-baskingshark
```

We generally use environment variables to store sensitive information such as API keys, database connection strings, and session secrets. This way, we can keep this information out of our codebase and easily change it without having to modify our code.

And in order to use environment variables in our application, we need to make sure that we have the `dotenv` package installed and configured properly, and that we have set the necessary environment variables either in a `.env` file or directly in the terminal.

And to prevent our application from crashing if an environment variable is not set, we can provide a default value. For example, we can set a default value for the `SPIRAL_SESSION_SECRET` environment variable like this:

```javascript
const secret = process.env.SPIRAL_SESSION_SECRET || 'jellyfish-baskingshark'
```

When we are pushing our code to a public repository, we should make sure to add the `.env` file to our `.gitignore` file to prevent it from being committed to the repository. This way, we can keep our sensitive information secure and avoid accidentally exposing it to the public.

We can add the following line to our `.gitignore` file:

```
.env
```

And this list can go on and on, but the main point is that environment variables are a powerful tool for managing configuration in our applications, and they allow us to keep sensitive information out of our codebase while still making it easily accessible when needed.

We also make a `.env.example` file that contains the names of the environment variables that we are using in our application, but without the actual values. This way, other developers can see which environment variables they need to set up in order to run the application. For example, our `.env.example` file might look like this:

```
SPIRAL_SESSION_SECRET=
```

This tells other developers that they need to set the `SPIRAL_SESSION_SECRET` environment variable in order to run the application, but it does not expose the actual value of the secret.