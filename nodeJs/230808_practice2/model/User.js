const mysql = require('mysql');

//mysql 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'users',
    password: '1234',
    database: 'kdt9',
    port: 3306,
});
conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connect');
});

<<<<<<< HEAD
//
exports.post_signup =(data,callback) =>{
    //쿼리, DB코드는 모델에 쓴다.
    const query = `INSERT FROM user (userid, pw, name) VALUES ('${data.userid}','${data.pw}','${data.name}')`
    conn.query(query, (err, rows) =>{
        console.log('post_signup', rows);
        callback(rows)
=======
exports.post_signup = (data, callback) => {
    // 쿼리, dB코드는 모델에 쓴다.
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        console.log('post_signup', rows);   
        callback();
>>>>>>> 8265cad348729609a96a94ad7eb006e23ab74519
    });
};

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {  //쿼리 실행해 주는거
        console.log('post_signin', rows);   //rows는 배열
        callback(rows);     //로그인을 하는 순간 회원정보를 전달
    });
<<<<<<< HEAD
}

exports.post_profile = (data, callback)=>{
    const query = `SELECT * FROM user WHERE userid = '${data.userid}'`;
    conn.query(query, (err, rows)=>{
        console.log('post_profile', rows);
        callback(rows)
    })
}

exports.edit_profile = (data, callback) => {
    const query = `UPDATE user SET userid='${data.userid}','pw=${data.pw}', name = '${data.name}' WHERE id=${data.id}`;
    conn.query(query, (err, rows) => {
        callback();
    })
}

exports.delete_profile = (id, callback) =>{
    const query = `DELETE FROM user WHERE id = ${id}`
    conn.query(query, (err, rows)=>{
        callback();
    })
}
=======
};
>>>>>>> 8265cad348729609a96a94ad7eb006e23ab74519
