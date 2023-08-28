const ws = require('ws');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//투표결과 초기화 변수
const votes = {
    typeOne: 0,
    typeTwo: 0,
};

//웹소켓 서버 접속
const wss = new ws.Server({ server });
const sockets = []
//socket변수는 접속한 브라우저
wss.on('connection', (socket) => {
    sockets.push(socket);

    socket.on('message', (message) => {
        console.log(`메세지는? :${message}`)
        if(`${message}` == "typeOne"){
            votes.typeOne +=1
        } else{
            votes.typeTwo +=1
        }
        sockets.forEach(elem =>{
            if(`${message}` == "typeOne"){
                const gg = JSON.stringify({"type" :"typeOne", "val" : votes.typeOne})
                elem.send(gg)
            } else{
                const gg2 =  JSON.stringify({"type" :"typeTwo", "val" : votes.typeTwo})
                elem.send(gg2);
            }
        })
    });
    //오류이벤트
    socket.on('error', (err) => {
        console.log('에러가 발생하였습니다', err);
    });
    //접속종료이벤트
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료됨');
    });
});
