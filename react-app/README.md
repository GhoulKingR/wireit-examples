# React app 

This project is the default react app without any modifications except `package.json` made. All npm commands you use for interacting with react work fine in this project. But if you'd like to know how wireit works in this project, you can just read the next section.

## How does wireit work in this project?

Let's dive into `package.json`:
```JSON
{
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "wireit",
    "build": "wireit",
    "test": "wireit",
    "eject": "wireit"
  },
  "wireit": {
    "start": {
      "command": "react-scripts start",
      "service": true
    },
    "build": {
      "command": "react-scripts build",
      "files": ["build/"]
    },
    "test": {
      "command": "react-scripts test",
      "service": true
    },
    "eject": {
      "command": "react-scripts eject"
    }
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "wireit": "^0.10.0"
  }
}
```

To apply wireit in this project is simple. We just refactor the npm scripts. Then in each of the wireit scripts, we add the modifications to tell wireit how each of them run. For example, in `start` and `test` we label it as a service, and in `build` we add the `build/` folder so the script can gain the benefits of wireit caching.
