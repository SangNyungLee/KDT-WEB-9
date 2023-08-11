const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 8000

//view endine
app.set('view engine','ejs');   // 앞에오는거 key, 뒤에오는게 값
app.set('views', './views');    //
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//쿠키
app.use(cookieParser())

//router가져오기
const router = require('./routes');
app.use('/', router);


//맨 마지막 선언
app.listen(PORT, ()=>{
    console.log(`http://localhost:${8000}`);
})