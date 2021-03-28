const httpMocks = require("node-mocks-http");
const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");

const newTodo = require("../mock-data/new-todo.json");

TodoModel.create = jest.fn();

//declaro variables para simular una request y una response
//next aun no entiendo para que sirve
let req, res, next;

beforeEach(()=>{
    
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("TodoController.createTodo", () =>{
    it("should have a createTodo function",() =>{
        expect(typeof TodoController.createTodo).toBe("function");
    });
    it("should call TodoModel.create",() =>{
       

        req.body = newTodo;

        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })
});