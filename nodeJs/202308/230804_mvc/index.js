const express = require('express');
const app = express()
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//router 가져오기
//원래 : ./routes/index.js 
// 자동으로 index.js를 찾기 때문에 index.js파일이면 생략가능 만약에 파일이름이 다르면 적어줘야댐
const router = require('./routes');
app.use('/', router);
//예시
// const userRouter = require('./routes/user.js');
// app.use('/user', userRouter)  /user -> 얘가 root 파일이 됨 위에는 '/'


//맨 마지막 선언
app.get('*', (req, res)=>{
    res.render('404');
});
app.listen(PORT, ()=>{
    console.log(`http://localhost${PORT}`);
})
