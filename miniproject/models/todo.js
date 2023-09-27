const {DataTypes} = require('sequelize');

const todo = (sequelize) =>{
    const todo = sequelize.define('todo',{
        id:{
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        title:{
            type : DataTypes.STRING(100),
            allowNull : false
        },
        done:{
            type : DataTypes.TINYINT(1),
            allowNull : false,
            default : 0
        }
    })
    return todo;
}
module.exports = todo;