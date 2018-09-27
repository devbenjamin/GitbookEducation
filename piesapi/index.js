require('dotenv').config();

const express = require('express');
const app = express();
const pie = require('./controllers/piecontroller.js');
const user = require('./controllers/usercontroller.js')
const sequelize = require ('./db')
const bodyParser = require('body-parser')

sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (req, res) => res.render('index'));

app.use('/pies', pie) 
app.use('/auth', user)

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}.`));

