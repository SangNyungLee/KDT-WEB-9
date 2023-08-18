const { User } = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET = "mPsAfrfzZt"
let hash =''
const saltNumber = Number(process.env.SALT)
const bcryptPassword = (password)=>{
    return bcrypt.hashSync(password,saltNumber)
} 
const comparePassword = (password, dbPassword)=>{
    return bcrypt.compareSync(password, dbPassword)
}
exports.index = (req, res) => {
    res.render('index');
};
exports.signin = (req,res)=>{
    res.render('signin')
}
exports.signup = (req,res)=>{
    res.render('signup')
}
exports.post_index = (req, res)=>{
    res.send({result:true})
}

//로그인
exports.post_signin = async(req,res)=>{
    console.log("로그인바디", req.body)
    console.log("비번",req.body.pw)
    const password = bcryptPassword(req.body.pw)
    const password2 = comparePassword(req.body.pw, password)
    console.log("비밀번호~~~~~", password2)


    if(password2){
        const token = jwt.sign(req.body.userid, SECRET);
        const result = await User.findOne({
            where : {userid: req.body.userid}
        })
        localStorage.setItem("login",token)
        res.send(result)
        // res.send(result,{token})

        // res.send(result)
        // res.send(result, token)
        // console.log("토큰값",  token)
        // console.log("????????", result.userid)
        // console.log("????????", result.name)
    }
}
//회원가입
exports.post_signup = (req,res)=>{
    console.log("솔트값", process.env.SALT)
    const password = req.body.pw
    hash = bcryptPassword(password)
    console.log("해시값", hash)
    User.create({
        userid : req.body.userid,
        pw : hash,
        name : req.body.name
    }).then((result) =>{
        console.log(result)
        res.send(result)
    })
}

