/**
 * @param {string} s
 * @return {number}
 */

 //does not work for all cases
var romanToInt = function(s) {
        
    const values = {
        "I": 1,
        "V": 5,
        "IV":4,
        "X":10,
        "IX":9,
        "L":50,
        "XL":40,
        "XC":90,
        "C":100,
        "D":500,
        "CD":400,
        "M":1000,
        "CM":900
    }
     
    if(s.length === 1) return values[s];
    
    let strArr = s.split("");
    
    let sum = 0;
  
    while(strArr.length > 0){
        
        let current = strArr.shift();
        
        if(current === "I" || current === "X" || current === "C"){
            
            let next = strArr.shift();
            
            if(next){
                
                if(values.hasOwnProperty(current+next)){
                
                    sum+=values[current+next];
                
                }else{
                
                    sum += values[current] + values[next];
                
                }
                
            } else {
                
                sum+=values[current];
            }
            
        }else{
            
           sum+=values[current]; 
            
        }
    }
    
    return sum;
    
    
};


module.exports = { romanToInt }