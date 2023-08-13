const model = require('../model/Mindex');

exports.main = (req,res) =>{
    console.log("세션값 : ",req.session.member)
    res.render('index')
}
exports.signup = (req,res)=>{
    res.render('signup', )
}
exports.signin = (req,res)=>{
    res.render('signin')
}

exports.post_signup = (req,res)=>{
    model.post_signup(req.body, ()=>{
        res.send({result : true});
    });
}
exports.post_signin = (req,res)=>{
    console.log("req바디", req.body)
    model.post_signin(req.body, (result)=>{
        if(result.length > 0){
            req.session.member = result[0];
            
            res.send({result : true, data: result[0]});
        }else{
            res.send({result : false, data: null});
        }
    })
}

exports.profile = (req,res)=>{
    model.profile(req.body, (ab)=>{
        res.render('profile',{
            id: ab[0].id,
            userid: ab[0].userid,
            name : ab[0].name,
            pw : ab[0].pw,
        })
    })
}

exports.logout = (req, res)=>{
    req.session.member = null;
    res.send("<script> alert('로그아웃되었습니다.'); location.href='/';</script>")
    // req.session.destroy((err)=>{
    //     res.redirect('/')
    //     return;
    // })
}