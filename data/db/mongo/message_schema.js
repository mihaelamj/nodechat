var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageModel = new Schema({
    text: {type: String, required: true},
    author: {type: String, required: true},
    type: {type: String, required: false},
    timestamp: {type: Date, default: Date.now},
    id: {type: String}
});

module.exports= mongoose.model('Message', messageModel);