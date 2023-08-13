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

exports.post_signup = (data,callback)=>{
    console.log("data",data)
    const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.pw}')`;
    conn.query(query, (err, rows)=>{
        console.log("??", rows);
        callback(rows);
    })
}

exports.post_signin = (data, callback)=>{
    const query = `SELECT * FROM user WHERE userid = '${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows)=>{
        console.log('찾기',rows);
        callback(rows);
    })
}

exports.profile = (data, callback)=>{
    const query = `SELECT * FROM user WHERE id = '${data.id}'`
    conn.query(query, (err, rows)=>{
        console.log("찾아보세요",rows);
        callback(rows)
    })
}