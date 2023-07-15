# Express app in TypeScript

This project is a simple app written in Express JS.

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
    "@types/express": "^4.17.17",
    "wireit": "^0.10.0"
  },
  "wireit": {
    "build": {
      "command": "tsc",
      "output": [
        "build/"
      ],
      "files": ["*.js"]
    },
    "start": {
      "command": "node build/index.js",
      "service": true,
      "dependencies": [
        "build"
      ]
    }
  }
}
```

In the npm scripts, we have `start`, and in the wireit scripts we have `build` and `start`. The `build` script in wireit scripts is local
to other wireit scripts. That means you can't call it from outside.

In the wireit scripts, `build` compiles the TypeScript project to JavaScript, while `start` runs the compiled TypeScript code. For `start` to
run, the TypeScript code needs to be compiled. So we can solve this problem by adding `build` to `start`'s `dependencies` list. This way when
you run the `start` command, wireit calls the `build` command first and then runs the command.
