/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

    let result = 0;
     
    for(let i=s.length-1; i>=0; i--){

        result += (26**(s.length - 1 - i)) * (s.charAt(i).charCodeAt()-64);
    
    } 

    return result;
};

module.exports={titleToNumber}