//함수를 담은 변수 만들기
const User = function(sequelize, DataTypes){
    const model = sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement: true
            },
            
            userid:{
                type : DataTypes.STRING(20),
                allowNull : false,
            },

            name:{
                type : DataTypes.STRING(10),
                allowNull : false,
            },

            pw:{
                type : DataTypes.STRING(20),
                allowNull : false,
            }
        },
    )
    return model;
}

module.exports = User;