const express = require('express'); //1
const router = express.Router();  //2

//3    //4   //5          //6
router.get('/', function (req, res) {  // this callback function is sometimes called a handler function
//7
  res.send('Hey!!! This is a test route!');
});

router.get('/about', function (req, res){
  res.send('This is an ABOUT route!');
});
router.get('/contact', function (req, res){
  res.send({user: "kenn", email: "kenn@beastmode.com"});
});
router.get('/projects', function (req, res){
  res.send(['Project 1', 'Project 2']);
});
router.get('/users', function (req, res){
  res.send([
    {user: "Bill-Bob", email: "billy-bob@beastmode.com"},
    {user: "Larry", email: "lars@iupd.com"},
    {user: 'Q', email: "quetzalcoatl@aztec.com"}
  ]);
});
//8
module.exports = router;

