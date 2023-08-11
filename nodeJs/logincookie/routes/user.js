const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.index);  //index라는 모듈 만듬

router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup); // 이름이 같아도 통신만 다르면 상관없음

router.get('/signin', controller.signin);
router.post('/signin', controller.post_signin);

router.post('/findall', controller.findall);

router.post('/profile', controller.post_profile);
router.patch('/profile/edit', controller.edit_profile);
router.delete('/profile/delete', controller.delete_profile);
module.exports = router;