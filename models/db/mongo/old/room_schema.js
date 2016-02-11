var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//import children
var MessageSchema = require('./message_schema.js');

// function Room(name) {

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