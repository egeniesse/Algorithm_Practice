var binaryValidate = function(node, isBalanced, rangeLeft, rangeRight) {
    
    isBalanced = isBalanced === undefined ? true : isBalanced;

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
    if(!node || !isBalanced) {
        return isBalanced;
    } 
    if(node.left) {
      if(node.left.val >= node.val){
          return false;   
      } else {
          if(!binaryValidate(node.left, isBalanced, rangeLeft, node.val)){
            return false;
          }
      }
    } 
    if(node.right) {
      if(node.right.val <= node.val){
          return false  
      } else {
          if(!binaryValidate(node.right, isBalanced, node.val, rangeRight)){
            return false;
          }
      }
    } 
    
    return isBalanced;
};

module.exports = binaryValidate;