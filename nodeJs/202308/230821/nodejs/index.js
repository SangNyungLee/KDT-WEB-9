const express = require('express');
const multer = require('multer')
const path = require('path')    //폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//views라는 설정을 다른 폴더로 바꿀 때 쓰는 옵션
//views라는 폴더를 기본으로 사용할 떄는 생략이 가능
app.set('views', './views')

// =======body-parser===============
// req.body 즉, post 전송일 떄 사용한다.
app.use(express.urlencoded({ extended: true }));
// extended : 중첩된 객체표현을 허용할지 말지 정함
// application/x-www-form-urlencoded -> postman에 보면 있음
app.use(express.json());
// application/json
// ==================================

//서버 실행시 http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));
console.log("파일네임", __filename);
console.log("디렉토리네임", __dirname);

// multer 설정
// diskStorage: file 저장관련설정 객체
// destination : 저장될 경로를 지정하면서 (요청, 업로드된 파일객체, 콜백함수)
const storage = multer.diskStorage({
    destination :(req,file, cb) =>{
        cb(null, 'uploads/');
    },
    //filename : 파일이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename : (req,file,cb)=>{
        //extname : 확장자를 추출
        const ext = path.extname(file.originalname)
        //basename : 파이이름 추출(파일이름, 확장자) => 확장자를 제외해서 파일 이름이 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName)
    }
});

// 파일크기제한
const limits = {
    fileSize : 5 * 1024 * 1024  //5mb
}
// key-value에서 key 값과 value의 변수가 동일하면 합칠 수 있음
// storage : storage => storage 로 변경가능
const upload = multer({storage, limits : limits})

//싱글 : single()
app.post('/upload', upload.single('userfile'),(req,res)=>{
    console.log(req.file);
    res.send(req.body);
})
// 멀티 ver.1 : array()
app.post('/upload/array', upload.array('userfiles',2), (req,res)=>{
    console.log(req.files)
    res.send(req.body)
})

// 멀티 ver.2 : fields()
app.post('/upload/fields', upload.fields([{name:'userfile1',maxCount:2},{name:'userfile2'}]), (req,res)=>{
    console.log(req.files);
    res.send(req.body);
})

//동적(비동기)
app.post('/dynamic', upload.single('dynamic'),(req,res)=>{
    console.log(req.file);
    res.send(req.file);
})




//router

// ===============================
app.get('/', (req, res) => {
    res.render('index');
});
// 페이지를 지정할 때는 미들웨어 use를 사용
// use는 http 전송방식을 이해하지 못함
// 같은 url로 get, post를 만들 수 있지만 use로는 접근이 힘듬
// 예를들어 get방식의 '/login'과 post방식의 '/login'은 다른 도메인으로 인식하지만
// use는 동일한 도메인으로 인식함
// use는 404에러 페이지 일 때 사용함
// =====================

app.use('*', (req,res)=>{
    res.render('404');
})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
