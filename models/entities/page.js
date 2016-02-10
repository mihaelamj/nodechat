//Page class

function Page(pageNumber, pagesCount, itemsCount, itemsPerPage) {
  this.pageNumber = pageNumber;
  this.pagesCount = pagesCount;
  this.itemsCount = itemsCount;
  this.itemsPerPage = itemsPerPage;
  this.startIndex = 0;
  this.endIndex = 0;
};

Page.prototype.isLast = function() {
  return this.pageNumber === this.pagesCount;
};

Page.prototype.isFirst = function() {
  return this.pageNumber === 1;
};

Page.prototype.hasMore = function() {
  return this.pageNumber < this.pagesCount;
//   return !this.isLast;
};

Page.prototype.isEmpty = function() {
  return this.itemsCount === 0;
};

//helpers
Page.prototype.description = function() {
  return 'pageN: ' + this.pageNumber + ', PCount: ' + this.pagesCount + ', ICount: ' + this.itemsCount +  ', ipp: ' + this.itemsPerPage;
};

Page.prototype.describe = function() {
    console.log(this.description());
    var afirst = this.isFirst() ? 'YES' : 'NO';
    var alast = this.isLast() ? 'YES' : 'NO';
    var ahasMore = this.hasMore() ? 'YES' : 'NO';
    var aisEmpty = this.isEmpty() ? 'YES' : 'NO';
    
    console.log('first: ' + afirst);
    console.log('last: ' + alast);
    console.log('hasMore: ' + ahasMore);
    console.log('isEmpty: ' + aisEmpty);
    console.log('startIndex: ' + this.startIndex);
    console.log('endIndex: ' + this.endIndex);
}

function truncate(value) {
    if (value < 0) {
        return Math.ceil(value);
    }
    return Math.floor(value);
}

Page.prototype.clean = function() {
  this.pageNumber = 0;
  this.pagesCount = 0;
  this.itemsCount = 0;
  this.itemsPerPage = 0;
  this.startIndex = 0;
  this.endIndex = 0;
}

//calc
Page.prototype.calcPages = function(itemsCount, itemsPerPage) {
    //fix
    if (itemsPerPage > itemsCount) {
        itemsPerPage = itemsCount;
    }
    //check
    if (!itemsCount || !itemsPerPage) {
        this.clean();
        return false;
    }
    //calc
    var pagesCount =  itemsCount / itemsPerPage;
    pagesCount = truncate(pagesCount);
    if (itemsCount % itemsPerPage > 0) {
        pagesCount ++;
     }
     //fill properties
    this.pagesCount = pagesCount;
    this.itemsCount = itemsCount;
    this.itemsPerPage = itemsPerPage;
    return true;
}

Page.prototype.calcIndexes = function(pageNumber) {
    //init
    this.startIndex = 0;
    this.endIndex = 0;
    //fix
    if (pageNumber < 1 || pageNumber > this.pagesCount) {
        pageNumber = 1;
    }

    //set page number and calc
    this.pageNumber = pageNumber;
    this.startIndex = (this.pageNumber - 1) * this.itemsPerPage;
    this.endIndex = this.startIndex + (this.itemsPerPage - 1);
    //fix
    if (this.endIndex > this.itemsCount - 1) {
        this.endIndex = this.itemsCount - 1
    }
    
}

//Paging
Page.prototype.firstPage = function(itemsCount, itemsPerPage) {
    if (this.calcPages(itemsCount, itemsPerPage)) {
       this.calcIndexes(1); 
    }
};

Page.prototype.lastPage = function () {
    //assuming we called firstPage before
    this.calcIndexes(this.pagesCount);
}

Page.prototype.pageNo = function (pageNumber) {
    //assuming we called firstPage before
    this.calcIndexes(pageNumber);
}

module.exports = Page;