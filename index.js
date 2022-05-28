const express = require('express');
const port = 8000;

//require database
const db = require('./config/mongoose');

//require schema
const Task = require('./models/TODO_List');

const app = express();



//Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//static files assces
app.use(express.static('assets'));


//fetching data to TaskList
app.get('/', function (req, res) {

    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching tasks from db');
            return;
        }

        return res.render("home", {
            title: "TODO List",
            task_list: tasks
        });
    });
});

//Getting data from user to server
app.post('/create-task', function (req, res) {
    // console.log(req.body);

    //pushing data in database
    Task.create({
        task: req.body.task,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function (err, newTask) {
        if (err) {
            console.log("Error in creating Task!");
            return;
        }

        // console.log('*****', newTask);
        return res.redirect('back');
    });
});

app.post('/delete-task', function (req, res) {
    let id = req.body;
    // console.log(req.body);

    //find the contact in the database and delete.
    for (let i of Object.keys(id)) {
        Task.findByIdAndDelete(i, function (err) {
            if (err) {
                console.log('error in deleting an object from database.');
                return;
            }

        });
    }
    return res.redirect('back');
});

//use express roter
app.use('/', require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running port: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});