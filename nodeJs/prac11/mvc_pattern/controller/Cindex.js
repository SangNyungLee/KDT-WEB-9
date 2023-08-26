const model = require('../model/Mindex.js');

//메인
exports.main =(req,res)=>{
    res.render('index')
}
//회원가입
exports.signup = (req,res)=>{
    res.render('signup')
}
exports.post_signup = (req,res)=>{
    model.post_signup (req.body,()=>{
        res.json({result : true});
    })
}
exports.post_signin = (req,res) =>{
    model.post_signin(req.body,()=>{
        res.json({result : true})
    })
}
//로그인
exports.signin = (req,res)=>{
    res.render('signin')
}

// 회원정보 조회하기
exports.userinfo = (req, res)=>{
    res.render('userinfo')
}
exports.post_userinfo = (req,res)=>{
    model.post_userinfo(req.body, (data)=>{
        res.json(data)
    })
}
//회원 추가하기
exports.useradd = (req,res)=>{
    model.useradd(req.body, (data)=>{
        console.log('데이터뭐임', data)
        res.render('useradd', {data: data});
    })
}

exports.post_useradd = (req,res)=>{
    model.post_useradd(req.body, (data)=>{
        console.log("??", data);
        console.log("1!!!", data.insertId)
        res.send({result:true, data});
    })
}