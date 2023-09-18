//파일업로드
const { writeFile } = require("fs");

const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");
const { name } = require("ejs");
const multer = require("multer");
console.log("내 경로", __dirname);
const PORT = 8000;
const app = express();

const server = http.createServer(app);
const io = SocketIO(server);

//업로드 파일경로
const upload = multer({
  dest: "uploads/", //업로드할 파일을 지정
});
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
      users.push({ userid: socketId, username: userSocket.user });
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
  // console.log("방금 생성된 아이디의 소켓값", socket)
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
    console.log(socket.rooms);
    console.log(socket.room);
    // if(!(socket.rooms in roomName)){
    //   socket.rooms[roomName]=[];
    // }else{
    //   console.log("아니다.!!!")
    // }
    // socket.rooms[roomName].push(userName);
    console.log("????방에 누구", socket.rooms[roomName]);
    //채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      //갱신된 목록은 전체가 봐야함
      io.emit("roomList", roomList);
    }
    const usersInRoom = getUsersInRoom(roomName);
    io.to(roomName).emit("userList", usersInRoom);
    socket.broadcast.to(roomName).emit("notice", socket.user);
    cb();
  });

  socket.on("sendMessage", (message, nameValue) => {
    const bool = true;
    if (nameValue == "all") {
      io.to(socket.room).emit("newMessage", message.message, message.nick);
    } else {
      io.to(nameValue).emit("newMessage", message.message, message.nick, bool);
      //자기 자신에게 메세지 띄우기
      socket.emit("newMessage", message.message, message.nick, bool);
    }
  });

  //타이핑중
  socket.on("typing", (username, msgValue) => {
    socket.broadcast.to(socket.room).emit("type", username, msgValue);
  });

  //파일 업로드
  socket.on("upload", (file, username, type) => {
    console.log(file); //버퍼값으로 옴

    writeFile("/uploads", file, (err) => {
      console.log(err);
      const b64 = Buffer.from(file).toString("base64");
      //   const mimeType = "image/jpg";
      io.to(socket.room).emit("newImage", b64, username, type);
      console.log("유저이름@@@@@@@@@@@@@@@@", username);
      //   callback({ image: b64, mimeType: mimeType });
    });
  });
  //방 나가기
  socket.on("disconnection", (myName, userlength) => {
    console.log("나갔습니다.");
    socket.broadcast.to(socket.room).emit("leave", myName, userlength);
  });
  //연결해제
  socket.on("disconnect", () => {
    if (socket.room) {
      socket.leave(socket.room);
    }
  });
});

server.listen(8000, () => {
  console.log(`http://localhost:${PORT}`);
});
