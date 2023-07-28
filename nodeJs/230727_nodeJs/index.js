// const {prc, prc2, prc5} = require('./module');
// // module.js 에 선언한 키 값(변수값)을 가져온다.
// // 객체는 키값이 중요하다.
// console.log("prc " + prc,"prc2 "+ prc2,"prc5 "+ prc5);

const practice = require('./module');
console.log(practice(10,20));


//-------------http 모듈서버------------------
// const http = require('http');
// //----------------http 파일전송------------------
// const fs = require('fs');
// const server = http.createServer(function(request, response){
//     try{
//         const data = fs.readFileSync('./index.html');   //index.html 파일을 읽어오는 코드
//         response.writeHead(200); //응답헤드에는 성공했다 라는 200코드를 보냄
//         response.end(data);
//     }catch(error){  //오류났을 때
//         console.log(error);
//         response.writeHead(404);    //404 not found를 주고
//         response.end(error.message);    //메세지 출력
//     }
// });
// ------------------------------------------
// const server = http.createServer(function(request, response){
//     response.writeHead(200)
//     response.write("<h1>Hello World</h1>")
//     response.end("<p> End </p>")
// }); //요청 -> 응답순으로 해야댐


// server.listen(8000, function(){
//     console.log('8000번 포트로 서버 실행');
// }) 
// localhost:8000 요청하고 응답받은건 없기 때문에 열린건 없음(브라우저는 안열림)


//80번포트 : 우리가 자주 사용하는(바꿀 수 없음)
// 443번 포트 : https(바꿀 수 없음)
// 3306번 포트 : mysql(얘는 변경가능)-
//-----------------------------------------------



