const User = require('../model/User')

exports.index = (req,res)=>{
    res.render('index')
}

exports.signin = (req,res) =>{
    res.render('signin')
}
exports.signup = (req,res) =>{
    res.render('signup')
}

exports.post_signup = (req,res) =>{

}
exports.post_signin = (req,res) =>{
    
}