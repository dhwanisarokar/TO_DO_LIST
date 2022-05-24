const express = require('express');
const port = 8000;

const db = require('./config/mongoose');

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
    console.log(req.body);
})

app.listen(port, function(err){
    if (err) {
        console.log(`Error in running port: ${err}`);       
    }
    console.log(`Server is running on port: ${port}`);
});