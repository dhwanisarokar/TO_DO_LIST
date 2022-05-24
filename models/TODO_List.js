const mongoose = require('mongoose');

const taskList = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task', taskList);

module.exports = Task;