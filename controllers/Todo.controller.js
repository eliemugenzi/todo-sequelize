import db from "../models";
const {Todo}=db;

class TodoController{
    static getTodos(req,res){
        Todo.findAll({raw:true}).then((data)=>{
            res.json(data);
        })

    }

    static createTodo(req,res){
        const {title,description}=req.body;
        Todo.create({
            title,
            description,
            startDate:new Date(),
            endDate:new Date,
            finished:false
        })
        .then(todo=>{
            res.status(201).json(todo);
        })
        .catch(err=>res.status(500).json({error:err}));
    }

    static updateTodo(req,res){
        const {title,description}=req.body;
        const {id}=req.params;
        Todo.update({title,description},{returning:true,where:{id}})
        .then(data=>{
            res.json(data);
        }).catch(err=>res.status(500).json({error:err}));
    }

    static deleteTodo(req,res){
        const {id}=req.params;
        Todo.destroy({where:{id},returning:true}).then(row=>{
            if(row){
                res.json({message:"Todo deleted!"})
            }
        }).catch(err=>res.status(500).json({error:err}));
    }
}

export default TodoController;