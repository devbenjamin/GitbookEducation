require('dotenv').config()

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    hose: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate()
    .then(() => console.log('postgress db ius connected'))
    .catch(err => console.log(err))

module.exports = sequelize;