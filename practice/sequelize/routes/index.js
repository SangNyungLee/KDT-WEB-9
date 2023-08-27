const express = require('express')
const router = express.Router();
const controller = require('../controller/Cmain')

//메인페이지
router.get('/', controller.main);

//회원가입페이지
router.get('/signup', controller.signup);
router.post('/signup', controller.post_signup);
module.exports = router;