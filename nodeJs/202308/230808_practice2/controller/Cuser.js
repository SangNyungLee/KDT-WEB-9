const User = require('../model/User');  //model에 있는 유저 쓸 수 있음

exports.index = (req, res) => {
    res.render('index');    //view폴더에 index.js불러오는거
};
exports.signup = (req, res) => {
    res.render('signup');
};

//라우터에 router.post('/signup', controller.post.signup); << 이거 다음에 만듬
exports.post_signup = (req, res) => {
    //model
    // 얘를 써서 model에 있는 postsignup을 사용함
    User.post_signup(req.body, () => {
        res.send({ result: true }); //제대로 보내지면 true가 출력됨
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signin = (req, res) => {
    //model 불러오기
    User.post_signin(req.body, (result) => {
        if (result.length > 0) {
            res.send({ result: true, data: result[0] }); //성공하면 데이터 안에 result 0 번째 값 보내기
        } else {
            res.send({ result: false, data: null });    //실패하면 null값 보낸다.
        }
    })
}

//req.body에서 받아옴
exports.post_profile = (req, res) =>{
    User.post_profile(req.body, (result)=>{
        if(result.length > 0){
            //일반 폼이기 때문에 render가 가능하다.
            res.render('profile', {data: result[0]})  // 배열로 오는 데이터 0번째
        }
    });
};

exports.edit_profile = (req, res) => {
    User.edit_profile(req.body, ()=>{
        res.send({result : true});
    });
};

exports.delete_profile = (req, res) =>{
    User.delete_profile(req.body.id, ()=>{
        res.send({result : true});
    });
};

exports.module = User;