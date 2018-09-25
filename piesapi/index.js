require('dotenv').config();

const express = require('express');
const app = express();
const pie = require('./controllers/piecontroller.js');

app.use(express.static(__dirname + '/public'));
console.log(__dirname);

app.get('/', (req, res) => res.render('index'));

app.use('/pies', pie) 

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}.`));

