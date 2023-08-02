const express = require('express')
const app = express()
const PORT = 8000

//body-parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//biew endine
app.set('view engine','ejs');
app.set('views', './views');

//get 실습
app.get('/', (req, res) =>{
    res.render('index');
})
app.get('/axiosGet', (req, res) =>{
    res.render('get');
})
app.get('/axiosPost', (req, res) =>{
    res.render('post');
})

app.post('/resultPost', (req,res)=>{
    const id = 'kdt9';
    const pw = '1234';
    if(id === req.body.username && pw === req.body.password){
        res.send({result:true, userInfo: req.body});
    } else{
        res.send({result:false, userInfo:null});
    }
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${8000}`);
})
//router
app.get('/', (req,res) =>{
    res.render('index');
});