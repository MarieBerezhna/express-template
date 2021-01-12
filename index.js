const express = require("express");
const config = require('dotenv').config();


const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const cors = require('cors');
// const db = require('./db');
const app = express();
const chalk = require('chalk');
const path = require('path');

const bcrypt = require('bcrypt');
const ejs = require('ejs');

const fs = require('fs');
// custom tools:
const auth = require('./utils/auth');
const formatDateTime = require('./utils/formatDateTime');
const sendMail = require('./utils/sendMail');

const genericError = 'Oops! It\'s not you, it\'s us. There\'s been a server error. Please try again later or get in touch with admin.';


// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
// app.set("views", __dirname + "/public");
app.set('views','./views');
app.use(express.static('public'));
// simple route
// db.connect((err) => {
//   console.log('db connected');
//   if (err) throw err;
// });

app.get("/", (req, res) => {
  res.render(path.join(__dirname, 'views/index.ejs'));
});

app.listen(process.env.PORT, () => {

  console.log(`Server is running in ${process.env.NODE_ENV} on ${chalk.green('http://localhost:'+ process.env.PORT)}.`);
});