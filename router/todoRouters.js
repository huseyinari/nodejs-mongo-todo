const express = require('express');
const router = express.Router();

const TodoController = require('../controllers/TodoController');

router.post('/',TodoController.addTodo);
router.get('/',TodoController.getTodos);
router.delete('/',TodoController.deleteTodo);
router.put('/',TodoController.updateTodo);

module.exports = router;