var titleToNumber = function(s) {

    let result = 0;
    let power = s.length-1;

    for(let char of s){
        result += (char.charCodeAt()-64) * 26 ** power;
        power--;
    }

    return result;

}

module.exports={titleToNumber}