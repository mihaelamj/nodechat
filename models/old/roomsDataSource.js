var Page = require('./../entities/page');
var Room = require('./../entities/room');
//TODO: add DB from (future) config

var RoomsDataSource = {
    //private properties
    _rooms : new Array(),
    _itemsPerPage : 10,
    //public properties
    page : new Page(0, 0, 0, 0),
    
    //make dummy rooms, will be replaced will DB fetch
    makeNumberOfRooms : function(numberOfRooms) {
        for (var index = 0; index < numberOfRooms; index++) {
            var room = new Room('room' + index);
            room.index = index;
            //add it to rooms
            this._rooms.push(room);
        }
        //init 1st page
        this.page.firstPage(numberOfRooms, this._itemsPerPage);
    },
    
    fetchRoomsForPage : function(pageNumber) {
        this.page.pageNo(pageNumber);
        return this._rooms.slice(this.page.startIndex, this.page.endIndex);
        // return this._rooms.slice(this.page.startIndex);
    },
    
    fecthAllRooms : function() {
        return this._rooms.slice(0);
        //init 1st page
        this.page.firstPage(this._rooms.length, this._itemsPerPage);
    },
    
    describeRooms : function(rooms) {
        console.log('page:');
        this.page.describe();
        console.log('--- ');
        
        console.log('rooms:');
        rooms.map(function(room, i) {
            room.describe();
            console.log('');
        });
    }
}

module.exports = RoomsDataSource;