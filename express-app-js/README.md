# Express app in JavaScript

This project is a simple app made with the [Express JS framework](https://expressjs.com/).

To run the app, clone the project into your system, and follow these steps:
1. Open this directory in your terminal.
2. Install the dependencies with `npm i`.
3. Start the app with `npm run start`.

# How does wireit work in this project?

To understand how wireit works, let's take a look at its `package.json`:
```JSON
{
  "name": "express-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "wireit"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "wireit": "^0.10.0"
  },
  "wireit": {
    "start": {
      "command": "node index.js",
      "service": true
    }
  }
}
```

In the npm and wireit scripts, we have a `start` field. Since this command only has one special need, you don't need to do much. `start`'s
only special need is `service`. Since this application doesn't terminate on its own you need to tell wireit about this. So, we set
`service` to `true` So that all `wireit`'s benefits will be applied correctly to `start`.
