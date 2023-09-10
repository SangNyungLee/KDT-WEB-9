const express = require('express');
const fullcalendar = require('fullcalendar');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index');
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})