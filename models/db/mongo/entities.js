//connect to db
var Store = require('./db.js').Store; 
//entities
var User = require('./../../entities/user');
var Message = require('./../../entities/message');
var Room = require('./../../entities/room');

//schemas
var schemas = require('./modelSchemas');

User.prototype.getDocument = function() {
     var document = new schemas.UserSchema({
        name: this.name,
        password: this.password,
        apiKey: this.apiKey,
    });
    return document;
}

Message.prototype.getDocument = function() {
    var document = new schemas.MessageSchema({
        text: this.text,
        author: this.author,
        type: this.type
    });
    return document;
}

Room.prototype.getDocument = function() {
    var document = new schemas.RoomSchema({
        name: this.name,
        author: this.author,
        users: this.users,
        messages: this.messages
    });
    return document;
    console.log(document);
}

module.exports = {
    UserStore : User.prototype.getDocument,
    RoomStore : Room.prototype.getDocument
    // UserStore : Store,
    // RoomStore : Store
}

//test
// var message = new Message('mmj', 'Hello 1', 'info');
// message.describe();
// message.save(function(err, newEnt) {
//     console.log('ent1: ' + newEnt);
// });

// var message2 = new Message('mmj', 'Hello 2', 'result');
// message2.describe();

// var user = new User('mmj', 'mmjpass');
// var user2 = new User('tj', 'teapass');

// var room = new Room('iOS Talks');
// room.addUser(user);
// room.addUser(user2);
// room.addMessage(message);
// room.addMessage(message2);

// user.describe();
// user.save(function(err, newEnt) {
//     console.log('err: ' + err);
//     console.log('document: ' + newEnt);
// });

// message2.save(function(err, newEnt) {
//     console.log('err: ' + err);
//     console.log('document: ' + newEnt);
// });

// room.describe();
// room.save(function(err, newEnt) {
//     console.log('err: ' + err);
//     console.log('document: ' + newEnt);
// });