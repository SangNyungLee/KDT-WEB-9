const http = require('http')
const express = require('express')
const SocketIO = require('socket.io');
const app = express()
const PORT = 8000;

const server = http.createServer(app);
const io = SocketIO(server);
app.set('view engine', 'ejs')
app.get('/', (req,res)=>{
    res.render('client')
})

io.on('connection',(socket)=>{
    socket.on('gogo',(res,cb)=>{
        console.log(res);
        cb(res);
    })

})

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})