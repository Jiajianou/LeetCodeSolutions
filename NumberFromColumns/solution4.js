/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

    let result = 0;
    let multiplier = 1;
     
    for(let i=s.length-1; i>=0; i--){

        result += multiplier * (s.charAt(i).charCodeAt()-64);
        multiplier *= 26;
    
    } 

    return result;
};

module.exports={titleToNumber}