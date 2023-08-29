const express= require('express');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 8000;

const db = require('./models')
app.set('view engine', 'ejs')
app.set('views', './views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//쿠키
app.use(cookieParser("newjeans"))
const cookieConfig = {
    httpOnly: true,
    maxAge : 60 * 10000,
    signed : true
}

const router = require('./routes/user');
app.use('/user', router)


app.use("*", (req, res) =>{
    res.render('404');
});



db.sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    });
})