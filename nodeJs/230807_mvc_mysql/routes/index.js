const express = require('express')
const controller = require('../controller/Cvisitor')
const router = express.Router()
//이 router 변수명임


router.get('/', controller.main);
router.get('/visitor', controller.getVisitors);

module.exports = router;
