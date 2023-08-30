const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const { name } = require("ejs");

const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/:room", (req, res) => {
    const room = req.params.room;
});

//방에 있는 사용자들을 갱신하기 위한 함수(정보를 가져오기위한)
function getUsersInRoom(room) {
    const users = [];
    //채팅방에 접속한 socket.id값을 찾아야함
    const clients = io.sockets.adapter.rooms.get(room);
    if (clients) {
        clients.forEach((socketId) => {
            //socket.id가 할당한 변수들의 객체값
            const userSocket = io.sockets.sockets.get(socketId);
            users.push({userid : socketId, username : userSocket.user});
        });
    }
    console.log(users);
    return users;
}
const roomList = [];

io.on("connection", (socket) => {
    //socket!//
    //socket은 접속한 웹페이지, io는 접속해있는 모든 웹페이지
    //웹 페이지가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
    //console.log(io.sockets);
    //채팅방 목록 보내기
    socket.emit("roomList", roomList);
    //채팅방 만들기 생성
    socket.on("create", (roomName, userName, cb) => {
        //join(방이름) 해당 방이름으로 없다면 생성. 존재하면 입장
        //socket.rooms에 socket.id값과 방이름 확인가능
        socket.join(roomName);
        //socket은 객체이며 원하는 값을 할당할 수 있음
        socket.room = roomName;
        socket.user = userName;

        //채팅방 목록 갱신
        if (!roomList.includes(roomName)) {
            roomList.push(roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit("roomList", roomList);
        }
        const usersInRoom = getUsersInRoom(roomName);
        io.to(roomName).emit("userList", usersInRoom);
        socket.broadcast.to(roomName).emit("notice",socket.user);
        cb();
    });

    socket.on("sendMessage", (message ,nameValue) => {
        const bool = true;
        if(nameValue == "all"){
            io.to(socket.room).emit("newMessage",message.message, message.nick);
        }else{
            io.to(nameValue).emit("newMessage", message.message, message.nick,bool);
            //자기 자신에게 메세지 띄우기
            socket.emit("newMessage", message.message, message.nick,bool);
        }
    });

    socket.on("disconnect", () => {
        if (socket.room) {
            socket.leave(socket.room);
        }
    });
});
server.listen(8000, () => {
    console.log(`http://localhost:${PORT}`);
});
