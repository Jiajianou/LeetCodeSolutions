const solution = require("./solution.js");


let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

let answer = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]];

console.log(matrix);

solution.rotate(matrix);

console.assert(matrix === answer);
console.log(matrix);


// matrix[n-j][i] = matrix[n-i][n-j];
// matrix[n-i][n-j] = matrix[j][n-i];
// matrix[j][n-i] = matrix[i][j];
// matrix[i][j] = matrix[n-j][i];