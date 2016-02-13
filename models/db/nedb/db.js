// Datastore setup
var Datastore = require('nedb');

var test = require('./../../../data/text');

var UserStore = new Datastore({
    filename: "users.db",
//    filename: "./../../../data/users.db",
    autoload: true,
});

var RoomStore = new Datastore({
  filename: "rooms.db",
  autoload: true,
});

var TestStore = new Datastore({
  filename: "test.db",
  autoload: true,
});

var GlobalStore = new Datastore({
  filename: "global.db",
  autoload: true,
});

//unique index for user names
UserStore.ensureIndex({ fieldName: 'name', unique: true }, function(err) {
    if (err !== null) {
        console.error("Unable to set uniqueness constraint on user names: " + err);
    }
});
//unique index for room objectID
RoomStore.ensureIndex({ fieldName: 'objectID', unique: true }, function(err) {
    if (err !== null) {
        console.error("Unable to set uniqueness constraint on user names: " + err);
    }
});

module.exports = {
    UserStore: UserStore,
    RoomStore: RoomStore,
    GlobalStore: GlobalStore,
    TestStore: TestStore
}