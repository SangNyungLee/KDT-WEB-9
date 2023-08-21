const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express()
const PORT = 8000;

//ejs
app.set('view engine', 'ejs')

//body-parser
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//절대경로를 이용한 정적파일 제공
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename : (req, file, cb)=>{
        const ext = path.extname(file.originalname)
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName)
    }
})

//multer 미들웨어 등록
const upload = multer({storage : storage})

app.get('/', (req,res)=>{
    res.render('index')
});

app.post('/dynamic', upload.array('dynamic'),(req,res)=>{
    res.send(req.files);
})

app.use('*', (req,res)=>{
    res.render('404')
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})