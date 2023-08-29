const express = require('express');
const app = express();
const PORT = 8080;

//body-parser
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

//view engine
app.set('view engine', 'ejs')
app.set('views', './views')

//router
app.get('/', (req, res) =>{
    res.render('prac1');
});

// axios
app.get('/axios', (req, res) =>{
    console.log('back', req.query);
    res.send(req.query);
});

app.post('/axios', (req, res) =>{
    console.log('back', req.body);
    res.send(req.body);
});

//server
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
})