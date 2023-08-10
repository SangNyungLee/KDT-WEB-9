'use strict';
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//model 정의
db.Student = require('./Student')(sequelize)
db.Classes = require('./Classes')(sequelize)

//관계형성
// 1:다 관계형성, 한 사람은 여러개의 과목을 신청할 수 있다.
db.Student.hasMany(db.Classes, {foreignKey: 'student_id'})
db.Classes.belongsTo(db.Student, {foreignKey: 'student_id'})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
