
const titleToNumber = s => s.split("").map((e,i) => (e.charCodeAt()-64) * (26 ** (s.length -1 - i))).reduce((acc,el) => acc + el,0);

module.exports={titleToNumber}