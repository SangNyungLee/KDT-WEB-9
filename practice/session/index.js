const express = require('express');
const session = require('express-session');
const app = express()
const PORT = 8000;
const router = require('./routes');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use(session({
    secret:'newJeans',
    secure : false,
    resave: false,
    saveUninitialized : true,
    httpOnly : false,
    cookie:{
        httpOnly:false,
        maxAge: 60*60*24,
    }
}));
//res.locals로 로컬변수 생성
app.use((req, res, next)=>{
    res.locals.user_id = "";
    res.locals.name = "";
    if(req.session.member){
        res.locals.user_id = req.session.member.userid
        res.locals.name = req.session.member.name
    }
    next()
})

app.use('/', router);

app.get('*', (req,res)=>{
    res.render('404');
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})