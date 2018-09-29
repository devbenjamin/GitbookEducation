let express = require('express')
let router = express.Router()
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

/*************************
 ** Create User Endpoint: Starter***
 **************************/

router.post('/createuser', function (req, res) {

    let username = req.body.user.username;;
    let pass = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    }).then(
        function createsuccess(user) {
            let token = jwt.sign({
                id: user.id
            }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24
            });

            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            })
        },
        function createError(err) {
            res.send(500, err.merssage)
        }
    )
})

router.post('/signin', function (req, res) {
    User.findOne({
            where: {
                username: req.body.user.username
            }
        })
        .then(
            function (user) {
                if (user) {
                    bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                        if(matches) {
                            let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn:60*60*24});
                            res.json({
                                user: user,
                                message: "SUCCESSFULLY AUTHENTICATED",
                                sessionToken: token
                            })
                        } else {
                            res.status(502).send({ error: "YOU FAILED, YO! BOO!!! (502)"})
                        }
                    })
                } else {
                    res.status(500).send({
                        error: "FAILED TO AUTHENTICATE"
                    })
                }
            },
            function (err) {
                res.status(501).send({
                    error: "YOU FAILED, YO!!! (501)"
                })
            }
        )
})

module.exports = router