const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
// const routes = require('./routes');
// const db = require('./db');
const app = express();
const chalk = require('chalk');

// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route


app.get("/", (req, res) => {
  res.send({
    message: "Express API works!"
  });
});


// db.connect();
// app.use('/api', routes);

// set port, listen for requests
config = {
    PORT: 3000
};
app.listen(config.PORT, () => {

  console.log(`Server is running in ${config.NODE_ENV} on ${chalk.green('http://localhost:'+ config.PORT)}.`);
});