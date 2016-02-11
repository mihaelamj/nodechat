var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var util = require('util');

//Entity Schema
function AbstractEntitySchema() {   
    //call super        
    Schema.apply(this, arguments);     
    //add                                     
    this.add({                              
        entityName: {type: String, required: true},
        timestamp: {type: Date, default: Date.now},
        index: {type: Number, required: false},
        objectID: {type: String},
        id: {type: String}
    });                                     
};
util.inherits(AbstractEntitySchema, Schema);  
var EntitySchema = new AbstractEntitySchema(); 

//Message Schema
var MessageSchema = new AbstractEntitySchema({
    text: {type: String, required: true},
    author: {type: String, required: true},
    type: {type: String, required: false}
});

//User Schema
var UserSchema = new AbstractEntitySchema({
    password: {type: String, required: true},
    apiKey: {type: String, required: true},
});

//Room Schema
var RoomSchema = new AbstractEntitySchema({
    name: {type: String, required: true},
    author: {type: String, required: false},
    messages : [MessageSchema],
    users : [UserSchema]
});

var EntityModel = mongoose.model('EntityModel', EntitySchema); // our base model   
var MessageModel = EntityModel.discriminator('MessageModel', MessageSchema); // our derived model (see discriminator)
var UserModel = EntityModel.discriminator('UserModel', UserSchema); 
var RoomModel = EntityModel.discriminator('RoomModel', RoomSchema); 

var aMessage = new MessageModel({
    text: 'Hello',
    author: 'mmj',
    type: 'article'
    });
    
var aRoom = new RoomModel({
    name: 'Room1',
    author: 'mmj',
    type: 'article'
});

var aUser = new UserModel({
    name: 'mmj',
    author: 'password', 
});

aRoom.save(function(err, myRoom) {                                   
    console.log("kitten is saved"); // no error checking, we're so cool.
});