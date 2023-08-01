const express = require('express')
const app = express();
const PORT = 8000;
// 순서중요
// 변수 제일위, 미들웨어 위, 서버는 제일아래(서버가 열렸는데 밑에 미들웨어가 있으면 못 읽음)


// body-parser  
app.use(express.urlencoded({extended:true}))    //url인코딩 방식
app.use(express.json());                        // json 방식

// view engine
app.set("view engine", 'ejs');
app.set('views', './views');


// 폼 전송방식(method) get, post 
//router
//홈화면
app.get('/', (req, res) =>{
    // console.log(req.body);
    res.render('index',{title : '폼 전송 실습'});
});
//get 요청 후 받는 화면
app.get('/getForm', (req,res) =>{
    console.log(req.query); //req.query get요청제출 했을 때 오는 id, pw값
    res.render('result', {
        title: "GET요청 폼 결과 확인하기",
        userInfo : req.query,  //아까 id pw값 넣는거임
    })
})
//get 넣는 화면
app.get('/getForm2', (req,res) =>{
    console.log(req.query);
    res.render('index2',{
        title2 : "GET으로 정보받기",
    })
})
//get 요청 받는 화면
app.get('/getForm2_result', (req, res) =>{
    console.log(req.query);
    res.render('result2',{
        userInfo : req.query,
    })
})
app.post('/postForm', (req,res) =>{
    console.log(req.body);
    res.render('result',{
        title : 'POST요청 폼 결과 확인하기',
        userInfo : req.body,
    })
})
app.get('/postForm2', (req,res)=>{
    res.render('index3',{

    })
})
app.post('/postForm2_result', (req,res)=>{
    res.render('result3',{
        userInfo : req.body,
    })
})

// listen으로 서버실행
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
// app.listen(PORT) 이렇게 해도 열린다.

