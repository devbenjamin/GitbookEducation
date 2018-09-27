module.exports = (sequalize, DataTypes) => {
    const User = sequalize.define('user', {
        firstName:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{ 
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{ 
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })


return User
}
