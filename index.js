const express = require('express');
const app = express();
const port = 8000;

//use express roter
app.use('/', require('./routes'));
//Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'));

app.listen(port, function(err){
    if (err) {
        console.log(`Error in running port: ${err}`);       
    }
    console.log(`Server is running on port: ${port}`);
});