var useMongo = false;
//load appropriate entities
var Store = require('./db//nedb/entities').RoomStore;
// require('./db/mongo/entities');

//models
var Page = require('./entities/page');
var Room = require('./entities/room');
var Message = require('./entities/message');
var User = require('./entities/user');

var RoomsDataSource = {
    //private properties
    _rooms : new Array(),
    _itemsPerPage : 20,
    //public properties
    page : new Page(0, 0, 0, 0),
    
    fetchRoomsForPage : function(pageNumber) {
        this.page.pageNo(pageNumber);
        return this._rooms.slice(this.page.startIndex, this.page.endIndex);
        // return this._rooms.slice(this.page.startIndex);
    },
    
    getRoomsForPage : function(pageNumber, callback) {
        
        //init page
        this.page.pageNo(pageNumber);
        var aSkip = (pageNumber-1)*this._itemsPerPage;
        
        Store.find({}).sort('mykey', 1).skip(aSkip).limit(this._itemsPerPage).exec(function(err, result) {
            
        });
        
        //call store
        Store.find({}, function(err, foundRooms) {
            
        });
    },
    
// var paginate = 20;
// var page = pageNumber;
// MySchema.find({}).sort('mykey', 1).skip((pageNumber-1)*paginate).limit(paginate)
//     .exec(function(err, result) {
//         // Write some stuff here
// });
    
    //
}


