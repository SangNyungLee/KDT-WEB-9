const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()
const PORT = 8000

app.set('view engine','ejs')

app.use(cookieParser())

const cookieConfig ={
    httpOnly : true,
    maxAge: 60 * 1000, // 1min

};

app.get('/', (req,res)=>{
    //쿠키 생성해서 보내주는거
    console.log("쿠키생성", req.cookies);
    res.render('index', {popup: req.cookies.modal})
})
app.post('/setcookie', (req,res)=>{
    //쿠키생성
    res.cookie('modal', 'hide', cookieConfig);
    res.send({result:true, msg:'쿠키생성완료~'});
})

app.listen(PORT, (res)=>{
    console.log(`http://localhost:${PORT}`)
})