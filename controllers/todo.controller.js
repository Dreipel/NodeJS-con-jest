const TodoModel = require("../model/todo.model");

const createTodo = (req, res, next) =>{
    let createdTodo = TodoModel.create(req.body);
    res.status(201).json(createdTodo);
};


module.exports = {
    createTodo
}