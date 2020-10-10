/**
 * @param {string} s
 * @return {number}
 */

 const romanToInt = (s) => {

    const values = {"I": 1,"V": 5, "IV":4, "X":10, "IX":9, "L":50, "XL":40, "XC":90, "C":100, "D":500, "CD":400, "M":1000, "CM":900 }
    const specials = ["IV","IX","XL","XC","CD","CM"];

    let sum = 0;

    specials.forEach(element => {

        let matches = s.match(new RegExp(element,'g'));

        if(matches){
            
            sum += values[element] * matches.length;

            s = s.replace(new RegExp(element,'g'), "");
        }
    });

    return sum += s.split("").reduce((acc,el) => {return acc + values[el]},0);
 }

module.exports = { romanToInt }