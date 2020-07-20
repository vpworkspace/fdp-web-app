fdp-web-app
==============

Flex Debt Planner (FDP) is a web app built to solve problems for customers/borrowers. Idea is to build app which can provide useful insights/tips via dashboard so that customer can take informed decisiion to manage term loans in difficult situation. 

FDP was idea found by team "IBotInterface". This App will connect to FDP, Open Banking and Zoom APIs.
Pre-requisites
--------------

* You should have NODE JS installed on your system. You can download and install nodejs from [here](https://nodejs.org/en/download/).
* To check the version of node, use command 'node -v'
* Once nodejs is installed, install lerna by using the command

``` nowrap
npm install -g lerna
```

Usage
-----

### Install

First, install the dependencies:

``` nowrap
npm install
```

### Running the app

Create an enviroment file (.env) file in /packages/web-app folder and add an entry for REACT_APP_ACCOUNT_ID. This account id will be used for for fetching various details of an account.

You can also add an entry for PORT (optional) if facing any issue with port while running the application. This will run your app on the specified port number if added otherwise will point to the default port. 

``` nowrap
PORT=4001
REACT_APP_ACCOUNT_ID=11111111
```
To run the application, use command:

``` nowrap
npm start
```
