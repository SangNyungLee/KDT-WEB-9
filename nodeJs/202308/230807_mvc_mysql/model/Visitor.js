const mysql = require('mysql');
// exports.getVisitors = () =>{
//     return [
//         {id : 1, name : '홍길동', comment : '내가 왔다.'},
//         {id : 2, name : '이찬혁', comment : '으라차차'},
//     ];
// }


// mysql 연결
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

exports.getVisitors  = (callback) =>{
    const query = 'SELECT * FROM visitor';
    conn.query(query, (err, rows) => { //콜백함수 이름 달라도됨
        console.log(rows);
        callback(rows);

    });
}

exports.getVisitor = (id, callback)=>{
    const query = `SELECT * FROM visitor WHERE id = ${id}`;
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err);
            return;
        }
        callback(rows);
    });
};
//data: rows visitor에 한명만 뜨게 하려고 하는건데 이미 코드에 반복문을 이용해서 만들어놨음

exports.postVisitor = (data, callback)=> {
    const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`
    conn.query(query, (err, result) =>{
        console.log('rows', result);
        callback();
        // res.send(${id: name: comment})
    });
}

exports.patchVisitor = (data, callback)=>{
    const query = `UPDATE visitor SET name ='${data.name}',comment = '${data.comment}' WHERE id = ${data.id}`
    conn.query(query, (err, result)=>{
        console.log('rows', result);
        if(err){
            console.log(err)
            return;
        }
        callback();
    });
}

exports.deleteVisitor = (data, callback)=>{
    const query= `DELETE FROM visitor WHERE id='${data.id}'`
    conn.query(query, (err, rows)=>{
        if(err){
            console.log(err)
            return;
        }
        callback();
    });
}