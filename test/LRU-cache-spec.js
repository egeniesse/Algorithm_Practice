var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var LRUCache = require('../src/LRU-cache.js');

describe('An LRU Cache takes a capacity and stores the most recently used data up to the capacity', function(){
  it('should exist', function(done){
    expect(typeof LRUCache).to.equal('function');
    done();
  });

  describe('It should be able to set and get data in constant time with key value pairs', function(){
    var numberCache;
    before(function(){
      numberCache = new LRUCache(3);
      numberCache.set(4,5);
      numberCache.set(3,6);
      numberCache.set(5,7);
      
    });

    it('Should return the values associated with the keys', function(done){
      expect(numberCache.get(4)).to.equal(5);
      console.log('here')
      expect(numberCache.get(3)).to.equal(6);
      done();
    });

    it('Should update the value if the key is present in the cache', function(done){
      expect(numberCache.get(5)).to.equal(7);
      numberCache.set(5,9);
      expect(numberCache.get(5)).to.equal(9);
      done();
    });

    it('Should return -1 for keys that are not present in the cache', function(done){
      expect(numberCache.get(2)).to.equal(-1);
      done();
    });
  });

  describe('If the capacity is exceeded, it should delete the last used key value pair', function(){
    var numberCache;
    before(function(){
      numberCache = new LRUCache(2);
      numberCache.set(2,3);
      numberCache.set(5,6);
    });

    it('Should update the order when a value is accessed', function(done){
      expect(numberCache.get(2)).to.equal(3);
      numberCache.set(3,4);
      expect(numberCache.get(5)).to.equal(-1);
      numberCache.set(1,5);
      expect(numberCache.get(2)).to.equal(-1);
      done();
    });

  });
});