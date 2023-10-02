const { todo } = require("../models");

exports.get_todo = async (req, res) => {
  const result = await todo.findAll();
  res.send(result);
};
exports.post_todo = async (req, res) => {
  let todos = [];
  const { title, done } = req.body;
  const result = await todo.create({ title, done });
  const find = await todo.findAll();
  for (const news of find) {
    const myTodo = {
      id: news.id,
      title: news.title,
      done: news.done,
    };
    todos.push(myTodo);
  }
  res.send(todos);
};
exports.patch_todo = (req, res) => {
  const id = Number(req.params.todoId.replace(":", ""));
  console.log(req.body.title);
  if (req.body.title != undefined) {
    const { title } = req.body;
    todo.update({ id, title, done: 1 }, { where: { id } });
    res.send({ result: true });
  } else {
    let done = req.body.done;
    console.log(!done);
    if (!done === true) {
      done = 1;
      todo.update({ done }, { where: { id } });
    } else if (!done === false) {
      done = 0;
      todo.update({ done }, { where: { id } });
    }
  }

  //   todo.update({ id, title }, { where: { id } });
  //   res.send({ result: true });
};
exports.delete_todo = (req, res) => {
  try {
    const id = Number(req.params.todoId.replace(":", ""));
    console.log;
    todo.destroy({ where: { id: id } });
    res.send({ result: true });
  } catch (error) {
    console.log("에러메시지", error);
  }
};
