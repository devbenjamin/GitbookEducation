module.exports = function (sequelize, DataTypes) {
    return sequalize.define('test', {
        testdata: DataTypes.STRING
    })
}