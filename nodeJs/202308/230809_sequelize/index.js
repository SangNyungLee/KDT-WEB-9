const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models')  //models의 index에 sequelize정의된거 가져올거임
const mysql = require('mysql')

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//router
// const indexRouter = require('./routes')
// app.use('/', indexRouter);
const visitorRouter = require('./routes/visitor')
app.get('/', (req, res) =>{
    res.render('index');
});

//미들웨어라 use
//localhost:8000/visitor
app.use('/visitor', visitorRouter);
// 404
app.use('*', (req,res)=>{
    res.render('404');
});

//db sequelize추가
db.sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    });
})



