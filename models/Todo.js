const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    note: String,
    dueDate: Date,
    importance: String,
    isDone: Boolean
});

const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;