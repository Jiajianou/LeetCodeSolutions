/**
 * @param {number} n
 * @return {boolean}
 */

const isPowerOfTwo = n => {

    if(n<1){
        return false;
    }

    let power = 1;

    while(power < n){
        power *= 2;
    }
    
    return power === n;
};


module.exports={isPowerOfTwo}