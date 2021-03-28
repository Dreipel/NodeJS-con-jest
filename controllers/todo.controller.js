const TodoModel = require("../model/todo.model");

const createTodo = async (req, res, next) =>{
   let respCreate = await TodoModel.create(req.body);
   res.status(200).send("Created");
};


module.exports = {
    createTodo
}