let express = require('express')
let router = express.Router()
let sequlelize = require('../db')
let User = sequelize.import('../models/user')

/*************************
** Create User Endpoint: Starter***
**************************/

router.post('/createuser', function (req, res) {

    var username = "The Dude"
    let pass = "therugtiedtheroomtogether"

    User.create({
        username: username,
        passwordhash: pass
    }) .then(
        function message(){
            tes.send("I hate the Eagles, man")
        }
    )
})

module.exports = router

