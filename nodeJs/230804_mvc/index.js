const express = require('express');
const app = express()
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//  가상의 배열로 임시데이터
const comments =[
    {
        id: 1,
        userId: 'good',
        date : '2023-05-12',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userId: 'prule',
        date : '2023-12-09',
        comment: '반갑습니다.'
    },
    {
        id: 3,
        userId: 'borw',
        date : '2023-04-03',
        comment: '어서오세요'
    },
    {
        id: 4,
        userId: 'choco',
        date : '2023-11-20',
        comment: '누구세요'
    },
]
//router
app.get('/', (req,res)=>{
    res.render('index');
});
//Get /comments
app.get('/comments', (req, res)=>{
    res.render('comments',{commentInfos: comments});   //랜더링할 페이지랑, 데이터랑 두개 보내준거임(배열전체 보낸거임)
});                         // commentInfos에 comments의 객체를 보낸다.
//Get /comment
app.get('/comments/:id', (req,res)=>{    // /:id < 콜론하고 값 넣는거 중요함!!
    console.log(req.params);
    console.log(req.params.id);
    const commentId = req.params.id; // comments/:id 값을 가져오기 위해서 req.params를 이용해서 가져왓음
    console.log(comments[commentId -1]);
    res.render('comment', {commentInfo: comments[commentId-1]});
})

//맨 마지막 선언
app.get('*', (req, res)=>{
    res.render('404');
});
app.listen(PORT, ()=>{
    console.log(`http://localhost${PORT}`);
})
