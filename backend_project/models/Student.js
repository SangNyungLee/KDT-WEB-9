const {DataTypes} = require('sequelize');
// {} 이렇게안쓰면 type: DataTypes.DataTypes.INTEGER 이런식으로 써야댐

const studentModel = (sequelize =>{

    const Student = sequelize.define('student',{
        id:{
            type: DataTypes.INTEGER,
            allownNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        name:{
            type: DataTypes.STRING(15),
            allowNull : false,
        },
        major:{
            type: DataTypes.STRING(31),
            allowNull : false,
        }

    });
    return Student;
})

module.exports = studentModel;