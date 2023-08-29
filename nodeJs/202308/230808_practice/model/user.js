const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'users',
    password: '1234',
    database : 'kdt9',
});

conn.connect((err)=>{
    if(err){
        console.log('error');
        return;
    }
    console.log('connect');
});

exports.writer = (data, callback)=>{
    const query = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}',${data.pw})`
    conn.query(query, (err, result)=>{
        console.log('rows', result);
        callback();
    });
}

exports.loginer = (data, callback)=>{
    
}