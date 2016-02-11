var models = require('./schemas');

var aMessage = new models.MessageModel({
    text: 'Hello',
    author: 'mmj',
    type: 'article'
    });
    
var aRoom = new models.RoomModel({
    name: 'Room2',
    author: 'mmj',
    type: 'article'
});

var aUser = new models.UserModel({
    name: 'mmj',
    author: 'password', 
});

aRoom.save(function(err, myRoom) {                                   
    console.log('document: ' + myRoom);
    console.log('err: ' + err);
});