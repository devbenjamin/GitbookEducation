require('dotenv').config(); 

const express = require('express');
const app = express();
const test = require('./controllers/testcontroller')
const user = require('./controllers/usercontroller')
const sequelize = require('./db');
const bodyParser = require('body-parser');

sequelize.sync();  //tip: {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/api/test', function (req, res) {
    res.send("This is data from the /api/test endpoint. It's from the server.");
});
app.use('/test', test) // this routes everything to testcontroller. it listens for "/test", routes to testcontroller and makes that base URL .../test

app.use('/api/user', user)

app.listen(3000, function () {
    console.log("Yay, you don't completely suck at coding!! port: 3000")
});

