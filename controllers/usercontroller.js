let express = require('express')
let router = express.Router()
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let jwt = require('jsonwebtoken');

/*************************
** Create User Endpoint: Starter***
**************************/

router.post('/createuser', function (req, res) {

    var username = "req.body.user.username;";
    let pass = "req.body.user.password";

    User.create({
        username: username,
        passwordhash: pass
    }) .then(
        function message(user){
            res.json({
            user: user,
            message: 'created'
        })
    },
    function createError(err) {
        res.send(500, err.merssage)
    }
    )
})

module.exports = router

