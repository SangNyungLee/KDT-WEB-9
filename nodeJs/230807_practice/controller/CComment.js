const useInfo = require('../model/MComment')

exports.main = (req, res) =>{
    res.render('index');
};

exports.get = (req, res) =>{
    res.render('get');
};

exports.post = (req, res) =>{
    res.render('post');
};

exports.respost = (req,res)=>{
    console.log(useInfo.uersinfo()[0].id);
    console.log(req.body);
    if(useInfo.uersinfo()[0].id === req.body.username && useInfo.uersinfo()[0].pw === req.body.password){
        res.send({result:true, userInfo: req.body});
    } else{
        res.send({result:false, userInfo:null});
    };
};