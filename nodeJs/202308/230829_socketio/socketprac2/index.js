const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//socket 서버
const io = SocketIO(server);

app.set('view engine', 'ejs')
app.get('/', (req, res) =>{
    res.render('client')
})

//socket 변수명임(바꿔도됨)
io.on('connection',(socket)=>{
    socket.on('join', (res)=>{
        socket.join(res);
        socket.room = res;
        console.log("!!!!!!!!!!!!!",socket.id);
        socket.broadcast.to(res).emit('create', '새로운 유저가 입장하였습니다.');
    })
    socket.on('message', (res)=>{
        socket.broadcast.to(socket.room).emit('chat', res);
        // io.to(socket.room).emit('chat', res);
    })
});
//서버
server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})


