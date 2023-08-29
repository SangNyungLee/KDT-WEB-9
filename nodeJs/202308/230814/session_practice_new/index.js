const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const userInfo = {id : 'kdt9', pw:'1234'};
const secret = 'secretKey'
app.get('/', (req,res)=>{
    res.render('index')
});
app.get('/login',(req,res)=>{
    res.render('login');
});
app.post('/login', (req,res)=>{
    const id = req.body.id
    const token = jwt.sign({id}, secret);
    //로그인이 되는 경우
    if(req.body.id == userInfo.id & req.body.pw == userInfo.pw){
        console.log("로그인토큰",token)
        res.send({result : true, token});
    }else{
        //로그인 안 되는 경우
        res.send(`<script>alert('로그인실패'); document.location.href='/'</script>`);
    }
})
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
app.get('/logout',(req,res)=>{
    const user = req.session.user;
    if(user === undefined){
        res.send(`<script>alert('잘못된 접근입니다.'); document.location.href='/';</script>`)
    }else{
        req.session.destroy(()=>{
            res.clearCookie('abcd')
            res.redirect('/')
        })
    }
})
app.listen(PORT, (res)=>{
    console.log(`http://localhost:${PORT}`);
});