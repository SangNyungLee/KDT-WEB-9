const express = require('express')
const router = express.Router()
const controller = require('../controller/CComment')

router.get('/', controller.main);
router.get('/axiosGet', controller.get);
router.get('/axiosPost', controller.post);
router.post('/resultPost', controller.respost);

module.exports = router;