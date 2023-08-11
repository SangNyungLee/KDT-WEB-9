const models = require('../models/')   //model에 있는 유저 쓸 수 있음

const {Op} = require('sequelize')
exports.index = (req, res)=>{
    res.render('index') //view폴더에 index.js불러오는거
};

exports.signup = (req, res) =>{
    res.render('signup')
};

exports.signin = (req,res) =>{
    res.render('signin');
}

exports.post_signup = (req,res) =>{
    models.User.create({
        name : req.body.name,
        userid : req.body.userid,      
        pw : req.body.pw,
    }).then((result)=>{
        console.log('result',result);
        res.send({result:true});
    })
};

exports.post_signin = (req,res)=>{
    //model 불러오기
    models.User.findOne({
        where: {userid : req.body.userid, pw : req.body.pw}
    }).then((result) =>{
        console.log('result',result)
        // res.send({result : true})
        if(result.length > 0){
            res.send({result:true, data: result})
        }else{
            res.send({result:true, data: null});
        }    
    });

    // User.post_signin(req.body, (result)=>{
    //     if(result.length > 0) {
    //         res.send({result: true, data: result[0]})    //성공하면 데이터 안에 result 0 번째 값 보내기
    //     }else{
    //         res.send({result:false, data: null});       //실패하면 null값 보낸다.
    //     }
    // })
};

exports.post_profile = (req, res) =>{
    models.User.findOne({
        where:{userid : req.body.userid}
    }).then(result =>{
            res.render('profile', {data:result})
    });
    // User.post_profile(req.body, (result)=>{
    //     if(result.length > 0){
    //         //일반 폼이기 때문에 render가 가능하다.
    //         res.render('profile', {data: result[0]})  // 배열로 오는 데이터 0번째
    //     }
    // });
};

exports.edit_profile = (req, res) => {
    models.User.update({
        name : req.body.name,   
        userid : req.body.userid,
        pw : req.body.pw,
    },{where : {id : req.body.id}
    }). then((result)=>{
        res.send({result:true})
    });
    // User.edit_profile(req.body, ()=>{
    //     res.send({result : true});
    // });
};

exports.delete_profile = (req, res) =>{
    models.User.destroy({
        where : {id : req.body.id},
    }).then((result)=>{
        res.send({result:true});
    });
    // User.delete_profile(req.body.id, ()=>{
    //     res.send({result : true});
    // });
};

exports.findall = (req, res)=>{
    models.User.findAll({
        //attributes 원하는 컬럼 조회
        attributes:['name', 'userid'],
        //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.ne(같지않은)
        //Op.or(또는), Op.in(배열 요소중 하나),Op.notIn(배열요소와 모두 다름)
        where: {id:{[Op.gte]:1, [Op.lt]:6}},
        //order는 배열로 온다.
        order:[['id','DESC']],  //id를 내림차순으로 출력
        limit: 1,
        offset: 1
    }).then((result)=>{
        console.log('findall', result)
        res.send({result})
    });
}