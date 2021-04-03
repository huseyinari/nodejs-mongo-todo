const Todo = require('../models/Todo');
const {getDateWithTimezone} = require('../helpers/DateMethods');
const {createTodoValidator,updateTodoValidator} = require('../validators/Validators');

class TodoController{
    static async addTodo(req,res){

        const result = createTodoValidator.validate(req.body,{ abortEarly: false }); // bütün hataları tek seferde alabilmek için abortEarly optionunu ver
        if(result.error){
            return res.status(200).json({status:false,errors:{...result.error.details}});
        }

        const newTodo = new Todo({
            note:req.body.note,
            dueDate:getDateWithTimezone(req.body.dueDate), // timezone ayarı için kendi fonksiyonumla alıyorum date'i
            importance:req.body.importance,
            isDone:false
        });

        try{
            await newTodo.save();
            res.status(201).json({status:true,newTodo});
        }catch{
            res.status(200).json({
                status:false,
                errors:{
                    "0" : {message:'Not eklenemedi! Daha sonra tekrar deneyiniz.'}
                }
            });
        }
    }

    static async getTodos(req,res){
        try{
            const todos = await Todo.find({}).sort({dueDate:'asc'}).exec();
            res.status(200).json({status:true,todos});
        }catch{
            res.status(200).json({
                status:false,
                errors:{
                    "0" : {message:'Notlar alınamadı.Daha sonra tekrar deneyiniz.'}
                }
            });
        }
    }

    static async deleteTodo(req,res){
        try{
            await Todo.deleteOne({_id:req.query.id});
            res.status(200).json({status:true,message:"Not başarıyla silindi."})
        }catch{
            res.status(200).json({
                status:false,
                errors:{
                    "0" : {message:'Not silinemedi! Daha sonra tekrar deneyiniz.'}
                }
            });
        }
    }

    static async updateTodo(req,res){
        const result = updateTodoValidator.validate(req.body,{ abortEarly: false }); // bütün hataları tek seferde alabilmek için abortEarly optionunu ver
        if(result.error){
            return res.status(200).json({status:false,errors:{...result.error.details}});
        }
        
        try{
            const todo = await Todo.findById(req.body.id).exec();
            todo.note = req.body.note;
            todo.dueDate = getDateWithTimezone(req.body.dueDate);
            todo.importance = req.body.importance;
            todo.isDone = req.body.isDone;
            todo.save();
            res.status(200).json({status:true,todo,message:"Not başarıyla güncellendi"});
        }catch{
            res.status(200).json({
                status:false,
                errors:{
                    "0" : {message:'Not güncellenemedi! Daha sonra tekrar deneyiniz.'}
                }
            });
        }
    }
}

module.exports = TodoController;