module.exports = function (sequalize, DataTypes) {
    return sequalize.define('user', {
        username: DataTypes.STRING,
        passwordhash: DataTypes.STRING
    })
}