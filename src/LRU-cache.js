var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.nodeCount = 0;
  this.cache = {};
  this.first = this.last = null;
};

LRUCache.prototype.get = function(key) {
  
  var node = this.cache[key];
  if(!node){
    return -1;
  }
  this.shiftPointers(node);
  return node.value;
  
};

LRUCache.prototype.CreateNode = function(key, value){
  this.key = key;
  this.value = value;
  this.next = this.previous = null;
};

LRUCache.prototype.shiftPointers = function(node){

  if (this.last === node && this.first !== this.last){
    node.previous.next = null;
    this.last = node.previous;
    node.previous = null;
    node.next = this.first;
    this.first = node;
    node.next.previous = node;
  } else if (this.first !== node && this.first !== this.last) {
    node.previous.next = node.next;
    node.previous = null;
    node.next.previous = node.previous;
    node.next = this.first;
    this.first.previous = node;
    this.first = node;
  }
};

LRUCache.prototype.set = function(key, value) {

  var node;
  if(this.cache[key]){
    node = this.cache[key];
    node.value = value;
    this.shiftPointers(node);
  } else {
    this.nodeCount++;
    node = new this.CreateNode(key, value);
    this.cache[key] = node;
    var secondFirstNode;
    var toBeDeletedNode;
    if(this.first === null){
      this.first = this.last = node;
    } else {
      secondFirstNode = this.first;
      this.first = node;
      secondFirstNode.previous = node;
      node.next = secondFirstNode;
    }
    
    if(this.nodeCount > this.capacity){
      if(this.last === this.first){
        toBeDeletedNode = this.last;
        delete this.cache[this.lasts.key];
        this.last = this.first = null;
      } else {
        toBeDeletedNode = this.last;
        this.last = toBeDeletedNode.previous;
        delete this.cache[toBeDeletedNode.key];
      }
      this.nodeCount--;
    }
  }
  
};

module.exports = LRUCache;