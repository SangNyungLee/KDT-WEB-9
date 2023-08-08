const express= require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router = require('./routes/user');
app.use('/user', router)


app.use("*", (req, res) =>{
    res.render('404');
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
