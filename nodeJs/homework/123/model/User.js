const mysql = require('mysql');
const express = require('express');

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

exports.post_signup = (data, callback) => {
    const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
    conn.query(query, (err, rows) => {
        console.log('post_signup', rows);
        callback();
    });
};

exports.post_signin = (data, callback) => {
    const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        console.log('post_signin', rows);
        callback(rows);
    });
};

exports.profile = (data, callback)=>{
    const query = `SELECT * FROM user WHERE id=${data.id}`
    conn.query(query, (err,rows)=>{
        console.log('rows', rows);
        callback(rows);
    })
}
exports.edit = (data, callback)=>{
    console.log("userid", data.userid)
    console.log("id", data.id)
    console.log("pw", data.pw)
    console.log("name", data.name)
    const query = `UPDATE user SET userid='${data.userid}', name ='${data.name}', pw='${data.pw}' WHERE id =${data.id} `
    conn.query(query, (err,rows)=>{
        console.log("rows", rows);
        callback()
    })
}
exports.del = (data, callback)=>{
    const query = `DELETE FROM user WHERE id='${data.id}'`
    conn.query(query,(err,rows)=>{
        console.log(rows);
        callback()
    })
}