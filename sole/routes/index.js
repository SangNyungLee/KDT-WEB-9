const express = require('express');
const controller = require('../controller/index');
const router = express.Router()


router.get('/', controller.main);
router.post('/', controller.post_main);
module.exports = router;