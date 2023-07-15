# Basic TypeScript app

This is a basic hello world application written in typescript.

Let's take a look at its `package.json`:
```JSON
{
  "name": "basic-ts-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "wireit"
  },
  "wireit": {
    "build": {
      "command": "tsc",
      "output": [
        "build"
      ]
    },
    "start": {
      "command": "node build/index.js",
      "dependencies": [
        "build"
      ]
    }
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "wireit": "^0.10.0"
  }
}
```

Looking at the `wireit` field, you'll see two other fields: `build` and `start`. `build` compiles your TypeScript project into JavaScript, while
`start` runs the JavaScript code.

For `start` to work, the TypeScript code has to be compiled into JavaScript. So we add `build` to `dependencies` list in `start`. This way anytime
you run the `start` command, wireit calls `build` first, then proceeds to run the command.
