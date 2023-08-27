const express = require('express');
const router = express.Router();
const controller = require('../controller/Cindex.js')

//메인
router.get('/', controller.main);
//회원가입
router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);
//로그인
router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

//회원정보 조회하기
router.get('/userinfo', controller.userinfo);
router.post('/userinfo', controller.post_userinfo);

//회원 추가하기
router.get('/useradd', controller.useradd);
router.post('/useradd', controller.post_useradd);
router.post('/useradd2', controller.useradd2);

//회원 수정하기
router.post('/profile', controller.profile);
// router.patch('/profile', controller.post_profile);
module.exports = router;