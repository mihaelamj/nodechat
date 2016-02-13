//schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//models
var JSONs = require('./modelJSONs');
//extend module
var extend = require('extend');

var MessageSchema = new Schema(
    JSONs.messageJSON
);

var UserSchema = new Schema(
    JSONs.userJSON
);

//need to concat collections
var roomJSONCollections = {
    messages : [MessageSchema],
    users : [UserSchema]
}
var roomJSON = {};
extend(roomJSON, JSONs.roomJSON, roomJSONCollections);

var RoomSchema = new Schema(
    roomJSON
);

module.exports = {
    MessageSchema : mongoose.model('MessageSchema', MessageSchema),
    UserSchema : mongoose.model('UserSchema', UserSchema),
    RoomSchema : mongoose.model('RoomSchema', RoomSchema)
}

// var EntityModel = mongoose.model('EntityModel', EntitySchema); // our base model 
// module.exports= mongoose.model('Message', messageModel);

// var aMessage = new MessageModel({
//     text: 'Hello',
//     author: 'mmj',
//     type: 'article'
//     });
    
// var aRoom = new RoomModel({
//     name: 'Room1',
//     author: 'mmj',
//     type: 'article'
// });

// var aUser = new UserModel({
//     name: 'mmj',
//     author: 'password', 
// });

// aRoom.save(function(err, myRoom) {                                   
//     console.log("kitten is saved"); // no error checking, we're so cool.
// });

