var binaryValidate = function(node, rangeLeft, rangeRight) {
    
    if(!node) {
        return true;
    } 

    if(rangeLeft){
      if(node.val <= rangeLeft) {
        return false;
      }
    } 

    if (rangeRight) {
      if(node.val >= rangeRight) {
        return false;
      }
    }

    if(node.left) {
      if(node.left.val >= node.val){
          return false;   
      } else {
          if(!binaryValidate(node.left, rangeLeft, node.val)){
            return false;
          }
      }
    } 
    
    if(node.right) {
      if(node.right.val <= node.val){
          return false;
      } else {
          if(!binaryValidate(node.right, node.val, rangeRight)){
            return false;
          }
      }
    } 
    
    return true;
};

module.exports = binaryValidate;