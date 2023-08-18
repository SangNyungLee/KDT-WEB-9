const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = 'secretKey'
exports.index = (req, res) => {
    res.render('index');
};
exports.get_register = (req, res) => {
    res.render('register');
};
exports.get_login = (req, res) => {
    res.render('login');
};
exports.get_token = async(req,res)=>{
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")
            const result = jwt.verify(token[1], secret)
            console.log("rsultresul", result)
            const moa = await User.findOne({
                where:{userid: req.query.userid},
            });
            if(result.userid == req.query.userid){
                res.send({result:true, moa})
            }else{
                res.send({result:false})
            }
        }
    } catch (error) {
        console.log(error)
    }
}
//회원가입
exports.register = async (req,res)=>{
    try{
        const {userid, pw, name} = req.body;
        const hashPw = bcryptPassword(pw);
        const result = await User.create({
            userid,
            name,
            pw: hashPw
        });
        if(result){
            res.json({result:true});
        }
    } catch(error){
        console.log(error);
    }
};

//로그인
exports.login = async (req,res)=>{
    try {
        console.log(req.body)
        const{userid,pw} = req.body;
        const result = await User.findOne({
            where : {userid},
        });
        if(!result){
            res.json({result:false, message: '사용자가 존재하지 않습니다.'});
        }
        const compare = comparePassword(pw, result.pw);
        if(compare){
            const token = jwt.sign({userid}, secret);
            console.log("토큰값", token)
            res.json({result:true, token, userid});
        }else{
            res.json({result:false, message: '비밀번호가 일치하지 않습니다.'})
        }
    } catch (error) {
        console.log(error)
    }
}

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, 10);
};
const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);
};