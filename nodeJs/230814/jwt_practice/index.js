const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8000;
const SECRET = "mPsAfrfzZt"

const userInfo = {id:'kdt9', pw: '1234', name : '홍길동'};
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/',(req,res)=>{
    console.log("dir이름",__dirname)
    console.log("file이름",__filename)
    res.render('index')
})
app.get('/login', (req,res)=>{
    res.render('login')
})
app.get('/token', (req,res)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")
        try {
            const result = jwt.verify(token[1], SECRET)
            if(result.id === userInfo.id){
                res.json({result : true, name : userInfo.name})
            }
        } catch (error) {
            console.log(error)
            res.json({result:false, msg:'인증된 회원이 아닙니다.'});
        }
    }else{
        res.redirect('/login');
    }
})
app.post('/login', (req,res)=>{
    console.log("왓나")
    try {
        //객체 구조분해할당
        console.log("맞나", req.body)
        const {id,pw} = req.body;
        const {id : uId,pw : uPw} = userInfo;
        if(id === uId && pw === uPw){
            //로그인 할 때 토큰 만들어줌
            const token = jwt.sign({id}, SECRET);
            res.json({result:true, token}) ;
        }else{
            console.log(req.body)
            console.log("스탯에러")
            res.status(404).json({ result: false, message: '로그인 정보가 올바르지 않습니다' });
            res.send({result : true, message : "틀렷음"})
        }  
    } catch (error) {
        console.log("에러임")
        console.log(error)
    }
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})