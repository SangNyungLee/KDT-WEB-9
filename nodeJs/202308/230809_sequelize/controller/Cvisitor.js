//model에 있는거 가져오기

const models = require('../models');
exports.main = (req,res) =>{
    res.render('index')
}
//캘린더
exports.calendar = (req,res)=>{
    res.render('calendar');
}
exports.post_calendar = (req,res)=>{
    console.log(req.body);
    req.body.forEach(res=>{
        models.calendar.create({
            username : "gildong",
            title : res.title,
            start : res.start,
            end : res.end
        })
    })
}
exports.eventData =async (req,res)=>{
    const modelData = await models.calendar.findAll({
        where :{username : "gildong"}
    })
    res.send(modelData);
}

//전체조회
exports.getVisitors = (req,res) =>{
    models.Visitor.findAll().then((result) =>{
        console.log('findAll', result);
        // res.render('visitor',{data:result});
        res.send({data : result, msg : '안녕하세요'});
    });
}   //SELECT는 배열이 반환되고, 
   // where로 찾아오면 객체로와서 []를 씌 워줘서 배열로 만들어준다.

//방명록 하나만조회
exports.getVisitor = (req,res)=>{
    models.Visitor.findOne({
        where : {id : req.query.id},
    }).then(result => {
        res.render('visitor', {data:[result]}) // 대괄호를 씌워서 객체를 배열로 만듬
    });
};

//방명록 하나 추가
exports.postVisitor = (req, res)=>{
    models.Visitor.create({
        name : req.body.name,
        comment : req.body.comment
    }).then(result =>{
        console.log(result)
        res.send({id: result.dataValues.id, name: req.body.name, comment: req.body.comment})
    })
};
//방명록 하나 수정
exports.patchVisitor = (req, res)=>{
    models.Visitor.update({
        name : req.body.name,    //바뀌고 싶은거
        comment : req.body.comment},{ where : {id : req.body.id}

    }).then(()=>{
        res.send({result:true});
    })
};

exports.deleteVisitor = (req,res)=>{
    models.Visitor.destroy({
        where : {id : req.body.id},
    }).then(()=>{
        res.send({result:true});
    });
};

