const express = require('express');
const app = express();
const PORT = 8000;

//env 파일 읽기
require('dotenv').config()
//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let hash=''
//router
app.get('/', (req, res) => {
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    res.render('index');
});
app.post('/hash', (req,res)=>{
    const {pw} = req.body
    //pbkdf방식
    // const hash = createHashedPassword(pw)
    //  hash = createPbkdf(pw)

    //bcrypt 방식
    hash = bcryptPassword(pw)

    res.json({hash});
})
app.post('/verify', (req,res)=>{
    const {pw} = req.body
    //Pbkdf 방식
    // const compare = verifyPassword(pw, salt, hash)

    //bcrypt 방식
    const compare = comparePassword(pw,hash)
    res.json({compare})
})
app.post('/cipher', (req,res)=>{
    const {data} = req.body
    const encrypt = cipherEncrypt(data)
    console.log("encrypt", encrypt)
    // res.json({encrypt})
    const decrypt = decipher(encrypt)
    console.log("decrypt", decrypt)
    res.json({decrypt})
})
//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

/////////// 암호화 ////////////
// 단방향
const crypto = require('crypto');
const { workerData } = require('worker_threads');
//해시함수
const createHashedPassword = (password) =>{
    //createHash(알고리즘).update(암호화 할 값).digest(인코딩방식)
    return crypto.createHash('sha512').update(password).digest('base64')
}
//pbkdf2 함수
const salt = crypto.randomBytes(16).toString('base64')  //솔트생성
const iterations = 100  //반복횟수
const keylen = 64       //생성할 키의 길이
const digest = process.env.HASH //해시 알고리즘

//단방향 암호화 생성

const createPbkdf = (password)=>{
    //pbkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성이 되고
    //반환되는 값은 Buffer값
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
    // console.log(hash);  
    // tostring(base64)를 붙여주면 버퍼값을 ASCII로 인코딩해줌
    return hash.toString('base64')
}
// 암호비교
// password : 우리가 입력하는 비밀번호, salt : 솔트값, db : db에 있는 pw값
// salt 값도 db에 저장해야하기 때문에 db에 같이 저장해줘야 됨
const verifyPassword = (password,salt,dbPassword)=>{
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64')
    if (compare == dbPassword){
        return true;
    } else{
        return false;
    }

}

//양방향

const algorithm = 'aes-256-cbc';                                //256비트 키를 사용, 블록크기는 128비트
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)                               //초기화 벡터, 데이터블록을 암호화할 때 보안성을 높이기 위해 사용

//암호화
const cipherEncrypt = (word) =>{
    const cipher = crypto.createCipheriv(algorithm,key,iv)      //암호화 객체 생성, iv : initialize vector
    let encryptData = cipher.update(word, 'utf-8','base64');    //암호화할 데이터 처리
    encryptData += cipher.final('base64')                       //최종결과 생성
    return encryptData;

}
//복호화
const decipher = (encryptData)=>{
    const decipher = crypto.createDecipheriv(algorithm,key,iv)  //복호화 객체 생성
    let decryptData = decipher.update(encryptData,'base64','utf-8');
    decryptData += decipher.final('utf-8')
    return decryptData;
}

//bcrypt(단방향)
const bcrypt = require('bcrypt')
const saltNumber = 10;  //10 or 11
//암호화
const bcryptPassword = (password)=>{
    return bcrypt.hashSync(password,saltNumber)
} 

const comparePassword = (password, dbPassword)=>{
    return bcrypt.compareSync(password, dbPassword)
}

