const {todo} = require('../models');

exports.get_todo = async (req,res)=>{
    const result = await todo.findAll()
    res.send(result);
}
exports.post_todo = async (req,res)=>{
    const {title, done} = req.body;
    const result = await todo.create({title, done});
    res.send({result : true});
}
exports.patch_todo = (req,res)=>{
    const {id, title} = req.body;
    todo.update({id, title}, {where : {id}})
    res.send({result : true})
}
exports.delete_todo = (req,res)=>{
    const {id} = req.body;
    todo.destroy({where : {id}});
    res.send({result : true})
}