var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var binaryValidate = require('../src/validate-binary-search-tree.js');
var root1, root2, root3, root4; 
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

describe('Validate Binary Search Tree', function(){
    
  before(function(){


    root1 = new TreeNode(4);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(6);
    
    root2 = new TreeNode(10);
    root2.right = new TreeNode(20);
    root2.right.left = new TreeNode(5);
    root2.right.right = new TreeNode(24);

    root3 = new TreeNode(8);
    root3.left = new TreeNode(8);

    root4 = null;

    root5 = new TreeNode(5);
    root5.left = new TreeNode(2);
    root5.left.left = new TreeNode(1);
    root5.left.right = new TreeNode(3);
    root5.right = new TreeNode(10);
    root5.right.left = new TreeNode(6);
    root5.right.right = new TreeNode(20);
    root5.right.right.left = new TreeNode(16);
    root5.right.right.left.right = new TreeNode(21);

  });

  it('should exist', function(done){
    expect(typeof binaryValidate).to.equal('function');
    done();
  });

  it('should return true for a valid binary search tree', function(done){
    expect(binaryValidate(root1)).to.equal(true);
    done();
  });

  it('should validate at every depth', function(done){
    expect(binaryValidate(root2)).to.equal(false);
    expect(binaryValidate(root5)).to.equal(false);
    done();
  });

  it('should not have duplicates', function(done){
    expect(binaryValidate(root3)).to.equal(false);
    done();
  });

  it('should return true for an empty tree', function(done){
    expect(binaryValidate(root4)).to.equal(true);
    done();
  });


})