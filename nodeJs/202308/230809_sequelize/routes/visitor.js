const express = require('express')
const controller = require('../controller/Cvisitor')
const router = express.Router()
//이 router 변수명임

// router.get('/', controller.main);
// router.get('/visitor', controller.getVisitors);
// Get /visitor : 방명록 전체 보이기
router.get('/', controller.getVisitors);

// GET /visitor/get 방명록 하나 조회
router.get('/get', controller.getVisitor);
// app.get('/visitor/:get', (req,res)=>{
//     const query = `SELECT FROM visitor WHERE id = '${req.params.id}'`
// })


// post/visitor/write 방명록 하나 생성
router.post('/write', controller.postVisitor);

// //PATCH /visitor/edit 방명록 하나 수정
router.patch('/edit', controller.patchVisitor);

// // DELETE /visitor/delete 방명록 하나 삭제
router.delete('/delete', controller.deleteVisitor);



module.exports = router;
