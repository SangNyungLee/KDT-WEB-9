const Comment = require('../model/MComment')    //모델에 있는거 갖다쓰는거

//exports 보내는거
exports.main = (req, res) =>{
    res.render('index');
};

exports.comments = (req, res)=>{
    res.render('comments',{commentInfos: Comment.comments()});  
                        //Comment는 위에서 가져온 변수, comments는 내가만든함수이름
};

exports.comment = (req,res)=>{ 
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id; 
    res.render('comment',console.log(Comment.comments()[2].comment));
    const comments = Comment.comments();
    console.log(comments[commentId -1]);
    res.render('comment', {commentInfo: comments[commentId-1]});
};