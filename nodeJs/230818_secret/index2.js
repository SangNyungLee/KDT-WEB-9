const bcrypt = require('bcrypt')
const saltNumber = 10; //상수로 설정

const bcryptPassword = (password)=>{
    return bcrypt.hashSync(password, saltNumber)
}

const comparePassword = (password, dbpassword)=>{
    return bcrypt.compareSync(password, dbpassword)
}