const express = require('express');
const multer = require('multer');       // multer 가져오기
const path = require('path');  //path 내장함수 -> 경로 설정 제어할 수 있음
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//body-parser
app.use(express.urlencoded({extended : true}))
app.use(express.json());


// 정적파일설정
// 외부에서 접근 가능하도록 폴더를 열어줘야 된다.
app.use('/uploads', express.static(__dirname + '/uploads'));


//multer -> 보통 body-parser 밑에 두고씀, 위에써도 크게 상관은 없지만
// 가끔 못 불러오는 경우도 있기 때문에 주로 밑에씀
const upload = multer({
    dest : 'uploads/'   // dest : 업로드할 파일을 저장할 경로를 지정

})
//multer 세부설정
const uploadDetail = multer({
    // storage : 저장할 공간에 대한 정보 
    // diskStorage : 파일을 disk에 저장하기 위한 모든 제어기능을 제공
    storage: multer.diskStorage({
        destination(req, file, done){       //done : 콜백함수
            // null -> 에러처리어떻게 할건지 보통 null 넣음
            done(null, 'uploads/')
        },
        filename(req, file, done){
            // ext에 파일 확장자명 저장
            const ext = path.extname(file.originalname);
            console.log('ext', ext);
            // 파일 확장자 뺀 파일명 + 시간추가 + 다시 파일 확장자 붙여주기 
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            // done(null, req.body.title + ext);
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024},
});


//router
app.get('/', (req, res) =>{
    res.render('index');
});

//싱글
// 하나씩 올리는거니깐 upload.single('ejs에서 지정한 file의 name값')
// upload -> uploadDetail로 바꾸면 위에 uploadDetail의 세부설정 값이 적용된다.
app.post('/upload', uploadDetail.single('userfile'), (req,res) =>{
    console.log(req.file);  //업로드한 파일의 정보(객체)를 받는다.
    console.log(req.body);
});

//멀티 (ver1)
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) =>{
    console.log(req.files); //여러개 보내니깐 file이 아닌 복수형 files임!
    console.log(req.body);  //post방식이니깐 body
})

//멀티 (ver2)
// 객체 배열 2개를 만들어준다(fields뒤에 `[{}]` -> 이거 2개)
// key는 무조건 name, value는 내가 설성해줌
app.post('/upload/fields', uploadDetail.fields([{name : 'userfile1'}], [{name : 'userfile2'}]), (req, res) =>{
    console.log(req.files);
    console.log(req.body);
})

// 동적
app.post('/dynamicFile', uploadDetail.single('dynamic-file'), (req, res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send(req.file)  // send로 프론트에서 받은 file값을 그대로 다시 보내준다.

})
app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
}); 