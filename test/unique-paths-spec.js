var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var uniquePaths = require('../src/unique-paths.js');

describe('The unique paths solution', function(){
	
	it('Should return 0 when given a 0x0 matrix', function(done){
		expect(uniquePaths(0,0)).to.equal(0);
		done();
	});

	it('Should return -1 if m or n is less than 0', function(done){
		expect(uniquePaths(-1,5)).to.equal(-1);
		expect(uniquePaths(1,-5)).to.equal(-1);
		done();
	});

	it('Should take any coordinates and return the correct number of paths', function(done){
		expect(uniquePaths(10,4)).to.equal(220);
		expect(uniquePaths(3,5)).to.equal(15);
		expect(uniquePaths(8,23)).to.equal(1560780);
		done();
	});
});

