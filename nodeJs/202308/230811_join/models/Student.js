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
        userid:{
            type : DataTypes.STRING(31),
            allownNull : false,
        },
        password:{
            type : DataTypes.STRING(255),
            allownNull : false,            
        },
        email : DataTypes.STRING(63),
        
        });
    return Student;
})

module.exports = studentModel;