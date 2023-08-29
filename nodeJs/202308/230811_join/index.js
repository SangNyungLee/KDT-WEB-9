const express = require('express')
const app = express();
const PORT = 8000;
const db = require('./models')

app.set('view engine', 'ejs');
// app.set('views', './views') -> 이 폴더를 다른걸로 바꾸고 싶을 때 쓴다.
// 노드js는 디폴트로 views로 설정되어있음
app.set(express.urlencoded({urlencoded:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index');
})

//router 설정
const studentRouter = require('./routes/student')
app.use('/student', studentRouter)

db.sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    });
});
