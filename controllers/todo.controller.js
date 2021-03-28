const TodoModel = require("../model/todo.model");

const createTodo =async (req, res, next) =>{
    try{
        console.log(req.body)
        let created = await TodoModel.create(req.body);
        res.status(201).send();
    }catch(error){
        res.status(500).send(error);
    }
};


module.exports = {
    createTodo
}