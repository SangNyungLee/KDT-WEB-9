const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')

//cookie parser
//일반쿠키
// app.use(cookieParser())

//암호화 쿠키
app.use(cookieParser("newjeans"))


//cookie 옵션객체
const cookieConfig = {
    // httpOnly : 웹 서버를 통해서만 쿠키에 접근가능
    // 자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는 것을 차단
    // maxAge: 쿠키의 수명을 나타냄, 밀리초
    // expires : 만료날짜를 GMT시간으로 설정
    // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고
    // 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
    // 즉, 쿠키가 전송될 URL특정 가능(기본값: /)
    // domain : 쿠키가 전송될 도메인을 특정 가능(기본값 : 현재 도메인)  -> 자주안씀
    // secure : 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키를 서버에 전송 -> 자주씀
    // signed : 쿠키의 암호화를 결정 (req.signedCookies 객체에 들어있음)
    httpOnly : false,
    maxAge : 60 * 1000, //1분
    signed: true,
};

app.get('/', (req,res)=>{
    console.log(req.body);
    res.render('index')
});
app.post('/',(req, res)=>{
    console.log("req.body",req.body);
    res.send("??")
})
app.get('/setCookie', (req, res)=>{
    //쿠키이름, 쿠키값, 옵션객체 순서로 옴
    res.cookie('myCookie','myValue',cookieConfig);
    res.send('set Cookie');
})
app.get('/getCookie', (req, res)=>{
    // res.send(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);    //암호화쿠키
})
app.get('/clearCookie', (req, res)=>{
    res.clearCookie('myCookie','myValue',cookieConfig)  
    //위에 쿠키랑 값이 똑같아야함
    res.send('clear cookie');
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});