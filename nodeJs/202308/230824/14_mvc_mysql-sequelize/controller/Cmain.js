const model = require('../model/Model');
//models/index에서 index는 생략
const {User} = require('../models'); 
const bcrypt = require('bcrypt')
const saltNumber = 10;

const bcryptPassword = (password)=>{
    return bcrypt.hashSync(password,saltNumber)
} 
const comparePassword = (password, dbPassword)=>{
    return bcrypt.compareSync(password, dbPassword)
}
////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    
    // console.log(req.params);
    // console.log(req.query);
    // model.db_profile(req.params, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    // findOne 데이터 베이스에서 하나의 정보를 찾을 때 사용
    // 객체를 반환함
    // where: 는 객체 형태로 찾을 정보를 입력
    User.findOne({
        where : {id : req.params.number}
    }).then((result)=>{
        res.render('profile', {data : result})
    })
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });


    const {userid, name} = req.body
    //create 데이터 생성
    const pw = bcryptPassword(req.body.pw)
    // 비밀번호 암호화해서 저장
    User.create({userid, name, pw}).then((result)=>{
        res.json({result:true});
    });
    // 실습과제 - 로그인
    // step1 : id를 찾아서 사용자 존재유/무 체크
    // step2 : 입력된 비밀번호 암호화 하여 기존 데이터와 비교
};
//로그인
const post_signin = async (req, res) => {

    // model.db_signin(req.body, (result) => {
    //     if (result.length > 0) {
    //         res.json({ result: true, data: result[0] });
    //     } else {
    //         res.json({ result: false });
    //     }
    // });
    await User.findOne({
        where : {userid: req.body.userid}
    }).then((result)=>{
        if(comparePassword(req.body.pw, result.pw)){
            res.json({result:true, data: result})
        }else{
            res.json({result : false});
        }
    });
};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });

    //update(param1,param2)
    //param1 : 수정될 정보를 객체형태로 입력
    //param2 : 수정될 곳 객체 입력
    const {name, pw, id} = req.body
    User.update({name : name, pw: pw},{where : {id:id}}).then(()=>{
        res.json({result:true});
    });
};

///////////////////////////////
//DELETE
//회원탈퇴 destroy()

const delete_profile = (req,res)=>{
    const {id} = req.body
    User.destroy({
        where :{id : id}
    }).then(()=>{
        res.json({result:true})
    })
}
module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
    delete_profile,
};
