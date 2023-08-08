//mysql연결
const mysql = require('mysql')
const conn = mysql.createConnection({
    host:'localhost',
    user:'users',
    password: '1234',
    database : 'kdt9',
});

conn.connect((err) => {
    if(err){
        console.log('error');
        return;
    }
    console.log('connect');
});

//
exports.post_signup =(data,callback) =>{
    //쿼리, DB코드는 모델에 쓴다.
    const query = `INSERT FROM user (userid, pw, name) VALUES ('${data.userid}','${data.pw}','${data.name}')`
    conn.query(query, (err, rows) =>{
        console.log('post_signup', rows);
        callback()
    });
};

exports.post_signin =(data, callback)=>{
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`
    conn.query(query, (err, rows) =>{   //쿼리 실행해  주는거
        console.log('post_signin', rows);   //rows는 배열
        callback(rows)  //로그인을 하는 순간 회원정보를 전달
    });
}