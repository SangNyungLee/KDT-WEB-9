const User = require('../models/Mindex.js');

var cookieConfig ={
    httpOnly : false,
    maxAge : 60 * 10000,
}

exports.main = (req, res)=>{
    res.render('index');
};

exports.post_main = (req, res)=>{
    console.log("checked", req.body.checked)
    console.log("쿠키", req.cookies)
    if(req.body.checked == true){
        res.cookie('myCookie', 'myValue',cookieConfig);
    }else{

    }
    
    res.send(req.body);
}


exports.module = User;