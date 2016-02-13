//extend module
var extend = require('extend');

var entityJSON = {                              
        entityName: {type: String, required: false},
        timestamp: {type: Date, default: Date.now},
        index: {type: Number, required: false},
        objectID: {type: String},
        id: {type: String}
    };
    
var messageJSON_spec = {
    text: {type: String, required: true},
    author: {type: String, required: true},
    type: {type: String, required: false}
};

var userJSON_spec = {
    name: {type: String, required: true},
    password: {type: String, required: true},
    apiKey: {type: String, required: true}
};

var roomJSON_spec = {
    name: {type: String, required: true},
    author: {type: String, required: false},
    // users : [String]
    // messages : [MessageSchema],
    // users : [UserSchema]
}

var messageJSON = {};
var userJSON = {};
var roomJSON ={};

extend(messageJSON, entityJSON, messageJSON_spec);
extend(userJSON, entityJSON, userJSON_spec);
extend(roomJSON, entityJSON, roomJSON_spec);

module.exports = {
    messageJSON: messageJSON,
    userJSON: userJSON,
    roomJSON: roomJSON
};



