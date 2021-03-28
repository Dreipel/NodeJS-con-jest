const express = require("express");
const app = express();
const { createTodo } = require('../controllers/todo.controller');

app.post('todo',(req,res)=>{
    createTodo(req,res);
});

module.exports = app;