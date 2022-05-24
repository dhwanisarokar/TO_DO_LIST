const express = require('express');
const port = 8000;

//require database
const db = require('./config/mongoose');

//require schema
const Task = require('./models/TODO_List');

const app = express();

//use express roter
app.use('/', require('./routes'));
//Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//static files assces
app.use(express.static('assets'));

//Getting data from user to server
app.post('/create-task', function(req, res) {
    // console.log(req.body);

    Task.create({
        task: req.body.task,
        category: req.body.category,
        dueDate: req.body.dueDate
    }, function (err, nweTask) {
        if (err) {
            console.log("Error in creating Task!");
            return;
        }

        console.log('*****', nweTask);
        return res.redirect('back');
    });
})

app.listen(port, function(err){
    if (err) {
        console.log(`Error in running port: ${err}`);       
    }
    console.log(`Server is running on port: ${port}`);
});