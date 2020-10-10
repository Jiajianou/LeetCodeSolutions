var romanToInt = function(s) {
    let symbolMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let num = 0;
    for(let i=0; i<s.length;i++) {
        if(symbolMap[s[i]] < symbolMap[s[i+1]]) {
            num+=symbolMap[s[i+1]] - symbolMap[s[i]]
            i+=1;
        }
        else
          num+=symbolMap[s[i]]
    }
    return num
};