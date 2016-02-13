var Entity = require('./entity');
var util = require("util");

//Room class
function Room(name) {
    Entity.call(this);//call super
    this.entityName = 'room';
    this.name = name;
    this.author = '';
    this.users = new Array();
    this.messages = new Array()
};
util.inherits(Room, Entity);

//template method
Room.prototype.describeSpecific = function() {
    console.log('name: ' + this.name);
    console.log('author: ' + this.author);
}

Room.prototype.checkCollection = function(collection) {
    var collectionOK =  (collection === this.users || collection === this.messages);
    if (!collectionOK) {
        console.warn("collection " + collection + ' is not users or messages!');
        return false;
    }
    return true;
}

Room.prototype.checkEntity = function(entity) {
    var entityIsUser = (Object.prototype.toString.call(entity) === '[object User]');
    // var entityIsUser = (typeof entity === 'string');
    var entityIsMessage = (Object.prototype.toString.call(entity) === '[object Message]');
    var entityOK = (entityIsUser || entityIsMessage);
    if (!entityOK) {
        console.warn("entity " + entity + ' is not UserID or Message!');
        return false;
    }
    return true;
}

Room.prototype.checkParams = function(entity, collection) {
    if (!this.checkCollection(collection)) {
        return false;
    }
    if (!this.checkEntity(entity)) {
        return false;
    }
    return true;
}

//generic methods
Room.prototype.hasEntitiy = function(entity, collection) {
    if (!this.checkParams(entity, collection)) {
        return;
    }
    for (var i = collection.length - 1; i >= 0; i--) {
        var aEntity = collection[i];
        if (aEntity.id === entity.id) {
            return true;
        };
    };
    return false;
}

Room.prototype.addEntity = function(entity, collection) {
    if (!this.checkParams(entity, collection)) {
        return;
    }
    
    if (this.hasEntity(entity, collection)) {
        console.warn("Entity " + entity.entityName + ', ' + entity.id + " is already in room " + this.id);
    } else {
        console.log(entity.entityName + ', ' + entity.id + 'was added to room ' + this.id);
        collection.push(entity);
    }
}

Room.prototype.deleteEntity = function(entity, collection) {
    if (!this.checkParams(entity, collection)) {
        return;
    }
    for (var i = collection.length - 1; i >= 0; i--) {
        var aEntity = collection[i];
        if (aEntity.id === entity.id) {
            collection.splice(i, 1);
            console.info("Removed entity '" + entity.entityName + ', ' + entity.id + ' from room ' + this.id);
            return;
        };
    };
    console.warn("Entity " + entity.entityName + ', ' + entity.id + ' was not found in room '  + this.id);
}

Room.prototype.getEntities = function(collection, start, end) {
    if (!this.checkCollection(collection)) {
        return;
    }
    var len = this.collection.length;
    if (start === undefined || start == null) {
        start = 0;
    }
    if (end === undefined || end == null) {
        end = len;
    }
    if (start === 0 && end === len) {
        return collection.slice(0);
    } else {
        return collection.slice(start, end);
    } 
}

//specific methods
Room.prototype.hasUser = function(user) {
    return this.hasEntity(user, this.users);
}

Room.prototype.hasMessage = function(message) {
    return this.hasEntity(message, this.messages);
}

Room.prototype.addMessage = function(message) {
    this.addEntity(message, this.messages);
}

Room.prototype.deleteMessage = function(message) {
    this.deleteEntity(message, this.messages);
}

Room.prototype.addUser = function(user) {
    this.addEntity(user, this.users);
}

Room.prototype.deleteUser = function(user) {
    this.deleteEntity(user, this.users);
}

Room.prototype.getUsers = function(start, end) {
    return this.getEntities(this.users, start, end);
}

Room.prototype.getMessages = function(start, end) {
    return this.getEntities(this.messages, start, end); 
}

module.exports = Room;
