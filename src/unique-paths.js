// This algorithm is to determine all of the paths a robot might take to get from the top right corner
// of an NxM matrix to the bottom left corner of that matrix. The robot can only move down and right. 
// 
// ex. uniquePaths(1,3)   // 1
//     uniquePaths(2,2)   // 2
 
var uniquePaths = function (n, m){
  if(n < 0 || m < 0){
    return -1;
  }
  // make a results variable that tracks every unique path
  var results = 0;
  // make a subroutine that traverses the matrix using only unused paths
  var traverseMatrix = function (x, y) {

    if(x === n-1 && y === m-1){
      results++; // once the base case is reached, increment the counter.
    } else {
      if (x < n-1) {
        traverseMatrix(x+1, y);
      }
      if (y < m-1) {
        traverseMatrix(x, y+1);
      }
    }
  };
  traverseMatrix(0,0);
  return results;
};

module.exports = uniquePaths;