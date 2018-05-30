This is an attempt to deploy the react-express-babel app.. the following is from that readme

This living project is an example on how to get a React client, and a Node.js server to run.. This requires the running of both the client server and the api server "concurrently". Use the "dev" options to create a devoloper environment and the "production" option when ready to build the API code for production. The tools used in this project are React.js, Express.js, Babel-Register, Babel-CLI, Nodemon, Yarn and the Concurrently NPM package.

What is React ?
React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

What is Express.js ?
Express is a light-weight web application framework to help organize your web application into an MVC architecture on the server side.

What is Babel ?
Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

What is Nodemon ?
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

What is Concurrently ?
Allows you to run multiple commands concurrently.

Available Root Commands:

may substitute "yarn" for "npm run"

* "npm run devServer" - runs API with Nodemon & Babel

* "npm run server" - runs API with Node & Babel

* "npm run clean" - removes the dist directory which is where compiled production code is stored

- "npm run build" - removes dist, then recreates dist and places compiled code

* "npm run dev" - runs API developement server & client server concurrently with nodemon & Babel

* "npm run production" - compiles code in dist directory, runs production API server & client server concurrently with node

resources:

* Concurrently
  https://www.npmjs.com/package/concurrently

  https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0

* Babel
  https://www.youtube.com/watch?v=LtEP_-3a5CY

* Nodemon
  https://nodemon.io/
