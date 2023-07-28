// function first(){
//     second();
//     console.log("first");
// }
// function second(){
//     third();
//     console.log("second");
// }
// function third(){
//     console.log("third");
// }
// first();

// function run(){
//     console.log("1초 뒤 실행")
// }

// console.log("시작");
// setTimeout(run, 1000);
// console.log("끝");

// const http = require('http');

// const server = http.createServer();

// server.listen(8080, function(){
//     console.log('8080번 포트로 서버 실행');
// });

const http = require('http');

const server = http.createServer(function(request, response){
    response.writeHead(200);
    response.write("<h1>Hello</h1>");
    response.end("<p>End</p>");
});

server.listen(8000, function(){
    console.log('8080번 포트로 서버 실행');
});