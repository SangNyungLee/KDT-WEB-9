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
    socket.on('hello',(arg,cb)=>{
        console.log("client: ", arg)
        cb(arg)
    })
    socket.on('study',(arg,cb)=>{
        console.log("client: ", arg)
        cb(arg)
    })
    socket.on('bye',(arg,cb)=>{
        console.log("client: ", arg)
        cb(arg)
    })

})

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})