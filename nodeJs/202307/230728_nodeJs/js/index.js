// nodejs 순서 중요하다.

const express = require("express"); 
// import expree from 'express';
const app = express(); // 함수형태로 불러와서 변수에 넣어준다.
const PORT = 8000;

app.set('view engine', 'ejs');    //set = 서버의 속성을 정하는 것, view engine의 속성을 ejs로 바꾸겠다.
app.set('views', './views');

//정적인 파일 불러오기
app.use( express.static('public'))
// app.use('파일이름', express.static('./public'))
//request , response 순서임!!
// app.get -> http 통신을 말하는거다.
// '/' -> 도메인임  이거 -> localhost:8000/
app.get('/', (req, res) =>{
    // res.send("Hello express ");
    // send() : 클라이언트에 응답 데이터를 보낼 때
    res.send({result: true, code:1000, message: "회원가입 성공", data:PORT});
})
// localhost:8000/kdt0 으로 들어가면 hello kdt9 라는 문구가 보이게 된다.
app.get('/kdt9', (req, res) =>{
    // res.send("Hello kdt9");
    res.render('prac1', {number:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}); 
    // 랜더링 메세지를 보내면서 데이터까지 보내줄 수 있다.
})
app.get('/test', (req, res) =>{

    res.render('test', {name:["apple", "banana", "grape", "peach"]}); 
    // 랜더링 메세지를 보내면서 데이터까지 보내줄 수 있다.
})
app.get('/prac2', (req, res) =>{
    res.render('prac2', {tag : "./test.ejs"}); 
})


app.listen(PORT, () => {    // . <- 객체 접근자
    console.log(`http://localhost:${PORT}`);
});