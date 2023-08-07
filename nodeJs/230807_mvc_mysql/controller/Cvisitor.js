//model에 있는거 가져오기
const Visitor = require('../model/Visitor');


exports.main = (req,res) =>{
    res.render('index')
}

exports.getVisitors = (req,res) =>{
    res.render('visitor',{data: Visitor.getVisitors()});
}