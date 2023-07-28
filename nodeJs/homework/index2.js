const express = require('express');
// require nodeJs에서 다른 패키지를 불러올 때 사용되는 키워드

// app이라는 변수에 express함수를 저장
const app = express();
// 포트라는 변수에 8000 저장
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');    // 왜 이거랑 views 폴더가 있어야 되는지 모르겟음
app.use( express.static('project'))
// app.get('/', function(요청, 응답){
    // 응답.send('메세지');
// })
app.get('/', function(req,res){
    res.send('메세지 출력받음');
});

app.get('/test', function(req,res){
    res.render('test');
})
//app.listen(포트번호, function(){서버 오픈시 실행할 코드})
app.listen(PORT, function(){
    // console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
})