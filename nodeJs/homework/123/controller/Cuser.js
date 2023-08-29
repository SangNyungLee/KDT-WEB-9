const User = require('../model/User');

exports.index = (req, res) => {
    res.render('index');
};
exports.signup = (req, res) => {
    res.render('signup');
};
exports.post_signup = (req, res) => {
    //model
    User.post_signup(req.body, () => {
        res.send({ result:true });
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signin = (req, res) => {
    //model
    User.post_signin(req.body, (result) => {
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        }
    });
};

exports.profile = (req, res)=>{
    User.profile(req.body, (abcd)=>{
        console.log("abcd",abcd)
        res.render('profile',{
            id: abcd[0].id,
            userid: abcd[0].userid,
            name : abcd[0].name,
            pw : abcd[0].pw,
        })
    })
}

exports.edit = (req, res)=>{
    User.edit(req.body, () => {
        res.send({ result:true });
    });
}
exports.del = (req, res)=>{
    User.del(req.body, ()=>{
        res.send({ result:true });
    })
}