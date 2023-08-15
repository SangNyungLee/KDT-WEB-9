const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;

const SECRET = 'gumiho'
const userInfo = {id:'kdt9', pw: '1234', name : '홍길동'};

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/login', (req,res)=>{
    res.render('login')
})


app.post('/login',(req,res)=>{
    console.log("로그인바디 :",req.body)
    console.log("유저아이디", userInfo.id)
    if(req.body.id == userInfo.id && req.body.pw == userInfo.pw){
        const token = jwt.sign(req.body.id, SECRET);
        res.send({result : true, token})
    }else{
        console.log("아님 ㅋㅋ")
    }
})

app.get('/token', (req,res)=>{
    console.log("헤더부분", req.headers.authorization)
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")
        const result = jwt.verify(token[1], SECRET)
        if(result == userInfo.id){
            console.log("보내요~")
            res.send({result : true, userInfo})
        } else{
            res.send({result : false})
        }
    }else{
        res.redirect('/login')
    }
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});