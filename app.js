//1. nmp init -> for nmp to create basic package.json
//2. nmp install express --save -> for nmp to install express and save the dependancy in package.json
//3. npm install ejs --save -> for npm to install ejs template fw and save the dependancy in package.json
//4. mkdir views -> make dir for express where you will put your views
//5. make index.ejs in views dir
//6. mkdir controllers -> and make html and api controllers
//7. require and use controllers
//8. mkdir public
//9. mkdir data for data sources
//10. npm install node-uuid --save
//11. npm install mongoose --save DB1
//12. npm install body-parser --save
//13. npm install nedb --save DB2

//init app and port
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//middleware
app.use('/assets', express.static(__dirname + '/public'));
//setup template engine
app.set('view engine', 'ejs');

//logger
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

//test message
var Message = require('./models/entities/message');
var message1 = new Message('mmj', 'Hello 1', 'info');
message1.describe();
//add mongo
// require('./models/db/mongo/message_db');
//or nedb
require('./models/db/nedb/message_db');
message1.addToDB(function(err, message) {
    console.log('message: ' + message);
    console.log('err: ' + err);
    message1.describe();
});

//test Room
// var roomDS = require('./data/roomsDataSource.js');
// //init rooms
// roomDS.makeNumberOfRooms(16);
// //fetch a page of rooms
// var dummyRooms = roomDS.fetchRoomsForPage(2);
// roomDS.describeRooms(dummyRooms);

//nodechatadmin
//nodechat29005606

//test Page
// var Page = require('./data/page');
// var page1 = new Page(0, 0, 0, 0);
// page1.describe();

// page1.firstPage(112, 10);
// page1.describe();

// page1.lastPage();
// page1.describe();

// page1.pageNo(3);
// page1.describe();

// page1.pageNo(9);
// page1.describe();

// page1.pageNo(15);
// page1.describe();


//start app
app.listen(port, function() {
    console.log('App running on port: ' + port);
});
