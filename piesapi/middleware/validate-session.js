const jwt = require ('jsonwebtoken')
const User = require('../db').import('../models/user')

const validateSession = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, process.env.JWT_SECRET, (err,decodedToken) => {
        if(!error && decodedToken) {
            User.findOne({ where: { id: decodedToken.id }})
            .then (user => {
                if(!user) throw 'err'  //if theis will kick out of the funtion because throw 'err is the return
                req.user = user
                return next()
            })
            .catch(err => next(err))
        } else{
            req.errors = err 
            return next()
        }
    })
}

module.exports = validateSession

