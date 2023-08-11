const express = require('express')
const router = express.Router()
const controller = require('../controller/CComment')

router.get('/', controller.main);
router.get('/axiosGet', controller.get);
router.get('/axiosPost', controller.post);
router.post('/resultPost', controller.respost);

const cookieConfig = {
    httpOnly : true,
    maxAge : 60 * 10000,
}

router.get('/setCookie', (req,res)=>{
    res.cookie('myCookie', 'myValue',cookieConfig);
    res.send('set Cookie');
})
router.get('/getCookie', (req,res)=>{
    res.send(req.signedCookies);
})
router.get('/clearCookie',(req,res)=>{
    res.clearCookie('myCookie', 'myValue',cookieConfig);
    res.send('clear cookie')
})
module.exports = router;