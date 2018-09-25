const express = require('express');
const app = express();
const test = require('./controllers/testcontroller')
// const sequalize = require('./db');
//2

//3
 
//4

app.listen(3000) //5
app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});
app.use('/test', test) // this routes everything to testcontroller. it listens for "/test", routes to testcontroller and makes that base URL /test



