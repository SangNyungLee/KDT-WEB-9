//model에 있는거 가져오기
const Visitor = require('../model/Visitor');


exports.main = (req,res) =>{
    res.render('index')
}
exports.getVisitors = (req,res) =>{

    Visitor.getVisitors((rows)=>{   //얘 다시연구좀해보기
        res.render('visitor',{data: rows}); //콜백함수 형태로 넣어야 된다.
    });
}

//방명록 하나만조회
exports.getVisitor = (req,res)=>{
    Visitor.getVisitor(req.query.id, (result)=>{
        res.render('visitor', {data: result});
    })
};

//방명록 하나 생성
exports.postVisitor = (req, res)=>{
    Visitor.postVisitor(req.body, (result)=>{
        res.send({id: result.insertId, name: req.body.name, comment: req.body.comment})
    });
};

exports.patchVisitor = (req, res)=>{
    Visitor.patchVisitor(req.body, ()=> {
        res.send({result : true});
    });
};

exports.deleteVisitor = (req,res)=>{
    Visitor.deleteVisitor(req.body, ()=>{
        res.send({result : true});
    });
};