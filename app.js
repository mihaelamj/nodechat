//1. nmp init -> for nmp to create basic package.json
//2. nmp install express --save -> for nmp to install express and save the dependancy in package.json
//3. npm install ejs --save -> for npm to install ejs template fw and save the dependancy in package.json
//4. mkdir views -> make dir for express where you will put your views
//5. make index.ejs in views dir
//6. mkdir controllers -> and make html and api controllers
//7. require and use controllers
//8. mkdir public

//init app and port
var express = require('express');
var app = express;
var port = process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));
//setup template engine
app.set('view engine', 'ejs');

//start app
app.listen(port);
