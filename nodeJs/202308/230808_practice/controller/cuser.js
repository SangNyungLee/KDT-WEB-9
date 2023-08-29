const useInfo = require('../model/user')

exports.main = (req, res) =>{
    res.render('index');
};
    
exports.signup = (req, res) =>{
    res.render('signup');
};
 
exports.loginer = (req, res)=>{
    useInfo,loginer(req.body, (result)=>{
        console.log("result:", result)
    })
}
exports.signin = (req, res) =>{
    res.render('signin')
};

exports.profile = (req,res)=>{
    res.render('profile')
};

exports.writer = (req, res)=>{
    useInfo.writer(req.body, (result)=>{
        res.send({userid: req.body.userid, name : req.body.name, pw : req.body.pw})
    })
}