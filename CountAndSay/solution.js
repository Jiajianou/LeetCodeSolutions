/**
 * @param {number} n
 * @return {string}
 */

const countAndSay = n => {

    if(n === 1){
        return "1";
    } else {

        let output = "";
        let previous = countAndSay(n-1);

        for(let i = 0; i < previous.length;){

            let count = 0;
            let current = previous[i];

            while(previous[i]===current){
                count++;
                i++;
            }

            output += count;
            output += current;
        }

        return output;

    }


}

module.exports = {countAndSay}