//visitor에 대한 테이블 정의
const calendar = function(sequelize, DataTypes){
    //sequelize는 models/index.js에 있는 소문자 sequelize
    // -> 접속하는 경로
    //DataTypes는 models/index.js에 있는 대문자 Sequelize

    const model = sequelize.define(
        'calendar',
        {
            id :{
                type: DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement: true
            },
            name :{
                type : DataTypes.STRING,
                allowNull : true,
        
            },
            data:{
                type : DataTypes.STRING
            }
        },
        {
            tableName : 'calendar', 
            freezeTableName : true,
            timestamps: false,
        }

        );
        return model;
};

module.exports = calendar;