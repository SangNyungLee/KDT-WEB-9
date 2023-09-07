const express = require("express");
const router = express.Router(); //변수만들고 익스프레스에서 router만 가져오기
// 컨트롤러 한테 실행시켜줘 라는 명령어 -1
const controller = require("../controller/CComment");

// -2 밑에 애들이랑 똑같은거임
router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("comments/:id", controller.comments);

/*
//router 변수는 위에 선언한 변수이름임
router.get('/', (req,res)=>{
    res.render('index');
});
//Get /comments
router.get('/comments', (req, res)=>{
    res.render('comments',{commentInfos: comments});   //랜더링할 페이지랑, 데이터랑 두개 보내준거임(배열전체 보낸거임)
});                         // commentInfos에 comments의 객체를 보낸다.
//Get /comment
router.get('/comments/:id', (req,res)=>{    // /:id < 콜론하고 값 넣는거 중요함!!
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id; // comments/:id 값을 가져오기 위해서 req.params를 이용해서 가져왓음
    console.log(comments[commentId -1]);
    res.render('comment', {commentInfo: comments[commentId-1]});
})
*/
module.exports = router;
