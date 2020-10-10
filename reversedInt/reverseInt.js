/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if(x === 0) return 0;
    
    let str = (x + "");
    
    if(x < 0){
        
      str = str.substring(1,str.length); 
        
    }
    
    let reversedNum= Number.parseInt(str.split("").reverse().join(""));
    
    let output = x < 0 ? 0 - reversedNum : reversedNum
    
    return ((output < -2147483647) || (output > 2147483647)) ? 0 : output ;
      
    
};