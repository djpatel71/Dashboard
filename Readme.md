<h1 align ="center" > EMD DASHBOARD  </h1>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  
## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

```
$ cd client
$ npm install chart.js (to install chart js dependencies)
$ npm install (to install client-side dependencies)
$ npm run dev(to start the client)
```

In the second terminal

- Create your MySQL database, which you will use as your database
- Supply the following credentials

```
# --- Terminal ---

$ cd server
$ npm install (to install server-side dependencies)
$ npm start (to start the server)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Responsive Design

##  Technologies used

This project was created using the following technologies.

###  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [SCSS](https://sass-lang.com/) - For User Interface
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.
 - [Char js](https://www.npmjs.com/package/chart.js) - For flexible JavaScript charting library for creating beautiful charts.


### Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [mysql](https://www.npmjs.com/package/mysql) - For authentication
- [cors](https://www.npmjs.com/package/uuid) - Provides a Connect/Express middleware

###  Database 

 - [MySQL ](https://www.mysql.com/) - It provides a free cloud service to store MongoDB collections.
