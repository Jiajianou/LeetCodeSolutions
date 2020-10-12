/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
   
    let n = matrix.length - 1; 
    
    for (let i = 0; i < Math.ceil(matrix.length/2); ++i) {
      for (let j = 0; j < Math.floor(matrix.length/2); ++j) {

        [ 
          matrix[n-j][i],         
          matrix[n-i][n-j], 
          matrix[j][n-i],        
          matrix[i][j]
        ] = [
          matrix[n-i][n-j],
          matrix[j][n-i],
          matrix[i][j], 
          matrix[n-j][i]
        ]

      }
    }


    
}


module.exports = {rotate}