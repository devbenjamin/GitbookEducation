const express = require('express')
const router = express.Router()
const sequelize = require('../db');



// router.post('/one', function(req, res) {
//   res.send('Test went through!!! You rock!!!!')
// });
router.post('/one', function(req, res){
  res.send("Test 1 went through!")
});

// router.get('/', function (req, res) {  // this callback function is sometimes called a handler function
//   res.send('Hey!!! This is a test route!');
// });
// router.get('/about', function (req, res){
//   res.send('This is an ABOUT route!');
// });
// router.get('/contact', function (req, res){
//   res.send({user: "kenn", email: "kenn@beastmode.com"});
// });
// router.get('/projects', function (req, res){
//   res.send(['Project 1', 'Project 2']);
// });
// router.get('/users', function (req, res){
//   res.send([
//     {user: "Bill-Bob", email: "billy-bob@beastmode.com"},
//     {user: "Larry", email: "lars@iupd.com"},
//     {user: 'Q', email: "quetzalcoatl@aztec.com"}
//   ]);
// });


module.exports = router;

