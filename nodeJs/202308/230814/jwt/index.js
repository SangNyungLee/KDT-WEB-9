const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const PORT = 8000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('index')
})
const secret = 'secretKey'
app.post('/login', (req,res)=>{
    const {id, pw} = req.body
    const token = jwt.sign({id}, secret);  //객체말고 string도 됨
    res.send({result : true, token});
})

//인증
app.post('/verify', (req, res)=>{
    console.log(req.headers.authorization);
    const auth = req.headers.authorization
    const token = auth.split(' ')   //bearer랑 뒤에 토큰값을 분리해주기 위해서 스플릿함
    if(token[0] === 'Bearer'){
        jwt.verify(token[1], secret, (err,decoded)=>{
            if(err){
                return res.status(403).send({message:'검증실패'})
            }
            console.log(decoded)
            res.send({user:decoded});
        });    //token[1]은 토큰값
    }else{
        res.send({message: '잘못된 인증방식입니다.'})
    }
})
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})