const express = require('express');
const cookieParser = require('cookie-parser');
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());    //일반쿠키

const router = require('./routes');
var cookieConfig ={
    httpOnly : false,
    maxAge : 60 * 10000,
}

app.use('/', router);
// app.get('/setCookie', (req, res)=>{
//     res.cookie('myCookie', 'myValue',cookieConfig);
//     res.send('쿠키설정')
// })
// app.get('/clearCookie', (req,res)=>{
//     res.clearCookie('myCookie','myValue',cookieConfig)
//     res.send('쿠키삭제');
// })
app.get('*', (req,res)=>{
    res.render('404');
})
app.listen(PORT, ()=>{
    console.log(`http://localhost${PORT}`);
})
