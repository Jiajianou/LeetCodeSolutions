/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s = s.trim();
    let words = s.split(" ");

    if (words.length === 0 ) return 0;
    if (words.length === 1) return words[0].length;

    return words[words.length - 1].length;


    
};


module.exports = {lengthOfLastWord}