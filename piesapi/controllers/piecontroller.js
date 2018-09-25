const express = require('express');
const router = express.Router(); 

router.get('/pies', function (req, res){
    res.send('I love Pie!!! Wheee!!!!');
  });


module.exports = router;