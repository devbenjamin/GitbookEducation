const express = require('express')
const router = express.Router()
const sequelize = require('../db');
const TestModel = sequelize.import('../models/test');


/****************************************
 * Controller Method #1: Simple Response
 *****************************************/
router.post('/one', function (req, res) { // this callback function is sometimes called a handler function
  res.send('Test one');
});

/****************************************
 * Controller Method #2: Persisting Data
 ****************************************/
router.post('/two', function (req, res) {
  let testData = "Test data for endpoint two";

  TestModel
    .create({
      testdata: testData
    }).then(dataFromDatabase => {

      res.send("Test two went through!")

    })
})

/****************************************
 * Controller Method #3: req.body
 ****************************************/
router.post('/three', function (req, res) {
  let testData = req.body.testdata.item;

  TestModel
    .create({
      testdata: testData
    })
  res.send("Test three went through!")
  //console.log("Test three went through!")
});

/****************************************
 * Step 4:: use this with postman
 ****************************************/

router.post('/four', function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData
  })
  .then (
    function message() {
      res.send("Test 4 went through!!")
    }
  )
})

/*********************
 * Route 5: Return data in a Promise
 **********************/
router.post('/five', function (req, res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata: testData
  })
  .then(
    function message(data) {
      res.send(data)
    }
  )
})

/*********************
 * Route 6: Return response as JSON
 **********************/
router.post('/six', function (req,res) {
  let testData = req.body.testdata.item;
  TestModel.create({
    testdata:testData
  })
  .then(
    function message(testdata) {
      res.json({
        testdata: testdata
      })
    }
  )
})



// router.get('/about', function (req, res) {
//   res.send('This is an ABOUT route!');
// });

// router.get('/contact', function (req, res) {
//   res.send({
//     user: "kenn",
//     email: "kenn@beastmode.com"
//   });
// });
// router.get('/projects', function (req, res) {
//   res.send(['Project 1', 'Project 2']);
// });
// router.get('/users', function (req, res) {
//   res.send([{
//       user: "Bill-Bob",
//       email: "billy-bob@beastmode.com"
//     },
//     {
//       user: "Larry",
//       email: "lars@iupd.com"
//     },
//     {
//       user: 'Q',
//       email: "quetzalcoatl@aztec.com"
//     }
//   ]);
// });

module.exports = router;