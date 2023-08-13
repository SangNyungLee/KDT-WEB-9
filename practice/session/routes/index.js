const express = require('express');
const controller = require('../controller/Cindex');
const router = express.Router();

router.get('/',controller.main);

router.get('/signup',controller.signup);
router.get('/signin',controller.signin);

// router.get('/profile',controller.get_profile);

router.post('/signup', controller.post_signup);
router.post('/signin', controller.post_signin);

router.get('/logout', controller.logout);

module.exports = router;