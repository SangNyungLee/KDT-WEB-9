//models/index에서 index는 생략가능함
const {User} = require('../models/index.js')

//메인페이지
exports.main = (req,res)=>{
    res.render('index');
}
//회원가입페이지
exports.signup = (req,res)=>{
    res.render('signup')
}
//회원가입
exports.post_signup = async (req,res)=>{
    console.log(req.body)
    const {userid,name,pw} = req.body
    await User.create({userid, name, pw})
    res.send({result: true})
}