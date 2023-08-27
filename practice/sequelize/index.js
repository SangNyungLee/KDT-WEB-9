const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./models');
//body-parser
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router연결
const router = require('./routes/index.js')
app.use('/', router);

//404페이지
app.use('*', (req,res)=>{
    res.render('404')
})

//db 싱크
db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
})