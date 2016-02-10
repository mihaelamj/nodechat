var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//import children
var MessageSchema = require('./message_schema.js');

// function Room(name) {
//   this.name = name;
//   this.id = '';
//   this.objectID = uuid.v1();
//   this.author = '';
//   this.index = 0;
//   this.dateCreated = new Date();
//   this.users = new Array();
//   this.messages = new Array()
// };

var roomModel = new Schema({
    name: {type: String, required: true},
    author: {type: String, required: false},
    type: {type: String, required: false},
    timestamp: {type: Date, default: Date.now},
    index: {type: Number, required: false},
    objectID: {type: String},
    id: {type: String},
    messages : [MessageSchema]
    //TODO: add users
});

// comments: [{ body: String, date: Date }],

module.exports= mongoose.model('Room', roomModel);