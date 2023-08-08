const express= require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//router 가져오기
const router = require('./routes/user');
app.use('/user', router)

// app.get('/user', (req,res)=>{
//     res.render('index');
// });

app.use("*", (req, res) =>{
    res.render('404');
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
