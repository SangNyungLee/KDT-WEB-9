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
    socket.on('kakaoTalk',(arg,cb)=>{
        console.log(arg);
        cb(arg);
    });
    socket.on('form_message',(args)=>{
        console.log(args);
        socket.emit('backend_message',args)
    })
});
//서버
server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})


