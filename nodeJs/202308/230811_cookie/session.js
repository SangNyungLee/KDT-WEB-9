const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;


/* session 옵션 객체
httpOnly: 값을 true로 하면 사용자가 자바스크립트를 통해서 세션을 사용할 수 없도록 강제
secure: 값을 true로 하면 https에서만 세션을 주고 받음
secret : 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
-> 세션을 발급받을 때 사용되는 키(무조건 들어가는 값)
resave : 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션에
저장할 것인지, 세션에 항상 저장할건지 지정하는 값(보통(권장) false로 둠)
saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정

*/


app.use(cookieParser());
app.use(session({
    secret:'newJeans',
    secure : false,
    resave: false,
    saveUninitialized : true,
    cookie:{
        httpOnly:false,
        maxAge: 60*60*24,
    }
}));

app.get('/', (req, res)=>{
    //세션설정 req.session.키
    req.session.name = '홍길동'
    res.send("세션 설정 완료")

})
app.get('/name', (req,res)=>{
    // console.log(req.session.name)
    res.send({id:req.sessionID, name: req.session.name})
})
app.get('/destroy', (req, res)=>{
    req.session.destroy((err)=>{
        return;
    })
    res.redirect('/name')
    //예를들어 개인정보 페이지에서 세션정보를 지우고 나가야되는데 그 페이지가
    //계속유지되면 문제가 됨   
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})