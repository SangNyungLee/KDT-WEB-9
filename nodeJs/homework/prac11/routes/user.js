const express = require('express')
const router = express.Router();
const controller = require('../controller/Cuser')

router.get('/', controller.index);
router.get('/signin', controller.signin);
router.get('/signup', controller.signup);
router.post('/signup',controller.post_signup);
router.post('/signin',controller.post_signin);

module.exports = router;