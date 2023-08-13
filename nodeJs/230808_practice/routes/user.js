const express = require('express')
const router = express.Router()
const controller = require('../controller/cuser')

//메인페이지
router.get('/', controller.main)    
//회원가입링크 클릭
router.get('/signup', controller.signup)
//로그인 링크 클릭
router.get('/signin', controller.signin)
//프로필
router.get('/profile', controller.profile)
//데이터보내기
router.post('/write', controller.writer)

//로그인
// router.post('/loginer', controller.loginer)
module.exports = router;

