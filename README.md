# getir-case-study
## Table of Contents

- [Documentation](#documentation)
- [Setup](#setup)
  - [Dependecies](#dependecies)
  - [Getting Started](#getting-started)
- [Testing](#testing)

## Documentation

- Swagger Doc
https://getir-assignment-deploy.herokuapp.com/api-docs/#/Public_API

- Postman Doc
https://documenter.getpostman.com/view/17854788/UUy7cQgC

## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [Mongodb](https://github.com/mongodb/mongo) - A Document-based database management system
- [Mongoose](https://github.com/Automattic/mongoose) - A promise-based ODM for NodeJS

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Install and setup [Mongodb](https://www.mongodb.com/)
- Clone the repository (See command below)

  ```[bash]
  git clone https://github.com/MuppaAkhil/getir-case-study.git
  ```

- Run `cd getir-case-study` to enter the application's directory
- Install the application's dependencies by running the command
  ```
  npm install
  ```
- Start the application by running
  ```
  npm start
  ```
  The application should now be running at `http://localhost:3000`


## Testing

[Jest](https://jestjs.io) is used as the testing framework for unit tests.


```
  npm run test
```
