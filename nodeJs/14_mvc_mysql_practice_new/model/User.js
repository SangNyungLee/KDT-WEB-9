// const mysql = require('mysql');
import mysql from 'mysql2/promise'  //mysql2는 promise방식임

//mysql 연결
// createConnection = 단일연결, 매번 연결이 필요할 때마다 새로운 연결을 생성합니다.
// 연결수가 많아지면 성능에 영향이 생긴다.
// createPool = 여러연결, 여러개의 연결을 미리 생성하고 관리
// 요청이 들어올 때마다 생성한 연결을 할당. 동시처리 가능
const conn = mysql.createPool({
    host: 'localhost',
    user: 'users',
    password: '1234',
    database: 'kdt9',
    port: 3306,
});

// mysql에서만 쓸 수 있음
// conn.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('connect');
// });


export const post_signup = async (data) =>{
    try {   //prepared statement (준비된 쿼리)
        const query = 'INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)'    //쿼리먼저 생성하고 데이터 넣음
        await conn.query(query, [data.userid, data.pw, data.name]) //위에 쿼리 생성한 순서대로 데이터 넣어줌
    } catch (error) {
        console.log(error);
    }
};

// exports.post_signup = (data, callback) => {
//     const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signup', rows);
//         callback();
//     });
// };

export const post_signin = async(data) =>{
    try {
        const query = 'SELECT * FROM user WHERE userid= ? AND pw = ?'
        const [rows] = await conn.query(query, [data.userid, data.pw])
        console.log(rows)       //[rows] -> 구조분해할당임
        return rows;
    } catch (error) {
        console.log(error);
    }
};
// exports.post_signin = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signin', rows);
//         callback(rows);
//     });
// };

export const post_profile = async(data) =>{
    try {
        const query = "SELECT * FROM user WHERE userid=?"
        const [rows] = await conn.query(query,[data.userid]) //배열로 오니깐 []
        return rows;
    } catch (error) {
        console.log(error);
    }
}

// exports.post_profile = (data, callback) => {
//     const query = `SELECT * FROM user WHERE userid='${data.userid}' `;
//     conn.query(query, (err, rows) => {
//         console.log('post_profile', rows);
//         callback(rows);
//     });
// };

// exports.edit_profile = (data, callback) => {
//     const query = `UPDATE user SET userid='${data.userid}', pw='${data.pw}', name='${data.name}' WHERE id=${data.id}  `;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };

export const edit_profile = async(data)=>{
    try {
        const query = "UPDATE user SET userid = ?, pw = ?, name = ? WHERE id = ?"
        await conn.query(query,[data.userid, data.pw, data.name, data.id])
    } catch (error) {
        console.log(error)
    }
}
// exports.delete_profile = (id, callback) => {
//     const query = `DELETE FROM user WHERE id=${id}`;
//     conn.query(query, (err, rows) => {
//         callback();
//     });
// };

export const delete_profile = async(id)=>{
    try {
        const query = "DELETE FROM user WHERE id = ?"
        await conn.query(query, [id])
    } catch (error) {
        console.log(error);
    }
}