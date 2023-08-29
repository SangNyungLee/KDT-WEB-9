const ws = require('ws');
const express = require('express')
app = express()
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('client')
})

const server = app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

const wss = new ws.Server({server : server});

const sockets = []

wss.on("connection", (socket)=>{
    console.log(wss.clients)
    sockets.push(socket);
    //클라이언트 상태 확인
    //ws.connecting : 0(웹소켓이 연결 시도중)
    //ws.OPEN : 1 (웹소켓이 열린 상태)
    //ws.CLOSING : 2 (웹소켓이 닫히는 중)
    //ws.CLOSED : 3 (웹소켓이 닫힌상태)
    //socket.readyState : 웹소켓의 클라이언트 상태를 나타내는 속성
    socket.on("message", (message)=>{
        //웹 소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 일반적으로
        //문자열 또는 버퍼형태로 전달됨
        //서버가 모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요 -> 버퍼를쓰는이유
        const msg = JSON.parse(message);
        console.log(msg.msg);
        sockets.forEach(elem =>{
            elem.send(`${msg.user}님의 메세지 : ${msg.msg}`);
        })
    });
    socket.on('error', (error)=>{
        console.log("에러가발생했습니다.", error);
    });
    
    socket.on('close', ()=>{
        console.log('클라이언트와 연결종료')
    })
});

