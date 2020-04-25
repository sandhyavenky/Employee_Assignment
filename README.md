# Employee - CRUD Operations

Simple Employee Record maintaining details with React.js,Node.js with ExpressJS and AWS Dynamo DB with IDE being VScode

## Table of Contents

1 Synopsis

2 Technologies

3 Setup

4 Launch

5 Description


## Synopsis

Employee-Crud operation is a small basic application which revolves around the 4 basic operations namely Create, Read, Update and Delete followed by some validations making it quite a real web application.

## Technologies
###### Project is created with

* React Bootstrap
* React DOM
* Axios
* ExpressJS
* AWS DynamoDB
* Visual Studio Code

## Set up

Install VS code

###### Run commands in terminal

$ nvm installation
$ nvm run node --version
version -> v13.1.0 (npm v6.14.4)
$ nvm yarn

###### Run commands for the backend service rendereing by ExpressJS

$ cd myapplication
$ npm init
$ npm install --save express

###### Run command to install the Axios connecting Express and React application

$ npm install --save axios

## Launch
###### To create react app, run following commands in terminal

$ npx create-react-app myapplication

$ cd myapplication

$ npm start (this will start the created react application and VS code will open where we start playing with our creativity)

###### To run this project, install it locally using npm or using yarn

$ yarn start

###### To run the application in Express JS

$ node index.js

## Description

* Connect the Dynamo DB to the Express JS by mentioning the connection keys and URL
* In VS code of Express application, create a table "CreateEmployee" in AWS Dynamo Db
* Create main index.js in Express application and use the http methods to perform CRUD operations from React frontend to store and make changes in AWS
* Design the front end in React.js in the IDE VScode
* Use API calls which connects to the Express which is inturn connected to AWS Dynamo DB
