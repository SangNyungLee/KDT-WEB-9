const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'users',
    password : '1234',
    database : 'kdt9',
    port : 3306,
})

exports.post_signup = (data,cb)=>{
    const query = `INSERT INTO user (userid,name,pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`
    conn.query(query, (err,rows)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('db_signup', rows);
        cb();
    })
}

exports.post_signin = (data,cb)=>{
    const query = `SELECT * FROM user WHERE userid = ${data.userid} AND pw = ${data.pw}`
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err)
            return ;
        }
        console.log('로그인확인', rows)
        cb();
    })
}

exports.post_userinfo = (data, cb)=>{
    const query = `SELECT * FROM user`
    conn.query(query, (err,rows)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("결과", rows);
        cb(rows);
    })
}
exports.useradd = (data, cb)=>{
    const query = `SELECT * FROM user`
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err)
            return;
        }
        cb(rows);
    })
}
exports.post_useradd = (data, cb)=>{
    const query = `INSERT INTO user (userid, name, pw) VALUES('${data.userid}', '${data.name}', '${data.pw}')`
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err);
            return ;
        }
        cb(rows);
    })

}