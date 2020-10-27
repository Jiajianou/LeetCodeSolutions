var commonChars = function(A) {
    let res = [];

    let loops = A[0].length;

    for (let i = 0; i < loops; i++) {
        let letter = A[0][i];

        if (letter === undefined) return res;

        if (A.every(word => word.indexOf(letter) !== -1 )) {

            res.push(letter);

            A = A.map(word => word.replace(letter, ''));

            i--;
        }
    }

    return res;
};

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars2 = function(A) {
    
    if(A.length === 0) return [];
    if(A.length === 1) return A[0];
    
    let result = [];
    let currentChar;
    
    for(let i = 0; i < A[0].length; i++){
        
        currentChar = A[0][i];
        
        if(currentChar === undefined) return result;
        
        if(A.every(word => word.indexOf(currentChar) !== -1)){
            
            result.push(currentChar);
            A = A.map(word => word.replace(currentChar, ""));
            i--;
            
        }
        
    }
    
    return result;
    
    
};